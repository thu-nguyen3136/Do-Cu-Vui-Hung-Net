import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import React from 'react';

export default function ThanhLyQuanNhau() {
  return (
    <>
      <Head>
        <title>Thanh Lý Quán Nhậu, Quán Bia Giá Cao TPHCM | Định Giá Tận Nơi</title>
        <meta
          name="description"
          content="Đồ Cũ Huy Hoàng chuyên thu mua, thanh lý quán nhậu, quán bia, quán ốc. Thu mua trọn gói bàn ghế, bếp khè, tủ mát bia giá cao tại TPHCM. Dọn mặt bằng ngay trong ngày!"
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
                  THANH LÝ QUÁN NHẬU TRỌN GÓI GIÁ CAO TẠI TPHCM
                </h1>
              </div>

              <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}>
                <p style={{ marginBottom: '15px' }}>
                  Kinh doanh quán nhậu, quán bia hơi hay quán ốc đòi hỏi lượng trang thiết bị rất lớn. Khi bạn cần sang nhượng, đóng cửa hoặc chuyển đổi mô hình kinh doanh, việc thanh lý lại toàn bộ đồ đạc sao cho được giá tốt nhất là điều vô cùng quan trọng.
                </p>

                <p style={{ marginBottom: '15px' }}>
                  <strong>Đồ Cũ Huy Hoàng</strong> là đơn vị chuyên bao tiêu, thu mua và <strong>thanh lý quán nhậu trọn gói</strong>. Chúng tôi giúp bạn giải phóng mặt bằng thần tốc, thu hồi vốn nhanh chóng với mức định giá cạnh tranh nhất thị trường.
                </p>

                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '20px', padding: '10px', backgroundColor: '#fcebea', borderRadius: '5px', display: 'inline-block' }}>
                  📞 Cần trả mặt bằng gấp? Gọi ngay: 0909 549 237
                </p>

                <h2 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '15px', color: '#0056b3', fontSize: '1.3rem' }}>
                  1. Huy Hoàng Thu Mua Những Mặt Hàng Quán Nhậu Nào?
                </h2>
                <p style={{ marginBottom: '15px' }}>Đặc thù quán nhậu có rất nhiều thiết bị từ khu vực đón khách đến bếp nấu, chúng tôi nhận thu mua tất cả:</p>

                <ul style={{ marginBottom: '25px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '10px' }}><strong>Thanh lý bàn ghế quán nhậu:</strong> Bàn ghế gỗ thông xếp, bàn ghế chân sắt mặt gỗ, bàn ghế nhựa (Duy Tân, Qui Phúc), bàn inox dùng cho quán vỉa hè.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Thiết bị bảo quản thực phẩm & đồ uống:</strong> Tủ mát trưng bày bia, nước ngọt (Sanaky, Alaska...), tủ đông bảo quản hải sản, thịt tươi sống, hệ thống hồ sủi bọt hải sản.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Thiết bị bếp quán nhậu:</strong> Bếp khè công nghiệp công suất lớn, bếp nướng than ngoài trời, vỉ nướng, hệ thống hút khói mùi, tủ quầy pha chế, chậu rửa bát inox lớn.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Trang thiết bị phụ trợ:</strong> Quạt công nghiệp đứng, quạt treo tường, quạt phun sương, hệ thống tivi, loa đài phát nhạc, xoong nồi, chén dĩa, ly uống bia thủy tinh.</li>
                </ul>

                <div style={{ textAlign: 'center', margin: '30px 0' }}>
                  <img
                    alt="Thu mua đồ dùng quán nhậu trọn gói"
                    src="/thanh-ly-quan-nhau.jpg"
                    className="img-responsive"
                    style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  />
                  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px', fontStyle: 'italic' }}>
                    Thu mua bàn ghế, thiết bị quán nhậu nhanh gọn trong ngày
                  </p>
                </div>

                <h2 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '15px', color: '#0056b3', fontSize: '1.3rem' }}>
                  2. Lợi Ích Vượt Trội Khi Thanh Lý Quán Nhậu Tại Huy Hoàng
                </h2>
                <p style={{ marginBottom: '15px' }}>Đồ cũ của quán nhậu thường dễ bám dầu mỡ và hao mòn, nhưng Huy Hoàng cam kết thu mua với tiêu chí <strong>thuận mua vừa bán, không o ép khách hàng</strong>:</p>

                <ul style={{ marginBottom: '30px', paddingLeft: 0, listStyleType: 'none' }}>
                  <li style={{ marginBottom: '15px' }}>
                    ✔️ <strong>Bao tiêu trọn gói từ A-Z:</strong> Nhận thu mua kể cả phế liệu, đồ rách hỏng nhẹ. Bạn không cần phải phân loại hay dọn dẹp trước.
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    ✔️ <strong>Báo giá minh bạch:</strong> Kiểm tra chéo chất lượng từng loại bàn ghế, đời máy tủ lạnh để đưa ra mức giá cao nhất, sát với giá trị thực tế nhất.
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    ✔️ <strong>Tháo dỡ thần tốc:</strong> Sở hữu đội ngũ thợ lành nghề và dàn xe tải riêng, chúng tôi tự tháo dỡ bảng hiệu, máy lạnh, bếp khè an toàn mà không làm phiền hàng xóm.
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    ✔️ <strong>Tiền trao cháo múc:</strong> Chuyển khoản đủ 100% chi phí thanh lý ngay sau khi hai bên chốt giá và trước khi hàng được bốc lên xe.
                  </li>
                </ul>

                <h3 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '20px', color: '#0056b3', fontSize: '1.25rem' }}>
                  MỘT SỐ HÌNH ẢNH THU MUA QUÁN NHẬU THỰC TẾ:
                </h3>

                {/* Grid hình ảnh */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '15px',
                  marginBottom: '40px'
                }}>
                  <img alt="Thanh lý bàn ghế gỗ quán nhậu" src="/ban-ghe-quan-nhau.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Thu mua tủ mát đựng bia" src="/tu-mat-bia-cu.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Thu mua bếp khè công nghiệp" src="/bep-khe-quan-nhau.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  <img alt="Thanh lý đồ dùng quán ốc" src="/thu-mua-quan-oc.jpg" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
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
                    Khu Vực Phục Vụ Khảo Sát Tận Nơi
                  </h3>

                  <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '20px' }}>
                    Nhận định quán nhậu thường nằm rải rác ở nhiều con đường, ngõ hẻm, Đồ Cũ Huy Hoàng luôn sẵn sàng điều động nhân lực có mặt sớm nhất tại các khu vực:
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
                        <h4 style={{ fontWeight: 'bold', color: '#111', marginBottom: '8px', textTransform: 'uppercase' }}>Toàn Địa Bàn TP.HCM</h4>
                        <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                          Phủ sóng các cung đường sầm uất tại Quận 1, Quận 3, Quận 5, Quận 10, Phạm Văn Đồng (Thủ Đức), Gò Vấp, Bình Thạnh, Tân Phú...
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
                        <h4 style={{ fontWeight: 'bold', color: '#111', marginBottom: '8px', textTransform: 'uppercase' }}>Các Tỉnh Lân Cận</h4>
                        <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                          Sẵn sàng đưa xe tải lớn đi gom hàng tại Bình Dương, Biên Hòa (Đồng Nai), Long An và các tỉnh miền Tây lân cận.
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
                  <h4 style={{ fontWeight: 'bold', marginBottom: '15px', color: '#222' }}>ĐỒ CŨ HUY HOÀNG - CHUYÊN THANH LÝ QUÁN NHẬU</h4>
                  <p style={{ marginBottom: '8px' }}>📍 <strong>Cơ sở 1:</strong> 21/18B Nơ Trang Long, Phường 13, Quận Bình Thạnh, TP Hồ Chí Minh</p>
                  <p style={{ marginBottom: '8px' }}>📍 <strong>Cơ sở 2:</strong> 10 Bình Long, Phường Phú Thạnh, Quận Bình Tân, TP.HCM</p>
                  <p style={{ marginTop: '15px', marginBottom: '0', fontSize: '1.1rem' }}>
                    📞 <strong>Hotline thu mua 24/7:</strong> <span style={{ color: '#dc3545', fontWeight: 'bold', fontSize: '1.3rem' }}>0909 549 237</span> (Huy Hoàng)
                  </p>
                  <p style={{ marginTop: '8px', fontSize: '0.95rem', color: '#666', fontStyle: 'italic' }}>* Quý khách kết bạn Zalo số trên, quay một đoạn video ngắn toàn cảnh quán để được báo giá online ngay lập tức nhé!</p>
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