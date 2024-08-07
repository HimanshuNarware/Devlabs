import React from "react";
import "../style/Extensions.css";

const extensions = [
  {
    title: "React Developer Tools",
    category: "Development",
    description: "A set of tools for inspecting and debugging React applications.",
    version: "4.13.3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3ZHRm4yFPUXCnWUNBXPJEhsImIwthTQSF4masCFQnQR4meEyyAL0eMqLossUUl403Fk",
    developer: "Facebook",
  },
  {
    title: "Redux DevTools",
    category: "Development",
    description: "DevTools for Redux with hot reloading, action replay, and time travel.",
    version: "2.17.0",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6dA_h_gfHv90W7GMQtz2dKID156nmgLZVg&s",
    developer: "Redux",
  },
  {
    title: "ESLint",
    category: "Development",
    description: "A tool for identifying and fixing problems in your JavaScript code.",
    version: "7.32.0",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1629868571653/6C5v-kqoL.png",
    developer: "Nicholas C. Zakas",
  },
  {
    title: "Prettier",
    category: "Development",
    description: "An opinionated code formatter that enforces a consistent style.",
    version: "2.3.2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJMr6dtB-rxlXjRhBmVvrdb-026KcDA2Mhw&s",
    developer: "Prettier",
  },
  {
    title: "Postman",
    category: "API Development",
    description: "A collaboration platform for API development.",
    version: "8.6.2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrpIkmjvNdeOlYbumyC8UErD2aRzQ9matxg&s",
    developer: "Postman",
  },
  {
    title: "Live Server",
    category: "Development",
    description: "A VS Code extension for launching a local development server with live reload.",
    version: "5.6.1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qFV8dxdP-jTNqWZyH6fjCFDPGITimNvI8w&s",
    developer: "Ritwick Dey",
  },
  {
    title: "GitHub Copilot",
    category: "Development",
    description: "An AI-powered code completion tool that suggests code snippets and entire functions based on the context of your code.",
    version: "1.8.0",
    image: "https://freeappsai.com/wp-content/uploads/2024/03/Copilot.jpg",
    developer: "GitHub",
  },
  {
    title: "Angular Snippet for TypeScript",
    category: "Development",
    description: "Get SEO insights at the click of a button to any website you're currently on. Built by full-time SEO's for daily analysis",
    version: "2.2.3",
    image: "https://lh3.googleusercontent.com/oFVSn32RiYmiXqaAFCzhAnNh70kCeFtP_vRCUXq54kC6tMjxn2nbLT05mztIb6RqL9xfPP2FCmfStYRsaYjdu9RKjjI=s60",
    developer: "Marketing, Inc.",
  },
  {
    title: "Proofhub",
    category: "Development",
    description: "ProofHub is an easy-to-use project management software with everything you need to manage teams, work, and projects from a central location.",
    version: "1.6.0",
    image: "https://i.pcmag.com/imagery/reviews/00DGg3V9SuURGDLUoe7QmD6-23.fit_lim.size_1050x591.v1605289134.png",
    developer: "ProofHub",
  }, 
];

const Extensions = () => (
  <div className="container">
    <h1 className="title" style={{ marginTop: "60px", color: 'white' }}>Extensions</h1>
    <div className="grid-container">
      {extensions.map((extension, index) => (
        <div key={index} className="grid-item">
          <img
            src={extension.image}
            alt={extension.title}
            className="extension-image"
            height="200px"
            width="100%"
          />
          <h2 className="extension-title">{extension.title}</h2>
          <p className="extension-category">{extension.category}</p>
          <p className="extension-version">Version: {extension.version}</p>
          <p className="extension-description">{extension.description}</p>
          <p className="extension-developer">Developer: {extension.developer}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Extensions;
