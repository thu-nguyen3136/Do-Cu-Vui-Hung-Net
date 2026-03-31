import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Counter({ end, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Home() {
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const [reviewsPerSlide, setReviewsPerSlide] = useState(3);
  const [mounted, setMounted] = useState(false);

  const serviceCategories = [
    {
<<<<<<< HEAD
      id: 'thu-mua-do-cu',
      mainTitle: 'THU MUA', // Phần màu đen #111827
      highlightTitle: 'ĐỒ CŨ', // Phần màu vàng #b02a37
      description: 'Chuyên thu mua các loại đồ cũ với giá cao, tháo dỡ tận nơi chuyên nghiệp.',
      services: [
        { id: 1, title: 'Thu Mua Nội Thất Khách Sạn', image: '/thu-mua-noi-that-khach-san.jpg', link: '/thu-mua-noi-that-khach-san' },
        { id: 2, title: 'Thanh Lý Quán Cafe', image: '/thanh-ly-quan-cafe.jpg', link: '/thanh-ly-quan-ca-phe' },
        { id: 3, title: 'Thanh Lý Quán Ăn', image: '/thanh-ly-quan-an.jpg', link: '/thanh-ly-quan-an' },
        { id: 4, title: 'Thanh Lý Quán Nhậu', image: '/thanh-ly-quan-nhau.jpg', link: '/thanh-ly-quan-nhau' },
        { id: 5, title: 'Thanh Lý Nhà Hàng', image: '/thanh-ly-nha-hang.jpg', link: '/thanh-ly-nha-hang' },
        { id: 6, title: 'Thanh Lý Quán Phở', image: '/thanh-ly-quan-pho.jpg', link: '/thanh-ly-quan-pho' },
        { id: 7, title: 'Thanh Lý Quán Trà Sữa', image: '/thanh-ly-quan-tra-sua.jpg', link: '/thanh-ly-quan-tra-sua' },
        { id: 8, title: 'Thu Mua Tủ Đông, Tủ Mát', image: '/thu-mua-tu-dong-tu-mat.jpg', link: '/thu-mua-tu-dong-tu-mat' },
        { id: 9, title: 'Thu Mua Đồ Inox Cũ', image: '/thanh-ly-do-inox.jpg', link: '/thu-mua-do-inox-cu' },
=======
      id: 'do-cu',
      mainTitle: 'THU MUA', // Phần màu đen #111827
      highlightTitle: 'ĐỒ CŨ', // Phần màu vàng #710a0d
      description: 'Chuyên thu mua các loại đồ cũ với giá cao, tháo dỡ tận nơi chuyên nghiệp.',
      services: [
        { id: 1, title: 'Thu Mua Tủ Đông Cũ', image: '/thu-mua-tu-dong-tu-mat.jpg', link: '/thu-mua-tu-dong-cu' },
        { id: 2, title: 'Thu Mua Tủ Mát Cũ', image: '/thu-mua-tu-mat.jpg', link: '/thu-mua-tu-mat-cu' },
        { id: 3, title: 'Thu Mua Đồ Inox Cũ', image: '/thu-mua-do-inox.jpg', link: '/thu-mua-do-inox-cu' },
        { id: 4, title: 'Thu Mua Đồ Cũ Giá Cao Tại TPHCM', image: '/thu-mua-do-cu-gia-cao.jpg', link: '/thu-mua-do-cu-gia-cao-tai-tphcm' },
        { id: 5, title: 'Thanh Lý Nhà Hàng', image: '/thanh-ly-nha-hang.jpg', link: '/thanh-ly-nha-hang' },
        { id: 6, title: 'Thanh Lý Quán Ăn', image: '/thanh-ly-quan-an.jpg', link: '/thanh-ly-quan-an' },
        { id: 7, title: 'Thanh Lý Quán Nhậu', image: '/thanh-ly-quan-nhau.jpg', link: '/thanh-ly-quan-nhau' },
        { id: 8, title: 'Thanh Lý Quán Cafe', image: '/thu-mua-quan-cafe.jpg', link: '/thanh-ly-quan-ca-phe' },
        { id: 9, title: 'Thanh Lý Nhà Nghỉ, Khách Sạn', image: '/thu-mua-khach-san-nha-nghi.jpg', link: '/thanh-ly-nha-nghi-khach-san' },
      ]
    },
    {
      id: 'do-go-cu',
      mainTitle: 'THU MUA', // Phần màu đen #111827
      highlightTitle: 'ĐỒ GỖ CŨ', // Phần màu vàng #710a0d
      description: 'Nhận thu mua đồ gỗ cũ, tủ thờ cũ, thu mua bàn ghế gỗ cũ, đồ gỗ cũ với giá cao.',
      services: [
        { id: 1, title: 'Thu Mua Tủ Thờ Gỗ Cũ', image: '/thu-mua-tu-tho-go.jpg', link: '/thu-mua-tu-tho-go-cu' },
        { id: 2, title: 'Thu Mua Bàn Ghế Gỗ Cũ', image: '/thu-mua-ban-ghe-go.jpg', link: '/thu-mua-ban-ghe-go-cu' },
        { id: 3, title: 'Thu Mua Đồ Gỗ Cũ', image: '/thu-mua-do-go.jpg', link: '/thu-mua-do-go-cu' },
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
      ]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Anh Toàn (Quận 1)',
      role: 'Chủ chuỗi nhà hàng',
      rating: 5,
      avatar: '/nguyen-van-toan.jpg',
<<<<<<< HEAD
      comment: 'Huy Hoàng thu mua cực kỳ nhanh gọn. Gọi 30 phút sau có mặt khảo sát, chốt giá và dọn dẹp mặt bằng sạch sẽ ngay trong đêm. Rất chuyên nghiệp!'
=======
      comment: 'Vui Hùng thu mua cực kỳ nhanh gọn. Gọi 30 phút sau có mặt khảo sát, chốt giá và dọn dẹp mặt bằng sạch sẽ ngay trong đêm. Rất chuyên nghiệp!'
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
    },
    {
      id: 2,
      name: 'Chị Oanh (Gò Vấp)',
      role: 'Kinh doanh Khách Sạn',
      rating: 5,
      avatar: '/tran-hoang-oanh.jpg',
<<<<<<< HEAD
      comment: 'Tôi đã thanh lý hệ thống phòng khách sạn cũ, giá Huy Hoàng đưa ra kịch kim, cao hơn các bên khác báo giá đến 20-30%. Thanh toán tiền mặt tại chỗ.'
=======
      comment: 'Tôi đã thanh lý hệ thống phòng khách sạn cũ, giá Vui Hùng đưa ra kịch kim, cao hơn các bên khác báo giá đến 20-30%. Thanh toán tiền mặt tại chỗ.'
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
    },
    {
      id: 3,
      name: 'Anh Việt (Hóc Môn)',
      role: 'Chủ xưởng gỗ',
      rating: 5,
      avatar: '/le-hoang-viet.jpg',
      comment: 'Bán hết mớ cửa gỗ ngỡ bỏ đi mà thu được số tiền lớn. Đội thợ tháo dỡ lễ phép, không làm ồn hay ảnh hưởng hàng xóm. Chấm 10 điểm!'
    },
    {
      id: 4,
      name: 'Anh Bảo (Thủ Đức)',
      role: 'Nhà Thầu',
      rating: 5,
      avatar: '/vo-thanh-bao.jpg',
<<<<<<< HEAD
      comment: 'Làm việc uy tín, cần thanh lý xác nhà cấp 4 cũ, gọi Huy Hoàng hỗ trợ từ A-Z. Rất khỏe, không phải động tay vào việc gì.'
=======
      comment: 'Làm việc uy tín, cần thanh lý xác nhà cấp 4 cũ, gọi Vui Hùng hỗ trợ từ A-Z. Rất khỏe, không phải động tay vào việc gì.'
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
    },
    {
      id: 5,
      name: 'Chị Nhi (Quận 7)',
      role: 'Chủ Quán Ăn Gia Đình',
      rating: 5,
      avatar: '/luu-ngoc-nhi.jpg',
<<<<<<< HEAD
      comment: 'Thanh lý hệ thống bàn ghế inox, bếp nướng nhanh gọn lẹ. Giá Huy Hoàng mua lại làm tôi rất bất ngờ vì cao hơn kỳ vọng. Rất ưng ý!'
=======
      comment: 'Thanh lý hệ thống bàn ghế inox, bếp nướng nhanh gọn lẹ. Giá Vui Hùng mua lại làm tôi rất bất ngờ vì cao hơn kỳ vọng. Rất ưng ý!'
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
    },
    {
      id: 6,
      name: 'Chị Nguyệt (Bình Thạnh)',
      role: 'Quản Lý Thu Mua',
      rating: 5,
      avatar: '/pham-thu-nguyet.jpg',
<<<<<<< HEAD
      comment: 'Hợp tác với Đồ Cũ Huy Hoàng nhiều năm nay. Đội bốc xếp khỏe, có xe tải riêng nên việc chở hàng cồng kềnh như cửa sắt, tủ gỗ cực kỳ suôn sẻ.'
=======
      comment: 'Hợp tác với Đồ Cũ Vui Hùng nhiều năm nay. Đội bốc xếp khỏe, có xe tải riêng nên việc chở hàng cồng kềnh như cửa sắt, tủ gỗ cực kỳ suôn sẻ.'
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
    }
  ];

  const totalReviewSlides = Math.max(1, Math.ceil(reviews.length / reviewsPerSlide));

  useEffect(() => {
    setMounted(true);
    const updateReviews = () => {
      if (window.innerWidth < 768) setReviewsPerSlide(1);
      else if (window.innerWidth < 1024) setReviewsPerSlide(2);
      else setReviewsPerSlide(3);
    };
    updateReviews();
    window.addEventListener("resize", updateReviews);
    return () => window.removeEventListener("resize", updateReviews);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setCurrentReviewSlide((prev) => (prev + 1) % totalReviewSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [mounted, totalReviewSlides]);

  const getVisibleReviews = () => {
    if (!mounted) return reviews.slice(0, 3);
    const start = currentReviewSlide * reviewsPerSlide;
    return reviews.slice(start, start + reviewsPerSlide);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
<<<<<<< HEAD
    "name": "Đồ Cũ Huy Hoàng",
    "image": "https://thumuadocugiacao.net/logo-viet-anh.png",
    "@id": "https://thumuadocugiacao.net/",
    "url": "https://thumuadocugiacao.net/",
    "telephone": "0909549237",
=======
    "name": "Đồ Cũ Vui Hùng",
    "image": "https://thumuadocugiacao.net/logo-viet-anh.png",
    "@id": "https://thumuadocugiacao.net/",
    "url": "https://thumuadocugiacao.net/",
    "telephone": "0979095076",
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Lê Văn Khương",
      "addressLocality": "Đông Thạnh, Hóc Môn",
      "addressRegion": "Hồ Chí Minh",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "description": "Chuyên thu mua đồ cũ, thu mua đồ gỗ, cửa cũ, thanh lý nhà hàng khách sạn giá cao tận nơi tại TP.HCM và các tỉnh lân cận.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const news = [
    {
      id: 1,
<<<<<<< HEAD
      title: "Lưu Ý Khi Thanh Lý Nhà Hàng Khách Sạn",
      desc: "Thanh lý nhà hàng, khách sạn trọn gói cần lưu ý những gì để tránh mất oan tiền tỷ?",
      image: "../thanh-ly-nha-hang.jpg",
      slug: "/tin-tuc/kinh-nghiem-thanh-ly-nha-hang"
    },
    {
      id: 2,
      title: "Kinh Nghiệm Thanh Lý Đồ Cũ Giá Cao Tại TPHCM",
      desc: "Bí quyết thanh lý đồ cũ gia đình, đồ văn phòng, bàn ghế quán cafe với giá cao nhất TPHCM",
      image: "../khach-san.jpg",
      slug: "/tin-tuc/kinh-nghiem-thanh-ly-do-go"
=======
      title: "Đơn Vị Thu Mua Đồ Cũ Uy Tín Tại TP.HCM",
      desc: "Vui Hùng chuyên thu mua đồ cũ giá cao tại TP.HCM, hỗ trợ khảo sát tận nơi, thanh toán nhanh chóng.",
      image: "/tin-tuc-1.jpg",
      slug: "/tin-tuc/thu-mua-do-cu-uy-tin-tphcm"
    },
    {
      id: 2,
      title: "Thu Mua Thiết Bị Vệ Sinh, Phế Liệu Giá Cao Tại TP.HCM",
      desc: "Nhận thu mua thiết bị vệ sinh cũ, phế liệu inox, sắt, nhôm giá cao, hỗ trợ tháo dỡ tận nơi.",
      image: "/tin-tuc-2.jpg",
      slug: "/tin-tuc/thu-mua-bon-cau-cu-thiet-bi-ve-sinh"
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      <Head>
<<<<<<< HEAD
        <title>Thu Mua Đồ Cũ Giá Cao TPHCM | Thanh Lý Nhà Hàng, Khách Sạn - Huy Hoàng</title>
        <meta name="description" content="Đồ Cũ Huy Hoàng chuyên thu mua đồ cũ giá cao tại TPHCM. ⭐Thanh lý nhà hàng, khách sạn, quán cafe ⭐Thu mua cửa cũ, xác nhà xưởng. Báo giá tận nơi, vận chuyển 0đ!" />
        <meta name="keywords" content="đồ cũ Huy Hoàng, thu mua đồ cũ Huy Hoàng, thu mua đồ cũ tphcm, thu mua cửa cũ, thanh lý nhà hàng khách sạn, thu mua đồ gỗ cũ, thanh lý quán cafe, thu mua xác nhà xưởng giá cao" />
        <meta property="og:title" content="CỬA HÀNG THU MUA ĐỒ CŨ GIÁ CAO TPHCM ☎️【Huy Hoàng】" />
=======
        <title>Thu Mua Đồ Cũ Giá Cao TPHCM | Thanh Lý Nhà Hàng, Khách Sạn - Vui Hùng</title>
        <meta name="description" content="Đồ Cũ Vui Hùng chuyên thu mua đồ cũ giá cao tại TPHCM. ⭐Thanh lý nhà hàng, khách sạn, quán cafe ⭐Thu mua cửa cũ, xác nhà xưởng. Báo giá tận nơi, vận chuyển 0đ!" />
        <meta name="keywords" content="đồ cũ vui hùng, thu mua đồ cũ vui hùng, thu mua đồ cũ tphcm, thu mua cửa cũ, thanh lý nhà hàng khách sạn, thu mua đồ gỗ cũ, thanh lý quán cafe, thu mua xác nhà xưởng giá cao" />
        <meta property="og:title" content="CỬA HÀNG THU MUA ĐỒ CŨ GIÁ CAO TPHCM ☎️【VUI HÙNG】" />
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
        <meta property="og:description" content="Chuyên thu mua thanh lý đồ cũ tận nơi giá cao nhất thị trường. Uy tín - Nhanh chóng - Tháo dỡ miễn phí." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thumuadocugiacao.net/" />
        <link rel="canonical" href="https://thumuadocugiacao.net/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
<<<<<<< HEAD
            "name": "Đồ Cũ Huy Hoàng",
            "alternateName": "Thu Mua Đồ Cũ Huy Hoàng",
            "description": "Đơn vị chuyên thu mua đồ cũ, thanh lý nhà hàng, khách sạn và các loại cửa cũ giá cao tại TPHCM.",
            "url": "https://thumuadocugiacao.net/",
            "telephone": "0909549237",
=======
            "name": "Đồ Cũ Vui Hùng",
            "alternateName": "Thu Mua Đồ Cũ Vui Hùng",
            "description": "Đơn vị chuyên thu mua đồ cũ, thanh lý nhà hàng, khách sạn và các loại cửa cũ giá cao tại TPHCM.",
            "url": "https://thumuadocugiacao.net/",
            "telephone": "0979095076",
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hồ Chí Minh",
              "addressCountry": "VN"
            },
            "priceRange": "$$"
          })
        }} />
      </Head>

<<<<<<< HEAD
      <section className="bg-[#f5f1eb] py-8 md:py-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* ========================================== */}
          {/* NỬA TRÁI: NỘI DUNG (TEXT & BUTTONS) */}
          {/* ========================================== */}
          <div className="relative z-10">
            {/* Badge nhỏ giới thiệu */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-[#dc3545] font-bold text-sm mb-6 border border-red-200 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dc3545] animate-pulse"></span>
              Tổng kho thu mua đồ cũ số 1 TP.HCM
            </div>

            {/* H1 SEO */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight uppercase tracking-tight">
              Thu Mua Đồ Cũ <br className="hidden sm:block" />
              <span className="text-[#dc3545]">Giá Cao</span> Tại TP.HCM
            </h1>

            {/* SUB TEXT */}
            <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed max-w-[90%]">
              Huy Hoàng chuyên thu mua đồ cũ, nội thất, máy móc, ván sàn, thiết bị văn phòng
              với giá cao. Khảo sát tận nơi – báo giá nhanh – thanh toán ngay trong ngày.
            </p>

            {/* USP */}
            <ul className="mt-6 space-y-3 text-sm md:text-base text-gray-800 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#dc3545]/10 flex items-center justify-center text-[#dc3545]">✓</div>
                Thu mua tận nơi – không ngại xa
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#dc3545]/10 flex items-center justify-center text-[#dc3545]">✓</div>
                Báo giá nhanh qua Zalo
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#dc3545]/10 flex items-center justify-center text-[#dc3545]">✓</div>
                Không ép giá – minh bạch
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#dc3545]/10 flex items-center justify-center text-[#dc3545]">✓</div>
                Linh hoạt hình thức thanh toán
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0909549237"
                className="bg-[#dc3545] text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-[#b00000] transition shadow-[0_8px_20px_rgba(220,53,69,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Gọi Ngay: 0909 549 237
              </a>

              <a
                href="#quy-trinh"
                className="border-2 border-[#dc3545] text-[#dc3545] px-8 py-4 rounded-xl font-bold text-center hover:bg-[#dc3545] hover:text-white transition hover:-translate-y-1"
              >
                Xem Quy Trình
              </a>
            </div>
          </div>

          {/* ========================================== */}
          {/* NỬA PHẢI: 2 ẢNH CHỮ NHẬT XẾP TRÊN DƯỚI RÕ RÀNG */}
          {/* ========================================== */}
          <div className="relative mt-12 md:mt-0 w-full flex flex-col justify-center items-center gap-6 z-10">

            {/* Quầng sáng nền làm nổi bật hình ảnh */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[110%] bg-red-200/40 rounded-full blur-[80px] z-0 pointer-events-none"></div>

            {/* Ảnh 1: Nằm hoàn toàn ở trên */}
            <div className="relative z-10 w-full sm:w-[90%] rounded-2xl shadow-lg border-4 border-white overflow-hidden transform hover:-translate-y-1 transition duration-500 group">
              <img
                src="/banner-do-cu-huy-hoang-1.jpg"
                alt="Thu mua đồ cũ Huy Hoàng 1"
                className="w-full h-auto block group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* Ảnh 2: Nằm hoàn toàn ở dưới, cách ảnh trên một khoảng gap-6 */}
            <div className="relative z-20 w-full sm:w-[90%] rounded-2xl shadow-lg border-4 border-white overflow-hidden transform hover:-translate-y-1 transition duration-500 group">
              <img
                src="/banner-do-cu-huy-hoang-2.jpg"
                alt="Thu mua đồ cũ Huy Hoàng 2"
                className="w-full h-auto block group-hover:scale-105 transition duration-700"
              />

              {/* Badge gắn góc dưới ảnh 2 */}
              <div className="absolute bottom-3 left-3 bg-[#dc3545] text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-bold shadow-md border border-white/20">
                Giá Cao - Thu Nhanh
              </div>
            </div>

          </div>

=======
      {/* PHẦN BANNER CHÍNH */}
      <section className="relative w-full overflow-hidden block">

        <div className="w-full">
          <img
            src="/banner-do-cu-vui-hung.jpg"
            alt="Thu Mua Đồ Cũ Giá Cao Vui Hùng"
            // Sử dụng h-auto để ảnh không bị méo hoặc cắt
            className="w-full h-auto block"
          />
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
        </div>
      </section>

      <main className="flex-grow">

<<<<<<< HEAD
        {/* ========================================== */}
        {/* SECTION STATS: NHỮNG CON SỐ BIẾT NÓI       */}
        {/* ========================================== */}
        <section className="relative py-16 md:py-24 bg-[#111827] overflow-hidden">

          {/* Hiệu ứng ánh sáng nền mờ ảo (Glow effect) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#dc3545]/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#dc3545]/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-[1200px] mx-auto px-4 relative z-10">

            {/* Tiêu đề Section */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
                Những Con Số <span className="text-[#dc3545]">Biết Nói</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Khẳng định vị thế và uy tín của Đồ Cũ Huy Hoàng trong lĩnh vực thu mua, thanh lý đồ cũ trọn gói tại TP.HCM và các vùng lân cận.
              </p>
              <div className="w-16 md:w-24 h-1.5 bg-[#dc3545] mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Lưới Thống Kê (4 Cột) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">

              {/* Cột 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 hover:border-[#dc3545]/50 transition-all duration-500 hover:-translate-y-2 group backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-black text-[#dc3545] mb-2 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-300 uppercase tracking-wider mt-3">
                  Năm Kinh Nghiệm
                </p>
              </div>

              {/* Cột 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 hover:border-[#dc3545]/50 transition-all duration-500 hover:-translate-y-2 group backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-black text-[#dc3545] mb-2 group-hover:scale-110 transition-transform duration-300">
                  10k+
                </div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-300 uppercase tracking-wider mt-3">
                  Dự Án Thu Mua
                </p>
              </div>

              {/* Cột 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 hover:border-[#dc3545]/50 transition-all duration-500 hover:-translate-y-2 group backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-black text-[#dc3545] mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-300 uppercase tracking-wider mt-3">
                  Thanh Toán Ngay
                </p>
              </div>

              {/* Cột 4 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 hover:border-[#dc3545]/50 transition-all duration-500 hover:-translate-y-2 group backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-black text-[#dc3545] mb-2 group-hover:scale-110 transition-transform duration-300">
                  30'
                </div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-300 uppercase tracking-wider mt-3">
                  Có Mặt Khảo Sát
                </p>
              </div>

            </div>

            {/* Nút bấm (Call to Action) bổ sung bên dưới khối thống kê */}
            <div className="mt-14 text-center">
              <a
                href="tel:0909549237"
                className="inline-flex items-center justify-center gap-3 bg-[#dc3545] text-white px-8 py-4 rounded-xl font-black text-sm md:text-lg uppercase hover:bg-[#b00000] transition-all shadow-[0_10px_20px_rgba(220,53,69,0.3)] hover:-translate-y-1"
              >
                <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Gọi Nhận Báo Giá: 0909.549.237
              </a>
            </div>
=======
        <section className="bg-white py-3 md:py-6 border-b border-gray-100 text-center px-4">
          <div className="max-w-[900px] mx-auto">

            <h1 className="text-lg md:text-3xl font-black text-[#111827] tracking-tight leading-[1.3] py-1 md:py-2">
              <span className="block">THU MUA ĐỒ CŨ GIÁ CAO TP.HCM</span>
              <span className="block block text-gray-800">Thanh lý nhanh –  <span className="text-[#ff3d44]"> Vui Hùng</span></span>
            </h1>

            <p className="text-gray-500 mt-3 md:mt-4 mx-auto font-medium text-sm md:text-base leading-[1.6] max-w-[700px]">
              Vui Hùng chuyên thu mua, thanh lý bàn ghế gỗ cũ, đồ inox, thiết bị nhà hàng ăn uống, quán cà phê tận nơi.
              Báo giá nhanh chóng, bốc xếp dọn dẹp dứt điểm trong ngày!
            </p>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615

          </div>
        </section>

<<<<<<< HEAD
=======
        {/* PHẦN THỐNG KÊ */}
        <section className="bg-gradient-to-r from-[#111827] to-[#1f2937] py-10 md:py-14 text-white">
          <div className="max-w-[1200px] mx-auto px-6">

            <div className="text-center mb-10">
              <h2 className="md:text-4xl font-black uppercase tracking-tight !text-white">
                KẾT QUẢ THỰC TẾ&nbsp;
                <span className="text-[#e08a0d]">Những Con Số Biết Nói</span>
              </h2>
              <p className="text-gray-400 text-sm mt-3 font-medium">
                Dữ liệu cập nhật {new Date().getFullYear()}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#ff3d44]/30 transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-3xl md:text-4xl font-black text-[#e08a0d] mb-2 group-hover:scale-110 transition-transform">
                  <Counter end={5000} />+
                </div>
                <p className="text-sm font-semibold text-gray-300 tracking-wider !text-white">Khách hàng</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#ff3d44]/30 transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-3xl md:text-4xl font-black text-[#e08a0d] mb-2 group-hover:scale-110 transition-transform">
                  <Counter end={10} />+
                </div>
                <p className="text-sm font-semibold text-gray-300 tracking-wider">Năm kinh nghiệm</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#ff3d44]/30 transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-3xl md:text-4xl font-black text-[#e08a0d] mb-2 group-hover:scale-110 transition-transform">
                  <Counter end={10000} />+
                </div>
                <p className="text-sm font-semibold text-gray-300 tracking-wider">Đơn hàng</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#ff3d44]/30 transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-3xl md:text-4xl font-black text-[#e08a0d] mb-2 group-hover:scale-110 transition-transform">
                  <Counter end={30} /> phút
                </div>
                <p className="text-sm font-semibold text-gray-300 tracking-wider">Có mặt</p>
              </div>

            </div>

            <div className="text-center mt-12 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[60px] bg-[#e08a0d]/20 blur-[30px] rounded-full pointer-events-none"></div>

              <a
                href="tel:0979095076"
                className="relative inline-block bg-gradient-to-r from-[#e08a0d] to-[#e08a0d] text-white px-10 py-5 rounded-2xl font-black text-lg hover:from-[#710a0d] hover:to-[#5c0909] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1 border border-[#ff3d44]/20"
              >
                📞 GỌI NGAY: 0979 095 076
              </a>

              <p className="text-[#ff3d44] font-semibold mt-4 text-sm tracking-wide">
                ⚡ Báo giá trong 5 phút - Khảo sát tận nơi
              </p>
            </div>

          </div>
        </section>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615

        {/* TÁCH CÁC SECTION DỊCH VỤ DỰA TRÊN THIẾT KẾ MỚI */}
        {
          serviceCategories.map((category, idx) => (
            <section
              key={category.id}
              // border-gray-50/50 tạo đường kẻ cực mảnh, gần như hòa vào nền
              className={`mt-0 mb-0 py-2 md:py-4 border-t border-gray-50/50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-[1400px] mx-auto px-4 md:px-10">

                {/* TIÊU ĐỀ 2 MÀU IN HOA - ĐÃ ÉP SÁT KHOẢNG CÁCH */}
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#111827] uppercase tracking-tight mb-2">
<<<<<<< HEAD
                    {category.mainTitle} <span className="text-[#dc3545] relative inline-block">{category.highlightTitle}
                      <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#dc3545]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
=======
                    {category.mainTitle} <span className="text-[#880d11] relative inline-block">{category.highlightTitle}
                      <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#880d11]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                    </span>
                  </h2>
                  <p className="text-gray-500 text-[14px] md:text-base font-medium max-w-2xl mx-auto px-2 leading-relaxed italic">
                    {category.description}
                  </p>
<<<<<<< HEAD
                  <div className="w-12 md:w-20 h-1.5 bg-gradient-to-r from-[#dc3545] to-[#b02a37] mx-auto mt-4 rounded-full"></div>
                </div>

                {/* GRID DỊCH VỤ - SHOW FULL ẢNH VUÔNG 100% */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
=======
                  <div className="w-12 md:w-20 h-1.5 bg-gradient-to-r from-[#880d11] to-[#710a0d] mx-auto mt-4 rounded-full"></div>
                </div>

                {/* GRID DỊCH VỤ - HIỂN THỊ 1 CỘT TRÊN MOBILE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                  {category.services.map((srv) => (
                    <Link
                      key={srv.id}
                      href={srv.link}
<<<<<<< HEAD
                      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#dc3545]/50 hover:-translate-y-2"
                    >

                      {/* PHẦN ẢNH: Đổi lại aspect-square (khung vuông) và object-contain (hiện full 100% ảnh) */}
                      <div className="relative w-full aspect-square overflow-hidden bg-white flex items-center justify-center border-b border-gray-100">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay đen mờ nhẹ khi hover */}
                        <div className="absolute inset-0 bg-[#111827]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* NỘI DUNG THẺ DỊCH VỤ */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow text-center items-center bg-white relative">

                        {/* Huy hiệu mini */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#dc3545] text-white rounded-full flex items-center justify-center font-black text-lg shadow-md border-4 border-white group-hover:scale-110 group-hover:bg-[#ff4d4d] transition-all">
=======
                      className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(136,13,17,0.08)] transition-all duration-500 border border-gray-100 hover:border-[#880d11]/30 hover:-translate-y-2"
                    >

                      {/* PHẦN ẢNH */}
                      <div className="relative aspect-square sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gray-100">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* NỘI DUNG THẺ DỊCH VỤ */}
                      <div className="p-5 md:p-6 flex flex-col flex-grow text-center items-center bg-white relative">

                        {/* Huy hiệu mini */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#880d11] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-[3px] border-white group-hover:scale-110 group-hover:bg-[#ff3d44] transition-all">
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                          {srv.id < 10 ? `0${srv.id}` : srv.id}
                        </div>

                        {/* Tiêu đề */}
<<<<<<< HEAD
                        <h3 className="font-black text-[#111827] group-hover:text-[#dc3545] text-[17px] md:text-[20px] mt-4 mb-6 transition-colors line-clamp-2 leading-snug flex items-center justify-center min-h-[50px] w-full">
=======
                        <h3 className="font-black text-[#111827] group-hover:text-[#880d11] text-[16px] md:text-[19px] mt-4 mb-5 transition-colors line-clamp-2 leading-snug flex items-center justify-center h-[54px] w-full px-2">
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                          {srv.title}
                        </h3>

                        {/* Nút bấm */}
<<<<<<< HEAD
                        <div className="mt-auto inline-flex w-full items-center justify-center gap-2 bg-[#dc3545] group-hover:bg-[#b02a37] text-white font-black py-4 px-6 rounded-xl text-[13px] md:text-[14px] uppercase tracking-widest transition-all duration-300 border border-[#dc3545] group-hover:border-[#b02a37] group-hover:shadow-lg">
                          XEM CHI TIẾT
                          <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
=======
                        <div className="inline-flex w-full items-center justify-center gap-2 bg-[#880d11] group-hover:bg-[#710a0d] text-white font-black py-3.5 px-6 rounded-xl text-[12px] md:text-[13px] uppercase tracking-widest transition-all duration-300 border border-[#880d11] group-hover:border-[#710a0d] group-hover:shadow-[0_8px_20px_rgba(136,13,17,0.3)]">
                          XEM CHI TIẾT
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
<<<<<<< HEAD

=======
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                    </Link>
                  ))}
                </div>

              </div>
            </section>
          ))
        }

<<<<<<< HEAD
=======




>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
        {/* KHU VỰC NÚT BÁO GIÁ - Đã giảm tối đa khoảng đệm */}
        <section className="py-0 md:py-1 bg-white flex justify-center w-full relative z-[6]">
          <Link
            href="/lien-he"
<<<<<<< HEAD
            className="inline-flex items-center justify-center gap-3 bg-[#111827] text-white px-8 py-3 md:px-10 md:py-4 text-xs md:text-lg font-bold uppercase rounded-xl hover:bg-[#dc3545] transition-all shadow-lg hover:-translate-y-1"
=======
            className="inline-flex items-center justify-center gap-3 bg-[#111827] text-white px-8 py-3 md:px-10 md:py-4 text-xs md:text-lg font-bold uppercase rounded-xl hover:bg-[#880d11] transition-all shadow-lg hover:-translate-y-1"
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
          >
            TÔI CẦN BÁO GIÁ CHO SẢN PHẨM KHÁC
          </Link>
        </section>

<<<<<<< HEAD


        <section className="py-16 bg-[#f5f1eb]" id="quy-trinh">
          <div className="max-w-[1200px] mx-auto px-4">

            {/* TITLE */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase text-[#1f2937]">
                Quy Trình <span className="text-[#b02a37]">Thu Mua</span>
              </h2>
              <div className="w-24 h-1 bg-[#b02a37] mx-auto mt-3 rounded-full"></div>
            </div>

            {/* MOBILE HINT */}
            <p className="text-center text-sm text-gray-500 mb-4 md:hidden">
              ← Vuốt ngang để xem →
            </p>

            {/* FLOW */}
            <div className="relative overflow-x-auto md:overflow-visible">

              {/* GRADIENT 2 BÊN (hint scroll xịn) */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#f5f1eb] to-transparent z-10 md:hidden"></div>
              <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#f5f1eb] to-transparent z-10 md:hidden"></div>

              <div className="
        flex md:grid md:grid-cols-4
        gap-6 items-stretch
        min-w-max md:min-w-0
        snap-x snap-mandatory md:snap-none
      ">

                {[
                  {
                    step: "01",
                    title: "Nhận yêu cầu",
                    desc: "Tiếp nhận qua hotline nhanh chóng"
                  },
                  {
                    step: "02",
                    title: "Khảo sát",
                    desc: "Đến tận nơi hoặc xem qua Zalo"
                  },
                  {
                    step: "03",
                    title: "Báo giá",
                    desc: "Minh bạch – giá tốt nhất"
                  },
                  {
                    step: "04",
                    title: "Thu mua",
                    desc: "Thanh toán ngay tại chỗ"
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center md:block flex-shrink-0 snap-center"
                  >

                    {/* CARD */}
                    <div className="
              relative bg-white rounded-2xl p-6
              shadow-md border border-[#e5e7eb]
              min-w-[260px] md:min-w-0
              transition-all duration-300
              hover:shadow-xl hover:-translate-y-2
              group
            ">

                      {/* STEP (FIX KHÔNG BỊ CẮT) */}
                      <div className="flex items-center gap-3 mb-3">

                        <div className="
                  w-10 h-10 rounded-full 
                  bg-[#b02a37] text-white 
                  flex items-center justify-center 
                  font-bold text-sm
                  shadow-md
                  group-hover:scale-110 transition
                ">
                          {item.step}
                        </div>

                        <div className="h-[2px] flex-1 bg-[#b02a37]/20"></div>
                      </div>

                      {/* CONTENT */}
                      <h3 className="text-lg font-black text-[#1f2937] mb-1 uppercase group-hover:text-[#b02a37]">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* ARROW (desktop only) */}
                    {i < 3 && (
                      <div className="
                hidden md:flex items-center justify-center
                w-12
              ">
                        <div className="relative w-full h-[2px] bg-[#b02a37]/40">
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 
                    border-t-[6px] border-t-transparent 
                    border-b-[6px] border-b-transparent 
                    border-l-[8px] border-l-[#b02a37]">
                          </span>
                        </div>
                      </div>
                    )}

                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>


=======
        {/* PHẦN QUY TRÌNH BAO TRỌN - ĐÃ GIẢM KHOẢNG CÁCH TỐI ĐA */}
        <section className="py-2 md:py-2 bg-white relative overflow-hidden" id="quy-trinh">
          <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">

            {/* Tiêu đề: Giảm mb-10 xuống mb-6 */}
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#111827] uppercase tracking-tight">
                Quy Trình <span className="text-[#710a0d]">Thu Mua</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#710a0d] to-[#880d11] mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="relative">
              {/* Lưới hiển thị: Giảm khoảng cách trên mobile để các bước sát nhau hơn */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0 relative z-10">
                {[
                  { step: "1", title: "Nhận yêu cầu", desc: "Tiếp nhận thông tin qua hotline: 0979.095.076" },
                  { step: "2", title: "Khảo sát", desc: "Khảo sát tận nơi hoặc báo giá nhanh qua hình ảnh Zalo." },
                  { step: "3", title: "Báo giá", desc: "Thỏa thuận giá cả minh bạch, không ép giá khách hàng." },
                  { step: "4", title: "Thu mua", desc: "Tháo dỡ nhanh gọn, thanh toán tiền mặt ngay tại chỗ." }
                ].map((process, i) => (
                  <div key={i} className="group flex flex-col items-center text-center px-4 relative cursor-default">

                    {/* Đường kẻ nối SVG - Giữ nguyên nhưng thêm transition màu */}
                    {i < 3 && (
                      <svg className="hidden lg:block absolute top-[10px] left-[50%] w-full h-[50px] z-0 text-[#710a0d]/20 group-hover:text-[#710a0d]/40 transition-colors duration-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                        <path
                          d={i % 2 === 0 ? "M20,30 Q50,0 80,30" : "M20,10 Q50,40 80,10"}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    )}

                    {/* Vòng tròn số: Hiệu ứng Hover biến đổi màu và phóng lớn */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#880d11]/10 text-[#880d11] rounded-full flex items-center justify-center text-2xl md:text-3xl font-black mb-4 mx-auto shadow-sm ring-4 ring-white z-10 relative 
                            transition-all duration-500 transform group-hover:scale-110 group-hover:bg-[#111827] group-hover:text-[#880d11] group-hover:shadow-lg">
                      {process.step}
                    </div>

                    {/* Tiêu đề Bước Hoạt Động: Chuyển màu khi rê chuột  */}
                    <h3 className="text-lg md:text-xl font-black mb-2 text-[#111827] transition-colors duration-300 group-hover:text-[#710a0d] uppercase tracking-wide">
                      {process.title}
                    </h3>

                    {/* Mô tả Từng Bước: Canh chỉnh thu nhỏ gọn gàng */}
                    <p className="text-gray-500 font-medium text-[13px] md:text-[14px] leading-snug max-w-[240px] mx-auto transition-colors duration-300 group-hover:text-gray-800">
                      {process.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
        <section className="relative py-10 md:py-16 bg-[#0f0f10] text-white overflow-hidden">

          <div className="max-w-[1100px] mx-auto px-4 md:px-6 relative z-10">

            {/* TITLE */}
            <div className="text-center mb-10 md:mb-14">              <h2 className="text-2xl md:text-4xl font-black tracking-tight">
              Vì sao khách hàng chọn
<<<<<<< HEAD
              <span className="text-[#ff4d4d]"> Huy Hoàng?</span>
=======
              <span className="text-[#ff3d44]"> Vui Hùng?</span>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
            </h2>
              <p className="text-gray-400 mt-2 md:mt-3 text-base md:text-lg">
                Không chỉ là thu mua – chúng tôi mang lại giá trị thật
              </p>
            </div>

            {/* ITEMS */}
            {[
              {
                title: "Giá cao hơn thị trường",
                desc: "Cam kết thu mua cao hơn 20-30%, không ép giá, thanh toán ngay.",
                icon: "💰"
              },
              {
                title: "Có mặt chỉ sau 30 phút",
                desc: "Đội ngũ di chuyển nhanh, khảo sát và chốt giá ngay.",
                icon: "⚡"
              },
              {
                title: "Trọn gói từ A-Z",
                desc: "Miễn phí tháo dỡ, vận chuyển, dọn dẹp.",
                icon: "🚛"
              },
              {
                title: "Uy tín lâu năm",
                desc: "Hơn 10.000 khách hàng tin tưởng, hoạt động 24/7.",
                icon: "🏆"
              }
            ].map((item, i) => (
              <div className="mb-8 md:mb-10">
                <div className="bg-[#1a1a1c]/50 rounded-3xl p-3 md:p-4">

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-lg md:text-xl font-black">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm md:text-[15px] leading-[1.5]">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}

<<<<<<< HEAD
            {/* CTA */} <div className="text-center mt-20"> <a href="tel:0909549237" className="inline-flex items-center gap-4 bg-gradient-to-r from-[#dc3545] to-[#b02a37] hover:from-[#b02a37] hover:to-[#b00000] px-10 py-5 rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(220,53,69,0.3)] transition-all hover:scale-105 border border-[#ff4d4d]/20" > 📞 GỌI NGAY: 0909.549.237 </a> </div> </div> </section>
=======
            {/* CTA */} <div className="text-center mt-20"> <a href="tel:0979095076" className="inline-flex items-center gap-4 bg-gradient-to-r from-[#880d11] to-[#710a0d] hover:from-[#710a0d] hover:to-[#5c0909] px-10 py-5 rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(136,13,17,0.3)] transition-all hover:scale-105 border border-[#ff3d44]/20" > 📞 GỌI NGAY: 0979.095.076 </a> </div> </div> </section>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615



        {/* ================= ĐÁNH GIÁ CỦA KHÁCH HÀNG ================= */}
        <section className="py-20 md:py-24 bg-gray-50 overflow-hidden relative">
          {/* Họa tiết nền */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

            {/* Tiêu đề */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight">
<<<<<<< HEAD
                Khách Hàng Nói Về <span className="text-[#dc3545]">Huy Hoàng</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#dc3545] to-[#e35d6a] mx-auto mt-4 rounded-full"></div>
=======
                Khách Hàng Nói Về <span className="text-[#880d11]">Vui Hùng</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#880d11] to-[#a30f14] mx-auto mt-4 rounded-full"></div>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
            </div>

            <div className="relative">
              {/* Lưới Slider */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 transition-opacity duration-500 pt-8">
                {getVisibleReviews().map((review) => (
<<<<<<< HEAD
                  <div key={review.id} className="bg-white rounded-[32px] px-8 pb-10 pt-14 shadow-sm border border-gray-100 hover:border-[#dc3545]/20 hover:shadow-[0_20px_40px_rgba(220,53,69,0.08)] transition-all duration-500 relative flex flex-col justify-between h-full group hover:-translate-y-2">

                    {/* AVATAR NỔI LÊN TRÊN */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-[#dc3545]/20 transition-all bg-[#111827] flex items-center justify-center">
=======
                  <div key={review.id} className="bg-white rounded-[32px] px-8 pb-10 pt-14 shadow-sm border border-gray-100 hover:border-[#880d11]/20 hover:shadow-[0_20px_40px_rgba(136,13,17,0.08)] transition-all duration-500 relative flex flex-col justify-between h-full group hover:-translate-y-2">

                    {/* AVATAR NỔI LÊN TRÊN */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-[#880d11]/20 transition-all bg-[#111827] flex items-center justify-center">
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                        {review.avatar ? (
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
                          />
                        ) : null}
                        {/* Chữ cái thay thế nếu lỗi ảnh */}
                        <div className="w-full h-full text-white font-bold text-3xl uppercase flex items-center justify-center" style={{ display: review.avatar ? 'none' : 'flex' }}>
                          {review.name.charAt(0)}
                        </div>
                      </div>
                    </div>

                    {/* Dấu ngoặc kép chìm */}
<<<<<<< HEAD
                    <div className="text-8xl font-serif text-[#dc3545]/5 absolute top-10 left-6 select-none pointer-events-none transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2">"</div>
=======
                    <div className="text-8xl font-serif text-[#880d11]/5 absolute top-10 left-6 select-none pointer-events-none transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2">"</div>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615

                    {/* Nội dung Review */}
                    <div className="relative z-10 text-center flex-grow flex flex-col items-center">
                      <div className="flex gap-1 mb-6 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
<<<<<<< HEAD
                          <svg key={star} className="w-5 h-5 text-[#dc3545]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
=======
                          <svg key={star} className="w-5 h-5 text-[#880d11]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                        ))}
                      </div>

                      <p className="text-gray-700 italic font-medium leading-relaxed mb-8 text-base min-h-[120px] flex items-center justify-center">
                        "{review.comment}"
                      </p>
                    </div>

                    {/* Thông tin Khách hàng */}
                    <div className="text-center pt-6 border-t border-dashed border-gray-200">
                      <h3 className="font-black text-[#111827] text-[18px] leading-tight mb-1">{review.name}</h3>
<<<<<<< HEAD
                      <span className="text-[#dc3545] font-bold tracking-widest text-[11px] uppercase bg-[#dc3545]/5 px-3 py-1 rounded-full inline-block mt-1">
=======
                      <span className="text-[#880d11] font-bold tracking-widest text-[11px] uppercase bg-[#880d11]/5 px-3 py-1 rounded-full inline-block mt-1">
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                        {review.role}
                      </span>
                    </div>

                  </div>
                ))}
              </div>

              {/* Nút chuyển Slide */}
              <div className="flex items-center justify-center gap-3 mt-16">
                {[...Array(totalReviewSlides)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReviewSlide(idx)}
<<<<<<< HEAD
                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentReviewSlide ? 'w-10 bg-[#dc3545] shadow-[0_4px_10px_rgba(220,53,69,0.3)]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
=======
                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentReviewSlide ? 'w-10 bg-[#880d11] shadow-[0_4px_10px_rgba(136,13,17,0.3)]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>




        {/* KÊU GỌI HÀNH ĐỘNG DƯỚI CÙNG */}
        <section className="py-16 md:py-16 bg-[url('https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/90 to-[#111827]/70 backdrop-blur-sm"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Bạn Đang Có Sản Phẩm Cần Thanh Lý?</h2>
            <p className="text-xl font-medium text-gray-300 mb-10 leading-relaxed">
<<<<<<< HEAD
              Gửi hình ảnh qua Zalo, Nhận báo giá trong <span className="font-black text-[#dc3545]">5 Phút</span>. <br className="hidden md:block" />
              Thu mua không ép giá - Dọn dẹp sạch sẽ - Tiền trao cháo múc ngay lập tức.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:0909549237" className="bg-[#dc3545] text-white hover:bg-[#b02a37] font-black uppercase px-8 py-5 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
                <span className="text-2xl">📞</span> Gọi Hotine
              </a>
              <a href="https://zalo.me/0909549237" target="_blank" rel="noopener noreferrer" className="bg-[#0068ff] text-white hover:bg-[#0052cc] font-black uppercase px-8 py-5 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
=======
              Gửi hình ảnh qua Zalo, Nhận báo giá trong <span className="font-black text-[#880d11]">5 Phút</span>. <br className="hidden md:block" />
              Thu mua không ép giá - Dọn dẹp sạch sẽ - Tiền trao cháo múc ngay lập tức.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:0979095076" className="bg-[#880d11] text-white hover:bg-[#710a0d] font-black uppercase px-8 py-5 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
                <span className="text-2xl">📞</span> Gọi Hotine
              </a>
              <a href="https://zalo.me/0979095076" target="_blank" rel="noopener noreferrer" className="bg-[#0068ff] text-white hover:bg-[#0052cc] font-black uppercase px-8 py-5 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                <span className="text-2xl font-sans">Zalo</span> Gửi Hình Zalo
              </a>
            </div>
          </div>
        </section>

        {/* NEWS SECTION */}
        <section className="pt-4 pb-4 md:pt-4 md:pb-4 bg-gray-50" id="tin-tuc">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            {/* HEADER */}
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase">
<<<<<<< HEAD
                Cập Nhật Tin Tức <span className="text-[#b02a37]">Mới Nhất</span>
              </h2>

              <div className="w-20 h-1 bg-[#b02a37] mx-auto mt-4 rounded-full"></div>
=======
                Cập Nhật Tin Tức <span className="text-[#710a0d]">Mới Nhất</span>
              </h2>

              <div className="w-20 h-1 bg-[#710a0d] mx-auto mt-4 rounded-full"></div>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
            </div>

            {/* DATA */}
            {(() => {
              const news = [
                {
                  id: 1,
                  title: "Lưu Ý Khi Thanh Lý Nhà Hàng Khách Sạn",
                  desc: "Thanh lý nhà hàng, khách sạn trọn gói cần lưu ý những gì để tránh mất oan tiền tỷ?",
                  image: "/thanh-ly-nha-hang-uy-tin.jpg",
                  slug: "/tin-tuc/luu-y-khi-thanh-ly-nha-hang-khach-san"
                },
                {
                  id: 2,
                  title: "Kinh Nghiệm Thanh Lý Đồ Cũ Giá Cao Tại TPHCM",
                  desc: "Bí quyết thanh lý đồ cũ gia đình, đồ văn phòng, bàn ghế quán cafe với giá cao nhất TPHCM",
                  image: "/thu-mua-do-cu-gia-cao-go-vap.jpg",
                  slug: "/tin-tuc/kinh-nghiem-thanh-ly-do-cu"
                }
              ];

              return (
                <>
                  {/* GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {news.map((item) => (
                      <Link
                        key={item.id}
                        href={item.slug}
<<<<<<< HEAD
                        className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(220,53,69,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-[#dc3545]/30"
=======
                        className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(136,13,17,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-[#880d11]/30"
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                      >

                        {/* IMAGE - ĐÃ TĂNG CHIỀU CAO TRÊN DESKTOP */}
                        <div className="relative h-56 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.title}
                            // w-full h-full object-cover là bắt buộc để ảnh ko bị méo
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=800&auto=format&fit=crop";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-5 md:p-8 bg-white relative">
<<<<<<< HEAD
                          <div className="absolute -top-7 right-6 bg-[#dc3545] text-white px-4 py-2 rounded-xl text-[12px] font-bold uppercase shadow-lg group-hover:-translate-y-1 transition-transform">
                            Bài Viết
                          </div>
                          <span className="text-xs text-[#dc3545] font-bold uppercase tracking-wider">
                            Tin tức
                          </span>

                          <h3 className="font-black text-lg text-[#111827] mt-2 mb-3 line-clamp-2 group-hover:text-[#dc3545] transition-colors">
=======
                          <div className="absolute -top-7 right-6 bg-[#880d11] text-white px-4 py-2 rounded-xl text-[12px] font-bold uppercase shadow-lg group-hover:-translate-y-1 transition-transform">
                            Bài Viết
                          </div>
                          <span className="text-xs text-[#880d11] font-bold uppercase tracking-wider">
                            Tin tức
                          </span>

                          <h3 className="font-black text-lg text-[#111827] mt-2 mb-3 line-clamp-2 group-hover:text-[#880d11] transition-colors">
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                            {item.title}
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                            {item.desc}
                          </p>

<<<<<<< HEAD
                          <div className="text-[#b02a37] font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#111827]">
=======
                          <div className="text-[#710a0d] font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#111827]">
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                            Xem chi tiết
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="text-center mt-10 md:mt-12">
                    <Link
                      href="/tin-tuc"
<<<<<<< HEAD
                      className="inline-flex items-center justify-center bg-[#111827] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#dc3545] transition"
=======
                      className="inline-flex items-center justify-center bg-[#111827] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#880d11] transition"
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                    >
                      XEM TẤT CẢ TIN TỨC →
                    </Link>
                  </div>
                </>
              );
            })()}

          </div>
        </section>

      </main >
    </div >
  );
}