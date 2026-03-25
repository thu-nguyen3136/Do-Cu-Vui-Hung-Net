# Stage 1: Base
FROM node:20-alpine AS base
LABEL org.opencontainers.image.source="https://github.com/adminvpshub/Do-Cu-Vui-Hung-Net"
WORKDIR /app
COPY package.json package-lock.json* ./

# Stage 2: Development
FROM base AS dev
RUN npm ci || npm install
COPY . .
ENV PORT=3003
CMD ["npm", "run", "dev"]

# Stage 3: Builder for production
FROM base AS builder
RUN npm ci || npm install
COPY . .
RUN npm run build

# Stage 4: Production runner (Nginx for static export)
FROM nginx:alpine AS runner
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy static export from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy log format config (must be loaded at http context, before server block)
COPY nginx-log-format.conf /etc/nginx/conf.d/00-log-format.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy entrypoint script to write CSV header on first run
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3003
CMD ["/entrypoint.sh"]
