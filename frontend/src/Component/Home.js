import axios from "axios";
import debounce from "lodash.debounce";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Tilt from "react-parallax-tilt";
import { useDispatch } from "react-redux";
import jsonTools from "../DB/product.json";
import Devlabs from "../image/hero_img.svg";
import Testimonials from "../pages/Testimonials";
import { deleteSource, setSource } from "../Slice/DataSlice";
import "../style/Home.css";
import NavbarItem from "./Navbar/NavbarItem";

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
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(jsonTools);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerpage = 16;
  const lastPostIndex = currentPage * postPerpage;
  const firstPostIndex = lastPostIndex - postPerpage;
  const [dataBaseData, setDataBaseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const [contributors, setContributors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchQuery);
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
      setTimeout(() => {
        setLoading(false);
      }, 2000);
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
      window.scrollTo({
        top: document.body.scrollHeight * 0.2,
        behavior: "smooth",
      });
    }
  };

  const nextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: document.body.scrollHeight * 0.2,
        behavior: "smooth",
      });
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
    window.scrollTo({
      top: document.body.scrollHeight * 0.2,
      behavior: "smooth",
    });
  };

  const handleBookmark = (datalist) => {
    let bookmarkList = JSON.parse(localStorage.getItem("bookmarks")) || [];
    let found = bookmarkList.some((item) => item.name === datalist.productName);

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
    setShowRemovePopup(true);
    setTimeout(() => {
      setShowRemovePopup(false);
    }, 2000);
    handleBookmarks();
  };

  const filters = [
    "AI",
    "Ethical",
    "Extensions",
    "Web",
    "Movies",
    "Remote",
    "Resume",
    "UI",
    "Coding",
    "Course",
    "Tools",
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters([]);
    } else {
      setSelectedFilters([selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempItems = selectedFilters.map((selectedCategory) =>
        jsonTools.filter(
          (jsonTool) =>
            jsonTool.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...jsonTools]);
    }
  };

  const handleSearch = debounce((query) => {
    setSearchQuery(query);

    if (query === "") {
      setSearchResults([]);
      return;
    }

    const results = jsonTools.filter(
      (tool) =>
        tool.productName &&
        tool.productName.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  }, 300);

  let filterdata = [];

  return (
    <SkeletonTheme>
     
        <div className="hero">
          <div className="hero-text">
            < id="hero" className="hero-container">
            <div
  className="hero-content"
  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
>
  <div className="hero-heading">
    <span>Welcome to</span>
    <br /> Devlabs!
    <h1 className="hero-subheading">
      Discover Free Tools,
      <br />
      Empower Your Projects.
      <br />
      <span className="hero-end"> -Built by open-source community</span>
    </h1>
    <div
      className="hero-button-container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <button className="hero-button">
        <NavbarItem description="Get Started" to="/open-source" />
      </button>
    </div>
  </div>
  <div className="hero-image">
    <Tilt>
      <img src={Devlabs} alt="devlabs-removebg-preview" />
    </Tilt>
  </div>
</div>

                <div
                  className="hero-button-container"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div
                    className="hero-button-container"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <button className="hero-button">
                      <NavbarItem description="Get Started" to="/open-source" />
                    </button>
                  </div>
                </div>
                <div className="hero-image">
                  <Tilt>
                    <img src={Devlabs} alt="devlabs-removebg-preview" />
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
          <br />
          <h3> Lets Get, What You seek!</h3>
          {/* <NavbarRight setSearchQuery={setSearchQuery} /> */}
          <div className="search-feilds">
            <input
              className="search-input text-white"
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              placeholder="Search Tools ..."
            />
          </div>
          <br />
          {searchQuery && searchResults.length === 0 && (
            <div className="no-results">

              <img src="./empty-state.png" height={"300px"} width={"300px"} style={{ background: "none" }} alt="empty_state_img" />

              <img
                src="./empty-state.png"
                height={"300px"}
                width={"300px"}
                style={{ background: "none" }}
                alt="empty_state_img"
              />
              <h1>No matching tools found.</h1>
            </div>
          )}
          {!loading && currentPost.length === 0 && (
            <div className="empty-state">
              <img
                src="https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif"
                className="home-img"
                alt="no post"
              />
              <p>No posts found.</p>
            </div>
          )}

          <div className="main" ref={ref}>
            <div className="filter-container">
              {filters.map((category) => (
                <button
                  key={category}
                  className={`filter-button ${selectedFilters.includes(category) ? "active_filter" : ""
                    }`}
                  onClick={() => handleFilterButtonClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className={loading ? "loading-container" : "main-container"}>
              {loading && (
                <div className="home-loading">
                  <div className="home-loading-container">
                    <Skeleton circle={"true"} height={90} width={90} />
                    <Skeleton width={130} />
                    <Skeleton count={5} />
                  </div>
                  <div className="home-loading-container">
                    <Skeleton circle={"true"} height={90} width={90} />
                    <Skeleton width={130} />
                    <Skeleton count={5} />
                  </div>
                  <div className="home-loading-container">
                    <Skeleton circle={"true"} height={90} width={90} />
                    <Skeleton width={130} />
                    <Skeleton count={5} />
                  </div>
                  <div className="home-loading-container">
                    <Skeleton circle={"true"} height={90} width={90} />
                    <Skeleton width={130} />
                    <Skeleton count={5} />
                  </div>
                  <div className="home-loading-container">
                    <Skeleton circle={"true"} height={90} width={90} />
                    <Skeleton width={130} />
                    <Skeleton count={5} />
                  </div>
                </div>
              )}

              {!loading &&
                filteredItems
                  .filter((item) => {
                    return searchQuery.toLowerCase() === ""
                      ? item
                      : item.productName.toLowerCase().includes(searchQuery);
                  })
                  .slice(firstPostIndex, lastPostIndex)
                  .map((datalist) => {
                    filterdata.push(datalist);
                    return (
                      <div
                        className="content-box-home"
                        key={datalist.productName}
                      >
                        <img
                          className="logo"
                          src={datalist.image}
                          alt={datalist.category}
                        />
                        <h2>{datalist.productName}</h2>
                        <p className="content-box-text">
                          {datalist.description}
                        </p>
                        <button
                          className="btn-b-box"
                          onClick={() => window.open(datalist.link)}
                        >
                          Link
                        </button>
                        {bookmarks?.some((item) =>
                          item.name.includes(datalist.productName)
                        ) ? (
                          <>
                            <button
                              className="btn-booked-box"
                              onClick={() =>
                                handleDeleteBookmark(datalist.productName)
                              }
                            >
                              Remove
                            </button>
                          </>
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
            {filterdata.length > 0 && (
              <div className="pagination">
                <ul>
                  <div className="page-item-prev">
                    <li>
                      <a href="#!" onClick={prePage}>
                        &lt;
                      </a>
                    </li>
                  </div>
                  <div className="page-wrapper">
                    {numbers.map((n, i) => {
                      // Calculate range of visible page numbers around current page
                      const start = Math.max(1, currentPage - 4); // Show 4 pages before current page
                      const end = Math.min(npage, start + 8); // Show 8 pages in total

                      // Show ellipsis if start is greater than 1
                      if (start > 1 && i === 1) {
                        return (
                          <li key={i}>
                            <span>...</span>
                          </li>
                        );
                      }

                      // Show ellipsis if end is less than npage
                      if (end < npage && i === numbers.length - 1) {
                        return (
                          <li key={i}>
                            <span>...</span>
                          </li>
                        );
                      }

                      // Display the page number if within the visible range
                      if (n >= start && n <= end) {
                        return (
                          <li
                            key={i}
                            className={`${currentPage === n ? "active" : ""}`}
                          >
                            <a href="#!" onClick={() => changeCPage(n)}>
                              {n}
                            </a>
                          </li>
                        );
                      }

                      return null; // Hide pages outside the visible range
                    })}
                  </div>
                  <div className="page-item-next">
                    <li>
                      <a href="#!" onClick={nextPage}>
                        &gt;
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            )}
          </div>
          <Testimonials />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default Home;
