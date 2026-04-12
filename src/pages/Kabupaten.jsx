import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Kabupaten = () => {
  const { id } = useParams();
  const [kabupaten, setKabupaten] = useState([]);
  const [loading, setLoading] = useState(true);
  const [provinsiName, setProvinsiName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        // ambil nama provinsi
        const provRes = await fetch(
          "https://alamat.thecloudalert.com/api/provinsi/get/",
        );
        const provData = await provRes.json();

        const prov = provData.result.find((p) => p.id === id);
        if (prov) setProvinsiName(prov.text);

        // ambil kabupaten
        const kabRes = await fetch(
          `https://alamat.thecloudalert.com/api/kabkota/get/?d_provinsi_id=${id}`,
        );
        const kabData = await kabRes.json();

        setKabupaten(kabData.result);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Gagal memuat data kabupaten");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-500">
        Loading kabupaten...
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
        <Link
          to="/provinsi"
          className="text-sm bg-red-500 text-white hover:bg-red-600 px-3 py-2 rounded"
        >
          ← Kembali ke Provinsi
        </Link>

        <h1 className="text-3xl font-semibold mb-8 tracking-tight  text-gray-500">
          Kabupaten di {provinsiName}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {kabupaten.map((kab) => (
            <div
              key={kab.id}
              className="p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-900 transition-all duration-300 hover:shadow-md"
            >
              <h2 className="text-sm font-medium text-gray-800">{kab.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kabupaten;
