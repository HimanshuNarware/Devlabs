import React, { useState, useEffect } from "react";
import "../style/OpenSource.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import jsonProjects from "../DB/openSource.json";

const BACKEND = process.env.REACT_APP_BACKEND;

const OpenSource = () => {
    const projectsPerPage = 16;
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await axios
                .get(`${BACKEND}/open-source/all`)
                .catch((error) => {
                    return error.response;
                });

            if (response.data && response.data.success) {
                setProjects(response.data.openSourceProjects);
            } else {
                setProjects(jsonProjects);
            }

            setLoading(false);
        };
        fetchData();
    }, []);

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
        <div className="open-source__page-container">
            <div className={loading ? "open-source__loading-container" : "open-source__main-container"}>
                <ClipLoader
                    color="#a0a0a0"
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />

                {currentPageProjects.map((project) => (
                    <div className="open-source__content-box-home" key={project.projectName}>
                        <h2>{project.projectName}</h2>
                        <span className="open-source__content-box-subtitle">
                            - By {project.ownerUsername}
                        </span>
                        <p className="open-source__content-box-text">
                            {project.description}
                        </p>
                        <button
                            className="open-source__btn-b-box"
                            onClick={() => {
                                window.open(project.link);
                            }}
                        >
                            Project
                        </button>
                        <div className="open-source__tag-grid">
                            {project.tags &&
                                project.tags.map((tag) => (
                                    <span className="open-source__tag" key={tag}>
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
                    containerClassName="open-source__pagination"
                    pageClassName="open-source__page-item"
                    pageLinkClassName="open-source__page-link"
                    previousClassName={`open-source__page-item ${
                        currentPage === 0 ? "open-source__disabled" : ""
                    }`}
                    previousLinkClassName="open-source__page-link"
                    nextClassName={`open-source__page-item ${
                        currentPage === totalPages - 1 ? "open-source__disabled" : ""
                    }`}
                    nextLinkClassName="open-source__page-link"
                    activeClassName="open-source__active"
                />
            )}
        </div>
    );
};

export default OpenSource;
