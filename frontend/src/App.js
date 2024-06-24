import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import "./App.css";

// Components
import About from "./Component/About";
import Footer from "./Component/Footer";
import Rateus from "./Component/Rateus";
import ChatAssistant from "./ChatAssistant/ChatAssistant";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar/Navbar";
import NotFound from "./Component/NotFound";
import BackToTopButton from "./Component/BackToTopButton";
import OpenSource from "./Component/OpenSource";
import Review from "./Component/Review";
import Faq from "./Component/Faq";
import ScrollToTop from "./Component/ScrollToTop";
import TrailingCursor from "./Component/TrailingCursor/TrailingCursor.jsx";
import BookMark from "./Component/BookMark";
import Contact from "./Component/Contact";
import FrontendTools from "./pages/FrontendTools.jsx";

// Pages
import RemoteJobs from "./pages/RemoteJobs";
import AI from "./pages/AI";
import UI from "./pages/UI";
import Movie from "./pages/Movie";
import Extension from "./pages/Extension";
import EthicalHacking from "./pages/EthicalHacking";
import CodingPlatform from "./pages/CodingPlatform";
import CoursesPlatform from "./pages/CoursesPlatform";
import Productivity from "./pages/Productivity";
import Collaboration from "./pages/Collaboration";

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
