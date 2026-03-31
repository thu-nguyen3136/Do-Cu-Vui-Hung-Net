import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaTuMatPage() {
<<<<<<< HEAD
  const hotline = "0909.549.237";
=======
  const hotline = "0979.095.076";
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
<<<<<<< HEAD
        <title>Thu Mua Tủ Mát Cũ Giá Cao TPHCM | Dịch Vụ Uy Tín Huy Hoàng</title>
        <meta name="description" content="Đồ Cũ Huy Hoàng chuyên thu mua tủ mát cũ giá cao: tủ mát gia đình, tủ mát công nghiệp, tủ trưng bày Sanaky, Panasonic... Khảo sát nhanh, vận chuyển miễn phí." />
        <meta name="keywords" content="thu mua tủ mát cũ, thanh lý tủ mát, thu mua tủ mát sanaky, thu mua tủ mát công nghiệp, đồ cũ Huy Hoàng, thu mua tủ mát tphcm" />
        <link rel="canonical" href="https://thumuadocugiacao.net/thu-mua-tu-mat-cu" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Tủ Mát Cũ Giá Cao Tận Nơi - Huy Hoàng" />
        <meta property="og:description" content="Bạn cần thanh lý tủ mát cũ? Huy Hoàng thu mua mọi loại tủ mát gia đình, công nghiệp giá cao nhất thị trường. Thanh toán 100% tại chỗ, miễn phí bốc xếp." />
=======
        <title>Thu Mua Tủ Mát Cũ Giá Cao TPHCM | Dịch Vụ Uy Tín Vui Hùng</title>
        <meta name="description" content="Đồ Cũ Vui Hùng chuyên thu mua tủ mát cũ giá cao: tủ mát gia đình, tủ mát công nghiệp, tủ trưng bày Sanaky, Panasonic... Khảo sát nhanh, vận chuyển miễn phí." />
        <meta name="keywords" content="thu mua tủ mát cũ, thanh lý tủ mát, thu mua tủ mát sanaky, thu mua tủ mát công nghiệp, đồ cũ vui hùng, thu mua tủ mát tphcm" />
        <link rel="canonical" href="https://thumuadocugiacao.net/thu-mua-tu-mat-cu" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Tủ Mát Cũ Giá Cao Tận Nơi - Vui Hùng" />
        <meta property="og:description" content="Bạn cần thanh lý tủ mát cũ? Vui Hùng thu mua mọi loại tủ mát gia đình, công nghiệp giá cao nhất thị trường. Thanh toán 100% tại chỗ, miễn phí bốc xếp." />
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow pb-20">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
<<<<<<< HEAD
            <Link href="/" className="hover:text-[#dc3545] transition-colors">Trang chủ</Link>
=======
            <Link href="/" className="hover:text-[#880d11] transition-colors">Trang chủ</Link>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
            <span>/</span>
            <span className="text-gray-900 font-medium">Thu Mua Tủ Mát</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout 4 Cột An Toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thu Mua Tủ Mát
              </h1>

<<<<<<< HEAD
              <h2 className="text-xl md:text-2xl font-bold text-[#dc3545] mb-8 leading-snug border-l-4 border-[#dc3545] pl-4">
                Thu Mua Tủ Mát Cũ Giá Cao - Dịch Vụ Uy Tín Của Huy Hoàng
=======
              <h2 className="text-xl md:text-2xl font-bold text-[#880d11] mb-8 leading-snug border-l-4 border-[#880d11] pl-4">
                Thu Mua Tủ Mát Cũ Giá Cao - Dịch Vụ Uy Tín Của Vui Hùng
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang có nhu cầu <strong className="text-[#111827]">thanh lý tủ mát cũ</strong>, không còn sử dụng? Bạn lo lắng về việc tìm địa chỉ thu mua tủ mát uy tín, giá cao và xử lý nhanh gọn?
                </p>
                <p>
<<<<<<< HEAD
                  Hãy đến ngay với dịch vụ <strong className="text-[#dc3545]">Thu Mua Tủ Mát Huy Hoàng</strong> – đơn vị hàng đầu chuyên thu mua các dòng tủ mát đã qua sử dụng với quy trình chuyên nghiệp và mức giá cạnh tranh nhất thị trường.
=======
                  Hãy đến ngay với dịch vụ <strong className="text-[#880d11]">Thu Mua Tủ Mát Vui Hùng</strong> – đơn vị hàng đầu chuyên thu mua các dòng tủ mát đã qua sử dụng với quy trình chuyên nghiệp và mức giá cạnh tranh nhất thị trường.
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan thu mua tủ mát --- */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-mat.jpg"
<<<<<<< HEAD
                  alt="Dịch vụ thu mua tủ mát cũ trọn gói giá cao Đồ Cũ Huy Hoàng"
=======
                  alt="Dịch vụ thu mua tủ mát cũ trọn gói giá cao Đồ Cũ Vui Hùng"
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 text-sm md:text-base text-center font-medium">
<<<<<<< HEAD
                  Huy Hoàng chuyên thu mua tủ mát gia đình, tủ trưng bày, tủ mát công nghiệp giá cao
                </div>
              </div>

              {/* SECTION: Vì sao chọn Huy Hoàng */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#dc3545] rounded-full"></span>
                  Vì Sao Nên Chọn Dịch Vụ Thu Mua Tủ Mát Huy Hoàng?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  <strong className="text-[#dc3545]">Huy Hoàng</strong> tự hào là địa chỉ được hàng ngàn khách hàng cá nhân, nhà hàng, khách sạn, quán ăn, đại lý kinh doanh thực phẩm tin tưởng khi có nhu cầu thanh lý tủ mát. Chúng tôi cam kết mang đến những giá trị vượt trội:
=======
                  Vui Hùng chuyên thu mua tủ mát gia đình, tủ trưng bày, tủ mát công nghiệp giá cao
                </div>
              </div>

              {/* SECTION: Vì sao chọn Vui Hùng */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Vì Sao Nên Chọn Dịch Vụ Thu Mua Tủ Mát Vui Hùng?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  <strong className="text-[#880d11]">Vui Hùng</strong> tự hào là địa chỉ được hàng ngàn khách hàng cá nhân, nhà hàng, khách sạn, quán ăn, đại lý kinh doanh thực phẩm tin tưởng khi có nhu cầu thanh lý tủ mát. Chúng tôi cam kết mang đến những giá trị vượt trội:
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                </p>

                <div className="flex flex-col gap-6">
                  {[
                    { title: "Giá thu mua cao nhất", desc: "Báo giá trực tiếp, không qua trung gian, phụ thuộc vào tình trạng, thương hiệu (Sanyo, Sanaky, Panasonic, Aqua...) và dung tích tủ." },
                    { title: "Thu mua mọi loại tủ mát", desc: "Không giới hạn kích thước, thương hiệu, từ tủ mát gia đình dung tích nhỏ đến tủ mát công nghiệp lớn dùng trong nhà hàng, siêu thị." },
                    { title: "Thanh toán nhanh chóng", desc: "Nhận tiền ngay sau khi thỏa thuận và kiểm tra sản phẩm. Hình thức thanh toán linh hoạt: tiền mặt hoặc chuyển khoản." },
<<<<<<< HEAD
                    { title: "Hỗ trợ vận chuyển miễn phí", desc: "Đội ngũ nhân viên của Huy Hoàng sẽ đến tận nơi để kiểm tra, bốc xếp và vận chuyển tủ mát hoàn toàn miễn phí, giúp bạn tiết kiệm công sức." },
                    { title: "Quy trình nhanh gọn, uy tín", desc: "Chỉ sau một cuộc gọi, nhân viên sẽ khảo sát, báo giá và xử lý thu mua dứt điểm ngay trong ngày." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 w-10 h-10 rounded-full bg-[#dc3545] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:bg-[#e35d6a] transition-all duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-[17px] uppercase tracking-wide group-hover:text-[#dc3545] transition-colors mb-1">{item.title}</h4>
=======
                    { title: "Hỗ trợ vận chuyển miễn phí", desc: "Đội ngũ nhân viên của Vui Hùng sẽ đến tận nơi để kiểm tra, bốc xếp và vận chuyển tủ mát hoàn toàn miễn phí, giúp bạn tiết kiệm công sức." },
                    { title: "Quy trình nhanh gọn, uy tín", desc: "Chỉ sau một cuộc gọi, nhân viên sẽ khảo sát, báo giá và xử lý thu mua dứt điểm ngay trong ngày." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 w-10 h-10 rounded-full bg-[#880d11] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:bg-[#a30f14] transition-all duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-[17px] uppercase tracking-wide group-hover:text-[#880d11] transition-colors mb-1">{item.title}</h4>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                        <p className="text-[15px] text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 2: Kho tủ mát thu mua --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-mat-uy-tin.jpg"
                  alt="Thu mua các loại tủ mát siêu thị, tủ mát nhà hàng"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Các Dòng Tủ Mát Được Thu Mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
<<<<<<< HEAD
                  <span className="w-2 h-8 bg-[#dc3545] rounded-full"></span>
                  Các Dòng Tủ Mát Được Thu Mua Tại Huy Hoàng
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dịch vụ <strong className="text-[#111827]">thu mua tủ mát Huy Hoàng</strong> nhận mua tất cả các dòng tủ, bao gồm:
=======
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Các Dòng Tủ Mát Được Thu Mua Tại Vui Hùng
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dịch vụ <strong className="text-[#111827]">thu mua tủ mát Vui Hùng</strong> nhận mua tất cả các dòng tủ, bao gồm:
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { title: "Tủ mát gia đình", desc: "Các loại tủ 2 cánh, 4 cánh, tủ mát mini bảo quản thực phẩm gia đình." },
                    { title: "Tủ mát công nghiệp", desc: "Tủ mát 3 cánh, 4 cánh, 6 cánh, tủ mát lạnh công suất lớn dùng trong nhà hàng, bếp ăn tập thể." },
                    { title: "Tủ mát trưng bày", desc: "Tủ mát mini, tủ mát bàn, tủ trưng bày kính cong, tủ kính phẳng dành cho quán cafe, siêu thị." },
                    { title: "Đa dạng thương hiệu", desc: "Thu mua tủ mát Sanaky, Sanyo, Panasonic, Toshiba, Hitachi, Mitsubishi, Aqua..." }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl group hover:bg-[#111827] transition-colors duration-300 border border-gray-100 flex flex-col h-full">
                      <h4 className="text-[#111827] text-[16px] font-black uppercase mb-3 group-hover:text-white transition-colors flex items-center gap-2">
<<<<<<< HEAD
                        <span className="w-2 h-2 rounded-full bg-[#dc3545] group-hover:bg-[#ff4d4d]"></span>
=======
                        <span className="w-2 h-2 rounded-full bg-[#880d11] group-hover:bg-[#ff3d44]"></span>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

<<<<<<< HEAD
                <div className="mt-8 bg-[#dc3545]/5 border border-[#dc3545]/20 p-5 rounded-2xl flex items-center gap-4">
                  <span className="text-2xl">💡</span>
                  <p className="text-[#dc3545] leading-relaxed font-bold italic">
                    Dù tủ còn mới, đã qua sử dụng lâu năm hay bị lỗi vặt, hư hỏng, Huy Hoàng đều có thể thu mua với mức giá phù hợp.
=======
                <div className="mt-8 bg-[#880d11]/5 border border-[#880d11]/20 p-5 rounded-2xl flex items-center gap-4">
                  <span className="text-2xl">💡</span>
                  <p className="text-[#880d11] leading-relaxed font-bold italic">
                    Dù tủ còn mới, đã qua sử dụng lâu năm hay bị lỗi vặt, hư hỏng, Vui Hùng đều có thể thu mua với mức giá phù hợp.
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                  </p>
                </div>
              </section>

              {/* --- ẢNH 3: Quy trình khảo sát tận nơi --- */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                <Image
                  src="/thu-mua-tu-mat-gia-cao.jpg"
<<<<<<< HEAD
                  alt="Nhân viên Huy Hoàng khảo sát và định giá tủ mát cũ tận nơi"
=======
                  alt="Nhân viên Vui Hùng khảo sát và định giá tủ mát cũ tận nơi"
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Quy Trình Thu Mua Chuyên Nghiệp */}
              <section className="mb-12 bg-white border-2 border-gray-100 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-sm">
<<<<<<< HEAD
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#dc3545 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#dc3545] rounded-full"></span>
                  Quy Trình Thu Mua Chuyên Nghiệp
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  Để mang đến trải nghiệm tốt nhất cho khách hàng, Huy Hoàng xây dựng quy trình làm việc khép kín, minh bạch:
=======
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#880d11 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Quy Trình Thu Mua Chuyên Nghiệp
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  Để mang đến trải nghiệm tốt nhất cho khách hàng, Vui Hùng xây dựng quy trình làm việc khép kín, minh bạch:
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                </p>

                <div className="flex flex-col gap-6 relative z-10">
                  {[
                    { step: "1", title: "Tiếp nhận thông tin", desc: "Khách hàng gọi điện hoặc để lại thông tin qua website, Zalo." },
                    { step: "2", title: "Khảo sát & Báo giá", desc: "Nhân viên đến tận nơi kiểm tra tình trạng tủ (thương hiệu, dung tích, năm sử dụng, hoạt động thực tế) và báo giá thu mua." },
<<<<<<< HEAD
                    { step: "3", title: "Thỏa thuận & Thanh toán", desc: "Hai bên thống nhất giá cả. Huy Hoàng tiến hành thanh toán đầy đủ 100% ngay sau đó." },
                    { step: "4", title: "Vận chuyển miễn phí", desc: "Đội ngũ nhân viên hỗ trợ tháo dỡ, bốc xếp tủ lên xe, vệ sinh sạch sẽ khu vực cho khách hàng." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group items-start md:items-center">
                      <div className="mt-1 md:mt-0 w-12 h-12 bg-[#dc3545] text-white rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(220,53,69,0.4)] transition-all duration-300">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-[17px] uppercase group-hover:text-[#dc3545] transition-colors">{item.title}</h4>
=======
                    { step: "3", title: "Thỏa thuận & Thanh toán", desc: "Hai bên thống nhất giá cả. Vui Hùng tiến hành thanh toán đầy đủ 100% ngay sau đó." },
                    { step: "4", title: "Vận chuyển miễn phí", desc: "Đội ngũ nhân viên hỗ trợ tháo dỡ, bốc xếp tủ lên xe, vệ sinh sạch sẽ khu vực cho khách hàng." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group items-start md:items-center">
                      <div className="mt-1 md:mt-0 w-12 h-12 bg-[#880d11] text-white rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(136,13,17,0.4)] transition-all duration-300">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-[17px] uppercase group-hover:text-[#880d11] transition-colors">{item.title}</h4>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                        <p className="text-[15px] text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Vận chuyển --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-tu-mat-tphcm.jpg"
<<<<<<< HEAD
                  alt="Huy Hoàng hỗ trợ bốc xếp vận chuyển tủ mát cũ hoàn toàn miễn phí"
=======
                  alt="Vui Hùng hỗ trợ bốc xếp vận chuyển tủ mát cũ hoàn toàn miễn phí"
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 bg-[#111827] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
<<<<<<< HEAD
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#dc3545 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Liên Hệ Để Được Báo Giá Tốt Nhất</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Nếu bạn đang cần thanh lý tủ mát cũ, đừng ngần ngại liên hệ với Huy Hoàng. Chúng tôi cam kết mang đến sự hài lòng tuyệt đối!</p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#dc3545] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[16px] hover:bg-[#e35d6a] transition-all shadow-[0_10px_20px_rgba(220,53,69,0.3)] hover:-translate-y-1">
=======
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#880d11 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Liên Hệ Để Được Báo Giá Tốt Nhất</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Nếu bạn đang cần thanh lý tủ mát cũ, đừng ngần ngại liên hệ với Vui Hùng. Chúng tôi cam kết mang đến sự hài lòng tuyệt đối!</p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#880d11] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[16px] hover:bg-[#a30f14] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1">
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                      <span className="animate-pulse">📞</span> Gọi Hotline: {hotline}
                    </a>
                    <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[16px] hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1 border border-transparent">
                      Chat Zalo Khảo Sát
                    </a>
                  </div>
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