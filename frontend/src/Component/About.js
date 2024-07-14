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

  const filledData = [...currentPageData];
  const placeholdersNeeded = CARDS_PER_PAGE - filledData.length;

  for (let i = 0; i < placeholdersNeeded; i++) {
    filledData.push({ placeholder: true, id: `placeholder-${i}` });
  }

  return (
    <div>
      <div className="about__container-one">
        <div className="about__box about__box--1" data-aos="">
          <p>
            Devlabs is an application used to search for tools that are both
            free and helpful for our needs. It is built by the amazing
            open-source community.
          </p>
          <button className="about__repo-btn">
            <a
              href="https://github.com/HimanshuNarware/Devlabs"
              target="_blank"
              rel="noreferrer"
            >
              Star the repo &#9733;
            </a>
          </button>
        </div>
        <div className="about__box about__box--2 aos-init" data-aos="flip-left">
          <img
            className="about__img"
            src="https://civicopilot.com/wp-content/uploads/2022/11/searching_training.svg"
            alt="img"
          />
        </div>
      </div>

      <div className="about__container-two">
        <div className="about__box about__box--2">
          <img
            className="about__img"
            src="https://media.istockphoto.com/id/1276643671/vector/tiny-programmers-programming-website-for-internet-platform.jpg?s=612x612&w=0&k=20&c=7k24K8DYdSRxVHj3roqR_f4wkk-a_fG3WlT4hN-VJUg="
            alt="img"
          />
        </div>
        <div className="about__box about__box--1">
          <p>
            Great things are never created in isolation. Thanks to our amazing
            contributors, we've brought this product to life. With your help, we
            can continue to make it even better. If you're a developer or a Tech
            enthusiast, you can help us create a better experience for
            everyone. We are excited to hear your thoughts and ideas.
          </p>
          <button className="about__repo-btn">
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

      <div className="about__contributor-container">
        <h1>Founder</h1>
        <div className="about__founder-container">
          <div className="about__content-box">
            <img
              className="about__profile-img"
              src={founder.avatar_url}
              alt="profile"
            />
            <h3 className="about__founder-username">{founder.login}</h3>
            <div className="about__buttons-container">
              <button className="about__profile-btn">
                <a href={founder.html_url} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </button>
              <button className="about__profile-btn">
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  Linkedin
                </a>
              </button>
            </div>
          </div>
        </div>
        <h1 id="contributors">Our Contributors</h1>

        <input
          type="text"
          className="about__searchbar-contributors"
          placeholder="Search your name here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="about__grid-container">
          {filledData.map((contributor) => {
            if (contributor.placeholder) {
              return (
                <div
                  className="about__content-box about__content-box-placeholder"
                  key={contributor.id}
                ></div>
              );
            }
            return (
              <div className="about__content-box" key={contributor.id}>
                <img
                  className="about__logo"
                  src={contributor.avatar_url}
                  alt="avatar"
                />
                <h3>{contributor.login}</h3>
                <h4>{contributor.contributions} commits</h4>
                <button className="about__profile-btn">
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
