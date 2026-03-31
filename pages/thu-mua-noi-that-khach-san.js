import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaDoDungKhachSan() {
  return (
    <>
      <Head>
        <title>THU MUA NỘI THẤT, ĐỒ DÙNG KHÁCH SẠN TRỌN GÓI GIÁ CAO | Đồ Cũ Huy Hoàng</title>
        <meta
          name="description"
          content="Thu Mua Đồ Cũ Huy Hoàng chuyên thu mua đồ dùng khách sạn cũ, thanh lý bàn ghế, tủ quần áo, giường, thiết bị điện tử điện lạnh tại TPHCM giá cao trọn gói."
        />
      </Head>

      <section style={{ padding: '40px 0' }}>
        <div className="custom-container">
          <div className="custom-row">

            {/* CỘT TRÁI: Nội dung chính */}
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
                  THU MUA NỘI THẤT KHÁCH SẠN TRỌN GÓI GIÁ CAO
                </h1>
              </div>

              <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}>
                <p style={{ marginBottom: '15px' }}>
                  <strong>Thu Mua Đồ Cũ Huy Hoàng</strong> chuyên thu mua đồ dùng khách sạn cũ, thanh lý bàn ghế khách sạn cũ, thu mua tủ quần áo, giường, bàn tiếp tân, các thiết bị điện tử, điện lạnh như tủ lạnh, máy lạnh, thiết bị vệ sinh khách sạn cũ các quận tại Thành phố Hồ Chí Minh và các tỉnh lận cận với giá cao nhất và trọn gói.
                </p>

                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '20px' }}>
                  Hotline - Zalo Thu Mua: 0965 289 489
                </p>

                <div style={{ textAlign: 'center', margin: '30px 0' }}>
                  <img
                    alt="Thu mua giường tủ khách sạn"
                    src="/thu-mua-giuong-tu-khach-san.jpg"
                    className="img-responsive"
                    style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  />
                </div>

                <p style={{ marginBottom: '15px' }}>
                  <strong>Hotline - Zalo Thu Mua: 0909 549 237</strong> gọi ngay cho chúng tôi, hoặc chụp hình gửi qua Zalo.
                </p>
                <p style={{ marginBottom: '15px' }}>Thời gian làm việc từ 8h đến 20h tất cả các ngày trong tuần.</p>
                <p style={{ marginBottom: '20px' }}>
                  Quý khách hàng có nhu cầu thanh lý xin vui lòng gọi điện thoại đến số hotline của chúng tôi, quý khách sẽ được tư vấn cặn kẽ hoặc có thể gửi thông tin hình ảnh sản phẩm cần thanh lý, kích thước qua Zalo. Sau khi tiếp nhận thông tin chúng tôi sẽ tiến hành báo giá trực tiếp cho quý khách.
                </p>

                <div style={{ textAlign: 'center', margin: '30px 0' }}>
                  <img
                    alt="Quy trình thu mua nội thất khách sạn"
                    src="/khach-san.jpg"
                    className="img-responsive"
                    style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  />
                </div>

                <p style={{ marginBottom: '20px' }}>
                  Sau khi thỏa thuận chúng tôi sẽ đến tận nơi nhanh nhất, với kinh nghiệm lâu năm, nắm bắt giá thị trường cập nhật mới nhất, nên quý khách hàng có thể yên tâm từ mua bán tháo dỡ đến vận chuyển chúng tôi sẽ chịu trách nhiệm từ A --&gt; Z. Cam kết khách hàng hài lòng nhất.
                </p>

                <div style={{ textAlign: 'center', margin: '30px 0' }}>
                  <img
                    alt="Tháo dỡ và vận chuyển nội thất"
                    src="/do-dung-khach-san.jpg"
                    className="img-responsive"
                    style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  />
                </div>

                <p style={{ marginBottom: '20px' }}>
                  Thanh toán nhanh chóng: sau khi kết thúc quá trình chúng tôi sẽ thanh toán tiền mặt hoặc chuyển khoản tùy theo yêu cầu của khách hàng. Dọn dẹp vệ sinh sạch sẽ.
                </p>

                <h3 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '15px', color: '#0056b3', fontSize: '1.25rem' }}>
                  Chúng tôi thu mua thanh lý tất cả mặt hàng sau:
                </h3>
                <ul style={{ marginBottom: '25px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '8px' }}>Thu mua bàn ghế khách sạn – thanh lý bàn ghế khách sạn</li>
                  <li style={{ marginBottom: '8px' }}>Thu mua tủ giường khách sạn - thanh lý tủ giường bàn ghế khách sạn cũ</li>
                  <li style={{ marginBottom: '8px' }}>Thu mua máy lạnh khách sạn - thanh lý máy lạnh khách sạn</li>
                  <li style={{ marginBottom: '8px' }}>Thu mua tủ lạnh tivi cũ khách sạn - thanh lý tủ lạnh tivi cũ khách sạn</li>
                  <li style={{ marginBottom: '8px' }}>Thu mua đồ dùng khách sạn trọn gói - thanh lý đồ dùng khách sạn trọn gói</li>
                  <li style={{ marginBottom: '8px' }}>Thu mua bàn tiếp tân khách sạn - thanh lý bàn tiếp tân khách sạn</li>
                  <li style={{ marginBottom: '8px' }}>Thu mua tủ đông tủ mát khách sạn - thanh lý tủ mát tủ đông cũ khách sạn</li>
                </ul>

                <p style={{ marginTop: '20px', marginBottom: '30px' }}>
                  - Với đội ngũ kinh nghiệm lâu năm trong việc thu mua đồ dùng văn phòng, nhà hàng, khách sạn, cafe...<br />
                  - Thu mua nhanh gọn nhất, cam kết khách hàng hài lòng hàng đầu.<br />
                  - Uy tín, chuyên nghiệp, tin cậy.
                </p>

                <h3 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '20px', color: '#0056b3', fontSize: '1.25rem' }}>
                  MỘT SỐ HÌNH ẢNH THU MUA KHÁCH SẠN TRỌN GÓI:
                </h3>

                {/* Grid hình ảnh sử dụng CSS Grid inline */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '15px',
                  marginBottom: '30px'
                }}>
                  <img alt="Hình ảnh thu mua 6" src="/noi-that-khach-san.jpg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Hình ảnh thu mua 2" src="/noi-that-nha-nghi.jpg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Hình ảnh thu mua 3" src="/giuong-khach-san.jpg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Hình ảnh thu mua 4" src="/thanh-ly-giuong-khach-san.jpg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Hình ảnh thu mua 5" src="/thu-mua-giuong-tu-khach-san.jpg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Hình ảnh thu mua 1" src="/do-dung-trong-khach-san.jpg" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                </div>

                {/* Khối Thông tin liên hệ nổi bật */}
                <div style={{
                  padding: '25px',
                  marginTop: '40px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  borderLeft: '5px solid #dc3545',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '15px', color: '#222' }}>ĐỒ CŨ HUY HOÀNG</h4>
                  <p style={{ marginBottom: '8px' }}>📍 <strong>Địa Chỉ 1:</strong> 21/18B Nơ Trang Long, Phường 13, Quận Bình Thạnh, TP Hồ Chí Minh</p>
                  <p style={{ marginBottom: '8px' }}>📍 <strong>Địa Chỉ 2:</strong> 10 Bình Long, Phường Phú Thạnh, Quận Bình Tân, TP.HCM</p>
                  <p style={{ marginTop: '15px', marginBottom: '0', fontSize: '1.1rem' }}>
                    📞 <strong>Hotline - Zalo:</strong> <span style={{ color: '#dc3545', fontWeight: 'bold', fontSize: '1.3rem' }}>0965 289 489</span> - Huy Hoàng
                  </p>
                </div>

              </div>
            </div>

            {/* CỘT PHẢI: Sidebar */}
            <div className="custom-col-sidebar">
              <Sidebar />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}