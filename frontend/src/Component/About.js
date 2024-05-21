import React, { useState, useEffect } from 'react';
import '../style/About.css'
import Pagination from './Pagination';
import { getPaginationData, changePage } from '../utils/paginationData';

const FOUNDER = "HimanshuNarware"
const LINKEDIN_URL = "https://www.linkedin.com/in/HimanshuNarware"
const CARDS_PER_PAGE = 12

function About() {
	const [contributors, setContributors] = useState([]);
	const [founder, setFounder] = useState({})
	const [currentPage, setCurrentPage] = useState(1);
	const repoOwner = 'HimanshuNarware';
	const repoName = 'Devlabs';

	useEffect(() => {
		async function fetchContributors() {
			try {
				const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors`);
				if (!response.ok) {
					throw new Error(`GitHub API request failed with status ${response.status}`);
				}
				const data = await response.json();

				const contributorsList = data.filter(contributor => contributor.login !== FOUNDER);
				const founderObj = data.find(contributor => contributor.login === FOUNDER);

				setContributors(contributorsList);
				setFounder(founderObj);
			} catch (error) {
				console.error('Error fetching contributors:', error);
			}
		}	
		fetchContributors();
	}, []);


	const paginationValues = getPaginationData(currentPage, CARDS_PER_PAGE, contributors)
	const { lastCardIndex, firstCardIndex, allPagesNumbers, currentPageData} = paginationValues

	const handlePageChange = (value) => {
		changePage(value, currentPage, setCurrentPage)
	}

	return (
		<div>
			<div className='container-one'>
				<div className='bx-1' data-aos="flip-left">
					<p>
						Devlabs is an application that is used to search for free tools that are both free and helpful for our needs. It is built by the amazing open-source community.
					</p>
					<button className='repo-btn'>
						<a 
							href="https://github.com/HimanshuNarware/Devlabs" 
							target="_blank"
							rel="noreferrer"
						>
							Star the repo &#9733;
						</a>
					</button>
				</div>
				<div className='bx-2 aos-init' data-aos="flip-left">
					<img className="img "
						src='https://civicopilot.com/wp-content/uploads/2022/11/searching_training.svg'
						alt='img' 
					/>
				</div>
			</div>

			<div className='container-two'>
				<div className='bx-2'> 
					<img className="img" src='https://media.istockphoto.com/id/1276643671/vector/tiny-programmers-programming-website-for-internet-platform.jpg?s=612x612&w=0&k=20&c=7k24K8DYdSRxVHj3roqR_f4wkk-a_fG3WlT4hN-VJUg='/>
				</div>
				<div className='bx-1'>
					<p>
						Great things are never created in isolation. Thanks to our amazing Contributors, we've brought this product to life. And with your help, we can continue to make it even better. If you're a Developer or a Tech enthusiast, you can help us create a better experience for everyone. We are excited to hear your thoughts and ideas.
					</p>
					<button className='repo-btn'>
						<a href="https://github.com/HimanshuNarware" target="_blank" rel="noreferrer">
							Learn more ➜
						</a>
					</button>
				</div>
			</div>

			<div className='contributor-container'>
				<h1>Founder</h1>
				<div className='founder-container'>
					<div className='content-box'>
						<img className='profile-img' src={founder.avatar_url} alt="profile"/>
						<h3 className='founder-username'>{founder.login}</h3>
						<div className='buttons-container'>
							<button className='profile-btn'>
								<a href={founder.html_url} target="_blank" rel="noreferrer">
									GitHub
								</a>
							</button>
							<button className='profile-btn'>
								<a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
									Linkedin
								</a>
							</button>
						</div>
					</div>
				</div>
				<h1 id='contributors'>Our Contributors</h1>
				<div className='grid-container'>
					{currentPageData?.map(contributor => {
						return (
							<div className='content-box' key={contributor.id}>
								<img className='logo' src={contributor.avatar_url} alt="avatar"/>
								<h3>{contributor.login}</h3>
								<h4>{contributor.contributions} commits</h4>
								<button className='profile-btn'>
									<a href={contributor.html_url} target="_blank" rel="noreferrer">
										Profile
									</a>
								</button>
							</div>
						)}
					)}
				</div>
			</div>

			<Pagination 
				firstCardIndex={firstCardIndex}
				lastCardIndex={lastCardIndex}
				dataLength={contributors.length}
				allPagesNumbers={allPagesNumbers} 
				currentPage={currentPage} 
				scrollPosition={"contributors"}
				handlePageChange={handlePageChange}
			/>
		</div>
	);
}

export default About
