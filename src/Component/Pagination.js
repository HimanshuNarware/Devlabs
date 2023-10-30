import React from 'react'
import "../style/Pagination.css"

const Pagination = ({ 
  firstCardIndex, 
  lastCardIndex, 
  dataLength, 
  allPagesNumbers, 
  currentPage, 
  handlePageChange,
  scrollPosition 
}) => {  
  return (
    <nav>
      <div className="page-index">
        Showing {firstCardIndex + 1}-{lastCardIndex} from {dataLength} results
      </div>

      <ul className="pagination">
        <li className="page-item">
          <a 
            href={`#${scrollPosition}`} 
            className="page-link" 
            onClick={() => { currentPage !== 1 && handlePageChange("prev") }}
          >
            prev
          </a>
        </li>

        {allPagesNumbers.map((pageNum, i) => (
          <li
            className={`page-item ${currentPage === pageNum ? "active" : ""}`}
            key={`li-${i}`}
          >
            <a 
              href={`#${scrollPosition}`}
              className="page-link" 
              onClick={() => handlePageChange(pageNum)}
            >
              {pageNum}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a 
            href={`#${scrollPosition}`} 
            className="page-link" 
            onClick={() => { lastCardIndex < dataLength && handlePageChange("next") }}
          >
            next
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination