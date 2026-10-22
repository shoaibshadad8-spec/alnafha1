import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, BottomNav } from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Index from "./pages/Index.jsx";
import Reader from "./pages/Reader.jsx";
import Tasbih from "./pages/Tasbih.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import { load, save } from "./utils.js";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [theme, setTheme] = useState(() => load("theme", "dark"));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    save("theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0a2e28" : "#f7f0df");
  }, [theme]);

  return (
    <>
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/read/:id" element={<Reader />} />
          <Route path="/tasbih" element={<Tasbih />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">موقع غير رسمي · النفحة النورانية</footer>
      <BottomNav />
    </>
  );
}
