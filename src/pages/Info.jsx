import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold mb-6 tracking-tight  text-gray-900">
            Jelajahi Indonesia Dengan Lebih Mudah
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Platform sederhana untuk menemukan informasi wilayah Indonesia
            secara cepat, terstruktur, dan mudah dipahami. Dari provinsi hingga
            kabupaten dalam satu tempat.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 border border-gray-200 rounded-xl hover:border-red-500 hover:shadow-md transition-all duration-300">
            <h2 className="text-lg font-semibold mb-2  text-red-900">
              Data Terstruktur
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Informasi wilayah disusun secara hierarki sehingga mudah dipahami
              dan digunakan dalam berbagai kebutuhan.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:border-red-500 hover:shadow-md transition-all duration-300">
            <h2 className="text-lg font-semibold mb-2  text-red-900">
              Akses Cepat
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Navigasi yang ringan dan responsif memungkinkan Anda menjelajahi
              data tanpa hambatan.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:border-red-500 hover:shadow-md transition-all duration-300">
            <h2 className="text-lg font-semibold mb-2  text-red-900">
              Pencarian Praktis
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Temukan wilayah dengan cepat menggunakan fitur pencarian yang
              sederhana dan efisien.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:border-red-500 hover:shadow-md transition-all duration-300">
            <h2 className="text-lg font-semibold mb-2  text-red-900">
              Tampilan Modern
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Desain minimalis yang fokus pada kenyamanan pengguna dan kemudahan
              navigasi.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-start">
          <div className="p-10 border border-gray-200 rounded-2xl max-w-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 tracking-tight">
              Mulai Eksplorasi
            </h3>

            {/* Subtitle */}
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Jelajahi data wilayah Indonesia dengan tampilan yang sederhana dan
              mudah dipahami.
            </p>

            {/* Button */}
            <Link
              to="/provinsi"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Jelajahi Sekarang
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
