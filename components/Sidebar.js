import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  return (
    // BỎ md:w-1/4 Ở ĐÂY ĐI NHÉ! Chỉ giữ lại w-full thôi.
    <div className="w-full">

      {/* Box 1: Thu Mua Cửa Cũ */}
      <div className="mb-8 bg-white border border-gray-200 rounded-sm overflow-hidden">
        <div className="bg-[#880d11] text-white p-3">
          <h4 className="text-base font-bold text-center m-0 capitalize tracking-wide">Thu Mua Cửa Cũ</h4>
        </div>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-cua-go" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-cua-go.jpg" alt="Thu Mua Cửa Gỗ" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Cửa Gỗ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-cua-sat" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-cua-sat-cu.jpg" alt="Thu Mua Cửa Sắt" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Cửa Sắt</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-cua-nhom" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-cua-nhom-xingfa.jpg" alt="Thu Mua Cửa Nhôm" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Cửa Nhôm</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-cua-cuon" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-cua-cuon-cu.jpg" alt="Thu Mua Cửa Cuốn" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Cửa Cuốn</h6>
            </Link>
          </li>
          <li className="p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-cong-nhom" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-cong-nhom-duc.jpg" alt="Thu Mua Cổng Nhôm Đúc" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Cổng Nhôm Đúc</h6>
            </Link>
          </li>
        </ul>
      </div>

      {/* Box 2 : Thu Mua Đồ Cũ */}
      <div className="mb-8 bg-white border border-gray-200 rounded-sm overflow-hidden">
        <div className="bg-[#880d11] text-white p-3">
          <h4 className="text-base font-bold text-center m-0 capitalize tracking-wide">Thu Mua Đồ Cũ</h4>
        </div>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-cua-cu-gia-cao" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-cua-cu-gia-cao.jpg" alt="Thu Mua Cửa Cũ" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Cửa Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-tu-bep" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-tu-bep-cu.jpg" alt="Thu Mua Tủ Bếp Cũ" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Tủ Bếp Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-do-go" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-do-go-cu.jpg" alt="Thu Mua Đồ Gỗ Cũ" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Đồ Gỗ Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-thiet-bi-ve-sinh" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-thiet-bi-ve-sinh-cu.jpg" alt="Mua Thiết Bị Vệ Sinh Cũ" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Mua Thiết Bị Vệ Sinh Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-ton-cu" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-ton-cu.jpg" alt="Thu Mua Tôn Cũ" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Tôn Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-xac-nha-xuong" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-xac-nha-kho-xuong.jpg" alt="Thu Mua Xác Nhà Xưởng" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Xác Nhà Xưởng</h6>
            </Link>
          </li>
          <li className="p-3 hover:bg-gray-50 transition-colors">
            <Link href="/thu-mua-ban-ghe-go" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-ban-ghe-go-cu.jpg" alt="Thu Mua Bàn Ghế Gỗ Cũ" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight">Thu Mua Bàn Ghế Gỗ Cũ</h6>
            </Link>
          </li>
        </ul>
      </div>

      {/* Box 3: Tin Tức Mới Nhất */}
      <div className="mb-8 bg-white border border-gray-200 rounded-sm overflow-hidden">
        <div className="bg-[#880d11] text-white p-3">
          <h4 className="text-base font-bold text-center m-0 uppercase tracking-wide">Tin Tức Mới Nhất</h4>
        </div>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/tin-tuc/thu-mua-do-cu-uy-tin-tphcm" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-do-cu-uy-tin-hcm.jpeg" alt="Tin tức 1" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight line-clamp-2">Đơn Vị Thu Mua Đồ Cũ Uy Tín Tại TP.HCM</h6>
            </Link>
          </li>
          <li className="p-3 hover:bg-gray-50 transition-colors">
            <Link href="/tin-tuc/thu-mua-bon-cau-cu-thiet-bi-ve-sinh" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thu-mua-thiet-bi-ve-sinh-viet-anh.jpg" alt="Tin tức 2" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#880d11] transition-colors leading-tight line-clamp-2">Thu Mua Thiết Bị Vệ Sinh, Phế Liệu Giá Cao Tại TP.HCM</h6>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}