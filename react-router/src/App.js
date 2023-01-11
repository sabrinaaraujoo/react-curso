import "./App.css";

// 1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <h1>React Router Dom</h1>
      <BrowserRouter>
        {/* // Links com React Router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* Nested routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* Página não encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
