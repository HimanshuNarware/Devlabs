import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"; // Correct import
import "./App.css";
import About from "./Component/About";
import Footer from "./Component/Footer"; 
import Rateus from "./Component/Rateus";
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
import Faq from "./Component/Faq";
import CodingPlatform from "./pages/CodingPlatform"; // Corrected import
import CoursesPlatform from "./pages/CoursesPlatform";
import Navbar from "./Component/Navbar/Navbar";
import BackToTopButton from "./Component/BackToTopButton";
import Footer from "./Component/Footer";
import TrailingCursor from "./Component/TrailingCursor/TrailingCursor";
import Login from "./Component/Login";
import Register from "./Component/Register";
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
const Signup = lazy(() => import("./Component/Signup"));
const Profile = lazy(() => import("./Component/Profile"));
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

const Movies = lazy(() => import("./pages/Movies"));

const Ui = lazy(() => import("./pages/UserInterface"));

const RemoteJob = lazy(() => import("./pages/RemoteJob"));

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);
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
        <Route path="/rateus" element={<Rateus />} />
        <Route path="/remote-jobs" element={<RemoteJobs />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/movies-series" element={<Movie />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/ui-design" element={<UI />} />
        <Route path="/front-end-tools" element={<FrontendTools />} />
        <Route path="/ethical-hacking" element={<EthicalHacking />} />
        <Route path="/coding-platform" element={<CodingPlatform />} />

        <Route path="/courses-platform" element={<CoursesPlatform />}/>
        {/* Define other routes as needed */}
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
