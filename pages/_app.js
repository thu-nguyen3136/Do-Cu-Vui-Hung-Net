import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FloatingContact } from '../components/FloatingContact';
import { Be_Vietnam_Pro } from 'next/font/google';
import GoogleAdsShield from '../components/GoogleAdsShield';
import { useEffect } from 'react'; // <-- 1. Import thêm useEffect ở đây

const beVietnam = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-be-vietnam',
});

export default function MyApp({ Component, pageProps }) {

  // 2. BỘ ĐẾM CHỐNG F5 LIÊN TỤC
  useEffect(() => {
    // THÊM 3 DÒNG NÀY VÀO TRƯỚC TIÊN:
    // Nếu đang ở trang phạt rồi thì dừng lại, không chạy code bên dưới nữa
    if (window.location.pathname === '/access-denied-spam') {
      return;
    }

    const MAX_REQUESTS = 10;
    const TIME_WINDOW = 60000;

    const now = Date.now();
    let visits = JSON.parse(localStorage.getItem('user_visits') || '[]');

    // Lọc và chỉ giữ lại những lần truy cập trong vòng 1 phút đổ lại
    visits = visits.filter(time => now - time < TIME_WINDOW);

    // --- KIỂM TRA PHẠT ---
    if (visits.length >= MAX_REQUESTS) {
      console.log('Phát hiện F5 quá nhanh! Đang chặn...');
      // Chuyển hướng kẻ phá hoại sang trang báo lỗi
      window.location.href = '/access-denied-spam';
      return;
    }

    // Ghi nhận lần truy cập mới này vào lịch sử
    visits.push(now);
    localStorage.setItem('user_visits', JSON.stringify(visits));
  }, []);

  return (
    <>
      <Head>
        <title>Đồ Cũ Vui Hùng - Thu Mua Giá Cao Tận Nơi</title>
        <meta name="description" content="Chuyên thu mua đồ gỗ, đồ cũ..." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      {/* 3. Chèn lá chắn quảng cáo (Nó sẽ chạy ngầm) */}
      <GoogleAdsShield />

      <div className={`${beVietnam.variable} font-sans`}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
}