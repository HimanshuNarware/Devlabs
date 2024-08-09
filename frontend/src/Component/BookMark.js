import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSource } from "../Slice/DataSlice";
import bookmarkAnimation from "../lottie/bookmark.json";
import "../style/BookMark.css";
import Lottie from "lottie-react";
import toast from "react-hot-toast";

function BookMark() {
  const sourceData = useSelector((state) => state.SourceReducer.sourceData);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8); // Number of bookmarks per page
  const handleDeleteBookmark = (name) => {
    dispatch(deleteSource({ name }));

    const bookmarksInStorage =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    const updatedBookmarks = bookmarksInStorage.filter(
      (bookmark) => bookmark.name !== name
    );
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    toast.success("Bookmark removed successfully");
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
    <div className="bookmark">
      <div className="bookmark__container">
        {currentBookmarks?.length > 0 ? (
          currentBookmarks?.map((data, index) => (
            <div className="bookmark__box" key={index}>
              <img className="bookmark__logo" src={data.image} alt={data.name} />
              <h2>{data.name}</h2>
              <p className="bookmark__box-text">{data.desc}</p>
              <button className="bookmark__button" onClick={() => window.open(data.link)}>
                Link
              </button>
              <button
                className="bookmark__button"
                onClick={() => handleDeleteBookmark(data.name)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div></div>
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
            {Array.from({
              length: Math.ceil(sourceData.length / postPerPage),
            }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            ))}
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

      {sourceData.length === 0 && (
        <div>
          <Lottie
            animationData={bookmarkAnimation}
            style={{ height: "200px" }}
          />
          <h1 className="text-2xl font-semibold">No bookmark Found</h1>
          <h3 className="mb-4">Explore Devlabs and add them to your bookmark</h3>
        </div>
      )}
    </div>
  );
}

export default BookMark;
