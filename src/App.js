import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import Produto from "./Components/Produto";
import Contato from "./Components/Contato";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
