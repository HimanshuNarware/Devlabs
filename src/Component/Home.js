import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../style/Home.css";
import { setSource } from "../Slice/DataSlice";
import { useDispatch } from "react-redux";

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

  
  const [currentPage, setCurrentPage] = useState(1);
  const postPerpage = 16;
  const lastPostIndex = currentPage * postPerpage;
  const firstPostIndex = lastPostIndex - postPerpage;

  const currentPost1 = dataBaseData;
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

  // const currentPost1 = productsData;
  let allvalue = productsData;

  if (localStorageValue === "undefined" || localStorageValue === "all") {
    allvalue = productsData;
  } else if (localStorageValue !== "all" && localStorageValue !== "undefined") {
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
    <div className="page-container">
      <div className="main-container">
        {
          (currentPost.map((datalist) => {
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
      {/* pagination */}

      <nav>
        <div className="page-index">
          Showing {firstPostIndex + 1}-{lastPostIndex} from {currentPost1.length} results
        </div>
        <ul className="pagination">
          <li className="page-item">
            <button href="#" className="page-link" onClick={prePage}>
              prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <button href="#" className="page-link" onClick={() => changeCPage(n)}>
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