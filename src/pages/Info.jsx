import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">
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
      </div>
    </div>
  );
};

export default Home;
