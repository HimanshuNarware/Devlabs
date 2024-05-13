import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { setSource } from "../Slice/DataSlice";
import "../style/Home.css";

import jsonTools from "../DB/product.json";

const BACKEND = process.env.REACT_APP_BACKEND;

function Home(props) {
  const [localStorageValue, setLocalStorageValue] = useState(
    localStorage.getItem("filter") || ""
  );

  const [currentPage, setCurrentPage] = useState(1);
  const postPerpage = 16;
  const lastPostIndex = currentPage * postPerpage;
  const firstPostIndex = lastPostIndex - postPerpage;
  const [dataBaseData, setDataBaseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const currentPost1 = dataBaseData;
  let allvalue = [];

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
        // console.log("backend data loaded");
      } else {
        setDataBaseData(jsonTools);
        // console.log("json data laoded");
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

  // In case of `searchQuery` string
  const filteredData = !!props.searchQuery
    ? allvalue.filter((datalist) => {
        return (
          datalist.productName
            .toLowerCase()
            .includes(props.searchQuery.toLowerCase()) ||
          datalist.description
            .toLowerCase()
            .includes(props.searchQuery.toLowerCase())
        );
      })
    : allvalue;

  const currentPost =
    filteredData.length > 16
      ? filteredData.slice(firstPostIndex, lastPostIndex)
      : filteredData;
  const npage = Math.ceil(filteredData.length / postPerpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const dispatch = useDispatch();

  // console.log({ filterData: filteredData, npage, numbers, currentPost });
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

  return (
    <div>
      <div className="page-container">
        <div className={loading ? "loading-container" : "main-container"}>
          <ClipLoader
            color="#808080"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

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
                <button
                  className="btn-b-box"
                  onClick={() => {
                    const bookmarks = JSON.parse(
                      localStorage.getItem("bookmarks")
                    );
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
                  }}
                >
                  Bookmark
                </button>
              </div>
            );
          })}
        </div>

        {/* pagination */}
        {filteredData.length > 16 && (
          <nav>
            {currentPost.length >= 16 && (
              <div className="page-index">
                Showing {firstPostIndex + 1}-{lastPostIndex} from{" "}
                {currentPost1.length} results
              </div>
            )}
            <ul className="pagination">
              <li className="page-item">
                {currentPage > 1 && (
                  <button href="#" className="page-link" onClick={prePage}>
                    prev
                  </button>
                )}
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <button
                    href="#"
                    className="page-link"
                    onClick={() => changeCPage(n)}
                  >
                    {n}
                  </button>
                </li>
              ))}
              <li className="page-item">
                <button href="#" className="page-link" onClick={nextPage}>
                  next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {showPopup && (
        <div className="popup">
          <span class="checkmark">
            <div class="checkmark_stem"></div>
            <div class="checkmark_kick"></div>
          </span>
          Bookmark added
        </div>
      )}
    </div>
  );
}

export default Home;
