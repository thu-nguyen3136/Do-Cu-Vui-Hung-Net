import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const [reviewsPerSlide, setReviewsPerSlide] = useState(3);
  const [mounted, setMounted] = useState(false);

  const serviceCategories = [
    {
      id: 'do-cu',
      mainTitle: 'THU MUA', // Phần màu đen #111827
      highlightTitle: 'ĐỒ CŨ', // Phần màu vàng #710a0d
      description: 'Chuyên thu mua các loại đồ cũ với giá cao, tháo dỡ tận nơi chuyên nghiệp.',
      services: [
        { id: 1, title: 'Thu Mua Tủ Đông Cũ', image: '/thu-mua-tu-dong-tu-mat.jpg', link: '/thu-mua-tu-dong-cu' },
        { id: 2, title: 'Thu Mua Tủ Mát Cũ', image: '/thu-mua-cua-nhom-xingfa.jpg', link: '/thu-mua-tu-mat-cu' },
        { id: 3, title: 'Thu Mua Đồ Inox Cũ', image: '/thu-mua-do-inox.jpg', link: '/thu-mua-do-inox-cu' },
        { id: 4, title: 'Thu Mua Đồ Cũ Giá Cao Tại TPHCM', image: '/thu-mua-cong-nhom-duc.jpg', link: '/thu-mua-do-cu-gia-cao-tai-tphcm' },
        { id: 5, title: 'Thanh Lý Nhà Hàng', image: '/thanh-ly-nha-hang.jpg', link: '/thanh-ly-nha-hang' },
        { id: 6, title: 'Thanh Lý Quán Ăn', image: '/thanh-ly-quan-an.jpg', link: '/thanh-ly-quan-an' },
        { id: 7, title: 'Thanh Lý Quán Nhậu', image: '/thanh-ly-quan-nhau.jpg', link: '/thanh-ly-quan-nhau' },
        { id: 8, title: 'Thanh Lý Quán Cafe', image: '/thu-mua-cua-sat-cu.jpg', link: '/thanh-ly-quan-ca-phe' },
        { id: 9, title: 'Thanh Lý Nhà Nghỉ, Khách Sạn', image: '/thu-mua-cua-sat-cu.jpg', link: '/thanh-ly-nha-nghi-khach-san' },
      ]
    },
    {
      id: 'do-go-cu',
      mainTitle: 'THU MUA', // Phần màu đen #111827
      highlightTitle: 'ĐỒ GỖ CŨ', // Phần màu vàng #710a0d
      description: 'Nhận thu mua đồ gỗ cũ, tủ thờ cũ, thu mua bàn ghế gỗ cũ, đồ gỗ cũ với giá cao.',
      services: [
        { id: 1, title: 'Thu Mua Tủ Thờ Gỗ Cũ', image: '/thu-mua-thiet-bị-ve-sinh-cu.jpg', link: '/thu-mua-tu-tho-go-cu' },
        { id: 2, title: 'Thu Mua Bàn Ghế Gỗ Cũ', image: '/thu-mua-ban-ghe-go.jpg', link: '/thu-mua-ban-ghe-go-cu' },
        { id: 3, title: 'Thu Mua Đồ Gỗ Cũ', image: '/thu-mua-xac-nha-kho-xuong.jpg', link: '/thu-mua-do-go-cu' },
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
      comment: 'Vui Hùng thu mua cực kỳ nhanh gọn. Gọi 30 phút sau có mặt khảo sát, chốt giá và dọn dẹp mặt bằng sạch sẽ ngay trong đêm. Rất chuyên nghiệp!'
    },
    {
      id: 2,
      name: 'Chị Oanh (Gò Vấp)',
      role: 'Kinh doanh Khách Sạn',
      rating: 5,
      avatar: '/tran-hoang-oanh.jpg',
      comment: 'Tôi đã thanh lý hệ thống phòng khách sạn cũ, giá Vui Hùng đưa ra kịch kim, cao hơn các bên khác báo giá đến 20-30%. Thanh toán tiền mặt tại chỗ.'
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
      comment: 'Làm việc uy tín, cần thanh lý xác nhà cấp 4 cũ, gọi Vui Hùng hỗ trợ từ A-Z. Rất khỏe, không phải động tay vào việc gì.'
    },
    {
      id: 5,
      name: 'Chị Nhi (Quận 7)',
      role: 'Chủ Quán Ăn Gia Đình',
      rating: 5,
      avatar: '/luu-ngoc-nhi.jpg',
      comment: 'Thanh lý hệ thống bàn ghế inox, bếp nướng nhanh gọn lẹ. Giá Vui Hùng mua lại làm tôi rất bất ngờ vì cao hơn kỳ vọng. Rất ưng ý!'
    },
    {
      id: 6,
      name: 'Chị Nguyệt (Bình Thạnh)',
      role: 'Quản Lý Thu Mua',
      rating: 5,
      avatar: '/pham-thu-nguyet.jpg',
      comment: 'Hợp tác với Đồ Cũ Vui Hùng nhiều năm nay. Đội bốc xếp khỏe, có xe tải riêng nên việc chở hàng cồng kềnh như cửa sắt, tủ gỗ cực kỳ suôn sẻ.'
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
    "name": "Đồ Cũ Vui Hùng",
    "image": "https://thanhlycuacutphcm.com/logo-viet-anh.png",
    "@id": "https://thanhlycuacutphcm.com/",
    "url": "https://thanhlycuacutphcm.com/",
    "telephone": "0988257479",
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
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      <Head>
        <title>Thu Mua Đồ Cũ Giá Cao TPHCM | Thanh Lý Nhà Hàng, Khách Sạn - Vui Hùng</title>
        <meta name="description" content="Đồ Cũ Vui Hùng chuyên thu mua đồ cũ giá cao tại TPHCM. ⭐Thanh lý nhà hàng, khách sạn, quán cafe ⭐Thu mua cửa cũ, xác nhà xưởng. Báo giá tận nơi, vận chuyển 0đ!" />
        <meta name="keywords" content="đồ cũ vui hùng, thu mua đồ cũ tphcm, thu mua cửa cũ, thanh lý nhà hàng khách sạn, thu mua đồ gỗ cũ, thanh lý quán cafe, thu mua xác nhà xưởng giá cao" />
        <meta property="og:title" content="CỬA HÀNG THU MUA ĐỒ CŨ GIÁ CAO TPHCM ☎️【VUI HÙNG】" />
        <meta property="og:description" content="Chuyên thu mua thanh lý đồ cũ tận nơi giá cao nhất thị trường. Uy tín - Nhanh chóng - Tháo dỡ miễn phí." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thumuadocugiacao.net/" />
        <link rel="canonical" href="https://thumuadocugiacao.net/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Đồ Cũ Vui Hùng",
            "alternateName": "Thu Mua Đồ Cũ Vui Hùng",
            "description": "Đơn vị chuyên thu mua đồ cũ, thanh lý nhà hàng, khách sạn và các loại cửa cũ giá cao tại TPHCM.",
            "url": "https://thumuadocugiacao.net/",
            "telephone": "0988257479",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hồ Chí Minh",
              "addressCountry": "VN"
            },
            "priceRange": "$$"
          })
        }} />
      </Head>

      {/* PHẦN BANNER CHÍNH */}
      <section className="relative w-full overflow-hidden block">
        <h1 className="sr-only">Thu Mua Đồ Cũ Giá Cao, Thanh Lý Nhà Hàng, Khách Sạn TPHCM - Đồ Cũ Vui Hùng</h1>
        <div className="w-full">
          <img
            src="/banner-do-cu-vui-hung.jpg"
            alt="Thu Mua Đồ Cũ Giá Cao Vui Hùng"
            // Sử dụng h-auto để ảnh không bị méo hoặc cắt
            className="w-full h-auto block"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2000&auto=format&fit=crop';
            }}
          />
        </div>
      </section>

      <main className="flex-grow">



        {/* --- PHẦN GIỚI THIỆU: THIẾT KẾ ĐẢO CHIỀU & HIỆN ĐẠI --- */}
        <section id="gioi-thieu" className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 md:px-10">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

              {/* 1. NỘI DUNG GIỚI THIỆU (Bên Trái) */}
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
                  </span>
                  <span className="text-xs font-black tracking-[0.2em] text-brand-600 uppercase">
                    Về Đồ Cũ Vui Hùng
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-[1.15]">
                  CHUYÊN THU MUA <br />
                  <span className="text-brand-600 relative">
                    ĐỒ CŨ GIÁ CAO
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                  <br /> TẬN NƠI TẠI TPHCM
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify border-l-4 border-brand-600 pl-6 italic">
                  Với tâm niệm <strong>"Mua của người chán - Bán cho người cần"</strong>, Đồ Cũ Vui Hùng mang đến giải pháp thanh lý tối ưu nhất. Chúng tôi giúp bạn giải phóng mặt bằng nhanh chóng và thu hồi vốn cao nhất cho các loại cửa cũ, xác nhà xưởng và đồ dùng quán ăn.
                </p>

                {/* Danh sách lợi ích dạng thẻ nhỏ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { title: "Báo giá siêu tốc", desc: "Chụp hình gửi Zalo báo giá ngay" },
                    { title: "Thu mua tận nơi", desc: "Không ngại xa, có mặt sau 30p" },
                    { title: "Tháo dỡ chuyên nghiệp", desc: "An toàn, sạch sẽ, miễn phí" },
                    { title: "Thanh toán dứt điểm", desc: "Tiền mặt hoặc chuyển khoản" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-brand-600 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm uppercase">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="tel:0988257479" className="bg-brand-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-200 flex items-center gap-3 group">
                    NHẬN BÁO GIÁ NGAY
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <div className="flex items-center gap-3 px-6">
                    <div className="text-left">
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Hotline 24/7</p>
                      <p className="text-lg font-black text-gray-900 underline decoration-brand-600">0988.257.479</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. HÌNH ẢNH (Bên Phải - Hiển thị FULL hình) */}
              <div className="w-full lg:w-1/2 relative flex justify-center items-center group">

                {/* Hiệu ứng đổ bóng mờ ảo phía sau để hình không bị "trơ" */}
                <div className="absolute inset-0 bg-brand-50 rounded-[40px] rotate-3 scale-95 -z-10 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gray-100 rounded-[40px] -rotate-3 scale-95 -z-20 group-hover:rotate-0 transition-transform duration-700"></div>

                <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] flex items-center justify-center p-4">
                  <img
                    src="/anh-gioi-thieu-do-cu-vui-hung.jpg"
                    alt="Đồ Cũ Vui Hùng"
                    /* QUAN TRỌNG: 
                       - object-contain: Giúp hiện toàn bộ hình không bị mất góc nào.
                       - max-h-full: Đảm bảo hình không bị tràn khung.
                    */
                    className="max-w-full max-h-[550px] object-contain rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />

                  {/* Badge kinh nghiệm - Di chuyển ra góc ngoài một chút để không che hình */}
                  <div className="absolute -bottom-4 -right-2 md:right-0 bg-white p-4 md:p-6 rounded-3xl shadow-xl border border-gray-100 hidden sm:block">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-black text-brand-600">15+</span>
                      <div className="h-8 w-[2px] bg-gray-200"></div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter leading-tight">
                        Năm uy tín<br />thị trường
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION: TẠI SAO CHỌN ĐỒ CŨ VUI HÙNG */}
        <section className="relative py-12 md:py-20 bg-white overflow-hidden">
          {/* Trang trí nền nhẹ nhàng */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>

          <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">
            {/* Tiêu đề chính */}
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-4">
                Vì sao khách hàng chọn <span className="text-brand-600">Vui Hùng?</span>
              </h2>
              <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto font-medium">
                Đơn vị thu mua đồ cũ uy tín hàng đầu TPHCM với quy trình chuyên nghiệp và tận tâm.
              </p>
              <div className="mt-4 flex justify-center gap-1">
                <span className="w-12 h-1.5 bg-brand-600 rounded-full"></span>
                <span className="w-3 h-1.5 bg-brand-200 rounded-full"></span>
              </div>
            </div>

            {/* Grid nội dung - Thiết kế dạng Card hiện đại */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Lợi ích 1 */}
              <div className="group bg-gray-50 p-8 rounded-[32px] border border-transparent hover:border-brand-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide">Giá Cao Nhất</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Cam kết định giá đúng giá trị, thu mua cao hơn thị trường 20-30%. Không ép giá, thanh toán tiền mặt một lần.
                </p>
              </div>

              {/* Lợi ích 2 */}
              <div className="group bg-gray-50 p-8 rounded-[32px] border border-transparent hover:border-brand-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide">Nhanh Chóng</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Có mặt sau 30 phút gọi điện. Khảo sát tận nơi, báo giá tức thì. Quy trình làm việc thần tốc, tiết kiệm thời gian.
                </p>
              </div>

              {/* Lợi ích 3 */}
              <div className="group bg-gray-50 p-8 rounded-[32px] border border-transparent hover:border-brand-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide">Trọn Gói A-Z</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Miễn phí tháo dỡ, bốc xếp và vận chuyển. Đội ngũ nhân viên lành nghề, dọn dẹp mặt bằng sạch sẽ sau khi mua.
                </p>
              </div>

              {/* Lợi ích 4 */}
              <div className="group bg-gray-50 p-8 rounded-[32px] border border-transparent hover:border-brand-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide">Uy Tín 10 Năm</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Hơn 10.000 khách hàng đã tin tưởng. Phục vụ 24/7 kể cả ngày lễ. Làm việc minh bạch, trung thực, tận tâm.
                </p>
              </div>

            </div>

            {/* Nút Call to Action mới */}
            <div className="mt-16 text-center">
              <a href="tel:0988257479" className="group inline-flex items-center gap-4 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-lg hover:bg-brand-700 transition-all shadow-[0_15px_30px_rgba(136,13,17,0.3)]">
                <span className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">📞</span>
                Kết nối ngay với Vui Hùng
              </a>
            </div>
          </div>
        </section>

        {/* PHẦN THỐNG KÊ CÔNG TY */}
        <section className="-mt-6 pt-6 pb-12 bg-white relative z-10 border-b border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="text-center py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-black text-[#880d11] mb-2">15<span className="text-[#710a0d]">+</span></div>
                <div className="text-gray-600 font-bold text-[14px] md:text-[15px] uppercase tracking-wider">Năm Kinh Nghiệm</div>
              </div>
              <div className="text-center py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-black text-[#880d11] mb-2">5000<span className="text-[#710a0d]">+</span></div>
                <div className="text-gray-600 font-bold text-[14px] md:text-[15px] uppercase tracking-wider">Khách Hàng Hài Lòng</div>
              </div>
              <div className="text-center py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-black text-[#880d11] mb-2">5</div>
                <div className="text-gray-600 font-bold text-[14px] md:text-[15px] uppercase tracking-wider">Chi Nhánh Tại HCM</div>
              </div>
              <div className="text-center py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-black text-[#880d11] mb-2">24<span className="text-[#710a0d]">/7</span></div>
                <div className="text-gray-600 font-bold text-[14px] md:text-[15px] uppercase tracking-wider">Hỗ Trợ Tận Nơi</div>
              </div>
            </div>
          </div>
        </section>

        {/* TÁCH CÁC SECTION DỊCH VỤ DỰA TRÊN THIẾT KẾ MỚI */}
        {serviceCategories.map((category, idx) => (
          <section
            key={category.id}
            // border-gray-50/50 tạo đường kẻ cực mảnh, gần như hòa vào nền
            className={`mt-0 mb-0 py-2 md:py-4 border-t border-gray-50/50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-[1400px] mx-auto px-4 md:px-10">

              {/* TIÊU ĐỀ 2 MÀU IN HOA - ĐÃ ÉP SÁT KHOẢNG CÁCH */}
              <div className="text-center mb-2 md:mb-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#111827] uppercase tracking-tight mb-1 md:mb-2">
                  {category.mainTitle} <span className="text-[#bc700a]">{category.highlightTitle}</span>
                </h2>
                <p className="text-gray-500 text-[13px] md:text-base font-medium max-w-2xl mx-auto px-2 leading-tight italic">
                  {category.description}
                </p>
                <div className="w-10 md:w-16 h-1 bg-gradient-to-r from-[#bc700a] to-[#e08a0d] mx-auto mt-2 md:mt-3 rounded-full"></div>
              </div>

              {/* GRID DỊCH VỤ - HIỂN THỊ 1 CỘT TRÊN MOBILE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {category.services.map((srv) => (
                  <Link
                    key={srv.id}
                    href={srv.link}
                    // border-gray-50 giúp viền thẻ dịch vụ rất nhẹ nhàng, không bị thô
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 hover:-translate-y-1"
                  >

                    {/* PHẦN ẢNH */}
                    <div className="relative h-48 md:h-60 lg:h-64 overflow-hidden">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=800&auto=format&fit=crop'; }}
                      />
                    </div>

                    {/* NỘI DUNG THẺ DỊCH VỤ */}
                    <div className="py-2 px-3 flex flex-col flex-grow text-center items-center">

                      {/* Tiêu đề: Xám đen, in đậm, tăng padding để thoáng chữ */}
                      <h3 className="font-black text-[#111827] group-hover:text-[#e08a0d] text-[15px] md:text-[18px] py-1 md:py-2 mb-1 transition-colors line-clamp-2 leading-tight min-h-[40px] md:min-h-[50px] flex items-center">
                        {srv.title}
                      </h3>

                      {/* Nút bấm: Vàng cam chủ đạo, Hover xám đen */}
                      <div className="inline-block w-full bg-[#e08a0d] group-hover:bg-[#111827] text-white font-black py-2 px-6 rounded-xl text-[11px] md:text-[13px] uppercase tracking-widest transition-all shadow-md group-hover:shadow-lg">
                        XEM CHI TIẾT
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        ))}





        {/* KHU VỰC NÚT BÁO GIÁ - Đã giảm tối đa khoảng đệm */}
        <section className="py-0 md:py-1 bg-white flex justify-center w-full relative z-[6]">
          <Link
            href="/lien-he"
            className="inline-flex items-center justify-center gap-3 bg-[#111827] text-white px-8 py-3 md:px-10 md:py-4 text-xs md:text-lg font-bold uppercase rounded-xl hover:bg-[#880d11] transition-all shadow-lg hover:-translate-y-1"
          >
            TÔI CẦN BÁO GIÁ CHO SẢN PHẨM KHÁC
          </Link>
        </section>

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
                  { step: "1", title: "Nhận yêu cầu", desc: "Tiếp nhận thông tin qua hotline: 0988.257.479" },
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

        {/* PHẦN ĐÁNH GIÁ CỦA KHÁCH HÀNG */}
        <section className="py-4 md:py-6 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 md:px-10">

            <div className="text-center mb-4">
              <h2 className="text-2xl md:text-4xl font-black text-[#111827] uppercase leading-tight">
                Đánh Giá<span className="text-[#710a0d]"> Khách Hàng</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#710a0d] to-[#880d11] mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500">
                {getVisibleReviews().map((review) => (
                  /* TĂNG CHIỀU CAO: Thay p-5 thành py-10 px-6 để block cao hơn */
                  <div key={review.id} className="bg-gray-50 rounded-2xl py-10 px-6 border border-gray-100 hover:border-[#880d11]/30 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between h-full">
                    <div className="text-6xl font-serif text-[#710a0d]/10 absolute top-4 right-8">"</div>

                    <div>
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-[#880d11] text-lg">★</span>
                        ))}
                      </div>

                      {/* TĂNG CHIỀU CAO NỘI DUNG: Tăng min-h lên 140px hoặc cao hơn tùy ý */}
                      <p className="text-gray-700 italic font-medium leading-relaxed mb-10 relative z-10 text-sm md:text-base min-h-[140px]">
                        {review.comment}
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#880d11]/30 shadow-sm"
                          onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
                        />
                      ) : null}
                      <div className="w-12 h-12 bg-[#111827] rounded-full justify-center items-center text-white font-bold text-xl uppercase" style={{ display: review.avatar ? 'none' : 'flex' }}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-black text-[#111827] text-lg leading-tight mb-1">{review.name}</h3>
                        <span className="text-[#710a0d] font-bold tracking-wider text-xs uppercase">{review.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 mt-10">
                {[...Array(totalReviewSlides)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReviewSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${idx === currentReviewSlide ? 'w-8 bg-[#880d11]' : 'w-2 bg-gray-300'}`}
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
              Gửi hình ảnh qua Zalo, Nhận báo giá trong <span className="font-black text-[#880d11]">5 Phút</span>. <br className="hidden md:block" />
              Thu mua không ép giá - Dọn dẹp sạch sẽ - Tiền trao cháo múc ngay lập tức.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:0988257479" className="bg-[#880d11] text-white hover:bg-[#710a0d] font-black uppercase px-8 py-5 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
                <span className="text-2xl">📞</span> Gọi Hotine
              </a>
              <a href="https://zalo.me/0988257479" target="_blank" rel="noopener noreferrer" className="bg-[#0068ff] text-white hover:bg-[#0052cc] font-black uppercase px-8 py-5 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
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
                Cập Nhật Tin Tức <span className="text-[#710a0d]">Mới Nhất</span>
              </h2>

              <div className="w-20 h-1 bg-[#710a0d] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* DATA */}
            {(() => {
              const news = [
                {
                  id: 1,
                  title: "Đơn Vị Thu Mua Đồ Cũ Uy Tín Tại TP.HCM",
                  desc: "Vui Hùng chuyên thu mua đồ cũ giá cao tại TP.HCM, hỗ trợ khảo sát tận nơi, thanh toán nhanh chóng, không ép giá.",
                  image: "/thu-mua-do-cu-uy-tin-hcm.jpeg",
                  slug: "/tin-tuc/thu-mua-do-cu-uy-tin-tphcm"
                },
                {
                  id: 2,
                  title: "Thu Mua Thiết Bị Vệ Sinh, Phế Liệu Giá Cao Tại TP.HCM",
                  desc: "Nhận thu mua thiết bị vệ sinh cũ, phế liệu inox, sắt, nhôm với giá cao, tháo dỡ và vận chuyển tận nơi.",
                  image: "/thu-mua-thiet-bi-ve-sinh-phe-lieu-gia-cao-tai-tp-hcm.png",
                  slug: "/tin-tuc/thu-mua-bon-cau-cu-thiet-bi-ve-sinh"
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
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(224,138,13,0.15)] transition-all duration-300"
                      >

                        {/* IMAGE - ĐÃ TĂNG CHIỀU CAO TRÊN DESKTOP */}
                        <div className="relative h-52 md:h-72 lg:h-80 overflow-hidden">
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">
                          <span className="text-xs text-[#880d11] font-bold uppercase tracking-wider">
                            Tin tức
                          </span>

                          <h3 className="font-black text-lg text-[#111827] mt-2 mb-3 line-clamp-2 group-hover:text-[#880d11] transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                            {item.desc}
                          </p>

                          <div className="text-[#880d11] font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#710a0d]">
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
                      className="inline-flex items-center justify-center bg-[#111827] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#880d11] transition"
                    >
                      XEM TẤT CẢ TIN TỨC →
                    </Link>
                  </div>
                </>
              );
            })()}

          </div>
        </section>

      </main>
    </div>
  );
}