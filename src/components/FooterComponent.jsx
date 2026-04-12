const FooterComponent = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-3">
            IndoExplore
          </h2>

          <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
            Platform eksplorasi wilayah Indonesia yang dirancang simpel,
            cepat, dan informatif. Temukan provinsi, kabupaten, dan pulau
            dengan pengalaman yang lebih modern.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm">

          <div className="flex gap-6">
            <a href="/" className="hover:text-red-500 transition">
              Beranda
            </a>
            <a href="/pulau" className="hover:text-red-500 transition">
              Pulau
            </a>
            <a href="/provinsi" className="hover:text-red-500 transition">
              Provinsi
            </a>
            <a href="/about" className="hover:text-red-500 transition">
              Tentang
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Jelajahi Indonesia lebih mudah, satu klik dari sini 🚀
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-200 pt-6">
        © 2026 IndoExplore — Built for learning & exploration by: Arton
      </div>
    </footer>
  );
};

export default FooterComponent;