import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import React from 'react';

export default function ThanhLyNhaHang() {
  return (
    <>
      <Head>
        <title>Thanh Lý Nhà Hàng, Quán Ăn Giá Cao TPHCM | Định Giá Tận Nơi</title>
        <meta
          name="description"
          content="Đồ Cũ Huy Hoàng chuyên thu mua trọn gói bàn ghế, thiết bị bếp công nghiệp, tủ đông tủ mát của nhà hàng, quán ăn, quán nhậu tại TPHCM. Không ép giá, dọn dẹp miễn phí!"
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
                  DỊCH VỤ THANH LÝ NHÀ HÀNG, QUÁN ĂN TRỌN GÓI GIÁ CAO
                </h1>
              </div>

              <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}>
                <p style={{ marginBottom: '15px' }}>
                  Khi cần chuyển đổi định hướng kinh doanh, trả lại mặt bằng hoặc nâng cấp cơ sở vật chất, việc tìm kiếm một đơn vị bao tiêu toàn bộ thiết bị cũ là rất quan trọng. <strong>Đồ Cũ Huy Hoàng</strong> là tổng kho chuyên thu mua, <strong>thanh lý nhà hàng, quán ăn, quán nhậu</strong> quy mô từ nhỏ đến lớn với mức ngân sách giải ngân lên đến hàng tỷ đồng.
                </p>

                <p style={{ marginBottom: '15px' }}>
                  Thay vì bán lẻ tẻ từng món gây mất thời gian, chúng tôi cung cấp giải pháp dọn dẹp trọn gói, giúp quý khách thu hồi lại một phần vốn đầu tư khổng lồ trong thời gian ngắn nhất.
                </p>

                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '20px', padding: '10px', backgroundColor: '#fcebea', borderRadius: '5px', display: 'inline-block' }}>
                  📞 Cần bán gấp? Gọi ngay Hotline/Zalo: 0909 549 237
                </p>

                <h2 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '15px', color: '#0056b3', fontSize: '1.3rem' }}>
                  1. Huy Hoàng Nhận Thu Mua Những Mặt Hàng Nào?
                </h2>
                <p style={{ marginBottom: '15px' }}>Chúng tôi thu mua hầu như tất cả mọi thứ có thể tái sử dụng tại cơ sở ẩm thực của bạn, cụ thể:</p>

                <ul style={{ marginBottom: '25px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '10px' }}><strong>Khu vực phục vụ (Bàn ghế):</strong> Thu mua bàn ghế gỗ nguyên khối, sofa cao cấp, bàn ăn mặt đá, bàn ghế nhựa giả mây, bộ bàn ghế xếp inox dùng cho quán nhậu, vỉa hè.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Khu vực bếp nấu (Bếp công nghiệp):</strong> Bếp khè Á, bếp Âu 4 họng/6 họng, lò nướng salamander, tủ nấu cơm bằng điện/ga, nồi nấu nước lèo, hệ thống tum hút khói.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Khu vực lưu trữ (Điện lạnh):</strong> Thu mua tủ đông công nghiệp, bàn mát inox, tủ trưng bày thực phẩm, hệ thống kho lạnh, máy lạnh âm trần, quạt hơi nước.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Vật dụng khác:</strong> Chén dĩa gốm sứ cao cấp, ly tách, xe đẩy thức ăn inox, chậu rửa bát cỡ lớn, quầy thu ngân.</li>
                </ul>

                <div style={{ textAlign: 'center', margin: '30px 0' }}>
                  <img
                    alt="Thu mua đồ dùng bếp nhà hàng chuyên nghiệp"
                    src="/thanh-ly-nha-hang.jpg"
                    className="img-responsive"
                    style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  />
                  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px', fontStyle: 'italic' }}>
                    Thanh lý toàn bộ hệ thống bếp và bàn ghế quán ăn nhanh gọn
                  </p>
                </div>

                <h2 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '15px', color: '#0056b3', fontSize: '1.3rem' }}>
                  2. Khác Biệt Khi Chọn Dịch Vụ Của Đồ Cũ Huy Hoàng
                </h2>
                <p style={{ marginBottom: '15px' }}>Hiểu được tâm lý xót của khi phải bán lại đồ đạc đầu tư tâm huyết, chúng tôi cam kết quy trình làm việc tử tế, <strong>tuyệt đối không vịn cớ dìm giá</strong> khách hàng:</p>

                <ul style={{ marginBottom: '30px', paddingLeft: 0, listStyleType: 'none' }}>
                  <li style={{ marginBottom: '15px' }}>
                    ✔️ <strong>Định giá dựa trên thương hiệu và độ mới:</strong> Đồ dùng lướt, máy móc nhập khẩu (Berjaya, Hoshizaki, Sanaky...) sẽ luôn được trả giá cao xứng tầm.
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    ✔️ <strong>Quy trình "1 chạm":</strong> Khách hàng chỉ cần đứng nhìn. Thợ của chúng tôi sẽ ngắt điện nước an toàn, tự tháo dỡ máy lạnh, bốc vác đồ nặng lên xe tải.
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    ✔️ <strong>Giải ngân siêu tốc:</strong> Chuyển khoản hoặc giao tiền mặt đủ 100% trước khi xe bánh lăn. Không hẹn nợ, không trả góp.
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    ✔️ <strong>Trách nhiệm tới cùng:</strong> Quét dọn sạch sẽ rác thải tháo dỡ, trả lại không gian trống trải để bạn dễ dàng bàn giao cho chủ nhà.
                  </li>
                </ul>

                <h3 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '20px', color: '#0056b3', fontSize: '1.25rem' }}>
                  HÌNH ẢNH THU MUA THỰC TẾ TẠI CÁC DỰ ÁN:
                </h3>

                {/* Grid hình ảnh */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '15px',
                  marginBottom: '40px'
                }}>
                  <img alt="Thu mua bàn ghế nhà hàng tiệc cưới" src="/ban-ghe-nha-hang.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Thanh lý quán ăn gia đình" src="/thu-mua-quan-an.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Thu mua thiết bị bếp inox" src="/bep-cong-nghiep-cu.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Thanh lý đồ dùng quán nhậu" src="/thanh-ly-quan-nhau.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                </div>

                {/* ---------------------------------------------------------------- */}
                {/* SECTION: KHU VỰC THU MUA */}
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
                    Mạng Lưới Phục Vụ Khảo Sát Tận Nơi
                  </h3>

                  <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '20px' }}>
                    Với số lượng xe tải đa dạng tải trọng, Huy Hoàng đáp ứng nhu cầu thanh lý 24/7 (kể cả dịp Lễ, Tết) nhằm kịp tiến độ trả mặt bằng của quý khách tại các khu vực:
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

                    <div style={{ display: 'flex', gap: '15px' }}>
                      <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#fcebea', color: '#dc3545', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg style={{ width: '22px', height: '22px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 'bold', color: '#111', marginBottom: '8px', textTransform: 'uppercase' }}>Nội Thành TP.HCM</h4>
                        <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                          Có mặt nhanh nhất tại Quận 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, Bình Thạnh, Gò Vấp, Phú Nhuận, Tân Bình, Tân Phú, Bình Tân và TP. Thủ Đức.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '15px' }}>
                      <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#fcebea', color: '#dc3545', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg style={{ width: '22px', height: '22px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 'bold', color: '#111', marginBottom: '8px', textTransform: 'uppercase' }}>Khu Vực Lân Cận</h4>
                        <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                          Thu mua các dự án ẩm thực lớn tại Bình Dương (Dĩ An, Thuận An), Đồng Nai (Biên Hòa), Long An và Bà Rịa - Vũng Tàu.
                        </p>
                      </div>
                    </div>

                  </div>
                </section>

                {/* Khối Thông tin liên hệ */}
                <div style={{
                  padding: '25px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  borderLeft: '5px solid #dc3545',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '15px', color: '#222' }}>ĐỒ CŨ HUY HOÀNG - TỔNG KHO THANH LÝ QUÁN ĂN</h4>
                  <p style={{ marginBottom: '8px' }}>📍 <strong>Kho chứa 1:</strong> 21/18B Nơ Trang Long, Phường 13, Quận Bình Thạnh, TP Hồ Chí Minh</p>
                  <p style={{ marginBottom: '8px' }}>📍 <strong>Kho chứa 2:</strong> 10 Bình Long, Phường Phú Thạnh, Quận Bình Tân, TP.HCM</p>
                  <p style={{ marginTop: '15px', marginBottom: '0', fontSize: '1.1rem' }}>
                    📞 <strong>Đường dây nóng:</strong> <span style={{ color: '#dc3545', fontWeight: 'bold', fontSize: '1.3rem' }}>0909 549 237</span> (Anh Hoàng)
                  </p>
                  <p style={{ marginTop: '8px', fontSize: '0.95rem', color: '#666', fontStyle: 'italic' }}>* Tip nhỏ: Gửi toàn cảnh góc quán và các thiết bị lớn qua Zalo để chúng tôi thẩm định giá nhanh chóng nhất!</p>
                </div>

              </div>
            </div>

            {/* CỘT PHẢI (Sidebar) */}
            <div className="custom-col-sidebar">
              <Sidebar />

            </div>

          </div>
        </div>
      </section>
    </>
  );
}