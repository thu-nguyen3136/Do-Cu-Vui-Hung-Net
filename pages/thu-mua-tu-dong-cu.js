import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaTuDongTuMatPage() {
  const hotline = "0979.095.076";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thu Mua Tủ Đông - Tủ Mát Giá Cao Uy Tín Tại TPHCM | Vui Hùng</title>
        <meta name="description" content="Đồ Cũ Vui Hùng chuyên thu mua tủ đông, tủ mát, bàn mát công nghiệp cũ với giá cao nhất TPHCM. Khảo sát 20 phút có mặt, miễn phí tháo dỡ vận chuyển." />
        <meta name="keywords" content="thu mua tủ đông, thu mua tủ mát, thanh lý tủ đông cũ, thu mua bàn mát, đồ cũ vui hùng, thu mua tủ đông tphcm" />
        <link rel="canonical" href="https://thumuadocugiacao.net/thu-mua-tu-dong-cu" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Tủ Đông – Tủ Mát Giá Cao Tại TPHCM" />
        <meta property="og:description" content="Cần thanh lý tủ đông, tủ mát? Vui Hùng thu mua mọi số lượng giá cao nhất thị trường. Thanh toán 1 lần, miễn phí tháo dỡ." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#880d11] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thu Mua Tủ Đông – Tủ Mát</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout an toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thu Mua Tủ Đông – Tủ Mát
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#880d11] mb-8 leading-snug border-l-4 border-[#880d11] pl-4">
                Dịch Vụ Thu Mua Tủ Đông – Tủ Mát Giá Cao, Uy Tín Tại TPHCM
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang có nhu cầu thanh lý tủ đông, tủ mát, bàn mát hay các thiết bị điện lạnh khác do ngừng kinh doanh, thay đổi mô hình hay nâng cấp thiết bị mới? Bạn lo lắng về giá cả, thủ tục phức tạp và chi phí vận chuyển?
                </p>
                <p>
                  Hãy đến với <strong className="text-[#880d11]">Cửa hàng đồ cũ Vui Hùng</strong> – đơn vị chuyên <strong className="text-[#111827]">thu mua tủ đông, tủ mát</strong> với mức giá cao nhất thị trường tại TPHCM và các tỉnh lân cận.
                </p>
                <p className="italic font-medium border-l-4 border-gray-200 pl-4">
                  Với đội ngũ nhân viên chuyên nghiệp, giàu kinh nghiệm và dịch vụ trọn gói từ tháo dỡ đến vận chuyển, chúng tôi cam kết mang đến sự hài lòng tuyệt đối cho khách hàng.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan --- */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-dong-tu-mat-1.jpg"
                  alt="Dịch vụ thu mua tủ đông tủ mát giá cao Đồ Cũ Vui Hùng"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=2000&auto=format&fit=crop"; }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm text-center">
                  Vui Hùng chuyên thu mua tủ đông, tủ mát, thiết bị lạnh công nghiệp giá cao
                </div>
              </div>

              {/* SECTION: Các Loại Tủ Đông Tủ Mát */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Các Loại Tủ Đông – Tủ Mát Được Thu Mua Giá Cao Hiện Nay
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cửa hàng đồ cũ Vui Hùng chuyên thu mua đa dạng các loại tủ đông, tủ mát, bàn mát với nhiều kích thước, thương hiệu và tình trạng khác nhau:
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#880d11] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p><strong className="text-[#111827]">Tủ đông các loại:</strong> Tủ đông nằm, tủ đông đứng, tủ đông mini, tủ đông công nghiệp, tủ đông 2 cánh, 3 cánh, 4 cánh.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#880d11] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p><strong className="text-[#111827]">Tủ mát các loại:</strong> Tủ mát đứng, tủ mát nằm, tủ mát 2 cánh, 4 cánh, tủ mát mini, tủ mát công nghiệp.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#880d11] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p><strong className="text-[#111827]">Bàn mát:</strong> Bàn mát để bàn, bàn mát công nghiệp, bàn mát 2 cánh, 4 cánh.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#880d11] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p><strong className="text-[#111827]">Tủ trưng bày:</strong> Tủ trưng bày đồ uống, tủ trưng bày kem, tủ trưng bày thực phẩm.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#880d11] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p><strong className="text-[#111827]">Thiết bị điện lạnh khác:</strong> Máy làm đá, tủ đá, tủ bảo quản thực phẩm.</p>
                    </li>
                  </ul>
                </div>
                <p className="text-[#880d11] font-medium italic mt-6">
                  * Chúng tôi thu mua từ số lượng nhỏ cho đến số lượng lớn, đáp ứng mọi nhu cầu thanh lý của khách hàng.
                </p>
              </section>

              {/* --- ẢNH 2: Phân loại --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-dong-tu-mat-2.jpg"
                  alt="Thu mua tủ mát trưng bày, tủ đông công nghiệp cũ"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Quy Trình */}
              <section className="mb-12 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#880d11 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Quy Trình Thu Mua Nhanh Gọn, Chuyên Nghiệp
                </h3>
                <p className="text-gray-700 leading-relaxed mb-10 relative z-10">
                  Quy trình thu mua tại Cửa hàng đồ cũ Vui Hùng được thiết kế đơn giản, minh bạch và nhanh chóng để tiết kiệm tối đa thời gian cho khách hàng:
                </p>

                <div className="space-y-6 relative z-10">
                  {[
                    { step: "1", title: "Liên hệ báo giá", desc: `Gọi đến hotline ${hotline} hoặc gửi thông tin, hình ảnh, kích thước sản phẩm qua Zalo để nhận báo giá trực tiếp nhanh nhất.` },
                    { step: "2", title: "Khảo sát và thỏa thuận", desc: "Cử nhân viên đến tận nơi trong 15-20 phút. Đội ngũ giàu kinh nghiệm nắm bắt rõ giá thị trường, đảm bảo thỏa thuận suôn sẻ." },
                    { step: "3", title: "Tháo dỡ và vận chuyển", desc: "Chúng tôi chịu trách nhiệm từ A đến Z (tháo dỡ, bốc vác, vận chuyển). Quý khách không tốn bất kỳ chi phí phát sinh nào." },
                    { step: "4", title: "Thanh toán nhanh chóng", desc: "Thanh toán tiền mặt hoặc chuyển khoản 100% giá trị thỏa thuận ngay sau khi thu mua, không giữ lại phí." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-[#880d11]/30 transition-all">
                      <div className="w-12 h-12 bg-[#880d11]/10 text-[#880d11] rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 group-hover:bg-[#880d11] group-hover:text-white transition-all duration-300">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-lg uppercase group-hover:text-[#880d11] transition-colors">{item.title}</h4>
                        <p className="text-gray-600 text-base leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 3: Vận chuyển --- */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                <Image
                  src="/thu-mua-tu-dong-tu-mat-3.jpg"
                  alt="Nhân viên Vui Hùng vận chuyển tủ đông cũ chuyên nghiệp"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1600100236111-2d7c0f1352e8?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Lý Do Chọn Vui Hùng */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Lý Do Nên Chọn Dịch Vụ Tại Vui Hùng
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Giá thu mua cao nhất", desc: "Cam kết báo giá cạnh tranh, không ép giá, đảm bảo quyền lợi tối đa cho khách hàng." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: "Thu mua tận nơi 15-20p", desc: "Có mặt chỉ sau 15 đến 20 phút khi nhận cuộc gọi, phục vụ tận nơi bất kể xa gần." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Thời gian linh hoạt 24/7", desc: "Hoạt động tất cả các ngày trong tuần, kể cả ngày lễ, sẵn sàng phục vụ khi bạn cần." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h1m10 0h-1M5 16H4m10 0h-1m1 0h2l4-4v-4h-4v8z" /></svg>, title: "Miễn phí tháo dỡ, vận chuyển", desc: "Đội ngũ chuyên nghiệp đảm nhận tháo dỡ, bốc vác, vận chuyển không phát sinh phí." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Thanh toán nhanh chóng", desc: "Nhận tiền mặt hoặc chuyển khoản ngay sau khi hoàn tất thủ tục." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, title: "Thu mua mọi số lượng", desc: "Nhận thanh lý từ 1 đến nhiều sản phẩm, từ số lượng nhỏ cho đến số lượng lớn." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#880d11]/30 hover:bg-white transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-[#880d11]/10 flex items-center justify-center flex-shrink-0 text-[#880d11]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-base">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Cam kết --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-dong-tu-mat-4.jpg"
                  alt="Vui Hùng cam kết thu mua điện lạnh công nghiệp giá cao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Cam Kết */}
              <section className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Cam Kết Của Vui Hùng
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cửa hàng đồ cũ Vui Hùng đặt uy tín làm kim chỉ nam và cam kết mang đến dịch vụ thu mua tủ đông, tủ mát tốt nhất với những điều khoản rõ ràng:
                </p>

                <div className="space-y-4">
                  {[
                    "Cam kết giá thu mua cao hơn mặt bằng chung thị trường.",
                    "Cam kết không phát sinh bất kỳ chi phí nào trong quá trình tháo dỡ và vận chuyển.",
                    "Cam kết thanh toán 100% giá trị sau khi hoàn tất thu mua.",
                    "Cam kết phục vụ tận nơi tại tất cả các quận huyện trong TPHCM và các tỉnh lân cận.",
                    "Cam kết hoạt động 24/7, sẵn sàng hỗ trợ mọi lúc khi khách hàng có nhu cầu."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl border border-gray-100 hover:border-[#880d11]/20 hover:shadow-sm transition-all group">
                      <div className="w-8 h-8 rounded-full bg-[#880d11]/10 flex items-center justify-center flex-shrink-0 text-[#880d11] group-hover:bg-[#880d11] group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 bg-[#111827] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#880d11 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Liên Hệ Ngay Để Được Báo Giá Cao Nhất</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Nếu bạn đang có nhu cầu thanh lý tủ đông, tủ mát, bàn mát hay bất kỳ thiết bị điện lạnh nào, đừng ngần ngại kết nối với chúng tôi.</p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#880d11] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-[#a30f14] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1">
                      <span className="animate-pulse">📞</span> {hotline}
                    </a>
                    <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1 border border-transparent">
                      Chat Zalo
                    </a>
                  </div>
                  <p className="text-gray-400 mt-8 text-sm uppercase tracking-widest font-semibold"><span className="text-[#880d11]">Khu vực:</span> TPHCM, Đồng Nai, Bình Dương và các tỉnh lân cận</p>
                </div>
              </div>

            </article>

            {/* --- CỘT PHẢI: SIDEBAR --- */}
            <aside className="lg:col-span-1 w-full min-w-0 h-fit sticky top-[100px]">
              <Sidebar />
            </aside>

          </div>
        </section>

      </main>

    </div>
  );
}