import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import jsonTools from "../DB/product.json";
import { deleteSource, setSource } from "../Slice/DataSlice";
import "../style/Home.css";
import Devlabs from "../image/hero_img.svg";
import NavbarItem from "./Navbar/NavbarItem";
import toast from "react-hot-toast";

const BACKEND = process.env.REACT_APP_BACKEND;

function Home(props) {
  const [bookmarks, setBookmark] = useState(null);
  const [localStorageValue, setLocalStorageValue] = useState(
    localStorage.getItem("filter") || ""
  );
  const ref = useRef();

  if (props.searchQuery !== "") {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const [currentPage, setCurrentPage] = useState(1);
  const postPerpage = 16;
  const lastPostIndex = currentPage * postPerpage;
  const firstPostIndex = lastPostIndex - postPerpage;
  const [dataBaseData, setDataBaseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    handleBookmarks();
  }, []);

  useEffect(() => {
    setLoading(true);
    const handleStorageChange = () => {
      setLocalStorageValue(localStorage.getItem("filter"));
    };
    window.addEventListener("storage", handleStorageChange);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND}/tools/all`);
        setDataBaseData(response.data.success ? response.data.tools : jsonTools);
      } catch (error) {
        setDataBaseData(jsonTools);
      }
      setLoading(false);
    };

    const fetchContributors = async () => {
      const response = await axios.get(
        "https://api.github.com/repos/HimanshuNarware/Devlabs/contributors"
      );
      setContributors(response.data);
    };

    fetchData();
    fetchContributors();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [localStorageValue]); // Ensure useEffect dependencies are specified correctly

  useEffect(() => {
    handleBookmarks();
  }, [bookmarks]); // Ensure useEffect dependencies are specified correctly

  const handleBookmarks = () => {
    const bookmark = JSON.parse(localStorage.getItem("bookmarks"));
    setBookmark(bookmark);
  };

  const handleBookmark = (datalist) => {
    if (!bookmarks) {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([
          {
            image: datalist.image,
            name: datalist.productName,
            desc: datalist.description,
            link: datalist.link,
          },
        ])
      );
      dispatch(
        setSource({
          image: datalist.image,
          name: datalist.productName,
          desc: datalist.description,
          link: datalist.link,
        })
      );
      toast.success("Bookmark added successfully");
    } else {
      let found = false;
      for (let item of bookmarks) {
        if (item.name === datalist.productName) {
          found = true;
          break;
        }
      }

      if (!found) {
        localStorage.setItem(
          "bookmarks",
          JSON.stringify([
            ...bookmarks,
            {
              image: datalist.image,
              name: datalist.productName,
              desc: datalist.description,
              link: datalist.link,
            },
          ])
        );
        toast.success("Bookmark added successfully");

        dispatch(
          setSource({
            image: datalist.image,
            name: datalist.productName,
            desc: datalist.description,
            link: datalist.link,
          })
        );
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      }
    }
    handleBookmarks(); // Ensure no state update loop here
  };

  const handleDeleteBookmark = (name) => {
    dispatch(deleteSource({ name }));

    toast.success("Bookmark removed successfully");

    const bookmarksInStorage =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    const updatedBookmarks = bookmarksInStorage.filter(
      (bookmark) => bookmark.name !== name
    );
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setShowRemovePopup(true);
    setTimeout(() => {
      setShowRemovePopup(false);
    }, 2000);
    handleBookmarks(); // Ensure no state update loop here
  };

  const filteredData = !!props.searchQuery
    ? dataBaseData.filter((datalist) =>
        datalist.productName.toLowerCase().includes(props.searchQuery.toLowerCase())
      )
    : dataBaseData;

  const currentPost =
    filteredData.length > 16
      ? filteredData.slice(firstPostIndex, lastPostIndex)
      : filteredData;
  const npage = Math.ceil(filteredData.length / postPerpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const dispatch = useDispatch();

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <div id="hero" className="hero-container">
            <div className="hero-content">
              <h1 className="hero-heading">
                <span>Welcome to</span>
                <br /> Devlabs!
                <h1 className="hero-subheading">
                  Discover Free Tools,
                  <br />
                  Empower Your Projects.
                  <br />
                  <span className="hero-end"> 
                    {" "}
                    -Built by open-source community
                  </span>
                </h1>
              </h1>

              <div className="hero-button-container">
                <button className="hero-button">
                  <NavbarItem description="Get Started" to="/open-source" />
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img src={Devlabs} alt="devlabs-removebg-preview" />
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className="page-container">
        
        <div className="button-container">
          {filters.map((category, idx) => (
            <button
              key={`filters-${idx}`}
              className={`button_filter ${selectedFilters.includes(category) ? "active_filter" : ""}`}
              onClick={() => handleFilterButtonClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={loading ? "loading-container" : "main-container"}>
          <ClipLoader
            color="#808080"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          {filteredItems.length === 0 ? (
            <p>No items found.</p>
          ) : (
            filteredItems.map((datalist) => (
              <div className="content-box-home" key={datalist.productName}>
                <img className="logo" src={datalist.image} alt={datalist.category} />
                <h2>{datalist.productName}</h2>
                <p className="content-box-text">{datalist.description}</p>
                <button className="btn-b-box" onClick={() => window.open(datalist.link)}>
                  Link
                </button>
                {bookmarks?.some((item) => item.name.includes(datalist.productName)) ? (
                  <>
                    <button
                      className="btn-booked-box"
                      onClick={() => handleDeleteBookmark(datalist.productName)}
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <button className="btn-b-box" onClick={() => handleBookmark(datalist)}>
                    Bookmark
                  </button>
                )}
              </div>
            ))
          )}
        </div>
        <div className="pagination">
          <ul>
            <li>
              <a href="#!" onClick={prePage}>
                &lt;
              </a>
            </li>
            {numbers.map((n, i) => (
              <li key={i} className={`${currentPage === n ? "active" : ""}`}>
                <a href="#!" onClick={() => changeCPage(n)}>
                  {n}
                </a>
              </li>
            ))}
            <li>
              <a href="#!" onClick={nextPage}>
                &gt;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;