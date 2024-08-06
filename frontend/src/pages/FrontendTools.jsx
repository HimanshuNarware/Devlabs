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
    "name": "Framer",
    "description": "A design tool for creating interactive, high-fidelity prototypes",
    "link": "https://www.framer.com/",
    "image": "data:image/jpeg;base64,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"
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
    name: "Three.js",
    description: "Three.js is a cross-browser JavaScript library and API used to create and display animated 3D computer graphics in a web browser. It simplifies the process of building 3D experiences for the web by providing a straightforward interface for working with WebGL, which is the underlying technology for rendering graphics. Three.js supports a wide range of features including lighting, shadows, materials, textures, and advanced effects like shaders and post-processing. It's widely used for creating interactive 3D websites, games, data visualizations, and virtual reality experiences.",
    link: "https://threejs.org/",
    image: "https://miro.medium.com/v2/resize:fit:724/1*6s_Dkfeldg35ySmAp0tPkQ.png"
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
