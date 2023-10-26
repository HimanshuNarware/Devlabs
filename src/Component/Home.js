import React, { useEffect, useState } from "react";
import dataBaseData from "./../DB/product.json";
import "../style/Home.css";
import { setSource } from "../Slice/DataSlice";
import { useDispatch } from "react-redux";
import Pagination from "./Pagination";
import { getPaginationData, changePage } from "../utils/paginationData";

const CARDS_PER_PAGE = 16

function Home(props) {
  const [localStorageValue, setLocalStorageValue] = useState(
    localStorage.getItem("filter") || ""
  );
  const [currentPage, setCurrentPage] = useState(1); 

  const data = dataBaseData;
  let allvalue = dataBaseData;

  useEffect(() => {
    const handleStorageChange = () => {
      setLocalStorageValue(localStorage.getItem("filter"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (localStorageValue === "undefined" || localStorageValue === "all") {
    allvalue = dataBaseData;
    console.log("No localstorage item");
  } else if (localStorageValue !== "all" && localStorageValue !== "undefined") {
    console.log(localStorageValue);
    if (localStorage.getItem("filter-2")) {
      allvalue = data.filter(
        (e) =>
          e.category.toLowerCase().includes(localStorageValue) ||
          e.category.includes(localStorage.getItem("filter-2"))
      );
    } else {
      allvalue = data.filter((e) =>
        e.category.toLowerCase().includes(localStorageValue)
      );
    }
    console.log(allvalue);
  }

  // filters data from searchbar query 
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

  const paginationValues = getPaginationData(currentPage, CARDS_PER_PAGE, filteredData)
  const { lastCardIndex, firstCardIndex, allPagesNumbers, currentPageData} = paginationValues

  const handlePageChange = (value) => {
    changePage(value, currentPage, setCurrentPage)
  }

  const dispatch = useDispatch();

  return (
    <div className="page-container">
      <div className="main-container">
        {
          (currentPageData?.map((datalist) => {
            return (
              <div className="content-box-home" key={datalist.id}>
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
                      }
                    }
                  }}
                >
                  Bookmark
                </button>
              </div>
            );
          })
        )}
      </div>

      <Pagination 
        firstCardIndex={firstCardIndex}
        lastCardIndex={lastCardIndex}
        dataLength={data.length}
        allPagesNumbers={allPagesNumbers} 
        currentPage={currentPage} 
        handlePageChange={handlePageChange}
        scrollPosition={'top'}
      />
    </div>
  );
}

export default Home;