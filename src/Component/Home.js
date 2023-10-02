import React, { useState } from "react";
import dataBaseData from "./../DB/product.json";
import "../style/Home.css";
import { setSource } from "../Slice/DataSlice";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import BookMark from "./BookMark";
function Home() {
  let itemList = "";
  const [currentPage, setCurrentPage] = useState(1);
  const postPerpage = 16;

  const lastPostIndex = currentPage * postPerpage;
  const firstPostIndex = lastPostIndex - postPerpage;

  const currentPost = dataBaseData.slice(firstPostIndex, lastPostIndex);
  const npage = Math.ceil(dataBaseData.length / postPerpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const dispatch = useDispatch();

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
                  onClick={() =>
                    dispatch(
                      setSource({
                        image: datalist.image,
                        name: datalist.productName,
                        desc: datalist.description,
                        link: datalist.link,
                      })
                    )
                  }
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
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
  function prePage() {
    if (currentPage !== firstPostIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== lastPostIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
}

export default Home;
