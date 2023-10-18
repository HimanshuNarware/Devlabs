import React, { useState, useEffect } from 'react';
import '../style/About.css'
import profile from '../image/profile.png'

const FOUNDER = "HimanshuNarware"
const LINKEDIN_URL = "https://www.linkedin.com/in/HimanshuNarware"

function About() {
  const [contributors, setContributors] = useState([]);
  const [founder, setFounder] = useState({})
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

  return (
    <div>

      <div className='container-one'>


        <div className='bx-1'>
          <p>
            Devlabs is an application that is used to search for free tools that are both free and helpful for our needs. It is built by the amazing open-source community.
          </p>
          <button className='repo-btn'> <a href="https://github.com/HimanshuNarware/Devlabs" target="_blank">Star the repo &#9733;</a></button>
        </div>
        <div className='bx-2'>
          <img className="img " src='https://imgs.search.brave.com/QKiV2kjLLbCo5yYmlXGywHNk3CbfEVQPXvl7zoMhR3s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vcGVu/c291cmNlLmd1aWRl/L2Fzc2V0cy9pbWFn/ZXMvaWxsb3MvYmFs/YW5jZS5zdmc.svg' alt='img' />
        </div>

      </div>

      <div className='container-one'>

        <div className='bx-1'> <img src='https://imgs.search.brave.com/pQigBw5L8ODloy7loco05dRT56xI3iAmVRKPCUYYltc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTYw/NTMxMDEyL3ZlY3Rv/ci9vcGVuLXNvdXJj/ZS1pY29uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1SYUxi/UU1fMjA2bHNHcHRZ/WW1ZUG0zYk42SHVM/WFZlZWFtb3ozZXNL/S0VRPQ'
          alt='img' /></div>
        <div className='bx-2'>
          <p>
            Great things are never created in isolation. Thanks to our amazing Contributors, we've brought this product to life. And with your help, we can continue to make it even better. If you're a Developer or a Tech enthusiast, you can help us create a better experience for everyone. We are excited to hear your thoughts and ideas.
          </p>
          <button className='repo-btn'>
            <a href="https://github.com/HimanshuNarware" target="_blank">
              Learn more ➜
            </a>
          </button>
        </div>


      </div>
      <div className='contributor-container'>
        <h1>Founder</h1>
        <div className='founder-container'>
          <div className='content-box'>
            <img className='profile-img' src={profile} alt="profile"/>
            <h3 className='founder-username'>{founder.login}</h3>
            <div className='buttons-container'>
              <button className='profile-btn'>
                <a href={founder.html_url} target="_blank">
                  GitHub
                </a>
              </button>
              <button className='profile-btn'>
                <a href={LINKEDIN_URL} target="_blank">
                  Linkedin
                </a>
              </button>
            </div>
          </div>
        </div>
        <h1>Our Contributors</h1>
        <div className='grid-container'>
          {contributors.map(contributor => {
            return (
              <div className='content-box'>
                <img className='logo' src={contributor.avatar_url} alt="avatar"/>
                <h3>{contributor.login}</h3>
                <h4>{contributor.contributions} commits</h4>
                <button className='profile-btn'>
                  <a href={contributor.html_url} target="_blank">
                    Profile
                  </a>
                </button>
              </div>
            )

          }
          )}


        </div>
      </div>
    </div>
  )
}

export default About
