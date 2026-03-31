import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
<<<<<<< HEAD
import React from 'react';

return (
  <>
    <Head>
      <title>Thu Mua Đồ Inox Cũ, Thiết Bị Bếp Inox Công Nghiệp Giá Cao TPHCM</title>
      <meta
        name="description"
        content="Đồ Cũ Huy Hoàng chuyên thu mua đồ inox cũ gia đình, nhà hàng, quán ăn, thiết bị bếp công nghiệp inox tại TPHCM giá cao. Báo giá nhanh, tháo dỡ trọn gói. Hotline: 0909 549 237."
      />
    </Head>

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
                THU MUA ĐỒ INOX CŨ, THIẾT BỊ INOX NHÀ HÀNG GIÁ CAO TẬN NƠI TẠI TPHCM
              </h1>
            </div>

            <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}>
              <p style={{ marginBottom: '15px' }}>
                Đồ dùng bằng inox (thép không gỉ) có độ bền cao và giữ được giá trị tái chế rất tốt. Nếu bạn đang muốn thanh lý nội thất gia đình, giải thể nhà hàng, quán ăn hay nâng cấp thiết bị bếp, <strong>Đồ Cũ Huy Hoàng</strong> chính là địa chỉ thu mua đồ inox cũ giá cao, uy tín hàng đầu tại TPHCM.
              </p>

              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '20px' }}>
                📞 Hotline / Zalo Báo Giá Nhanh: 0909 549 237
              </p>

              <h2 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '15px', color: '#0056b3', fontSize: '1.3rem' }}>
                1. Chuyên Thu Mua Tất Cả Các Mặt Hàng Đồ Inox
              </h2>
              <p style={{ marginBottom: '15px' }}>Chúng tôi nhận thu mua đa dạng các sản phẩm làm từ inox (Inox 304, Inox 201, Inox 430...) bất kể số lượng ít hay nhiều, từ cũ nát đến hàng xài lướt:</p>

              <ul style={{ marginBottom: '25px', paddingLeft: '20px', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '10px' }}><strong>Thiết bị bếp công nghiệp:</strong> Bếp Á, bếp Âu inox, tủ nấu cơm công nghiệp, nồi nấu phở bằng điện, hệ thống hút mùi inox, quầy pha chế inox.</li>
                <li style={{ marginBottom: '10px' }}><strong>Bàn ghế inox:</strong> Bàn inox chữ nhật, bàn tròn inox mặt kính, ghế đẩu inox, ghế dựa inox từ các quán ăn, nhà hàng, bếp ăn tập thể.</li>
                <li style={{ marginBottom: '10px' }}><strong>Dụng cụ sơ chế & lưu trữ:</strong> Chậu rửa bát inox (bồn rửa 1 ngăn, 2 ngăn, 3 ngăn), kệ inox 3 tầng/4 tầng, xe đẩy thức ăn, tủ sấy chén bát inox.</li>
                <li style={{ marginBottom: '10px' }}><strong>Đồ gia dụng inox:</strong> Xoong nồi lớn, cửa inox, bồn nước inox, hàng rào inox cũ tháo dỡ từ nhà ở, công trình.</li>
              </ul>

              <div style={{ textAlign: 'center', margin: '30px 0' }}>
                <img
                  alt="Thu mua thiết bị bếp inox công nghiệp"
                  src="/thu-mua-do-inox.jpg"
                  className="img-responsive"
                  style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                />
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px', fontStyle: 'italic' }}>
                  Thu mua thiết bị bếp công nghiệp inox, bồn rửa inox tận nơi
                </p>
              </div>

              <h2 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '15px', color: '#0056b3', fontSize: '1.3rem' }}>
                2. Tại Sao Chọn Đồ Cũ Huy Hoàng Khi Thanh Lý Đồ Inox?
              </h2>
              <ul style={{ marginBottom: '30px', paddingLeft: 0, listStyleType: 'none' }}>
                <li style={{ marginBottom: '15px' }}>
                  ✔️ <strong>Định Giá Chuẩn Xác Theo Chất Liệu:</strong> Inox 304 sẽ luôn có giá thu mua cao hơn Inox 201. Đội ngũ chuyên viên của chúng tôi am hiểu chất liệu, định giá đúng tình trạng, cam kết <strong>không ép giá</strong> hay báo giá cào bằng.
                </li>
                <li style={{ marginBottom: '15px' }}>
                  ✔️ <strong>Nhanh Chóng & Có Mặt Sau 30 Phút:</strong> Chúng tôi có hệ thống xe tải trực sẵn tại nhiều quận huyện TPHCM. Chỉ cần bạn gọi, nhân viên sẽ tới khảo sát ngay lập tức.
                </li>
                <li style={{ marginBottom: '15px' }}>
                  ✔️ <strong>Tự Tháo Dỡ & Vận Chuyển 0 Đồng:</strong> Đồ inox công nghiệp thường rất nặng và cồng kềnh. Huy Hoàng bao trọn gói nhân công tháo dỡ, cắt hàn, bốc xếp và vận chuyển. Khách hàng không cần phải đụng tay vào bất cứ việc gì.
                </li>
                <li style={{ marginBottom: '15px' }}>
                  ✔️ <strong>Thanh Toán Sòng Phẳng:</strong> Tiền mặt giao ngay hoặc chuyển khoản 100% trong 1 lần duy nhất ngay khi hai bên đồng ý giá cả.
                </li>
              </ul>

              <h3 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '20px', color: '#0056b3', fontSize: '1.25rem' }}>
                MỘT SỐ HÌNH ẢNH THU MUA ĐỒ INOX THỰC TẾ:
              </h3>

              {/* Grid hình ảnh sử dụng CSS Grid inline giống trang trước */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '15px',
                marginBottom: '30px'
              }}>
                <img alt="Thu mua bàn inox quán ăn" src="/ban-ghe-inox-cu.jpg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                <img alt="Thu mua quầy pha chế inox" src="/quay-pha-che-inox.jpg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                <img alt="Thu mua kệ inox nhà hàng" src="/ke-inox-3-tang.jpg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                <img alt="Thu mua xe đẩy inox" src="/bon-rua-inox-cu.jpg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
              </div>

              {/* ---------------------------------------------------------------- */}
              {/* SECTION: KHU VỰC THU MUA (Chèn vào trước khối Liên Hệ) */}
              {/* ---------------------------------------------------------------- */}
              <section style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#111',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ width: '8px', height: '30px', backgroundColor: '#dc3545', borderRadius: '4px', display: 'inline-block' }}></span>
                  Khu Vực Chuyên Thu Mua Đồ Inox Cũ
                </h3>

                <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '20px' }}>
                  Chúng tôi nhận thu mua và thanh lý mọi mặt hàng bàn ghế inox, thiết bị bếp đã qua sử dụng với giá cao trọn gói tại các địa điểm:
                </p>

                <div style={{
                  backgroundColor: '#f9f9f9',
                  padding: '30px',
                  borderRadius: '12px',
                  border: '1px solid #eaeaea',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '25px'
                }}>

                  {/* Khu vực 1: TPHCM */}
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      backgroundColor: '#fcebea',
                      color: '#dc3545',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg style={{ width: '22px', height: '22px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: '#111', marginBottom: '8px', textTransform: 'uppercase' }}>Khu Vực TP.HCM</h4>
                      <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                        Quận 1, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8, Quận 9, Quận 10, Quận 11, Quận 12, Bình Thạnh, Thủ Đức, Bình Tân, Tân Bình, Phú Nhuận, Gò Vấp.
                      </p>
                    </div>
                  </div>

                  {/* Khu vực 2: Tỉnh lân cận */}
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      backgroundColor: '#fcebea',
                      color: '#dc3545',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg style={{ width: '22px', height: '22px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: '#111', marginBottom: '8px', textTransform: 'uppercase' }}>Các Tỉnh Lân Cận</h4>
                      <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                        Biên Hòa, Đồng Nai, Bình Dương, Thủ Dầu Một... và các khu vực xung quanh.
                      </p>
                    </div>
                  </div>

                </div>

                <p style={{
                  color: '#dc3545',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  marginTop: '25px',
                  borderLeft: '4px solid #dc3545',
                  paddingLeft: '15px',
                  lineHeight: '1.6'
                }}>
                  Thu mua nhanh gọn trong một lần với thời gian sớm nhất. Quý khách hàng đến với dịch vụ thu mua bàn ghế inox, đồ inox của chúng tôi chắc chắn sẽ hài lòng.
                </p>
              </section>
              {/* ---------------------------------------------------------------- */}

              {/* Khối Thông tin liên hệ nổi bật */}
              <div style={{
                padding: '25px',
                marginTop: '40px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                borderLeft: '5px solid #dc3545',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '15px', color: '#222' }}>ĐỒ CŨ HUY HOÀNG - THU MUA INOX GIÁ CAO</h4>
                <p style={{ marginBottom: '8px' }}>📍 <strong>Địa Chỉ 1:</strong> 21/18B Nơ Trang Long, Phường 13, Quận Bình Thạnh, TP Hồ Chí Minh</p>
                <p style={{ marginBottom: '8px' }}>📍 <strong>Địa Chỉ 2:</strong> 10 Bình Long, Phường Phú Thạnh, Quận Bình Tân, TP.HCM</p>
                <p style={{ marginTop: '15px', marginBottom: '0', fontSize: '1.1rem' }}>
                  📞 <strong>Hotline Báo Giá Nhanh:</strong> <span style={{ color: '#dc3545', fontWeight: 'bold', fontSize: '1.3rem' }}>0909 549 237</span> (Huy Hoàng)
                </p>
                <p style={{ marginTop: '8px', fontSize: '0.95rem', color: '#666', fontStyle: 'italic' }}>* Quý khách vui lòng chụp ảnh sản phẩm gửi qua Zalo để nhận báo giá trực tiếp trong 5 phút!</p>
              </div>

            </div>
          </div>

          {/* CỘT PHẢI (Sidebar) */}
          <div className="custom-col-sidebar">
            {/* Nhớ import và bật component Sidebar của bạn lên nhé */}
            {/* <Sidebar /> */}

            {/* Khối demo chờ thay Sidebar */}
            <div style={{ padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ color: '#888' }}>[ Sidebar Hiển Thị Ở Đây ]</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
);
=======

export default function ThuMuaDoInoxPage() {
  const hotline = "0979.095.076";

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col">
      <Head>
        {/* --- SEO META TAGS --- */}
        <title>Thu Mua Đồ Inox Cũ Giá Cao TPHCM | Thanh Lý Bàn Ghế Inox Vui Hùng</title>
        <meta name="description" content="Đồ Cũ Vui Hùng chuyên thu mua thanh lý đồ inox cũ, bàn ghế inox nhà hàng quán ăn giá cao nhất TPHCM. Có mặt sau 20 phút, tháo dỡ vận chuyển miễn phí." />
        <meta name="keywords" content="thu mua đồ inox cũ, thanh lý đồ inox, thu mua bàn ghế inox, đồ cũ vui hùng, thanh lý bàn ghế inox tphcm" />
        <link rel="canonical" href="https://thumuadocugiacao.net/thu-mua-do-inox-cu" />
        <meta property="og:title" content="Dịch Vụ Thu Mua Đồ Inox Cũ Giá Cao Tận Nơi TPHCM - Vui Hùng" />
        <meta property="og:description" content="Cần thanh lý bàn ghế, thiết bị inox cũ? Vui Hùng thu mua mọi số lượng với giá cao nhất thị trường. Thanh toán 1 lần nhanh gọn." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="flex-grow">

        {/* ================= BREADCRUMB ================= */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#880d11] transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Thanh Lý Đồ Inox</span>
          </div>
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 items-start">

            {/* --- CỘT TRÁI: NỘI DUNG CHÍNH (Chiếm 3/4) --- */}
            <article className="lg:col-span-3 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] uppercase leading-tight tracking-tight mb-4">
                Thanh Lý Đồ Inox
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#880d11] mb-8 leading-snug border-l-4 border-[#880d11] pl-4">
                Dịch Vụ Thu Mua Đồ Inox Cũ - Thu Mua Mọi Mặt Hàng Đồ Inox Tận Nơi Khu Vực HCM
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10 space-y-4">
                <p>
                  <strong className="text-[#880d11]">Vui Hùng</strong> với 10 năm kinh nghiệm trong lĩnh vực thu mua đồ inox, bàn ghế inox, kệ bếp inox, bồn rửa inox, bếp công nghiệp hay các thiết bị inox khác, chúng tôi đều hỗ trợ tận nơi với mức giá tốt nhất thị trường, chúng tôi mang đến quy trình chuyên nghiệp, định giá minh bạch và thanh toán ngay trong ngày.
                </p>
                <p>
                  Ngoài <strong className="text-[#111827]">đồ inox</strong>, chúng tôi còn hỗ trợ thu mua đa dạng các sản phẩm khác như giường tủ gỗ cũ, bàn ghế salon cũ mới đã qua sử dụng, mọi sản phẩm nội ngoại thất phòng khách, phòng ngủ, nhà bếp... Mua nhanh gọn trong ngày, đến tận nhà khi quý khách hàng có nhu cầu muốn thanh lý.
                </p>
              </div>

              {/* --- ẢNH 1: Tổng quan thanh lý đồ inox --- */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thu-mua-do-inox.jpg"
                  alt="Dịch vụ thu mua thanh lý đồ inox cũ giá cao Vui Hùng"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"; }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm text-center">
                  Vui Hùng chuyên thu mua bàn ghế inox, thiết bị inox công nghiệp các loại
                </div>
              </div>

              {/* SECTION: Khu Vực Thu Mua */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Khu Vực Chuyên Dịch Vụ Thu Mua Đồ Inox Cũ
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Chúng tôi nhận thu mua và thanh lý mọi mặt hàng bàn ghế inox đã qua sử dụng với giá cao trọn gói tại các địa điểm:
                </p>

                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#880d11]/10 flex items-center justify-center flex-shrink-0 text-[#880d11]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] mb-2 uppercase">Khu Vực TP.HCM</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Quận 1, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8, Quận 9, Quận 10, Quận 11, Quận 12, Bình Thạnh, Thủ Đức, Bình Tân, Tân Bình, Phú Nhuận, Gò Vấp.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#880d11]/10 flex items-center justify-center flex-shrink-0 text-[#880d11]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] mb-2 uppercase">Các Tỉnh Lân Cận</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Biên Hòa, Đồng Nai, Bình Dương, Thủ Dầu Một... và các khu vực xung quanh.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[#880d11] font-medium italic mt-6 border-l-4 border-[#880d11] pl-4">
                  Thu mua nhanh gọn trong một lần với thời gian sớm nhất. Quý khách hàng đến với dịch vụ thu mua bàn ghế inox, đồ inox của chúng tôi chắc chắn sẽ hài lòng.
                </p>
              </section>

              {/* --- ẢNH 2: Thiết bị inox --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-do-inox-tan-binh.png"
                  alt="Thu mua thiết bị bếp inox công nghiệp cũ"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Quy Trình Thu Mua */}
              <section className="mb-12 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#880d11 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Quy Trình Thu Mua Thanh Lý
                </h3>

                <div className="space-y-6 relative z-10">
                  {[
                    { step: "1", title: "Tiếp nhận thông tin", desc: "Khách hàng liên hệ vào đường dây nóng của Đồ Cũ Vui Hùng, thông báo chi tiết về số lượng, địa chỉ để chúng tôi nắm rõ nhu cầu và báo giá chung." },
                    { step: "2", title: "Khảo sát", desc: "Chúng tôi cử đội ngũ nhân viên chuyên nghiệp tới tận nơi thực hiện khảo sát, đánh giá chất lượng sản phẩm để đưa ra báo giá cụ thể nhất." },
                    { step: "3", title: "Thống nhất và thu mua", desc: "Sau khi 2 bên đã đi tới thống nhất, chúng tôi sẽ tiến hành đo đếm sản phẩm và thực hiện quy trình thu mua, tháo dỡ hợp lý." },
                    { step: "4", title: "Thanh toán", desc: "Sau khi hai bên kiểm tra xong, chúng tôi sẽ thực hiện thanh toán toàn bộ chi phí cho khách hàng chỉ duy nhất trong một lần." }
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

              {/* --- ẢNH 3: Bàn ghế inox --- */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-12 shadow-lg group w-full md:w-3/4 mx-auto">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-do-inox-go-vap.png"
                  alt="Thu mua thanh lý bàn ghế inox các loại"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* SECTION: Cam Kết */}
              <section className="mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#880d11] rounded-full"></span>
                  Cam Kết Của Đồ Cũ Vui Hùng
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Giá thu mua luôn được chúng tôi cam kết đúng với giá thị trường, không hề có chuyện ép giá.",
                    "Tùy thuộc vào tình trạng, chủng loại và mức giá thị trường, chúng tôi sẽ đưa ra mức giá hợp lý nhất.",
                    "Quá trình thanh toán diễn ra nhanh chóng, sòng phẳng duy nhất trong một lần.",
                    "Đội ngũ nhân viên chuyên nghiệp tự mình vận chuyển, bốc xếp và tháo dỡ.",
                    "Trao đổi dựa trên nguyên tắc thuận mua vừa bán. Khách hàng đồng ý, chúng tôi mới thu mua."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#880d11]/30 hover:shadow-md transition-all duration-300">
                      <div className="w-8 h-8 rounded-full bg-[#880d11]/10 flex items-center justify-center flex-shrink-0 text-[#880d11]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- ẢNH 4: Liên hệ --- */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg group">
                {/* BẠN CHÈN ĐƯỜNG DẪN ẢNH THỰC TẾ VÀO ĐÂY */}
                <Image
                  src="/thanh-ly-do-inox-gia-cao.png"
                  alt="Liên hệ Vui Hùng thanh lý đồ inox"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop"; }}
                />
              </div>

              {/* Nút Gọi Ngay cuối bài */}
              <div className="mt-16 bg-[#111827] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#880d11 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4">Thông Tin Liên Hệ</h3>
                  <p className="text-gray-300 text-base md:text-lg mb-8 max-w-3xl mx-auto">
                    Hãy để dịch vụ thu mua thanh lý bàn ghế inox của Vui Hùng giúp bạn giải phóng mặt bằng, đồng thời tiết kiệm tối đa chi phí. Liên hệ ngay để được báo giá kịp thời, chính xác nhất!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href={`tel:${hotline}`} className="group inline-flex items-center justify-center gap-3 bg-[#880d11] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-[#a30f14] transition-all shadow-[0_10px_20px_rgba(136,13,17,0.3)] hover:-translate-y-1">
                      <span className="animate-pulse">📞</span> {hotline}
                    </a>
                    <a href={`https://zalo.me/${hotline.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1 border border-transparent">
                      Chat Zalo Ngay
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
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
