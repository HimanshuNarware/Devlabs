import { Route, Routes } from "react-router-dom";
import React, { useState } from "react"; // Import useState
import "./App.css";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import BookMark from "./Component/BookMark";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // Define setSearchQuery and its initial state

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
