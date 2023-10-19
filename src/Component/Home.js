import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../style/Home.css";
import { setSource } from "../Slice/DataSlice";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import BookMark from "./BookMark";
import "../style/Pagination.css";

function Home(props) {
  const [localStorageValue, setLocalStorageValue] = useState(
    localStorage.getItem("filter") || ""
  );
  let itemList = "";
  const currentPage = useRef();
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(16);
  const [lastPostIndex, setLastPostIndex] = useState(0);
  const [firstPostIndex, setFirstPostIndex] = useState(0);

  const [productsData,setProductsData] = useState([]);
  const [currentPost1,setCurrentPost1] = useState([]);

  useEffect(()=>{
    currentPage.current = 1;
    getProducts();
  },[])
  
  function handlePageClick(e) {
    console.log(e);
    currentPage.current = e.selected+1;
    getProducts();
  }
  function getProducts() {
    const url2 = `${process.env.REACT_APP_BACKEND_URL}/products`
    axios
      .get(url2)
      .then((response) => {
        setProductsData(response.data);
        setFirstPostIndex((currentPage.current-1)*limit);
        setLastPostIndex(currentPage.current*limit);
        setCurrentPost1(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    const handleStorageChange = () => {
      setLocalStorageValue(localStorage.getItem("filter"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // const currentPost1 = productsData;
  let allvalue = productsData;

  if (localStorageValue === "undefined" || localStorageValue === "all") {
    allvalue = productsData;
    console.log("No localstorage item");
  } else if (localStorageValue !== "all" && localStorageValue !== "undefined") {
    console.log(localStorageValue);
    if (localStorage.getItem("filter-2")) {
      allvalue = currentPost1.filter(
        (e) =>
          e.category.toLowerCase().includes(localStorageValue) ||
          e.category.includes(localStorage.getItem("filter-2"))
      )
    } else {
      allvalue = currentPost1.filter((e) =>
      e.category.toLowerCase().includes(localStorageValue)
    )
    }
    console.log(allvalue);
  }
  const filteredData = allvalue.filter((datalist) => {
    return (
      datalist.productName
        .toLowerCase()
        .includes(props.searchQuery.toLowerCase()) ||
      datalist.description
        .toLowerCase()
        .includes(props.searchQuery.toLowerCase())
    );
  });
  const currentPost = filteredData.slice(firstPostIndex, lastPostIndex);
  const npage = Math.ceil(filteredData.length / limit);

  return (
    <div className="container">
      <div className="main-container">
        {
          (itemList = currentPost.map((datalist) => {
            return (
              <div className="content-box">
                <img
                  className="logo"
                  src={datalist.image}
                  alt={datalist.category}
                />
                <h2>{datalist.productName}</h2>
                <p>{datalist.description}</p>
                <button
                  className="btn-b"
                  onClick={(e) => window.open(datalist.link)}
                >
                  Link
                </button>
                <button
                  className="btn-b"
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
                      }
                    }
                  }}
                >
                  Bookmark
                </button>
              </div>
            );
          }))
        }
      </div>
      {/* pagination */}

      <nav>
        <div className="page-index">
          Showing {firstPostIndex + 1}-{lastPostIndex} from{" "}
          {currentPost1.length} results
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          pageRangeDisplayed={5}
          pageCount={npage}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </nav>
    </div>
  );
}

export default Home;
