import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState,useEffect } from "react";
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
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import jsonProjects from "./DB/openSource.json";
const BACKEND = process.env.REACT_APP_BACKEND;
function App() {
  const [projects,setProjects]=useState([])
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios
            .get(`${BACKEND}/open-source/all`)
            .catch((error) => {
                return error.response;
            });

        if (response.data && response.data.success) {
            setProjects(response.data.openSourceProjects);
        } 
       else{
        setProjects(jsonProjects)
       }
    };
    fetchData();
}, []);
  const [searchQuery, setSearchQuery] = useState("");
  AOS.init();
  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} project_details={projects}/>
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />}></Route>
        <Route path="/bookmark" element={<BookMark />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/open-source" element={<OpenSource project_details={projects} />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
      <BackToTopButton />
      <Footer />
      <ChatAssistant/>
    </>
  );
}

export default App;
