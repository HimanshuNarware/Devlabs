import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

import "./App.css";

import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import TrailingCursor from "./Component/TrailingCursor/TrailingCursor";
import BackToTopButton from "./Component/BackToTopButton";
import ChatAssistant from "./ChatAssistant/ChatAssistant";

import Home from "./Component/Home";
import About from "./Component/About";
import Rateus from "./Component/Rateus";
import Contact from "./Component/Contact";
import OpenSource from "./Component/OpenSource";
import Review from "./Component/Review";
import Faq from "./Component/Faq";
import BookMark from "./Component/BookMark";
import NotFound from "./Component/NotFound";

// Pages
import RemoteJobs from "./pages/RemoteJobs";
import AI from "./pages/AI";
import UI from "./pages/UI";
import Movie from "./pages/Movie";
import Extension from "./pages/Extension";
import EthicalHacking from "./pages/EthicalHacking";
import FrontendTools from "./pages/FrontendTools";
import CodingPlatform from "./pages/CodingPlatform";
import CoursesPlatform from "./pages/CoursesPlatform";
import Collaboration from "./pages/Collaboration";
import Productivity from "./pages/Productivity";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ScrollToTop />
      <TrailingCursor />
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/about" element={<About />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/rateus" element={<Rateus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/remote-jobs" element={<RemoteJobs />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/movies-series" element={<Movie />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/ui-design" element={<UI />} />
        <Route path="/front-end-tools" element={<FrontendTools />} />
        <Route path="/ethical-hacking" element={<EthicalHacking />} />
        <Route path="/coding-platform" element={<CodingPlatform />} />
        <Route path="/courses-platform" element={<CoursesPlatform />} />
        <Route path="/productivity-tools" element={<Productivity />} />
        <Route path="/collaboration-tools" element={<Collaboration />} />
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
      <BackToTopButton />
      <Footer />
      <ChatAssistant />
      <Toaster />
    </>
  );
}

export default App;
