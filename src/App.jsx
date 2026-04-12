import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Provinsi from "./pages/Provinsi";
import Kabupaten from "./pages/Kabupaten";
import Islands from "./pages/Islands";
import Island from "./pages/Island";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 flex flex-col text-white">
        <NavbarComponent />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Info />} />
            <Route path="/provinsi" element={<Provinsi />} />
            <Route path="/provinsi/:id/kabupaten" element={<Kabupaten />} />
            <Route path="/pulau" element={<Islands />} />
            <Route path="/pulau/:id" element={<Island />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
