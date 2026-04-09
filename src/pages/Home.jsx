import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="px-6 py-20 max-w-7xl mx-auto">

        {/* HERO */}
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6  text-black">
            Temukan Data Wilayah <br />
            <span className="text-red-500">Indonesia</span> dengan Mudah
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mb-10 leading-relaxed">
            Cari, telusuri, dan pahami struktur wilayah Indonesia dari pulau
            sampai kabupaten. Semuanya disusun rapi, cepat diakses, dan siap
            dipakai untuk kebutuhan kamu.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/provinsi"
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Mulai dari Provinsi
            </Link>

            <Link
              to="/pulau"
              className="px-6 py-3 border border-black text-black rounded-lg hover:border-red-500 hover:text-red-500 transition-all duration-300"
            >
              Lihat Pulau
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 h-[2px] w-20 bg-red-500"></div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="group border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-red-500 mb-1 group-hover:scale-110 transition">
              7
            </div>
            <div className="text-gray-500 text-sm">Pulau Besar</div>
          </div>

          <div className="group border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold mb-1 group-hover:text-red-500 transition">
              34
            </div>
            <div className="text-gray-500 text-sm">Provinsi Aktif</div>
          </div>

          <div className="group border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold mb-1 group-hover:text-red-500 transition">
              500+
            </div>
            <div className="text-gray-500 text-sm">Kabupaten & Kota</div>
          </div>

          <div className="group border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-red-500 mb-1 group-hover:scale-110 transition">
              100%
            </div>
            <div className="text-gray-500 text-sm">Struktur Valid</div>
          </div>

        </div>

        {/* EXTRA SECTION */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Navigasi wilayah tanpa ribet
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Dari provinsi ke kabupaten, semua tersusun berurutan.
              Gak perlu bingung lagi soal struktur wilayah. Tinggal klik,
              data langsung muncul.
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <p className="text-sm text-gray-500 mb-2">Contoh alur:</p>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-red-500">Jawa Barat</span>
              <span className="text-gray-400">→</span>
              <span>Kabupaten Bandung</span>
              <span className="text-gray-400">→</span>
              <span>Soreang</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;