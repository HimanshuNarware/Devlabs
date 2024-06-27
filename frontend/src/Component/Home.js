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
import NavbarRight from "./Navbar/NavbarRight";
import Tilt from 'react-parallax-tilt';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
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
  const [searchQuery, setSearchQuery] = useState("");

  const currentPost1 = dataBaseData;
  let allvalue = [];

  function handleBookmarks() {
    const bookmark = JSON.parse(localStorage.getItem("bookmarks"));
    setBookmark(bookmark);
  }

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
      const response = await axios
        .get(`${BACKEND}/tools/all`)
        .catch((error) => {
          return error.response;
        });
      if (response.data.success) {
        setDataBaseData(response.data.tools);
      } else {
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

  const filteredData = !!searchQuery
    ? allvalue.filter((datalist) => {
        return datalist.productName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      })
    : allvalue;

  const currentPost =
    filteredData.length > 16
      ? filteredData.slice(firstPostIndex, lastPostIndex)
      : filteredData;
  const npage = Math.ceil(filteredData.length / postPerpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const dispatch = useDispatch();

  function prePage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function handleBookmark(datalist) {
    if (bookmarks === null) {
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
    handleBookmarks();
  }

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

  return (
    <SkeletonTheme>
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
            <Tilt>
                <img src={Devlabs} alt="devlabs-removebg-preview" />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <h3> Lets Get, What You seek!</h3>
      <NavbarRight setSearchQuery={setSearchQuery} />

      <div ref={ref} className="page-container">
        <div className={loading ? "loading-container" : "main-container"}>
      {loading &&    <div style={{display:"flex",gap:"100px",width:"100vw",height:"300px",justifyContent:"center"}}>
          <div style={{width:"250px",height:"300px",border:"gray solid 2px",borderRadius:"20px",padding:"40px"}}>

<Skeleton  circle={"true"} height={90} width={90}/>
<Skeleton  width={130}/>
<Skeleton count={5}/>

</div>
            <div style={{width:"250px",height:"300px",border:"gray solid 2px",borderRadius:"20px",padding:"40px"}}>

                <Skeleton  circle={"true"} height={90} width={90}/>
                <Skeleton  width={130}/>
                <Skeleton count={5}/>

            </div>
            <div style={{width:"250px",height:"300px",border:"gray solid 2px",borderRadius:"20px",padding:"40px"}}>

                <Skeleton  circle={"true"} height={90} width={90}/>
                <Skeleton  width={130}/>
                <Skeleton count={5}/>

            </div>
            <div style={{width:"250px",height:"300px",border:"gray solid 2px",borderRadius:"20px",padding:"40px"}}>

                <Skeleton  circle={"true"} height={90} width={90}/>
                <Skeleton  width={130}/>
                <Skeleton count={5}/>

            </div>
            <div style={{width:"250px",height:"300px",border:"gray solid 2px",borderRadius:"20px",padding:"40px"}}>

                <Skeleton  circle={"true"} height={90} width={90}/>
                <Skeleton  width={130}/>
                <Skeleton count={5}/>

            </div>
          </div>}

        
      {!loading && currentPost.map((datalist) => {
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
                  <>
                    <button
                      className="btn-booked-box"
                      onClick={() => handleDeleteBookmark(datalist.productName)}
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
    </SkeletonTheme>
    
  );
}

export default Home;
