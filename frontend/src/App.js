import React, { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom"; // Correct import
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Component/ScrollToTop";
import Navbar from "./Component/Navbar/Navbar";
import BackToTopButton from "./Component/BackToTopButton";
import Footer from "./Component/Footer";
import TrailingCursor from "./Component/TrailingCursor/TrailingCursor";
import ChatAssistant from "./ChatAssistant/ChatAssistant";

// Lazy load components
const About = lazy(() => import("./Component/About"));
const Rateus = lazy(() => import("./Component/Rateus"));
const Home = lazy(() => import("./Component/Home"));
const NotFound = lazy(() => import("./Component/NotFound"));
const OpenSource = lazy(() => import("./Component/OpenSource"));
const Review = lazy(() => import("./Component/Review"));
const BookMark = lazy(() => import("./Component/BookMark"));
const Contact = lazy(() => import("./Component/Contact"));
const RemoteJobs = lazy(() => import("./pages/RemoteJobs"));
const AI = lazy(() => import("./pages/AI"));
const UI = lazy(() => import("./pages/UI"));
const Movie = lazy(() => import("./pages/Movie"));
const Extension = lazy(() => import("./pages/Extension"));
const EthicalHacking = lazy(() => import("./pages/EthicalHacking"));
const FrontendTools = lazy(() => import("./pages/FrontendTools"));
const Faq = lazy(() => import("./Component/Faq"));
const CodingPlatform = lazy(() => import("./pages/CodingPlatform")); // Corrected import
const CoursesPlatform = lazy(() => import("./pages/CoursesPlatform"));
const Collaboration = lazy(() => import("./pages/Collaboration"));
const Productivity = lazy(() => import("./pages/Productivity"));
const Extensions = lazy(() => import("./pages/Extensions"));

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
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/extensions" element={<Extensions />} />
          {/* Define other routes as needed */}
          {/* <Route path="*" element={<NotFound />} /> 404 route */}
        </Routes>
      </Suspense>
      <BackToTopButton />
      <Footer />
      <ChatAssistant />
      <Toaster />
    </>
  );
}

export default App;
