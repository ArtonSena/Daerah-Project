import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Provinsi = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://alamat.thecloudalert.com/api/provinsi/get/")
      .then((res) => res.json())
      .then((data) => {
        setProvinsi(data.result);
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal memuat data");
        setLoading(false);
      });
  }, []);

  const filteredProvinsi = provinsi.filter((prov) =>
    prov.text.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-500">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8 text-center tracking-tight text-gray-500">
          Daftar Provinsi
        </h1>

        {/* Search */}
        <div className="mb-10 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Cari provinsi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProvinsi.map((prov) => (
            <Link
              key={prov.id}
              to={`/provinsi/${prov.id}/kabupaten`}
              className="group p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-900 transition-all duration-300 hover:shadow-md"
            >
              <h2 className="text-lg font-medium text-gray-800 group-hover:text-black transition">
                {prov.text}
              </h2>

              <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-700">
                Lihat kabupaten →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provinsi;
