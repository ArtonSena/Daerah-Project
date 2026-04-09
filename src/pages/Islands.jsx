import { useState } from "react";
import { Link } from "react-router-dom";
import { islands } from "../data/islands";

const Islands = () => {
  const [search, setSearch] = useState("");

  const filteredIslands = islands.filter(
    (island) =>
      island.name.toLowerCase().includes(search.toLowerCase()) ||
      island.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-semibold mb-4 text-center tracking-tight  text-gray-900">
          Pulau Indonesia
        </h1>

        <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
          Jelajahi pulau-pulau di Indonesia dengan informasi singkat dan
          tampilan interaktif.
        </p>

        {/* Search */}
        <div className="mb-10 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Cari pulau..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 border-l-4 border-l-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm transition"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredIslands.map((island) => (
            <Link
              key={island.id}
              to={`/pulau/${island.id}`}
              className="group p-5 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:border-red-500 hover:shadow-md hover:-translate-y-1"
            >
              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-black">
                {island.name}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                {island.description}
              </p>

              {/* Info */}
              <div className="mt-4 text-xs text-gray-400 space-y-1">
                <p>{island.area}</p>
                <p>{island.population}</p>
                <p>{island.provinces.length} Provinsi</p>
              </div>

              {/* CTA */}
              {/* CTA */}
              <button className="mt-4 px-4 py-2 text-sm font-medium text-red-500 border border-red-500 rounded-lg transition-all duration-300 hover:bg-red-500 hover:text-white">
                Jelajahi →
              </button>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filteredIslands.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-500 mb-2">
              Tidak ditemukan
            </h3>
            <p className="text-gray-400">Coba kata kunci lain</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Islands;
