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
  const ref = useRef(null);

  useEffect(() => {
    if (props.searchQuery !== "") {
      ref.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [props.searchQuery]);

  const [currentPage, setCurrentPage] = useState(1);
  const postPerpage = 16;
  const lastPostIndex = currentPage * postPerpage;
  const firstPostIndex = lastPostIndex - postPerpage;
  const [dataBaseData, setDataBaseData] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentPost1 = dataBaseData;
  let allvalue = [];

  const handleBookmarks = () => {
    const bookmark = JSON.parse(localStorage.getItem("bookmarks"));
    setBookmark(bookmark);
  };

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
        if (response.data.success) {
          setDataBaseData(response.data.tools);
        } else {
          setDataBaseData(jsonTools);
        }
      } catch (error) {
        console.error(error);
        setDataBaseData(jsonTools);
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (localStorageValue === "undefined" || localStorageValue === "all") {
    allvalue = dataBaseData;
  } else if (localStorageValue !== "all" && localStorageValue !== "undefined") {
    if (localStorage.getItem("filter-2")) {
      allvalue = currentPost1.filter(
        (e) =>
          e.category.toLowerCase().includes(localStorageValue) ||
          e.category.includes(localStorage.getItem("filter-2"))
      );
    } else {
      allvalue = currentPost1.filter((e) =>
        e.category.toLowerCase().includes(localStorageValue)
      );
    }
  }

  const filteredData = !!props.searchQuery
    ? allvalue.filter((datalist) => {
        return datalist.productName
          .toLowerCase()
          .includes(props.searchQuery.toLowerCase());
      })
    : allvalue;

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

  const handleBookmark = (datalist) => {
    let bookmarkList = JSON.parse(localStorage.getItem("bookmarks")) || [];
    let found = bookmarkList.some(item => item.name === datalist.productName);

    if (!found) {
      bookmarkList.push({
        image: datalist.image,
        name: datalist.productName,
        desc: datalist.description,
        link: datalist.link,
      });
      localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
      toast.success("Bookmark added successfully");
      dispatch(
        setSource({
          image: datalist.image,
          name: datalist.productName,
          desc: datalist.description,
          link: datalist.link,
        })
      );
    } else {
      toast.error("Already bookmarked");
    }
    handleBookmarks();
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
    handleBookmarks();
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
        <div className={loading ? "loading-container" : "main-container"}>
          <ClipLoader
            color="#808080"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          {!loading && currentPost.length === 0 && (
            <div
              className="empty-state"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif"
                height={400}
                width={400}
                alt="no post"
              />
              <p>No posts found.</p>
            </div>
          )}

          <div ref={ref} className="page-container">
            <div className={loading ? "loading-container" : "main-container"}>
              {currentPost.map((datalist) => {
                return (
                  <div className="content-box-home" key={datalist.productName}>
                    <img
                      className="logo"
                      src={datalist.image}
                      alt={datalist.category}
                    />
                    <h2>{datalist.productName}</h2>
                    <p className="content-box-text">{datalist.description}</p>
                    <button
                      className="btn-b-box"
                      onClick={() => window.open(datalist.link)}
                    >
                      Link
                    </button>
                    {bookmarks?.some((item) =>
                      item.name.includes(datalist.productName)
                    ) ? (
                      <button
                        className="btn-booked-box"
                        onClick={() => handleDeleteBookmark(datalist.productName)}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn-b-box"
                        onClick={() => handleBookmark(datalist)}
                      >
                        Bookmark
                      </button>
                    )}
                  </div>
                );
              })}
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
      </div>
    </div>
  );
}

export default Home;
