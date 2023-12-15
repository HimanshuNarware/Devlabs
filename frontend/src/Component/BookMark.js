import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSource } from "../Slice/DataSlice";
import "../style/BookMark.css";

function BookMark() {
  const sourceData = useSelector((state) => state.SourceReducer.sourceData);
  const dispatch = useDispatch();

  const handleDeleteBookmark = (name) => {
    dispatch(deleteSource({ name }));

    const bookmarksInStorage =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    const updatedBookmarks = bookmarksInStorage.filter(
      (bookmark) => bookmark.name !== name
    );
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="container-bk">
      {sourceData && sourceData.length > 0 ? (
        sourceData.map((data, index) => (
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
  );
}

export default BookMark;
