import React from "react";
import "../style/FrontendTools.css";

const tools = [
  { 
    name: "React", 
    description: "A JavaScript library for building user interfaces", 
    link: "https://reactjs.org/", 
    image: "https://i.pinimg.com/564x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg" 
  },
  { 
    name: "Vue.js", 
    description: "The Progressive JavaScript Framework", 
    link: "https://vuejs.org/", 
    image: "https://i.pinimg.com/564x/81/53/7d/81537d4d5b76f89d653db2bed33b85ed.jpg" 
  },
  { 
    name: "Next.js", 
    description: "Next.js is a React framework for building full-stack web applications.", 
    link: "https://nextjs.org/", 
    image: "https://i.pinimg.com/564x/3f/f5/f9/3ff5f96fafaf0dacf5e6a8e69072f2dc.jpg" 
  },
  { 
    name: "Angular", 
    description: "One framework. Mobile & desktop.", 
    link: "https://angular.io/", 
    image: "https://i.pinimg.com/564x/21/77/78/2177788cdee5c706d5b119a42d0d8d85.jpg" 
  },
  { 
    name: "Svelte", 
    description: "Cybernetically enhanced web apps", 
    link: "https://svelte.dev/", 
    image: "https://sourcebae.com/blog/wp-content/uploads/2023/08/9969f494-sveltelogo.png" 
  },
  { 
    name: "Bootstrap", 
    description: "The most popular HTML, CSS, and JS library", 
    link: "https://getbootstrap.com/", 
    image: "https://i.pinimg.com/564x/92/d6/60/92d660adb69ff63b4d133cda9592d848.jpg" 
  },
  { 
    name: "Tailwind CSS", 
    description: "A utility-first CSS framework for rapid UI development", 
    link: "https://tailwindcss.com/", 
    image: "https://i.pinimg.com/564x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg" 
  },
  { 
    name: "Ember.js", 
    description: "A framework for building ambitious web applications", 
    link: "https://emberjs.com/", 
    image: "https://i.pinimg.com/564x/e1/1a/8e/e11a8e30ab4c9ee67f13d510bf11f8a5.jpg" 
  },
  { 
    name: "jQuery", 
    description: "A fast, small, and feature-rich JavaScript library", 
    link: "https://jquery.com/", 
    image: "https://i.pinimg.com/564x/ca/b6/c7/cab6c762e02a0b4fe89ab3c977928398.jpg" 
  },
  { 
    name: "Bulma", 
    description: "Bulma is a free, open source framework that provides ready-to-use frontend components", 
    link: "https://bulma.io/", 
    image: "https://i.pinimg.com/564x/d7/5e/98/d75e986f0e4d9bcb4d11dacd4556fd40.jpg" 
  },
  { 
    name: "Foundation", 
    description: "Foundation is a free, open source framework that provides ready-to-use frontend components and css classes for the direct use", 
    link: "https://get.foundation/", 
    image: "https://i.pinimg.com/236x/e7/77/1a/e7771ae79843be99e0cdacefd1c561ac.jpg" 
  },
  {
    name: "Grommet",
    description: "A React-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package.",
    link: "https://v2.grommet.io/",
    image: "https://i.ibb.co/6RrD7hw/Screenshot-2024-06-29-131941.png"
  },
  {
    name: "Shadcn/ui",
    description: "Shadcn/ui is a collection of accessible, themeable, and customizable React components built using Radix UI and Tailwind CSS, designed to streamline the creation of modern, responsive web interfaces.",
    link: "https://ui.shadcn.com/",
    image: "https://shorturl.at/TVTbX"
  },
  {
    name: "Ant Design",
    description: "A design system for enterprise-level products, offering a set of high-quality React components out of the box.",
    link: "https://ant.design/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHd0R9InDxSt6TjHiY61JdqxUIoM_FXU4DJw&s"
  },
  {
    name: "Sass",
    description: "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
    link: "https://sass-lang.com/",
    image: "https://shorturl.at/RtQ1O"
  },
  {
    name: "LottieFiles",
    description: "Largest collection of free-to-use animations, with thousands of unique designs that can be used for both personal and commercial projects. The animations are professionally designed, and you can also change the colour, height, width, animation speed, and so on to match the theme of your website.",
    link: "https://lottiefiles.com/",
    image: "https://i.pinimg.com/564x/cb/7e/41/cb7e41c764d0a7e1b7713d11fa08e152.jpg"
  },
  {
    name: "TypeScript",
    description: "TypeScript extends JavaScript by adding types to the language. TypeScript speeds up your development experience.",
    link: "https://www.typescriptlang.org/",
    image: "https://iconduck.com/icons/95017/typescript-icon"
  },
  {
    name: "Backbone.js",
    description: "Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.",
    link: "https://backbonejs.org/",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1681040353717/f19b13d0-e85e-4527-8c4b-81a0b8d2034a.jpeg"
  },
  {
    name: "Webpack",
    description: "Webpack is a module bundler for modern JavaScript applications. It compiles small pieces of code, known as modules, into a cohesive bundle for use in the browser. Webpack enables developers to manage dependencies, perform code splitting, and implement hot module replacement to enhance development efficiency. It works with a wide variety of file types and seamlessly integrates with popular frameworks and libraries, supporting both ES6 and CommonJS module formats.",
    link: "https://webpack.js.org/",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwebpack.js.org%2Fconcepts%2F&psig=AOvVaw2QVMaU5NOZG8bV33cipQQc&ust=1721638369531000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMi2_-3gt4cDFQAAAAAdAAAAABAE"
  },

  {
    name: "Mamba UI",
    description: "Mamba UI is a free, open-source collection of UI components and templates based on Tailwind CSS.",
    link: "https://mambaui.com/",
    image: "https://i.ibb.co/qnbbScj/images.jpg"
  }
  
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
