import React from 'react'
import "../style/BackendTools.css"
const tools = [
    {
      name: "Node.js",
      description: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.",
      link: "https://nodejs.org/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82uBPqnWciRtiFtYrB3OCdcaZLC789VVaMpSBQzC3S1we1p12"
    },
    {
        name: "Express.js",
        description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. ",
        link: "https://expressjs.com/",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png"
    },
    {
      name: "Django",
      description: "Django is one of the best and most popular backend web frameworks that Python offers.",
      link: "https://www.djangoproject.com/",
      image: "https://www.djangoproject.com/m/img/logos/django-logo-positive.png"
    },
    {
      name: "PHP",
      description: "PHP is one of the most popular backend technology used in web development today.",
      link: "https://www.php.net/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
    },
    {
        name: "Flask",
        description: "Flask is a micro framework based on Python which is easy to use and provides high speed and productivity.",
        link: "https://flask.palletsprojects.com/en/3.0.x/",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png"
    },
    {
        name: "Docker",
        description: "Docker is platform where you can run, test, and deploy Web apps and projects. ",
        link: "https://www.docker.com/",
        image: "https://logowik.com/content/uploads/images/301_docker.jpg"
    },
    {
      name: "Laravel",
      description: "Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.",
      link: "https://laravel.com/",
      image: "https://twtv3.ams3.digitaloceanspaces.com/posts/laravel-best-php-framework-1568x1045-1.jpg"
  },
];
const BackendTools = () => {
  return (
    <div className="frontend-tools">
    <h1 className="title" style={{marginTop:'60px',color:'white'}}>Backend Tools</h1>
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

export default BackendTools
