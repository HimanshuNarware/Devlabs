import React from 'react'
import "../style/Pagination.css"

const Pagination = ({ firstCardIndex, lastCardIndex, dataLength, prePage, allPagesNumbers, currentPage, changeCPage, nextPage  }) => {  
  return (
    <nav>
      <div className="page-index">
        Showing {firstCardIndex + 1}-{lastCardIndex} from {dataLength} results
      </div>

      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link" onClick={prePage}>
            prev
          </a>
        </li>

        {allPagesNumbers.map((pageNum, i) => (
          <li
            className={`page-item ${currentPage === pageNum ? "active" : ""}`}
            key={i}
          >
            <a href="#" className="page-link" onClick={() => changeCPage(pageNum)}>
              {pageNum}
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
  )
}

export default Pagination