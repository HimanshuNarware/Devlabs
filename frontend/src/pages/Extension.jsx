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
    description: "This extension for Visual Studio Code adds snippets for Angular for TypeScript and HTML.",
    version: "18.0.2",
    image: "https://johnpapa.gallerycdn.vsassets.io/extensions/johnpapa/angular2/18.0.2/1721073446931/Microsoft.VisualStudio.Services.Icons.Default",
    developer: "John Papa",
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
