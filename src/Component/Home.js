

function Home(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 16;



  const totalPages = Math.ceil(dataBaseData.length / postPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const dispatch = useDispatch();

  const filteredData = dataBaseData.filter((datalist) => {
    return (
      datalist.productName.includes(props.searchQuery) ||
      datalist.description.includes(props.searchQuery)
    );
  });

  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container">
      <div className="main-container">
        {currentPosts.map((datalist) => (
          <div className="content-box" key={datalist.id}>
            <img
              className="logo"
              src={datalist.image}
              alt={datalist.category}
            />
            <h2>{datalist.productName}</h2>
            <p>{datalist.description}</p>
            <button
              className="btn-b"
              onClick={() => window.open(datalist.link)}
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
        ))}
      </div>
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              href="#"
              className="page-link"
              onClick={() => changePage(currentPage - 1)}
            >
              Prev
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => changePage(number)}
              >
                {number}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a
              href="#"
              className="page-link"
              onClick={() => changePage(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
    }
  }
}

export default Home;
