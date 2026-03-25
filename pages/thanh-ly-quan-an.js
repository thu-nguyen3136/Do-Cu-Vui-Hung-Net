import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThanhLyQuanAnPage() {

  const hotline = "0979.095.076";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        <title>Thanh Lý Quán Ăn Giá Cao TPHCM | Thu Mua Trọn Gói Vui Hùng</title>
        <meta name="description" content="Đồ Cũ Vui Hùng chuyên thanh lý quán ăn, thu mua bàn ghế, nội thất quán ăn giá cao nhất TPHCM & các tỉnh. Khảo sát tận nơi sau 20 phút, tháo dỡ vận chuyển miễn phí." />
        <meta name="keywords" content="thanh lý quán ăn, thu mua bàn ghế quán ăn, thanh lý nội thất quán ăn, đồ cũ vui hùng, thanh lý quán ăn tphcm giá cao" />
        <link rel="canonical" href="https://thumuadocugiacao.net/thanh-ly-quan-an" />
        <meta property="og:title" content="Dịch Vụ Thanh Lý Quán Ăn Trọn Gói Giá Cao TPHCM - Vui Hùng" />
        <meta property="og:description" content="Bạn cần thanh lý quán ăn? Vui Hùng thu mua trọn gói bàn ghế, thiết bị bếp, tủ lạnh giá cao nhất thị trường. Thanh toán 1 lần, dọn dẹp sạch sẽ." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#880d11]">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Ăn</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID CỨNG) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          {/* SỬ DỤNG GRID ĐỂ ÉP KHUNG: lg:grid-cols-4 chia màn hình làm 4 phần bằng nhau */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            {/* ========================================= */}
            {/* CỘT NỘI DUNG CHÍNH (Chiếm 3/4 trên Desktop) */}
            {/* ========================================= */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thanh Lý Quán Ăn
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#880d11] mb-8 leading-snug border-l-4 border-[#880d11] pl-4">
                Thanh Lý Quán Ăn - Dịch Vụ Thu Mua Nội Thất Giá Cao Tại TPHCM & Các Tỉnh
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang có nhu cầu <strong className="text-[#111827]">thanh lý quán ăn</strong>, đổi mới nội thất hay ngừng kinh doanh? Bạn lo lắng về giá cả, thủ tục phức tạp và chi phí vận chuyển? Đừng lo, <Link href="/" className="text-[#880d11] font-bold hover:underline">Đồ Cũ Vui Hùng</Link> chính là đơn vị uy tín hàng đầu chuyên thu mua bàn ghế quán ăn và toàn bộ nội thất quán ăn với mức giá cao nhất thị trường khu vực TPHCM và các tỉnh lân cận.
                </p>
              </div>

              {/* --- ẢNH 1 --- */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thanh-ly-quan-an.jpg"
                  alt="Dịch vụ thanh lý quán ăn trọn gói giá cao Vui Hùng"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=1000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Vì Sao Nên Chọn */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Vì Sao Nên Chọn Dịch Vụ Tại Vui Hùng?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Khi bạn cần <strong className="text-[#111827]">thanh lý quán ăn</strong>, việc tìm được đơn vị vừa trả giá cao vừa hỗ trợ trọn gói là điều vô cùng quan trọng:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                      title: "Báo giá cao và cạnh tranh",
                      desc: "Cam kết không ép giá, đưa ra mức giá tốt nhất dựa trên tình trạng sản phẩm."
                    },
                    {
                      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
                      title: "Khảo sát tận nơi",
                      desc: `Gọi Hotline ${hotline}, có mặt sau 20 phút để khảo sát trực tiếp.`
                    },
                    {
                      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h1m10 0h-1M5 16H4m10 0h-1m1 0h2l4-4v-4h-4v8z" /></svg>,
                      title: "Miễn phí vận chuyển",
                      desc: "Đội ngũ tháo dỡ và vận chuyển nhanh gọn, không phát sinh chi phí."
                    },
                    {
                      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                      title: "Hỗ trợ chiết khấu cao",
                      desc: "Có mức chiết khấu hấp dẫn khi giới thiệu người thân, bạn bè."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#880d11]/30 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-[#880d11]/10 flex items-center justify-center flex-shrink-0 text-[#880d11]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-base">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 2 --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thanh-ly-quan-an-uy-tin-tphcm.jpg"
                  alt="Thu mua đa dạng các loại bàn ghế quán ăn cũ giá cao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=1000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Các Loại Nội Thất */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Các Loại Nội Thất Thu Mua
                </h3>
                <div className="space-y-4 text-gray-700 list-inside list-disc prose prose-lg max-w-none">
                  <p>🔹 <strong className="text-[#111827]">Thu mua bàn ghế các loại:</strong> Bàn ghế gỗ, bàn ghế sắt, sofa, bàn ghế mây, ghế nhựa giả mây...</p>
                  <p>🔹 <strong className="text-[#111827]">Thu mua nội thất quán ăn:</strong> Quầy bar, kệ trưng bày, tủ đựng đồ, thiết bị pha chế...</p>
                  <p>🔹 <strong className="text-[#111827]">Thu mua đồ dùng quán ăn:</strong> Bếp công nghiệp, tủ lạnh, máy lạnh, tivi, dàn âm thanh, chén dĩa...</p>
                </div>
                <p className="text-[#880d11] leading-relaxed mt-6 font-medium italic bg-[#880d11]/5 p-4 rounded-xl border border-[#880d11]/10">
                  Đặc biệt nhận thanh lý các sản phẩm còn mới, chất lượng tốt với giá cực kỳ ưu đãi.
                </p>
              </section>

              {/* --- ẢNH 3 --- */}
              <div className="relative w-full md:w-3/4 mx-auto aspect-[4/3] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thanh-ly-quan-an-quan-go-vap.jpg"
                  alt="Khảo sát và báo giá thanh lý quán ăn tận nơi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=1000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Quy Trình Nhanh Gọn */}
              <section className="mb-12 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Quy Trình Thanh Lý Nhanh Gọn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                  {[
                    { step: "1", title: "Tiếp nhận yêu cầu", desc: `Liên hệ qua Hotline ${hotline} hoặc Zalo.` },
                    { step: "2", title: "Khảo sát & Báo giá", desc: "Đến khảo sát tận nơi và báo giá chính xác." },
                    { step: "3", title: "Thỏa thuận & Ký kết", desc: "Thống nhất mức giá và tiến hành thanh lý." },
                    { step: "4", title: "Tháo dỡ & Thanh toán", desc: "Tháo dỡ, vận chuyển và thanh toán 100% hợp đồng." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-4 border-[#880d11]/20 text-[#880d11] rounded-full flex items-center justify-center text-2xl md:text-3xl font-black flex-shrink-0 group-hover:bg-[#880d11] group-hover:text-white transition-all shadow-md">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-lg uppercase group-hover:text-[#880d11] transition-colors">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4 --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thanh-ly-quan-an-gia-cao.jpg"
                  alt="Hỗ trợ tháo dỡ và vận chuyển đồ cũ miễn phí"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=1000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Cam Kết */}
              <section className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Cam Kết Của Chúng Tôi
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Cam kết giá cao nhất:", desc: "Giá thu mua luôn cao hơn thị trường." },
                    { title: "Cam kết không phát sinh chi phí:", desc: "Miễn phí vận chuyển, tháo dỡ hoàn toàn." },
                    { title: "Cam kết thanh toán nhanh chóng:", desc: "Thanh toán trọn gói 100% một lần." },
                    { title: "Cam kết thời gian linh hoạt:", desc: "Hoạt động 24/24, tất cả các ngày trong tuần." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl border border-gray-100 hover:border-[#880d11]/20 transition-all">
                      <svg className="w-6 h-6 text-[#880d11] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <p className="text-gray-700 text-base">
                        <strong className="text-[#111827]">{item.title}</strong> {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nút Gọi Ngay */}
              <div className="mt-12 text-center border-t border-gray-100 pt-10">
                <p className="text-xl font-bold text-[#111827] mb-6">Kết nối ngay với Vui Hùng để được giá tốt nhất!</p>
                <a href={`tel:${hotline}`} className="inline-flex items-center gap-4 bg-[#880d11] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-[#a30f14] transition-all shadow-lg hover:-translate-y-1">
                  📞 Gọi Ngay: {hotline}
                </a>
              </div>

            </article>

            {/* ========================================= */}
            {/* CỘT SIDEBAR (Chiếm 1/4 trên Desktop)      */}
            {/* ========================================= */}
            <aside className="lg:col-span-1 w-full min-w-0">
              <div className="sticky top-24 w-full">
                {/* COMPONENT SIDEBAR ĐƯỢC CHÈN VÀO ĐÂY */}
                <Sidebar />
              </div>
            </aside>

          </div>
        </section>
      </main>
    </div>
  );
}