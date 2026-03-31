import Head from "next/head";
import Link from "next/link";

export default function NewsPage() {

  const news = [
    {
      id: 1,
      title: "Lưu Ý Khi Thanh Lý Nhà Hàng Khách Sạn",
      desc: "Thanh lý nhà hàng, khách sạn trọn gói cần lưu ý những gì để tránh mất oan tiền tỷ?",
      image: "/thanh-ly-nha-hang.jpg",
      slug: "/tin-tuc/kinh-nghiem-thanh-ly-nha-hang"
    },
    {
      id: 2,
      title: "Kinh Nghiệm Thanh Lý Đồ Cũ Giá Cao Tại TPHCM",
      desc: "Bí quyết thanh lý đồ cũ gia đình, đồ văn phòng, bàn ghế quán cafe với giá cao nhất TPHCM",
      image: "/khach-san.jpg",
      slug: "/tin-tuc/kinh-nghiem-thanh-ly-do-go"
    }
  ];

  return (
    <>
      <Head>
        <title>Tin Tức Thu Mua Đồ Cũ | Huy Hoàng</title>
        <meta
          name="description"
          content="Cập nhật tin tức thu mua đồ cũ, kinh nghiệm thanh lý nhà xưởng, cửa cũ, thiết bị vệ sinh giá cao tại TP.HCM."
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-grow">
          {/* HERO */}
          <section className="pt-10 pb-4 md:pt-10 md:pb-4 bg-white text-center">
            <div className="max-w-[900px] mx-auto px-6">
              <h1 className="text-3xl md:text-5xl font-black text-[#111827] mb-4">
                Tin Tức <span className="text-[#dc3545]">Huy Hoàng</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Cập nhật kiến thức, kinh nghiệm thu mua đồ cũ và thanh lý tài sản giá cao
              </p>
            </div>
          </section>

          {/* GRID */}
          <section className="pb-8 md:pb-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                {news.map((item) => (
                  <Link
                    key={item.id}
                    href={item.slug}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(224,138,13,0.15)] transition-all duration-300"
                  >

                    {/* IMAGE - ĐÃ TĂNG CHIỀU CAO TRÊN DESKTOP */}
                    <div className="relative h-52 md:h-72 lg:h-80 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        // w-full h-full object-cover là bắt buộc để ảnh ko bị méo
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <span className="text-xs text-[#dc3545] font-bold uppercase tracking-wider">
                        Tin tức
                      </span>

                      <h2 className="font-black text-xl text-[#111827] mt-2 mb-3 line-clamp-2 group-hover:text-[#dc3545] transition-colors">
                        {item.title}
                      </h2>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {item.desc}
                      </p>

                      <div className="text-[#dc3545] font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#b02a37]">
                        Xem chi tiết
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>

                  </Link>
                ))}

              </div>

            </div>
          </section>

        </main>
      </div>
    </>
  );
}