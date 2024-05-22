import { ToastContainer, toast,Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSource } from "../Slice/DataSlice";
import "../style/BookMark.css";

function BookMark() {
  const sourceData = useSelector((state) => state.SourceReducer.sourceData);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8); // Number of bookmarks per page

  const handleDeleteBookmark = (name) => {
    toast.success(`${name} Removed`);
    dispatch(deleteSource({ name }));

    const bookmarksInStorage =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    const updatedBookmarks = bookmarksInStorage.filter(
      (bookmark) => bookmark.name !== name
    );
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  // Get current bookmarks
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentBookmarks = sourceData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="containerBK">
    <div className="container-bk">
      {currentBookmarks.length > 0 ? (
        currentBookmarks.map((data, index) => (
          <div className="box-bk" key={index}>
            <img className="logo" src={data.image} alt={data.name} />
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
            <button className="btn-b" onClick={() => window.open(data.link)}>
              Link
            </button>
            <button
              className="btn-b"
              onClick={() => handleDeleteBookmark(data.name)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <div className="bk-empty">
          <p>No bookmarks found</p>
        </div>
      )}
      </div>
      <div>
        {/* Pagination */}
      {sourceData.length > postPerPage && currentBookmarks.length > 0 && (
        <ul className="pagination">
          {currentPage !== 1 && (
            <li className="page-item">
              <button onClick={prevPage} className="page-link">
                Prev
              </button>
            </li>
          )}
          {Array.from({ length: Math.ceil(sourceData.length / postPerPage) }).map(
            (_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </li>
            )
          )}
          {currentPage !== Math.ceil(sourceData.length / postPerPage) && (
            <li className="page-item">
              <button onClick={nextPage} className="page-link">
                Next
              </button>
            </li>
          )}
        </ul>
      )}
      </div>
      <ToastContainer className="custom-toast-container" position="top-center" transition={Slide} />
    </div>
  );
}

export default BookMark;

