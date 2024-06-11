import React from "react";
import "../style/FrontendTools.css";

const tools = [
  { name: "React", description: "A JavaScript library for building user interfaces", link: "https://reactjs.org/", image: "https://i.pinimg.com/564x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg" },
  { name: "Vue.js", description: "The Progressive JavaScript Framework", link: "https://vuejs.org/", image: "https://i.pinimg.com/564x/81/53/7d/81537d4d5b76f89d653db2bed33b85ed.jpg" },
  { name: "Angular", description: "One framework. Mobile & desktop.", link: "https://angular.io/", image: "https://i.pinimg.com/564x/21/77/78/2177788cdee5c706d5b119a42d0d8d85.jpg" },
  { name: "Svelte", description: "Cybernetically enhanced web apps", link: "https://svelte.dev/", image: "https://sourcebae.com/blog/wp-content/uploads/2023/08/9969f494-sveltelogo.png" },
  { name: "Bootstrap", description: "The most popular HTML, CSS, and JS library", link: "https://getbootstrap.com/", image: "https://i.pinimg.com/564x/92/d6/60/92d660adb69ff63b4d133cda9592d848.jpg" },
  { name: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development", link: "https://tailwindcss.com/", image: "https://i.pinimg.com/564x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg" },
  { name: "Ember.js", description: "A framework for building ambitious web applications", link: "https://emberjs.com/", image: "https://i.pinimg.com/564x/e1/1a/8e/e11a8e30ab4c9ee67f13d510bf11f8a5.jpg" },
  { name: "jQuery", description: "A fast, small, and feature-rich JavaScript library", link: "https://jquery.com/", image: "https://i.pinimg.com/564x/ca/b6/c7/cab6c762e02a0b4fe89ab3c977928398.jpg" },
];


const FrontendTools = () => {
  return (
    <div className="frontend-tools">
      <h1 className="title">Frontend Tools</h1>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img src={tool.image} alt={tool.name} className="tool-image" />
            <h2 className="tool-name">{tool.name}</h2>
            <p className="tool-description">{tool.description}</p>
            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="tool-link">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontendTools;
