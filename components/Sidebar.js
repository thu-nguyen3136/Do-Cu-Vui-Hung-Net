import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  const services = [
    { title: 'Thu Mua Nội Thất Khách Sạn', image: '/thu-mua-noi-that-khach-san.jpg', link: '/thu-mua-noi-that-khach-san' },
    { title: 'Thanh Lý Quán Cafe', image: '/thanh-ly-quan-cafe.jpg', link: '/thanh-ly-quan-ca-phe' },
    { title: 'Thanh Lý Quán Ăn', image: '/thanh-ly-quan-an.jpg', link: '/thanh-ly-quan-an' },
    { title: 'Thanh Lý Quán Nhậu', image: '/thanh-ly-quan-nhau.jpg', link: '/thanh-ly-quan-nhau' },
    { title: 'Thanh Lý Nhà Hàng', image: '/thanh-ly-nha-hang.jpg', link: '/thanh-ly-nha-hang' },
    { title: 'Thanh Lý Quán Phở', image: '/thanh-ly-quan-pho.jpg', link: '/thanh-ly-quan-pho' },
    { title: 'Thanh Lý Quán Trà Sữa', image: '/thanh-ly-quan-tra-sua.jpg', link: '/thanh-ly-quan-tra-sua' },
    { title: 'Thu Mua Tủ Đông, Tủ Mát', image: '/thu-mua-tu-dong-tu-mat.jpg', link: '/thu-mua-tu-dong-tu-mat' },
    { title: 'Thu Mua Đồ Inox Cũ', image: '/thanh-ly-do-inox.jpg', link: '/thu-mua-do-inox-cu' },
  ];

  return (
    // BỎ md:w-1/4 Ở ĐÂY ĐI NHÉ! Chỉ giữ lại w-full thôi.
    <div className="w-full">

      {/* Box 1: Thu Mua Đồ Cũ */}
      <div className="mb-8 bg-white border border-gray-200 rounded-sm overflow-hidden">
        <div className="bg-[#dc3545] text-white p-3">
          <h4 className="text-base font-bold text-center m-0 capitalize tracking-wide">Thu Mua Đồ Cũ</h4>
        </div>
        <ul className="list-none p-0 m-0">
          {services.map((svc, index) => (
            <li key={index} className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
              <Link href={svc.link} className="flex items-center gap-3 group">
                <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                  <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                </div>
                <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#dc3545] transition-colors leading-tight">{svc.title}</h6>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Box 2: Tin Tức Mới Nhất */}
      <div className="mb-8 bg-white border border-gray-200 rounded-sm overflow-hidden">
        <div className="bg-[#dc3545] text-white p-3">
          <h4 className="text-base font-bold text-center m-0 uppercase tracking-wide">Tin Tức Mới Nhất</h4>
        </div>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-100 p-3 hover:bg-gray-50 transition-colors">
            <Link href="/tin-tuc/kinh-nghiem-thanh-ly-do-go" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/khach-san.jpg" alt="Tin tức 1" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#dc3545] transition-colors leading-tight line-clamp-2">Kinh Nghiệm Thanh Lý Đồ Cũ Tại TP.HCM</h6>
            </Link>
          </li>
          <li className="p-3 hover:bg-gray-50 transition-colors">
            <Link href="/tin-tuc/kinh-nghiem-thanh-ly-nha-hang" className="flex items-center gap-3 group">
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image src="/thanh-ly-nha-hang.jpg" alt="Tin tức 2" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h6 className="text-[14px] text-gray-800 m-0 font-medium group-hover:text-[#dc3545] transition-colors leading-tight line-clamp-2">Lưu Ý Khi Thanh Lý Nhà Hàng Khách Sạn</h6>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}