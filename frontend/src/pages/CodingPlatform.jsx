import React from "react";
import "../style/CodingPlatform.css";

const tools = [
  {
    name: "CodeSandbox",
    description: "An online code editor and prototyping tool",
    link: "https://codesandbox.io/",
    image: "https://i.pinimg.com/564x/82/14/0e/82140ec1a4bc53413b6c9150b1e3bab3.jpg"
  },
  {
    name: "CodePen",
    description: "An online community for testing and showcasing user-created HTML, CSS, and JavaScript code snippets",
    link: "https://codepen.io/",
    image: "https://i.pinimg.com/564x/0c/ea/84/0cea842d30cae99ee4e5772308fddbf8.jpg"
  },
  {
    name: "JSFiddle",
    description: "An online IDE for web development, where users can create, test, and showcase HTML, CSS, and JavaScript code snippets",
    link: "https://jsfiddle.net/",
    image: "https://i.pinimg.com/736x/16/63/aa/1663aa377120b3ee56822fc19d851278.jpg"
  },
  {
    name: "StackBlitz",
    description: "An online IDE for web applications, allowing developers to create, share, and collaborate on projects in the browser",
    link: "https://stackblitz.com/",
    image: "https://i.pinimg.com/564x/12/6d/c5/126dc594c84336847f0623bc1d26c0b3.jpg"
  },
  {
    name: "Replit",
    description: "An online IDE for programming in multiple languages, with features like collaboration, hosting, and version control",
    link: "https://replit.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1200px-New_Replit_Logo.svg.png"
  },
  {
    name: "JSBin",
    description: "An online HTML, CSS, and JavaScript code editor for web developers",
    link: "https://jsbin.com/",
    image: "https://static.jsbin.com/images/logo.png"
  },
  {
    name: "Plunker",
    description: "An online community for creating, collaborating on, and sharing web development projects",
    link: "https://plnkr.co/",
    image: "https://i.pinimg.com/564x/6a/0c/70/6a0c70cacbdaae750dd56bed1964b95a.jpg"
  },
  {
    name: "Glitch",
    description: "A community-driven platform for creating, remixing, and hosting web apps and websites",
    link: "https://glitch.com/",
    image: "https://logos-world.net/wp-content/uploads/2021/03/Glitch-Logo-2018-present.png"
  },
  {
    name: "Stack Overflow Code Snippet",
    description: "A feature of Stack Overflow that allows users to create, test, and share code snippets directly on the site",
    link: "https://stackoverflow.com/",
    image: "https://i.pinimg.com/564x/2e/30/2d/2e302de0ac09bc7085c45f03abc72472.jpg"
  },
  {
    name: "GitHub Gists",
    description: "A service provided by GitHub that allows users to share code snippets and files",
    link: "https://gist.github.com/",
    image: "https://k9982874.gallerycdn.vsassets.io/extensions/k9982874/github-gist-explorer/0.2.3/1638842316475/Microsoft.VisualStudio.Services.Icons.Default"
  },
  {
    name: "Programiz",
    description: "A platform in which write a code in this online compiler without depend on any software or compiler",
    link: "https://www.programiz.com/python-programming/online-compiler/",
    image: "https://i.ibb.co/K0M4T5y/Screenshot-2024-07-02-170050.png"
  },
  {
    name: "LeetCode",
    description: "A platform for preparing technical coding interviews, offering coding challenges and mock interviews",
    link: "https://leetcode.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
  },
  {
    name: "CodeChef",
    description: "An online platform for competitive programming, offering coding contests and practice problems",
    link: "https://www.codechef.com/",
    image: "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg"
  },
  {
      "name": "Coding Ninjas",
      "description": "An online learning platform offering courses in coding and programming with a focus on hands-on learning and projects.",
      "link": "https://www.codingninjas.com/",
      "image": "https://www.codingninjas.com/assets-landing/images/CNLOGO.svg"  
  },
  {
    name: "HakerEarth",
    description: "The ease with which a recruiter can create a test on HackerEarth and assess a candidate on a vast skill-set is simply amazing. The analytics that the platform",
    link: "https://www.hackerearth.com/",
    image: "https://i.pinimg.com/564x/4c/d7/f4/4cd7f43818621e24eaedaa3d9c3aa675.jpg"
  },
  {
    name: "HackerRank",
    description: "HackerRank is the market-leading coding test and interview solution for hiring developers. Start hiring at the pace of innovation!",
    link: "https://www.hackerrank.com/",
    image: "https://i.pinimg.com/564x/5d/84/93/5d84930516cac6c802a95671c9acf511.jpg"
  },
  {
    name: "GeeksforGeeks",
    description: "A portal for computer science resources, tutorials, and coding practice.",
    link: "https://www.geeksforgeeks.org/",
    image: "https://shorturl.at/isVge"
  },
  {
    name: "Codeforces",
    description: "Codeforces is a competitive programming platform offering coding contests and problem-solving exercises to enhance algorithmic skills.",
    link: "https://codeforces.com/",
    image: "https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcer3l19eex0wy900b101.jpg"
  },
  {
    name: "Kaggle",
    description: "Kaggle is an online platform for data science competitions, learning resources, and a community for data scientists and machine learning enthusiasts to collaborate and compete.",
    link: "https://www.kaggle.com/",
    image: "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F3335785%2F5ba220bb74222dc4831ec760af1e25d1%2F0_EcNt1Y_p5njLMX3F.png?generation=1588220591109846&alt=media"
  },
];


const CodingPlatform = () => {
  return (
    <div className="coding-platform">
      <h1 className="title">Coding Platforms</h1>
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
