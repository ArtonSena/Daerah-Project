import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Beranda", path: "/" },
    { label: "Pulau", path: "/pulau" },
    { label: "Provinsi", path: "/provinsi" },
    { label: "Tentang", path: "/about" },
  ];

  return (
    <nav className="bg-white text-gray-900 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-red-500 tracking-tight"
        >
          Indonesia
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition ${
                  isActive
                    ? "text-red-500"
                    : "text-gray-700 hover:text-red-400"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-500"></span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            to="/provinsi"
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-black transition-all duration-300"
          >
            Explore
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t border-gray-200">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium ${
                  isActive
                    ? "text-red-500"
                    : "text-gray-700 hover:text-red-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            to="/provinsi"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-2 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Explore
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;