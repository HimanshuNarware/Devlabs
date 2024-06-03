import React, { useState, useEffect } from "react";
import "../style/OpenSource.css";
import ReactPaginate from "react-paginate";
import ClipLoader from "react-spinners/ClipLoader";


const OpenSource = ({project_details}) => {
    const projectsPerPage = 16;
    const projects=project_details
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);


    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const offset = currentPage * projectsPerPage;
    const currentPageProjects = projects.slice(
        offset,
        offset + projectsPerPage
    );
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    return (
        <div className="page-container">
            <div className={loading ? "loading-container" : "main-container"}>
                <ClipLoader
                    color="#a0a0a0"
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />

                {currentPageProjects.map((project) => (
                    <div className="content-box-home" key={project.projectName}>
                        <h2>{project.projectName}</h2>
                        <span className="content-box-subtitle">
                            - By {project.ownerUsername}
                        </span>
                        <p className="content-box-text">
                            {project.description}
                        </p>
                        <button
                            className="btn-b-box"
                            onClick={() => {
                                window.open(project.link);
                            }}
                        >
                            Project
                        </button>
                        <div className="tag-grid">
                            {project.tags &&
                                project.tags.map((tag) => (
                                    <span className="tag" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={currentPage < totalPages - 1 ? "next >" : null}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    pageCount={totalPages}
                    previousLabel={currentPage > 0 ? "< prev" : null}
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName={`page-item ${
                        currentPage === 0 ? "disabled" : ""
                    }`}
                    previousLinkClassName="page-link"
                    nextClassName={`page-item ${
                        currentPage === totalPages - 1 ? "disabled" : ""
                    }`}
                    nextLinkClassName="page-link"
                    activeClassName="active"
                />
            )}
        </div>
    );
};


export default OpenSource;