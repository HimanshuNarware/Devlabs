import React, { useState, useEffect } from 'react';
import '../style/About.css'
import { motion } from "framer-motion";

function About() {
  const [contributors, setContributors] = useState([]);
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
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    }
    fetchContributors();
  }, []);

  return (
    <div>
      <div className="container-one d-block">
        <div className="d-flex responsive m-5 flex-reverse">
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="left"
          >
            <p>
              Devlabs is an application that is used to search for free tools
              that are both free and helpful for our needs. It is built by the
              amazing open-source community.
            </p>
            <button>
              {/*eslint-disable-next-line*/}
              <a
                href="https://github.com/HimanshuNarware/Devlabs"
                target="_blank"
              >
                Star&nbsp;our&nbsp;Repo
              </a>
            </button>
          </motion.div>

          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="image_portion upper-img right"
            style={{
              backgroundImage: `url(https://imgs.search.brave.com/QKiV2kjLLbCo5yYmlXGywHNk3CbfEVQPXvl7zoMhR3s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vcGVu/c291cmNlLmd1aWRl/L2Fzc2V0cy9pbWFn/ZXMvaWxsb3MvYmFs/YW5jZS5zdmc.svg)`,
            }}
          ></motion.div>
        </div>

        <div className="d-flex m-5 bottom-div responsive">
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="image_portion bottom-left"
            style={{
              backgroundImage: `url(https://imgs.search.brave.com/pQigBw5L8ODloy7loco05dRT56xI3iAmVRKPCUYYltc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTYw/NTMxMDEyL3ZlY3Rv/ci9vcGVuLXNvdXJj/ZS1pY29uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1SYUxi/UU1fMjA2bHNHcHRZ/WW1ZUG0zYk42SHVM/WFZlZWFtb3ozZXNL/S0VRPQ)`,
            }}
          ></motion.div>

          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bottom-right"
          >
            <p>
              Great things are never created in isolation. Thanks to our amazing
              Contributors, we've brought this product to life. And with your
              help, we can continue to make it even better. If you're a
              Developer or a Tech enthusiast, you can help us create a better
              experience for everyone. We are excited to hear your thoughts and
              ideas.
            </p>
            <button>
              {/*eslint-disable-next-line*/}
              <a href="https://github.com/HimanshuNarware" target="_blank">
                Learn more ➜
              </a>
            </button>
          </motion.div>
        </div>
      </div>
      <div className="contributor-container">
        <h1>Our Contributors</h1>
        <div className="main-container">
          {contributors.map((contributor) => {
            return (
              <div className="content-box">
                <img className="logo" src={contributor.avatar_url} />
                <h3>{contributor.login}</h3>
                <h4>{contributor.contributions} commits</h4>
                <button className="profile-btn">
                  <a href={contributor.html_url} target="_blank">
                    Profile
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About
