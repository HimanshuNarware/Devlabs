import React from "react";
import "../style/RemoteJobs.css";

const tools = [
  { name: "Toptal", 
    description: "Toptal is an exclusive network of the top freelance software developers, designers, finance experts, product managers and project managers in the world.", 
    link: "https://www.toptal.com/", 
    image: "toptal.webp" 
  },
  { name: "Turing", 
    description: "Find remote software jobs with companies based in the US on Turing and get full-time, long-term remote software jobs with better compensation and career growth.", 
    link: "https://www.turing.com/", 
    image: "turing.jpg" 
  },
  { name: "X-Team", 
    description: "X-Team is a community for developers where you can get long-term remote jobs with leading brands.", 
    link: "https://x-team.com/", 
    image: "x-team.jpg" 
  },
  { name: "Gun.io", 
    description: "Gun.io helps you find freelance and salaried jobs for tech professionals.The Gun.io platform is changing the game for hiring", 
    link: "https://gun.io/", 
    image: "gun-io.png" 
  },
];

const CodingPlatform = () => {
  return (
    <div className="remote-jobs">
      <h1 className="title">Remote Jobs</h1>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img src={tool.image} alt={tool.name} className="tool-image" />
            <h2 className="tool-name">{tool.name}</h2>
            <p className="tool-description">{tool.description}</p>
            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="tool-link">Visit Website</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingPlatform;
