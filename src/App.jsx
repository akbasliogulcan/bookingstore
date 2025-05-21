import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Story from "./pages/Story";
import Noval from "./pages/Noval";
import Notfound from "./pages/Notfound";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detay/:id" element={<Detail />} />
        <Route path="/ürünler" element={<Products />} />
        {/* Nested root */}
        {/* //*main */}
        <Route path="/kategori" element={<Category />}>
          <Route path="hikaye" element={<Story />} /> //*Child
          <Route path="roman" element={<Noval />} /> //*Child
        </Route>
        {/* NotFound için route */}
        <Route path="/notfound" element={<Notfound />} />
        {/* Belirtilen routeların haricinde bir route yönlendirme yapılırsa  Not Found sayfasına yönlendir. */}
        <Route path="*" element={<Notfound />} />
        //* 27.satır eğerki url yanlış yazılırsa not found için.
      </Routes>
    </BrowserRouter>
  );
};

export default App;
