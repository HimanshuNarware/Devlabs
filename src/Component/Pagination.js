import React from 'react'

const Pagination = ({ firstPostIndex, lastPostIndex, currentPost1, prePage, numbers, currentPage, changeCPage, nextPage  }) => {
  
  console.log(`NUMBERS: ${firstPostIndex}`)
  
  return (
    <nav>
      <div className="page-index">
        Showing {firstPostIndex + 1}-{lastPostIndex} from {currentPost1.length} results
      </div>

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
  )
}

export default Pagination