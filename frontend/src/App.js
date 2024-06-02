import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
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
import ScrollToTop from "./Component/ScrollToTop";
import RemoteJobs from "./pages/RemoteJobs";
import AI from "./pages/AI";
import Movie from "./pages/Movie";
import Extension from "./pages/Extension";
import UI from "./pages/UI";
import FrontendTools from "./pages/FrontendTools";
import EthicalHacking from "./pages/EthicalHacking";
import CodingPlateform from "./pages/CodingPlateform";
import CourcesPlatform from "./pages/CourcesPlatform";
import Faq from "./Component/Faq";
import Productivity from "./pages/Productivity";
import Collaboration from "./pages/Collaboration";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  AOS.init();

  return (
    <>
      <ScrollToTop />
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/about" element={<About />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/remote-jobs" element={<RemoteJobs />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/movies-series" element={<Movie />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/ui-design" element={<UI />} />
        <Route path="/front-end-tools" element={<FrontendTools />} />
        <Route path="/ethical-hacking" element={<EthicalHacking />} />
        <Route path="/coding-platform" element={<CodingPlateform />} />
        <Route path="/cources-platform" element={<CourcesPlatform />} />
        <Route path="/productivity-tools" element={<Productivity />} />
        <Route path="/collaboration-tools" element={<Collaboration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTopButton />
      <Toaster />
      <Footer />
      <ChatAssistant />
    </>
  );
}

export default App;
