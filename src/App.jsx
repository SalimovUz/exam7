import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
