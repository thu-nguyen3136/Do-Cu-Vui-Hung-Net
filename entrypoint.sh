#!/bin/sh
# Write CSV header to log file if it doesn't already exist
LOG_FILE=/var/log/nginx/client-ip-table-secret
if [ ! -f "$LOG_FILE" ]; then
    echo "Timestamp,IP" > "$LOG_FILE"
fi
exec nginx -g "daemon off;"
