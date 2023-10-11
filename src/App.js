import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import BookMark from "./Component/BookMark";
import NotFound from "./Component/NotFound"
import BackToTopButton from "./Component/BackToTopButton";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />

      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />}></Route>
        <Route path="/bookmark" element={<BookMark />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
      <BackToTopButton/>
      <Footer />
    </>
  );
}

export default App;
