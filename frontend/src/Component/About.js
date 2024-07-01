import React, { useState, useEffect } from "react";
import "../style/About.css";
import Pagination from "./Pagination";
import { getPaginationData, changePage } from "../utils/paginationData";

const FOUNDER = "HimanshuNarware";
const LINKEDIN_URL = "https://www.linkedin.com/in/HimanshuNarware";
const CARDS_PER_PAGE = 12;

function About() {
  const [contributors, setContributors] = useState([]);
  const [founder, setFounder] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const repoOwner = "HimanshuNarware";
  const repoName = "Devlabs";

  useEffect(() => {
    async function fetchContributors() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`
        );
        if (!response.ok) {
          throw new Error(
            `GitHub API request failed with status ${response.status}`
          );
        }
        const data = await response.json();

        const contributorsList = data.filter(
          (contributor) => contributor.login !== FOUNDER
        );
        const founderObj = data.find(
          (contributor) => contributor.login === FOUNDER
        );

        setContributors(contributorsList);
        setFounder(founderObj);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    }
    fetchContributors();
  }, []);

  // Filtering out
  const filteredContributors = contributors.filter((contributor) =>
    contributor.login.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginationValues = getPaginationData(
    currentPage,
    CARDS_PER_PAGE,
    filteredContributors
  );
  const { lastCardIndex, firstCardIndex, allPagesNumbers, currentPageData } =
    paginationValues;

  const handlePageChange = (value) => {
    changePage(value, currentPage, setCurrentPage, allPagesNumbers);
  };

  return (
    <div>
      <div className="container__one">
        <div className="container__box--one" data-aos="">
          <p>
            Devlabs is an application used to search for tools that
            are both free and helpful for our needs. It is built by the amazing
            open-source community.
          </p>
          <button className="button--repo">
            <a
              href="https://github.com/HimanshuNarware/Devlabs"
              target="_blank"
              rel="noreferrer"
            >
              Star the repo &#9733;
            </a>
          </button>
        </div>
        <div className="container__box--two aos-init" data-aos="flip-left">
          <img
            className="img"
            src="https://civicopilot.com/wp-content/uploads/2022/11/searching_training.svg"
            alt="img"
          />
        </div>
      </div>

      <div className="container__two">
        <div className="container__box--two">
          <img
            className="img"
            src="https://media.istockphoto.com/id/1276643671/vector/tiny-programmers-programming-website-for-internet-platform.jpg?s=612x612&w=0&k=20&c=7k24K8DYdSRxVHj3roqR_f4wkk-a_fG3WlT4hN-VJUg="
            alt="img"
          />
        </div>
        <div className="container__box--one">
          <p>
            Great things are never created in isolation. Thanks to our amazing
            contributors, we've brought this product to life. With your
            help, we can continue to make it even better. If you're a developer
            or a Tech enthusiast, you can help us create a better experience for
            everyone. We are excited to hear your thoughts and ideas.
          </p>
          <button className="button--repo">
            <a
              href="https://github.com/HimanshuNarware"
              target="_blank"
              rel="noreferrer"
            >
              Learn more ➜
            </a>
          </button>
        </div>
      </div>

      <div className="contributors__container">
        <h1>Founder</h1>
        <div className="founder__container">
          <div className="content">
            <img
              className="content__profile-img"
              src={founder.avatar_url}
              alt="profile"
            />
            <h3 className="content__username">{founder.login}</h3>
            <div className="founder__buttons-container">
              <button className="button--profile">
                <a href={founder.html_url} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </button>
              <button className="button--profile">
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  Linkedin
                </a>
              </button>
            </div>
          </div>
        </div>
        <h1 id="contributors">Our Contributors</h1>

        {/* Input bar */}
        <input
          type="text"
          className="searchbar--contributors"
          placeholder="Search your name here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="grid__container">
          {currentPageData?.map((contributor) => {
            return (
              <div className="content" key={contributor.id}>
                <img
                  className="content__profile-img"
                  src={contributor.avatar_url}
                  alt="avatar"
                />
                <h3 className="content__username">{contributor.login}</h3>
                <h4>{contributor.contributions} commits</h4>
                <button className="button--profile">
                  <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Profile
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <Pagination
        firstCardIndex={firstCardIndex}
        lastCardIndex={lastCardIndex}
        dataLength={filteredContributors.length}
        allPagesNumbers={allPagesNumbers}
        currentPage={currentPage}
        scrollPosition={"contributors"}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default About;
