import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
<<<<<<< HEAD
import React from 'react';

export default function CongTyThuMuaDoQuanCafe() {
  return (
    <>
      <Head>
        <title>Công Ty Thu Mua Đồ Cũ Quán Cafe Giá Cao - 0909 549 237</title>
        <meta
          name="description"
          content="Công ty thu mua đồ cũ quán cafe, nhà hàng, khách sạn, đồ dùng gia đình thanh lý giá cao tận nơi tại TPHCM. Hotline: 0909 549 237."
        />
      </Head>

      {/* Dùng class tự viết trong global.css */}
      <section style={{ padding: '40px 0' }}>
        <div className="custom-container">
          <div className="custom-row">

            {/* CỘT TRÁI (Nội dung chính) */}
            <div className="custom-col-main">
              <div style={{ marginBottom: '25px' }}>
                <h1 style={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  borderBottom: '2px solid #dc3545',
                  display: 'inline-block',
                  paddingBottom: '10px',
                  fontSize: '1.6rem',
                  color: '#b00000'
                }}>
                  CÔNG TY THU MUA ĐỒ CŨ QUÁN CAFE THANH LÝ GIÁ CAO TẬN NƠI TẠI TPHCM
                </h1>
              </div>

              <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}>
                <p style={{ marginBottom: '15px' }}>
                  <strong>Đồ Cũ Huy Hoàng</strong> tự hào là công ty thu mua đồ cũ uy tín, nhận thanh lý số lượng lớn các loại đồ cũ trên toàn quốc. Chúng tôi chuyên thu mua tận nơi đa dạng các mặt hàng với mức định giá cao nhất thị trường. Mọi nhu cầu xin liên hệ nhanh qua <strong>Phone/Zalo: <span style={{ color: '#dc3545', fontWeight: 'bold' }}>0909 549 237</span></strong>.
                </p>

                <p style={{ marginBottom: '20px' }}>
                  Chúng tôi có nguồn vốn mạnh, nhận thu mua trọn gói các dự án với quy mô đa dạng: từ đồ dùng nhà hàng, khách sạn (50 triệu - 1 tỷ), đồ cũ gia đình, nội thất (5 triệu - 50 triệu), đồ điện lạnh (5 triệu - 50 triệu) cho đến hệ thống máy móc nhà xưởng (500 triệu - 5 tỷ đồng).
                </p>

                <h2 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '15px', color: '#0056b3', fontSize: '1.3rem' }}>
                  1. Các Hạng Mục Thu Mua Đồ Cũ Trọn Gói
                </h2>
                <p>Công ty nhận thu mua tận nơi tất cả các hạng mục sau với giá cao:</p>
                <ul style={{ marginBottom: '25px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '10px' }}><strong>Thu mua quán ăn, nhà hàng, khách sạn:</strong> Thu mua tất cả các loại bàn ghế, máy rửa bát đĩa, bếp công nghiệp, nội thất thiết bị nhà hàng, quán nhậu trọn gói.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Thu mua đồ cũ quán cafe, quán bar, trà sữa:</strong> Thanh lý thiết bị pha chế, máy pha cafe, bàn ghế quán nước các loại.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Thu mua thiết bị giải trí:</strong> Thu mua thiết bị vũ trường, quán karaoke, cơ sở massage cần thanh lý với các loại bàn ghế salon cao cấp...</li>
                  <li style={{ marginBottom: '10px' }}><strong>Thu mua xác nhà, nhà xưởng:</strong> Thu mua máy móc thiết bị xí nghiệp, công ty, văn phòng, kho xưởng trọn gói.</li>
                </ul>

                <div style={{ textAlign: 'center', margin: '30px 0' }}>
                  <img
                    alt="Thu mua đồ cũ gia đình, nội thất quán cafe"
                    src="/files/thu%20mua%20đồ%20cũ%20gia%20đình.jpg"
                    className="img-responsive"
                    style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  />
                </div>

                <h3 style={{ fontWeight: 'bold', marginTop: '25px', marginBottom: '10px', color: '#222', fontSize: '1.15rem' }}>Thu Mua Nội Thất Gỗ, Nội Thất Gia Đình Cũ</h3>
                <p style={{ marginBottom: '20px' }}>
                  Bao gồm các loại bàn ghế cũ gia đình (bàn ghế phòng khách, bàn ghế phòng ăn), các loại tủ gia đình cũ (tủ phòng khách, tủ quần áo phòng ngủ, tủ kệ bếp, tủ thờ, kệ để tivi...), các loại giường cũ (giường sắt, giường gỗ cũ...).
                </p>

                <h3 style={{ fontWeight: 'bold', marginTop: '25px', marginBottom: '10px', color: '#222', fontSize: '1.15rem' }}>Thu Mua Đồ Điện Tử - Điện Lạnh Cũ</h3>
                <p style={{ marginBottom: '20px' }}>
                  Bao gồm máy lạnh cũ, máy điều hòa cũ, tivi cũ, dàn âm thanh nghe nhạc karaoke, máy giặt cũ, tủ lạnh cũ, quạt điện các loại...
                </p>

                <div style={{ textAlign: 'center', margin: '30px 0' }}>
                  <img
                    alt="Dịch vụ thanh lý đồ cũ uy tín"
                    src="/files/z3712172521490_808b9d1f9d31ae2411d850f65717f9cb(4).jpg"
                    className="img-responsive"
                    style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  />
                </div>

                <h2 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '15px', color: '#0056b3', fontSize: '1.3rem' }}>2. Những Lợi Ích Khi Đến Với Đồ Cũ Huy Hoàng</h2>
                <ol style={{ marginBottom: '25px', paddingLeft: '20px', color: '#444', fontWeight: 'bold' }}>
                  <li style={{ marginBottom: '10px' }}>Luôn luôn giữ giá ổn định và cao nhất thị trường.</li>
                  <li style={{ marginBottom: '10px' }}>Quá trình thu mua nhanh chóng, chuyên nghiệp.</li>
                  <li style={{ marginBottom: '10px' }}>Dọn dẹp vệ sinh sạch sẽ gọn gàng sau khi thu mua xong.</li>
                  <li style={{ marginBottom: '10px' }}>Có mặt 24/7 khi khách hàng có nhu cầu.</li>
                  <li style={{ marginBottom: '10px' }}>Khu vực thu mua rộng khắp TPHCM và Đồng Nai.</li>
                  <li style={{ marginBottom: '10px' }}>Thanh toán một lần 100% sau khi thu mua kết thúc.</li>
                  <li style={{ marginBottom: '10px' }}>Nhận thu mua tất cả các loại đồ cũ để giúp khách hàng có thêm một khoản chi phí đầu tư mua đồ mới.</li>
                </ol>

                <div style={{ textAlign: 'center', margin: '30px 0' }}>
                  <img
                    alt="Công ty thu mua đồ cũ giá cao TPHCM"
                    src="/files/be1f6102917e55200c6f(1).jpg"
                    className="img-responsive"
                    style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  />
                </div>

                <h2 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '15px', color: '#0056b3', fontSize: '1.3rem' }}>3. Vì Sao Khách Hàng Luôn Tin Tưởng Chúng Tôi?</h2>
                <p style={{ marginBottom: '15px' }}>
                  Là thương hiệu được nhiều khách hàng tin tưởng và sử dụng bởi chất lượng và giá thành luôn dẫn đầu thị trường tại TPHCM. Chúng tôi luôn cố gắng đưa ra mức giá thu mua tốt nhất, dịch vụ hoàn hảo nhất nhằm đảm bảo quyền lợi cao nhất cho khách hàng:
                </p>
                <ul style={{ marginBottom: '30px', paddingLeft: 0, listStyleType: 'none' }}>
                  <li style={{ marginBottom: '10px' }}>✔️ <strong>Thẩm định giá chính xác:</strong> Kinh nghiệm thẩm định đúng giá trị tài sản, uy tín hàng đầu.</li>
                  <li style={{ marginBottom: '10px' }}>✔️ <strong>Giá trị thanh lý cao:</strong> Sản phẩm bán ra có hình thức mới từ 90% trở lên nhưng giá chỉ bằng ½ sản phẩm mới cùng loại trên thị trường.</li>
                  <li style={{ marginBottom: '10px' }}>✔️ <strong>Mẫu mã đa dạng:</strong> Sản phẩm thu mua và bán ra phong phú, đáp ứng mọi nhu cầu.</li>
                  <li style={{ marginBottom: '10px' }}>✔️ <strong>Mạng lưới rộng lớn:</strong> Khu vực thu mua bao phủ rộng khắp TPHCM và những tỉnh thành lân cận.</li>
                  <li style={{ marginBottom: '10px' }}>✔️ <strong>Chăm sóc tận tâm:</strong> Chính sách bảo hành – bảo trì đầy đủ (đối với hàng bán ra).</li>
                  <li style={{ marginBottom: '10px' }}>✔️ <strong>Nhanh gọn lẹ:</strong> Xử lý đơn hàng nhanh chóng, đội xe tải đến vận chuyển tháo dỡ và thu mua tận nhà.</li>
                </ul>

                {/* Khối Thông tin liên hệ nổi bật */}
                <div style={{
                  padding: '25px',
                  marginTop: '40px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  borderLeft: '5px solid #dc3545',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '15px', color: '#222' }}>THÔNG TIN LIÊN HỆ</h4>
                  <p style={{ marginBottom: '10px', fontSize: '1.1rem' }}><strong>CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ HUY HOÀNG</strong></p>
                  <p style={{ marginBottom: '8px' }}>📍 <strong>Địa Chỉ 1:</strong> 21/18B Nơ Trang Long, Phường 13, Quận Bình Thạnh, TP.HCM</p>
                  <p style={{ marginBottom: '8px' }}>📍 <strong>Địa Chỉ 2:</strong> 10 Bình Long, Phường Phú Thạnh, Quận Bình Tân, TP.HCM</p>
                  <p style={{ marginTop: '15px', marginBottom: '0', fontSize: '1.1rem' }}>
                    📞 <strong>Hotline / Zalo:</strong> <span style={{ color: '#dc3545', fontWeight: 'bold', fontSize: '1.4rem' }}>0909 549 237</span> (Huy Hoàng)
                  </p>
                </div>

              </div>
            </div>

            {/* CỘT PHẢI (Sidebar) */}
            <div className="custom-col-sidebar">
              <Sidebar />

              <div style={{ padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ color: '#666' }}>[Khu vực Sidebar của bạn]</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
=======

export default function ThanhLyQuanCafePage() {
  const hotline = "0979.095.076";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thanh Lý Quán Cafe Trọn Gói Giá Cao TPHCM | Đồ Cũ Vui Hùng</title>
        <meta name="description" content="Đồ Cũ Vui Hùng chuyên thu mua quán cafe trọn gói: máy pha cafe, máy xay, thiết bị làm lạnh, nội thất bàn ghế với giá cao nhất TPHCM. Khảo sát 30p, tháo dỡ miễn phí." />
        <meta name="keywords" content="thanh lý quán cafe, thu mua quán cafe, thu mua máy pha cafe, thanh lý bàn ghế cafe, đồ cũ vui hùng, thu mua thiết bị quán cafe" />
        <link rel="canonical" href="https://thumuadocugiacao.net/thanh-ly-quan-ca-phe" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Quán Cafe Trọn Gói Giá Cao - Vui Hùng" />
        <meta property="og:description" content="Cần thanh lý quán cafe? Vui Hùng thu mua trọn gói máy pha, máy xay, bàn ghế, thiết bị lạnh giá cao nhất thị trường. Giải phóng mặt bằng nhanh gọn trong ngày." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow pb-20">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#880d11] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Quán Cafe</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT (GRID Layout 4 Cột An Toàn) ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thanh Lý Quán Cafe
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#880d11] mb-8 leading-snug border-l-4 border-[#880d11] pl-4">
                Thu Mua Quán Cafe Trọn Gói – Dịch Vụ Chuyên Nghiệp, Giá Cao Tại Vui Hùng
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  Bạn đang sở hữu một quán cafe nhưng muốn <strong className="text-[#111827]">thanh lý toàn bộ</strong> vì muốn đổi hướng kinh doanh, giải tỏa mặt bằng hay đơn giản là không có thời gian vận hành? Việc tìm kiếm một đơn vị thu mua quán cafe uy tín, giá cao và xử lý nhanh gọn luôn là bài toán khó.
                </p>
                <p>
                  Hiểu được điều đó, <strong className="text-[#880d11]">Vui Hùng</strong> tự hào là đối tác tin cậy hàng đầu, chuyên cung cấp dịch vụ <strong className="text-[#111827]">thu mua quán cafe trọn gói</strong> với quy trình chuyên nghiệp, minh bạch và mức giá cạnh tranh nhất thị trường.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan thanh lý quán cafe --- */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-quan-cafe.jpg"
                  alt="Dịch vụ thu mua thanh lý quán cafe trọn gói giá cao Đồ Cũ Vui Hùng"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 text-sm md:text-base text-center font-medium">
                  Vui Hùng cung cấp giải pháp thanh lý quán cafe trọn gói từ A đến Z chuyên nghiệp
                </div>
              </div>

              {/* SECTION: Sự Đặc Biệt Của Vui Hùng */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Dịch Vụ Thu Mua Quán Cafe Của Vui Hùng Có Gì Đặc Biệt?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Không chỉ đơn thuần là thu mua tài sản, <strong className="text-[#880d11]">Vui Hùng</strong> mang đến giải pháp thanh lý quán cafe toàn diện, giúp khách hàng giải phóng mặt bằng nhanh chóng, thu hồi vốn tối đa. Chúng tôi cam kết:
                </p>

                <div className="flex flex-col gap-5">
                  {[
                    {
                      title: "Thu mua trọn gói",
                      desc: "Nhận thanh lý 100% tài sản trong quán: máy pha cafe, máy xay, tủ mát, tủ đông, bàn ghế, quầy bar, máy lạnh, trang thiết bị nhà bếp đến cả nội thất và vật dụng trang trí. Khách hàng không cần phải loay hoay thanh lý lẻ từng món."
                    },
                    {
                      title: "Báo giá cao nhất",
                      desc: "Đội ngũ chuyên gia trực tiếp khảo sát, định giá sát với giá trị thực tế của từng thiết bị, đặc biệt ưu tiên các thương hiệu nổi tiếng như La Marzocco, Astoria, Nuova Simonelli, Mazzer, Sanaky, Panasonic..."
                    },
                    {
                      title: "Hỗ trợ vận chuyển & tháo dỡ hoàn toàn miễn phí",
                      desc: "Đội ngũ nhân công hùng hậu, phương tiện vận chuyển chuyên nghiệp sẵn sàng tháo dỡ, bốc xếp và vận chuyển toàn bộ tài sản trong ngày, giải phóng mặt bằng ngay lập tức."
                    },
                    {
                      title: "Thanh toán nhanh chóng, minh bạch",
                      desc: "Nhận tiền ngay sau khi hoàn tất thủ tục và kiểm kê tài sản. Hình thức thanh toán linh hoạt: tiền mặt hoặc chuyển khoản."
                    },
                    {
                      title: "Quy trình làm việc chuyên nghiệp",
                      desc: "Hoạt động bài bản, rõ ràng, có hợp đồng đầy đủ, đảm bảo quyền lợi tối đa cho khách hàng."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#880d11]/30 hover:bg-white transition-all duration-300 group">
                      <div className="mt-1 w-8 h-8 rounded-full bg-[#880d11]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#880d11] transition-colors shadow-sm">
                        <svg className="w-5 h-5 text-[#880d11] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <strong className="text-[#111827] text-[16px] block mb-1 uppercase tracking-wide group-hover:text-[#880d11] transition-colors">{item.title}</strong>
                        <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 2: Thiết bị máy pha, nội thất --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-quan-cafe-go-vap.jpg"
                  alt="Thu mua máy pha cafe, bàn ghế quán cafe cũ giá cao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Các Hạng Mục Thu Mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Các Hạng Mục Được Thu Mua Khi Thanh Lý
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Với dịch vụ <strong className="text-[#111827]">thu mua quán cafe trọn gói</strong>, Vui Hùng nhận mua tất cả các danh mục sau:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Máy pha cafe chuyên nghiệp",
                      desc: "Máy pha cafe 1 group, 2 group, 3 group (các thương hiệu Ý, Nhật, Châu Âu...)."
                    },
                    {
                      title: "Máy xay cafe",
                      desc: "Máy xay cafe định lượng, máy xay cafe công nghiệp."
                    },
                    {
                      title: "Thiết bị làm lạnh",
                      desc: "Tủ mát, tủ đông, tủ trưng bày bánh, tủ mát đứng, tủ đá cây, tủ kính mát."
                    },
                    {
                      title: "Nội thất quán cafe",
                      desc: "Bàn ghế gỗ, bàn ghế mây, sofa, ghế bar, quầy bar, kệ trưng bày, tranh ảnh trang trí."
                    },
                    {
                      title: "Thiết bị khác",
                      desc: "Máy lạnh (điều hòa), quạt trần, loa đài, tivi, máy rửa chén, máy nước nóng, bếp từ, bếp hồng ngoại, ấm siêu tốc, dụng cụ pha chế (shaker, phin, ly tách...)."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#880d11]/50 hover:shadow-md transition-all duration-300 group">
                      <h4 className="font-black text-[#111827] text-[16px] uppercase mb-2 group-hover:text-[#880d11] transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#880d11]"></span>
                        {item.title}
                      </h4>
                      <p className="text-[15px] text-gray-600 leading-relaxed pl-3.5 border-l border-gray-100">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 3: Quy trình thu mua --- */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                <Image
                  src="/thu-mua-quan-cafe-uy-tin.jpg"
                  alt="Quy trình khảo sát, tháo dỡ quán cafe chuyên nghiệp của Vui Hùng"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Quy Trình Thu Mua */}
              <section className="mb-12 bg-white border-2 border-gray-100 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#880d11 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Quy Trình Thu Mua Chuyên Nghiệp
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  Để đảm bảo sự hài lòng tuyệt đối và tiết kiệm thời gian tối đa cho khách hàng, Vui Hùng áp dụng quy trình làm việc khép kín:
                </p>

                <div className="flex flex-col gap-6 relative z-10">
                  {[
                    { step: "1", title: "Tiếp nhận thông tin", desc: "Khách hàng liên hệ qua hotline hoặc Zalo, cung cấp địa chỉ và nhu cầu thanh lý quán cafe." },
                    { step: "2", title: "Khảo sát thực tế", desc: "Nhân viên Vui Hùng đến tận nơi trong vòng 30-60 phút (khu vực nội thành) để kiểm tra hiện trạng, thương hiệu, chất lượng và số lượng tài sản." },
                    { step: "3", title: "Báo giá & Thỏa thuận", desc: "Đưa ra bảng báo giá chi tiết, minh bạch cho toàn bộ tài sản. Hai bên thống nhất mức giá cuối cùng." },
                    { step: "4", title: "Ký hợp đồng & Thanh toán", desc: "Lập hợp đồng thu mua, thanh toán 100% giá trị hợp đồng ngay khi ký kết." },
                    { step: "5", title: "Tháo dỡ & Vận chuyển", desc: "Đội ngũ nhân công tiến hành tháo dỡ, đóng gói cẩn thận, vận chuyển lên xe tải và vệ sinh mặt bằng bàn giao cho khách hàng." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group items-start md:items-center">
                      <div className="mt-1 md:mt-0 w-12 h-12 bg-[#880d11] text-white rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(136,13,17,0.4)] transition-all duration-300">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] text-[17px] uppercase group-hover:text-[#880d11] transition-colors">{item.title}</h4>
                        <p className="text-[15px] text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Liên hệ --- */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg group">
                <Image
                  src="/thu-mua-quan-cafe-gia-cao.jpg"
                  alt="Vui Hùng thu mua quán cafe uy tín, cam kết giá trị cao nhất"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* SECTION: Tại Sao Chọn Vui Hùng */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Tại Sao Nên Chọn Vui Hùng?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Với nhiều năm kinh nghiệm trong lĩnh vực thu mua thiết bị nhà hàng, khách sạn, quán cafe, Vui Hùng đã khẳng định được uy tín và vị thế của mình:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Uy tín hàng đầu", desc: "Hàng ngàn khách hàng trên toàn quốc đã tin tưởng sử dụng dịch vụ." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Giá trị cao nhất", desc: "Không ép giá, không qua trung gian, trả giá sát với thực tế thị trường." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, title: "Năng lực vượt trội", desc: "Sở hữu đội ngũ xe tải, nhân công và kho bãi rộng lớn, đáp ứng mọi nhu cầu thanh lý quy mô lớn hay nhỏ." },
                    { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Thời gian nhanh chóng", desc: "Giải quyết gọn gàng trong ngày, giúp khách hàng nhanh chóng bàn giao mặt bằng cho chủ mới." }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl group hover:bg-[#111827] transition-colors duration-300 border border-gray-100 flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-[#880d11]/10 flex items-center justify-center text-[#880d11] mb-4 group-hover:bg-[#880d11] group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <h4 className="text-[#111827] text-[17px] font-black uppercase mb-2 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-[14px] leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 bg-[#111827] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#880d11 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Thanh Lý Quán Cafe Trọn Gói?</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Hãy để Vui Hùng giúp bạn giải quyết nhanh gọn, chuyên nghiệp và thu hồi vốn tối đa. Kết nối ngay để được báo giá!</p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#880d11] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[16px] hover:bg-[#a30f14] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1">
                      <span className="animate-pulse">📞</span> Gọi Hotline: {hotline}
                    </a>
                    <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[16px] hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1 border border-transparent">
                      Chat Zalo Gửi Hình
                    </a>
                  </div>
                </div>
              </div>

            </article>

            {/* --- CỘT PHẢI: SIDEBAR (Chiếm 1/4 trên Desktop) --- */}
            <aside className="lg:col-span-1 w-full min-w-0 h-fit sticky top-[100px]">
              <Sidebar />
            </aside>

          </div>
        </section>

      </main>


    </div>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
  );
}