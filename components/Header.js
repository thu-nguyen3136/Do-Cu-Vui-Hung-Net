'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Link dùng chung để dễ quản lý
  const navLinkClass = "text-brand-600 hover:text-red-500 font-bold py-2 px-2 xl:px-4 transition-all duration-300 relative group flex items-center";
  const subMenuLinkClass = "px-5 py-1 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-7 transition-all duration-300 block";

  return (
    <header className="w-full sticky top-0 z-[100] shadow-md font-sans bg-white">
      {/* --- MENU CHÍNH --- */}
      <nav className="border-b border-gray-100 relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex justify-between items-stretch h-[65px] md:h-[80px]">

          {/* 1. Nút Mobile Menu */}
          <button
            className="lg:hidden text-brand-600 hover:text-red-600 transition z-[110] self-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* 2. LOGO */}
          <Link href="/" className="flex items-center relative z-[100] lg:static lg:translate-x-0 absolute left-1/2 -translate-x-1/2 self-center">
            {/* Đã tăng w-40 lên w-52 và h-10 lên h-12 cho mobile để khung rộng hơn */}
            <div className="relative w-70 h-12 md:w-64 md:h-16">
              <Image
                src="/logo-dai-do-cu-vui-hung.png"
                alt="Logo Đồ Cũ Vui Hùng"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </Link>

          {/* 3. Menu Desktop */}
          <ul className="hidden lg:flex items-stretch space-x-1 font-bold text-[13px] xl:text-[14px] uppercase tracking-wide h-full">
            <li className="h-full flex items-center">
              <Link href="/" className={navLinkClass}>Trang chủ</Link>
            </li>
            <li className="h-full flex items-center">
              <Link href="/gioi-thieu" className={navLinkClass}>Giới Thiệu</Link>
            </li>

            {/* Submenu: Thu Mua Đồ Cũ */}
            <li className="relative group h-full cursor-pointer flex items-center">
              <div className={navLinkClass}>
                Thu Mua Đồ Cũ
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
                {/* Đường gạch chân trang trí khi hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
              </div>

              <div className="absolute left-0 top-[100%] w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-2">
                <ul className="bg-white border-t-4 border-brand-600 shadow-xl rounded-b-lg overflow-hidden border-x border-b border-gray-100">
                  <li><Link href="/thu-mua-tu-dong-cu" className={subMenuLinkClass}>Thu mua tủ đông cũ</Link></li>
                  <li><Link href="/thu-mua-tu-mat-cu" className={subMenuLinkClass}>Thu mua tủ mát cũ</Link></li>
                  <li><Link href="/thu-mua-do-inox-cu" className={subMenuLinkClass}>Thu mua đồ inox cũ</Link></li>
                  <li><Link href="/thu-mua-do-cu-gia-cao-tai-tphcm" className={subMenuLinkClass}>Thu mua đồ cũ giá cao tại tphcm</Link></li>
                  <li><Link href="/thanh-ly-nha-hang" className={subMenuLinkClass}>Thanh lý nhà hàng</Link></li>
                  <li><Link href="/thanh-ly-quan-an" className={subMenuLinkClass}>Thanh lý quán ăn</Link></li>
                  <li><Link href="/thanh-ly-quan-nhau" className={subMenuLinkClass}>Thanh lý quán nhậu</Link></li>
                  <li><Link href="/thanh-ly-quan-ca-phe" className={subMenuLinkClass}> Thanh lý quán cafe</Link></li>
                  <li><Link href="/thanh-ly-nha-nghi-khach-san" className={subMenuLinkClass}>Thanh lý nhà nghỉ, khách sạn</Link></li>
                </ul>
              </div>
            </li>

            {/* Submenu: Thu Mua Đồ Cũ */}
            <li className="relative group h-full cursor-pointer flex items-center">
              <div className={navLinkClass}>
                Thu Mua Đồ Gỗ Cũ
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
              </div>
              <div className="absolute left-0 top-[100%] w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-2">
                <ul className="bg-white border-t-4 border-brand-600 shadow-xl rounded-b-lg overflow-hidden border-x border-b border-gray-100">
                  <li><Link href="/thu-mua-tu-tho-go-cu" className={subMenuLinkClass}>Thu mua tủ thờ gỗ cũ</Link></li>
                  <li><Link href="/thu-mua-ban-ghe-go-cu" className={subMenuLinkClass}>Thu mua bàn ghế gỗ cũ</Link></li>
                  <li><Link href="/thu-mua-do-go-cu" className={subMenuLinkClass}>Thu mua đồ gỗ cũ</Link></li>
                </ul>
              </div>
            </li>

            <li className="h-full flex items-center">
              <Link href="/tin-tuc" className={navLinkClass}>Tin Tức</Link>
            </li>
            <li className="h-full flex items-center">
              <Link href="/lien-he" className={navLinkClass}>Liên Hệ</Link>
            </li>
          </ul>
        </div>

        {/* --- MOBILE MENU --- */}
        <div className={`fixed inset-0 bg-black/60 z-[140] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)} />

        <div className={`fixed top-0 left-0 w-[85%] max-w-[320px] h-full bg-white z-[150] lg:hidden transition-transform duration-500 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full p-0">
            {/* Header Mobile Menu */}
            <div className="bg-brand-600 p-6 flex justify-between items-center text-white">
              <div className="font-bold italic text-xl">MENU</div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/10 rounded-full transition">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* List links mobile */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
              <ul className="flex flex-col space-y-0.5 font-bold text-gray-800 uppercase text-[14px]">
                <li><Link href="/" className="block py-2 px-3 border-b border-gray-50 hover:text-brand-600" onClick={() => setIsOpen(false)}>Trang chủ</Link></li>
                <li><Link href="/gioi-thieu" className="block py-2 px-3 border-b border-gray-50 hover:text-brand-600" onClick={() => setIsOpen(false)}>Giới Thiệu</Link></li>

                <li className="py-2 px-3 text-brand-600 text-[12px] font-black border-b border-gray-50 bg-gray-50/50">Thu Mua Đồ Cũ</li>
                <ul className="pl-4">
                  <li><Link href="/thu-mua-tu-dong-cu" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu mua tủ đông cũ</Link></li>
                  <li><Link href="/thu-mua-tu-mat-cu" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu mua tủ mát cũ</Link></li>
                  <li><Link href="/thu-mua-do-inox-cu" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu mua đồ inox cũ</Link></li>
                  <li><Link href="/thu-mua-do-cu-gia-cao-tai-tphcm" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu mua đồ cũ giá cao tại tphcm</Link></li>
                  <li><Link href="/thanh-ly-nha-hang" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh lý nhà hàng</Link></li>
                  <li><Link href="/thanh-ly-quan-an" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh lý quán ăn</Link></li>
                  <li><Link href="/thanh-ly-quan-nhau" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh lý quán nhậu</Link></li>
                  <li><Link href="/thanh-ly-quan-ca-phe" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh lý quán cafe</Link></li>
                  <li><Link href="/thanh-ly-nha-nghi-khach-san" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thanh lý nhà nghỉ, khách sạn</Link></li>
                </ul>

                <li className="py-2 px-3 text-brand-600 text-[12px] font-black border-b border-gray-50 bg-gray-50/50">Thu Mua Đồ Gỗ Cũ</li>
                <ul className="pl-4">
                  <li><Link href="/thu-mua-tu-tho-go-cu" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu mua tủ thờ gỗ cũ</Link></li>
                  <li><Link href="/thu-mua-ban-ghe-go-cu" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu mua bàn ghế gỗ cũ</Link></li>
                  <li><Link href="/thu-mua-do-go-cu" className="block py-0.5 px-3 text-[13px] normal-case font-semibold border-b border-gray-50" onClick={() => setIsOpen(false)}>Thu mua đồ gỗ cũ</Link></li>
                </ul>

                <li><Link href="/tin-tuc" className="block py-2 px-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Tin Tức</Link></li>
                <li><Link href="/lien-he" className="block py-2 px-3 border-b border-gray-50" onClick={() => setIsOpen(false)}>Liên Hệ</Link></li>
              </ul>
            </div>

            {/* Button call mobile */}
            <div className="p-4 bg-gray-50">
              <a href="tel:0988257479" className="block w-full bg-brand-600 text-white text-center py-4 rounded-xl font-bold shadow-lg hover:bg-brand-700 transition">
                GỌI BÁO GIÁ NGAY
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}