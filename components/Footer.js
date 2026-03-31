import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-[#0a0d14] pt-20 pb-8 font-sans text-gray-300 border-t-[6px] border-[#dc3545] relative overflow-hidden">

      {/* Background decoration - Quầng sáng mờ ảo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#dc3545]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#dc3545]/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">

        {/* === LƯỚI FOOTER CHÍNH (Chia tỷ lệ 4-3-5) === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* CỘT 1: LOGO & GIỚI THIỆU (Chiếm 4 cột) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white px-4 py-3 rounded-xl shadow-lg inline-block w-max border-b-4 border-[#dc3545]">
              <div className="relative w-[180px] h-[50px]">
                <Image src="/logo-do-cu-huy-hoang.jpg" alt="Đồ Cũ Huy Hoàng" fill className="object-contain" unoptimized={true} quality={100} />
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-[15px] text-justify mt-2">
              <strong className="text-white">Đồ Cũ Huy Hoàng</strong> tự hào là tổng kho thu mua, thanh lý nội thất, máy móc, nhà hàng, quán ăn trọn gói với giá cao nhất tại TP.HCM. Chữ Tín làm đầu, không ép giá khách hàng.
            </p>

            {/* Nút Liên Hệ Nhanh kiểu mới */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <a href="tel:0909549237" className="inline-flex items-center gap-2 bg-[#dc3545] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#b00000] transition-all shadow-[0_4px_15px_rgba(220,53,69,0.3)] hover:-translate-y-1">
                <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0909.549.237
              </a>
            </div>
          </div>

          {/* CỘT 2: DỊCH VỤ NỔI BẬT (Chiếm 3 cột) */}
          <div className="lg:col-span-3 lg:pl-6">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider relative inline-block">
              Dịch Vụ Nổi Bật
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#dc3545] rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-[15px] font-medium text-gray-400">
              {[
                { title: "Thu Mua Nội Thất Khách Sạn", href: "/thu-mua-noi-that-khach-san" },
                { title: "Thanh Lý Quán Cafe", href: "/thanh-ly-quan-ca-phe" },
                { title: "Thanh Lý Nhà Hàng, Quán Ăn", href: "/thanh-ly-nha-hang" },
                { title: "Thu Mua Tủ Đông, Tủ Mát", href: "/thu-mua-tu-dong-tu-mat" },
                { title: "Thu Mua Đồ Inox Công Nghiệp", href: "/thu-mua-do-inox-cu" }
              ].map((svc, idx) => (
                <li key={idx}>
                  <Link href={svc.href} className="flex items-center gap-2 hover:text-white hover:pl-2 transition-all duration-300 group">
                    <svg className="w-4 h-4 text-[#dc3545] opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
=======
    <footer className="bg-[#1a1515] pt-16 pb-8 font-sans text-gray-100 border-t-4 border-[#880d11] relative overflow-hidden">

      {/* Background decoration - Giữ nguyên hiệu ứng mờ đỏ */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#880d11]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#880d11]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

        {/* === PHẦN TRÊN: BOX LIÊN HỆ NỔI BẬT (Ngắt khỏi cột 1) === */}
        <div className="bg-[#111827]/50 border border-white/10 rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-shrink-0">
            {/* Logo đã được chuyển lên đây để cân đối với khung liên hệ */}
            <div className="bg-white px-5 py-3 rounded-xl shadow-lg relative w-[180px] h-[50px]">
              <Image src="/logo-dai-do-cu-vui-hung.png" alt="Đồ Cũ Vui Hùng" fill className="object-contain" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
            {/* Box Email */}
            <a href="mailto:docuvuihung@gmail.com" className="flex items-center gap-4 group">
              <div className="bg-[#710a0d] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg border border-[#880d11]">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Gửi Email</p>
                <span className="text-white font-medium text-[15px] group-hover:text-[#ff3d44] transition-colors">docuvuihung@gmail.com</span>
              </div>
            </a>

            {/* Box Hotline */}
            <a href="tel:0979095076" className="flex items-center gap-4 group">
              <div className="bg-[#880d11] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform relative shadow-lg">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#880d11] opacity-50"></span>
                <svg className="w-5 h-5 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Hotline 24/7</p>
                <span className="text-white font-black text-[18px] tracking-wider group-hover:text-[#ff3d44] transition-colors">0979.095.076</span>
              </div>
            </a>
          </div>
        </div>

        {/* === PHẦN DƯỚI: LƯỚI CHIA 3 CỘT (Đã cân bằng chiều cao) === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">

          {/* Cột 1: Giới thiệu (Đã gọt gọn) */}
          <div className="transition-transform duration-300">
            <h3 className="text-white font-black text-[18px] md:text-[20px] mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-2 h-6 bg-[#880d11] rounded-sm inline-block"></span>
              Về Chúng Tôi
            </h3>
            <p className="text-gray-300 leading-relaxed text-[15px] text-justify drop-shadow-sm">
              <strong className="text-white">Đồ Cũ Vui Hùng</strong> là đơn vị hàng đầu chuyên thu mua đồ cũ, cửa cũ, đồ gỗ, và nhận thanh lý nhà hàng, quán ăn, khách sạn, kho xưởng với giá cao nhất tại TP.HCM.
            </p>
            <p className="text-gray-300 leading-relaxed text-[15px] mt-4 border-l-2 border-[#880d11] pl-4 italic">
              Phương châm làm việc: <span className="text-[#ff3d44] font-bold">Uy tín - Nhanh chóng - Chuyên nghiệp.</span>
            </p>
          </div>

          {/* Cột 2: Hệ Thống Cửa Hàng */}
          <div className="transition-transform duration-300">
            <h3 className="text-white font-black text-[18px] md:text-[20px] mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-2 h-6 bg-[#880d11] rounded-sm inline-block"></span>
              Hệ Thống Cửa Hàng
            </h3>
            <ul className="space-y-5 text-gray-100 text-[14px] md:text-[15px]">
              {[
                { label: "Địa Chỉ 1", addr: "305 Tân Sơn, P.15, Tân Bình, HCM" },
                { label: "Địa Chỉ 2", addr: "669 Kha Vạn Cân, Thủ Đức, HCM" },
                { label: "Địa Chỉ 3", addr: "332a Huỳnh Tấn Phát, Q.7, HCM" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group cursor-default">
                  <div className="bg-[#880d11] mt-1 p-1.5 rounded-lg shadow-md flex-shrink-0 group-hover:bg-[#ff3d44] transition-all">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="drop-shadow-sm leading-snug">
                    <strong className="text-white block sm:inline font-bold uppercase text-[13px]">{item.label}:</strong> {item.addr}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Dịch vụ mới nhất */}
          <div className="transition-transform duration-300">
            <h3 className="text-white font-black text-[18px] md:text-[20px] mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-2 h-6 bg-[#880d11] rounded-sm inline-block"></span>
              Dịch Vụ Nổi Bật
            </h3>
            <ul className="space-y-4 text-white text-[15px] font-medium">
              {[
                { title: "Thu Mua Đồ Cũ Giá Cao", href: "/thu-mua-cong-nhom-duc" },
                { title: "Thu Mua Tủ Mát - Tủ Đông", href: "/thu-mua-tu-dong-cu" },
                { title: "Thu Mua Đồ Inox", href: "/thu-mua-do-inox-cu" },
                { title: "Thu Mua Tủ Thờ Gỗ Cũ", href: "/thu-mua-tu-tho-go-cu" },
                { title: "Thanh Lý Quán Ăn, Nhà Hàng", href: "/thanh-ly-nha-hang" }
              ].map((svc, idx) => (
                <li key={idx}>
                  <Link href={svc.href} className="flex items-center gap-3 hover:text-[#ff3d44] hover:translate-x-2 transition-all group">
                    <span className="w-2 h-2 rounded-full bg-[#880d11] group-hover:bg-[#ff3d44] transition-colors shadow-sm"></span>
>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* CỘT 3: THÔNG TIN LIÊN HỆ & ĐỊA CHỈ (Chiếm 5 cột) */}
          <div className="lg:col-span-5">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider relative inline-block">
              Hệ Thống Chi Nhánh
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#dc3545] rounded-full"></span>
            </h3>

            <div className="space-y-4 text-[14px]">
              {/* Thẻ Địa Chỉ 1 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#dc3545]/50 hover:bg-white/10 transition-colors group">
                <div className="bg-[#dc3545]/20 p-2.5 rounded-lg text-[#dc3545] flex-shrink-0 mt-0.5 group-hover:bg-[#dc3545] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <strong className="text-white block mb-1 text-[15px]">Chi nhánh 1 (Tân Bình):</strong>
                  <span className="text-gray-400 leading-relaxed">88 Phạm Văn Bạch, P. 15, Quận Tân Bình, TP. Hồ Chí Minh</span>
                </div>
              </div>
              {/* Thẻ Địa Chỉ 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#dc3545]/50 hover:bg-white/10 transition-colors group">
                <div className="bg-[#dc3545]/20 p-2.5 rounded-lg text-[#dc3545] flex-shrink-0 mt-0.5 group-hover:bg-[#dc3545] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <strong className="text-white block mb-1 text-[15px]">Chi nhánh 2 (Bình Thạnh):</strong>
                  <span className="text-gray-400 leading-relaxed">21/18B Nơ Trang Long, P. 13, Quận Bình Thạnh, TP. Hồ Chí Minh</span>
                </div>
              </div>

              {/* Thẻ Địa Chỉ 3*/}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#dc3545]/50 hover:bg-white/10 transition-colors group">
                <div className="bg-[#dc3545]/20 p-2.5 rounded-lg text-[#dc3545] flex-shrink-0 mt-0.5 group-hover:bg-[#dc3545] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <strong className="text-white block mb-1 text-[15px]">Chi nhánh 3 (Bình Tân):</strong>
                  <span className="text-gray-400 leading-relaxed">10 Bình Long, Phường Phú Thạnh, Quận Bình Tân, TP. Hồ Chí Minh</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* === DÒNG BẢN QUYỀN === */}
        <div className="border-t border-white/10 pt-6 flex flex-col items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            Copyright © {new Date().getFullYear()} <strong className="text-white">Đồ Cũ Huy Hoàng</strong>. All rights reserved.
          </p>
        </div>

      </div>

      <a href="/admin-dashboard-access" style={{ display: 'none' }} aria-hidden="true">Admin Login</a>
=======
        </div>

        {/* === DÒNG BẢN QUYỀN === */}
        <div className="border-t border-white/10 pt-8 pb-2 text-center flex flex-col items-center">
          <p className="text-gray-400 text-[14px]">
            Copyright © {new Date().getFullYear()} <span className="text-[#ff3d44] font-bold tracking-wider">ĐỒ CŨ VUI HÙNG</span>. All rights reserved.
          </p>
        </div>
      </div>
      <a
        href="/admin-dashboard-access"
        style={{ display: 'none' }}
        aria-hidden="true"
      >
        Admin Login
      </a>

>>>>>>> eae833ececbb6564c0cdcdd5313023d18a7c1615
    </footer>
  );
}