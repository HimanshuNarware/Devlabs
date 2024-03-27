import React, { useState, useEffect } from "react";
import "../style/OpenSource.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

import jsonProjects from "../DB/openSource.json";

const BACKEND = process.env.REACT_APP_BACKEND;

const OpenSource = () => {
  const projectsPerPage = 16;

  let lastProjectIndex = projectsPerPage;
  let firstProjectIndex = 0;
  const [projects, setProjects] = useState([]);

  let currentPageProjects = projects.slice(firstProjectIndex, lastProjectIndex);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const [loading, setLoading] = useState(false);

  const handlePageClick = (event) => {
    firstProjectIndex = (event.selected * projectsPerPage) % projects.length;
    lastProjectIndex = firstProjectIndex + projectsPerPage;
    currentPageProjects = projects.slice(firstProjectIndex, lastProjectIndex);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await axios
        .get(`${BACKEND}/open-source/all`)
        .catch((error) => {
          return error.response;
        });

      if (response.data.success) {
        setProjects(response.data.openSourceProjects);
        console.log("backend data loaded");
      } else {
        setProjects(jsonProjects);
        console.log("json data loaded");
      }

      setLoading(false);
    };
    fetchData();
  }, []);

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

        {currentPageProjects !== undefined &&
          currentPageProjects.map((project) => {
            return (
              <div
                className="content-box-home content-box-home dark:bg-[#101623] dark:border-[#8b5cf6]"
                key={project.projectName}
              >
                <h2 className="text-2xl font-semibold dark:text-[#8b5cf6] text-[#74A309]">
                  {project.projectName}
                </h2>
                <span className="content-box-subtitle">
                  - By {project.ownerUsername}
                </span>
                <p className="content-box-text content-box-text mb-4 text-slate-900 dark:text-white">
                  {project.description}
                </p>

                <button
                  className="btn-b-box dark:bg-[#8b5cf6]"
                  onClick={() => {
                    window.open(project.link);
                  }}
                >
                  Project
                </button>

                <div className="tag-grid">
                  {project.tags !== undefined &&
                    project.tags.map((tag) => {
                      return (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        pageRangeDisplayed={4}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
        className="pagination open-source"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
};

export default OpenSource;
