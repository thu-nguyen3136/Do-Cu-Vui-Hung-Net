import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaBanGheGoPage() {
  const hotline = "0979.095.076";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thu Mua Bàn Ghế Gỗ Cũ Giá Cao TPHCM | Đồ Cũ Vui Hùng</title>
        <meta name="description" content="Đồ Cũ Vui Hùng chuyên thu mua bàn ghế gỗ cũ, salon gỗ, bàn ghế nhà hàng, quán cafe, văn phòng giá cao nhất thị trường TPHCM. Báo giá Zalo siêu tốc 5 phút." />
        <meta name="keywords" content="thu mua bàn ghế gỗ, thu mua salon gỗ, thu mua bàn ghế cũ, thanh lý bàn ghế gỗ, đồ cũ vui hùng, thu mua bàn ghế cafe" />
        <link rel="canonical" href="https://thumuadocugiacao.net/thu-mua-ban-ghe-go-cu" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Bàn Ghế Gỗ Cũ Giá Cao Tận Nơi Tại TPHCM" />
        <meta property="og:description" content="Cần thanh lý bàn ghế gỗ cũ, salon phòng khách, bàn ghế quán cafe? Vui Hùng thu mua mọi số lượng, giá cao nhất, miễn phí tháo dỡ vận chuyển." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#880d11] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thu Mua Bàn Ghế Gỗ</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout an toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thu Mua Bàn Ghế Gỗ
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#880d11] mb-8 leading-snug border-l-4 border-[#880d11] pl-4">
                Dịch Vụ Thu Mua Bàn Ghế Giá Cao, Uy Tín Tại TPHCM
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn cần thanh lý bàn ghế cũ do ngừng kinh doanh, đổi mới nội thất hay sang nhượng mặt bằng? <strong className="text-[#880d11]">Đồ Cũ Vui Hùng</strong> chuyên thu mua bàn ghế các loại với giá cao nhất thị trường tại TPHCM, Đồng Nai, Bình Dương và các tỉnh lân cận.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan --- */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thu-mua-ban-ghe-go.jpg"
                  alt="Dịch vụ thu mua bàn ghế gỗ cũ giá cao Vui Hùng"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2000&auto=format&fit=crop"; }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm text-center">
                  Vui Hùng chuyên thu mua bàn ghế gỗ gia đình, nhà hàng, quán cafe giá cao
                </div>
              </div>

              {/* SECTION: Lý Do Nên Chọn */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Lý Do Nên Chọn Dịch Vụ Tại Đồ Cũ Vui Hùng
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Giá thu mua cao nhất thị trường", desc: "Chúng tôi cam kết báo giá cạnh tranh, không ép giá, đảm bảo quyền lợi tối đa cho khách hàng." },
                    { title: "Thu mua tận nơi nhanh chóng", desc: "Có mặt chỉ sau 15 đến 20 phút khi nhận được cuộc gọi, phục vụ tận nơi bất kể địa điểm xa trung tâm." },
                    { title: "Báo giá qua Zalo tiện lợi", desc: "Chỉ cần chụp ảnh sản phẩm gửi qua Zalo, chúng tôi sẽ báo giá tham khảo ngay lập tức." },
                    { title: "Thời gian linh hoạt 24/7", desc: "Hoạt động tất cả các ngày trong tuần, kể cả ngày lễ, sẵn sàng phục vụ khi bạn có nhu cầu." },
                    { title: "Tự tháo dỡ, bốc vác, vận chuyển", desc: "Đội ngũ nhân viên chuyên nghiệp đảm nhận toàn bộ công việc từ tháo dỡ đến vận chuyển, không phát sinh thêm phí." },
                    { title: "Thu mua mọi số lượng", desc: "Nhận thanh lý từ 1 đến nhiều sản phẩm, từ số lượng nhỏ cho đến số lượng lớn, thanh toán nhanh chóng 100%." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#880d11]/30 hover:bg-white transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-full bg-[#880d11]/10 flex items-center justify-center flex-shrink-0 text-[#880d11] group-hover:bg-[#880d11] group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-base mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 2: Bàn ghế gia đình / Salon --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thu-mua-ban-ghe-gia-cao.png"
                  alt="Thu mua salon gỗ, bàn ghế phòng khách cũ"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Phân Loại Bàn Ghế */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Các Loại Bàn Ghế Gỗ Chuyên Được Thu Mua
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Bàn ghế gỗ luôn là mặt hàng được các đơn vị thu mua săn đón bởi giá trị bền vững và khả năng tái sử dụng cao. Dưới đây là phân loại chi tiết các dòng bàn ghế gỗ đang được thu mua phổ biến nhất hiện nay:
                </p>

                <div className="space-y-8">

                  {/* Khối 1: Gia Đình */}
                  <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 md:p-8 hover:border-[#880d11]/30 transition-colors shadow-sm">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                      <div className="w-14 h-14 bg-[#111827] text-white rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      </div>
                      <h4 className="text-2xl font-black text-[#111827] uppercase">Thu Mua Bàn Ghế Gia Đình</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex gap-3 items-start"><span className="text-[#880d11] mt-1 flex-shrink-0">🔹</span> <p><strong className="text-[#111827]">Bàn ghế phòng khách (salon gỗ):</strong> Đây là dòng sản phẩm được thu mua nhiều nhất, bao gồm các bộ bàn ghế gỗ tự nhiên, gỗ công nghiệp với nhiều kiểu dáng từ truyền thống đến hiện đại.</p></li>
                      <li className="flex gap-3 items-start"><span className="text-[#880d11] mt-1 flex-shrink-0">🔹</span> <p><strong className="text-[#111827]">Bàn ghế ăn gia đình:</strong> Bộ bàn ăn gỗ 4 ghế, 6 ghế hoặc nhiều hơn, thường được làm từ gỗ tự nhiên hoặc gỗ công nghiệp cao cấp.</p></li>
                      <li className="flex gap-3 items-start"><span className="text-[#880d11] mt-1 flex-shrink-0">🔹</span> <p><strong className="text-[#111827]">Bộ bàn ghế nhỏ:</strong> Bàn trà, bàn uống nước, ghế thư giãn trong gia đình.</p></li>
                    </ul>
                  </div>

                  {/* Khối 2: Kinh Doanh */}
                  <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 md:p-8 hover:border-[#880d11]/30 transition-colors shadow-sm">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                      <div className="w-14 h-14 bg-[#880d11] text-white rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <h4 className="text-2xl font-black text-[#111827] uppercase">Thu Mua Bàn Ghế Kinh Doanh</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex gap-3 items-start"><span className="text-[#880d11] mt-1 flex-shrink-0">🔹</span> <p><strong className="text-[#111827]">Bàn ghế quán cafe, trà sữa:</strong> Gồm bàn ghế gỗ công nghiệp, ghế giả mây, bàn mặt kính khung gỗ... thu mua với số lượng lớn.</p></li>
                      <li className="flex gap-3 items-start"><span className="text-[#880d11] mt-1 flex-shrink-0">🔹</span> <p><strong className="text-[#111827]">Bàn ghế nhà hàng, quán ăn, quán nhậu:</strong> Thường là bàn ghế gỗ chắc chắn, chịu lực tốt, có độ bền cao do tần suất sử dụng nhiều.</p></li>
                      <li className="flex gap-3 items-start"><span className="text-[#880d11] mt-1 flex-shrink-0">🔹</span> <p><strong className="text-[#111827]">Bàn ghế khách sạn, resort:</strong> Các bộ bàn ghế gỗ cao cấp, kiểu dáng sang trọng.</p></li>
                    </ul>
                  </div>

                  {/* Khối 3: Văn Phòng */}
                  <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 md:p-8 hover:border-[#880d11]/30 transition-colors shadow-sm">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                      <div className="w-14 h-14 bg-[#111827] text-white rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <h4 className="text-2xl font-black text-[#111827] uppercase">Thu Mua Bàn Ghế Văn Phòng</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex gap-3 items-start"><span className="text-[#880d11] mt-1 flex-shrink-0">🔹</span> <p><strong className="text-[#111827]">Bàn ghế giám đốc:</strong> Bàn làm việc và ghế xoay bọc da/nỉ, khung gỗ tự nhiên.</p></li>
                      <li className="flex gap-3 items-start"><span className="text-[#880d11] mt-1 flex-shrink-0">🔹</span> <p><strong className="text-[#111827]">Bàn ghế nhân viên:</strong> Bàn làm việc gỗ công nghiệp, ghế xoay văn phòng.</p></li>
                      <li className="flex gap-3 items-start"><span className="text-[#880d11] mt-1 flex-shrink-0">🔹</span> <p><strong className="text-[#111827]">Bàn ghế phòng họp:</strong> Bàn họp dài, ghế hội thảo khung gỗ.</p></li>
                    </ul>
                  </div>

                </div>
              </section>

              {/* --- ẢNH 3: Bàn ghế cafe / nhà hàng --- */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thu-mua-ban-ghe-tan-noi.jpg"
                  alt="Thu mua số lượng lớn bàn ghế quán cafe, trà sữa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Quy Trình */}
              <section className="mb-12 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#880d11 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Quy Trình Thu Mua Nhanh Gọn
                </h3>
                <p className="text-gray-700 leading-relaxed mb-10 relative z-10">
                  Quy trình thu mua tại Đồ Cũ Vui Hùng được thiết kế đơn giản, minh bạch và nhanh chóng để tiết kiệm tối đa thời gian cho khách hàng:
                </p>

                <div className="space-y-6 relative z-10">
                  {[
                    { step: "1", title: "Liên hệ báo giá", desc: `Quý khách gọi điện thoại đến hotline ${hotline} hoặc gửi thông tin, hình ảnh qua Zalo để được báo giá trực tiếp nhanh nhất.` },
                    { step: "2", title: "Khảo sát và thỏa thuận", desc: "Sau khi thống nhất, nhân viên đến tận nơi trong 15-20 phút. Chúng tôi nắm bắt rõ giá cả thị trường, đảm bảo quy trình suôn sẻ." },
                    { step: "3", title: "Tháo dỡ và vận chuyển", desc: "Chúng tôi chịu trách nhiệm từ A đến Z, bao gồm tháo dỡ, bốc vác và vận chuyển toàn bộ sản phẩm. Không phát sinh chi phí." },
                    { step: "4", title: "Thanh toán nhanh chóng", desc: "Thanh toán 100% giá trị thỏa thuận bằng tiền mặt hoặc chuyển khoản ngay sau khi kết thúc quá trình thu mua." }
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

              {/* --- ẢNH 4: Vận chuyển, tháo dỡ --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thu-mua-ban-ghe-go-uy-tin.jpg"
                  alt="Vui Hùng hỗ trợ vận chuyển và tháo dỡ bàn ghế gỗ cũ miễn phí"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 bg-[#111827] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#880d11 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Liên Hệ Để Được Báo Giá Cao Nhất</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Nếu bạn đang có nhu cầu thanh lý bàn ghế hay bất kỳ loại nội thất nào, đừng ngần ngại liên hệ với chúng tôi. Đồ Cũ Vui Hùng luôn sẵn sàng phục vụ!</p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#880d11] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-[#a30f14] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1">
                      <span className="animate-pulse">📞</span> {hotline}
                    </a>
                    <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1 border border-transparent">
                      Chat Zalo Gửi Hình
                    </a>
                  </div>
                  <p className="text-gray-400 mt-8 text-sm uppercase tracking-widest font-semibold"><span className="text-[#880d11]">Khu vực hoạt động:</span> TPHCM, Đồng Nai, Bình Dương và lân cận</p>
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