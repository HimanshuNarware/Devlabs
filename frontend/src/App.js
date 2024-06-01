import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar/Navbar";
import BookMark from "./Component/BookMark";
import ChatAssistant from "./ChatAssistant/ChatAssistant";
import NotFound from "./Component/NotFound";
import BackToTopButton from "./Component/BackToTopButton";
import OpenSource from "./Component/OpenSource";
import Review from "./Component/Review";

import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  AOS.init();
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar setSearchQuery={setSearchQuery} />

        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/about" element={<About />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/review" element={<Review />} />
          <Route path="*" element={<NotFound />} /> {/* 404 route */}
        </Routes>

        <BackToTopButton />
        <Footer />

        <Toaster />
        <ChatAssistant />
      </BrowserRouter>
    </>
  );
}

export default App;
