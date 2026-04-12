import { useParams, Link } from "react-router-dom";
import { islands } from "../data/islands";

const Island = () => {
  const { id } = useParams();
  const island = islands.find((i) => i.id === id);

  if (!island) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8">
        <div className="text-center p-10 border border-gray-200 rounded-2xl max-w-md bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-red-500 mb-3">
            Data tidak ditemukan
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Halaman yang kamu cari tidak tersedia.
          </p>
          <Link
            to="/pulau"
            className="px-5 py-2 text-sm border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            Kembali
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold mt-4 mb-3 tracking-tight text-red-400 text-center">
            {island.name}
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto text-center leading-relaxed">
            {" "}
            Informasi singkat mengenai karakteristik, wilayah, dan potensi dari{" "}
            {island.name}.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 border border-gray-200 rounded-xl text-center hover:border-red-500 transition">
            <p className="font-semibold">{island.area}</p>
            <span className="text-xs text-gray-500">Luas</span>
          </div>

          <div className="p-5 border border-gray-200 rounded-xl text-center hover:border-red-500 transition">
            <p className="font-semibold">{island.population}</p>
            <span className="text-xs text-gray-500">Populasi</span>
          </div>

          <div className="p-5 border border-gray-200 rounded-xl text-center hover:border-red-500 transition">
            <p className="font-semibold">{island.provinces.length}</p>
            <span className="text-xs text-gray-500">Provinsi</span>
          </div>

          <div className="p-5 border border-gray-200 rounded-xl text-center hover:border-red-500 transition">
            <p className="font-semibold">{island.capital}</p>
            <span className="text-xs text-gray-500">Pusat</span>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Tempat Wisata
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {island.touristAttractions.map((item, i) => (
              <div
                key={i}
                className="p-5 border border-gray-200 rounded-xl hover:border-red-500 hover:shadow-sm transition"
              >
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-xs text-red-500 mb-2">{item.location}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Budaya & Tradisi
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold mb-3">Tarian</h3>
              {island.culture.traditionalDance.map((item, i) => (
                <p key={i} className="text-sm text-gray-500">
                  • {item}
                </p>
              ))}
            </div>

            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold mb-3">Musik</h3>
              {island.culture.traditionalMusic.map((item, i) => (
                <p key={i} className="text-sm text-gray-500">
                  • {item}
                </p>
              ))}
            </div>

            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold mb-3">Festival</h3>
              {island.culture.festivals.map((item, i) => (
                <p key={i} className="text-sm text-gray-500">
                  • {item}
                </p>
              ))}
            </div>

            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold mb-3">Kuliner</h3>
              {island.culture.cuisine.map((item, i) => (
                <p key={i} className="text-sm text-gray-500">
                  • {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Aktivitas Ekonomi
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold mb-3">Industri</h3>
              {island.economy.mainIndustries.map((item, i) => (
                <p key={i} className="text-sm text-gray-500">
                  • {item}
                </p>
              ))}
            </div>

            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold mb-3">Pertanian</h3>
              {island.economy.agriculture.map((item, i) => (
                <p key={i} className="text-sm text-gray-500">
                  • {item}
                </p>
              ))}
            </div>

            <div className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold mb-3">Produk</h3>
              {island.economy.famousProducts.map((item, i) => (
                <p key={i} className="text-sm text-gray-500">
                  • {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-red-500">Geografi</h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="p-5 border border-gray-200 rounded-xl text-center">
              <p className="font-semibold">{island.geography.highestPoint}</p>
              <span className="text-xs text-gray-500">Tertinggi</span>
            </div>

            <div className="p-5 border border-gray-200 rounded-xl text-center">
              <p className="font-semibold">{island.geography.climate}</p>
              <span className="text-xs text-gray-500">Iklim</span>
            </div>

            <div className="p-5 border border-gray-200 rounded-xl text-center">
              <p className="font-semibold">{island.geography.terrain}</p>
              <span className="text-xs text-gray-500">Topografi</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-red-500">
            Provinsi di {island.name}
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {island.provinces.map((item, i) => (
              <div
                key={i}
                className="p-4 border border-gray-200 rounded-lg text-sm text-gray-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-red-500">Bahasa</h2>

          <div className="flex flex-wrap gap-2">
            {island.languages.map((lang, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs border border-gray-300 rounded-full text-gray-600"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            to="/pulau"
            className="px-6 py-2 text-sm border border-gray-300 rounded-lg hover:border-red-500 hover:text-red-500 transition"
          >
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Island;
