import React, { useState } from 'react';
import projects from "../DB/openSource.json";

import "../style/OpenSource.css";
import ReactPaginate from 'react-paginate';

const OpenSource = () => {
	const projectsPerPage = 10;

	let lastProjectIndex = projectsPerPage;
	let firstProjectIndex = 0;

	const totalPages = Math.ceil(projects.length / projectsPerPage);

	const [currentPageProjects, setCurrentPageProjects] = useState(projects.slice(firstProjectIndex, lastProjectIndex));

	const handlePageClick = (event) => {
		firstProjectIndex = (event.selected * projectsPerPage) % projects.length
		lastProjectIndex = firstProjectIndex + projectsPerPage
		setCurrentPageProjects(projects.slice(firstProjectIndex, lastProjectIndex));
	}

  	return (
    	<div className='page-container'>
			<div className='main-container'>
				{
					currentPageProjects !== undefined && currentPageProjects.map((project) => {
						return (
							<div className='content-box-home' key={project.projectName}>
								<h2>{project.projectName}</h2>
								<span className="content-box-subtitle">- By {project.ownerUsername}</span>
								<p className='content-box-text'>{project.description}</p>

								<button className="btn-b-box" onClick={() => {window.open(project.link)}}>
									Project
								</button>

								<div className='tag-grid'>
									{project.tags !== undefined && project.tags.map( (tag) =>{
											return (
												<span className='tag' key={tag}>{tag}</span>
											)
										}
									)}
								</div>
							</div>
						);
					})
				}
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
  	)
}

export default OpenSource