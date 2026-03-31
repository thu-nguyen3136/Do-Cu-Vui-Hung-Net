import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
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
  );
}