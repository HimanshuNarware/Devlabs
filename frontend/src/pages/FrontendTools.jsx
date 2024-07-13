import React from "react";
import "../style/FrontendTools.css";

const tools = [

  { name: "React", 
    description: "A JavaScript library for building user interfaces", 
    link: "https://reactjs.org/",
     image: "https://i.pinimg.com/564x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg" },
  { name: "Vue.js", 
    description: "The Progressive JavaScript Framework", 
    link: "https://vuejs.org/",
     image: "https://i.pinimg.com/564x/81/53/7d/81537d4d5b76f89d653db2bed33b85ed.jpg" },
  { name: "Next.js", 
    description: "Next.js is a React framework for building full-stack web applications. ",
     link: "https://nextjs.org/", image: "https://i.pinimg.com/564x/3f/f5/f9/3ff5f96fafaf0dacf5e6a8e69072f2dc.jpg" },
  { name: "Angular",
     description: "One framework. Mobile & desktop.", 
     link: "https://angular.io/", image: "https://i.pinimg.com/564x/21/77/78/2177788cdee5c706d5b119a42d0d8d85.jpg" },
  { name: "Svelte", 
    description: "Cybernetically enhanced web apps", 
    link: "https://svelte.dev/", image: "https://sourcebae.com/blog/wp-content/uploads/2023/08/9969f494-sveltelogo.png" },
  { name: "Bootstrap",
     description: "The most popular HTML, CSS, and JS library", 
     link: "https://getbootstrap.com/", image: "https://i.pinimg.com/564x/92/d6/60/92d660adb69ff63b4d133cda9592d848.jpg" },
  { name: "Tailwind CSS"
    , description: "A utility-first CSS framework for rapid UI development", 
    link: "https://tailwindcss.com/", image: "https://i.pinimg.com/564x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg" },
  { name: "Ember.js",

     description: "A framework for building ambitious web applications"
     , link: "https://emberjs.com/", image: "https://i.pinimg.com/564x/e1/1a/8e/e11a8e30ab4c9ee67f13d510bf11f8a5.jpg" },
  { name: "jQuery", 
    description: "A fast, small, and feature-rich JavaScript library",
     link: "https://jquery.com/", image: "https://i.pinimg.com/564x/ca/b6/c7/cab6c762e02a0b4fe89ab3c977928398.jpg" },
  { name: "Bulma", 
    description: "Bulma is a free, open source framework that provides ready-to-use frontend components ", link: "https://bulma.io/", image: "https://i.pinimg.com/564x/d7/5e/98/d75e986f0e4d9bcb4d11dacd4556fd40.jpg" },
  { name: "Foundation",
     description: "Foundation is a free, open source framework that provides ready-to-use frontend components and css classes for the direct use  ", link: "https://get.foundation/", image: "https://i.pinimg.com/236x/e7/77/1a/e7771ae79843be99e0cdacefd1c561ac.jpg" },
=======
  { name: "React", description: "A JavaScript library for building user interfaces", link: "https://reactjs.org/", image: "https://i.pinimg.com/564x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg" },
  { name: "Vue.js", description: "The Progressive JavaScript Framework", link: "https://vuejs.org/", image: "https://i.pinimg.com/564x/81/53/7d/81537d4d5b76f89d653db2bed33b85ed.jpg" },
  { name: "Next.js", description: "Next.js is a React framework for building full-stack web applications. ", link: "https://nextjs.org/", image: "https://i.pinimg.com/564x/3f/f5/f9/3ff5f96fafaf0dacf5e6a8e69072f2dc.jpg" },
  { name: "Angular", description: "One framework. Mobile & desktop.", link: "https://angular.io/", image: "https://i.pinimg.com/564x/21/77/78/2177788cdee5c706d5b119a42d0d8d85.jpg" },
  { name: "Svelte", description: "Cybernetically enhanced web apps", link: "https://svelte.dev/", image: "https://sourcebae.com/blog/wp-content/uploads/2023/08/9969f494-sveltelogo.png" },
  { name: "Bootstrap", description: "The most popular HTML, CSS, and JS library", link: "https://getbootstrap.com/", image: "https://i.pinimg.com/564x/92/d6/60/92d660adb69ff63b4d133cda9592d848.jpg" },
  { name: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development", link: "https://tailwindcss.com/", image: "https://i.pinimg.com/564x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg" },
  { name: "Ember.js", description: "A framework for building ambitious web applications", link: "https://emberjs.com/", image: "https://i.pinimg.com/564x/e1/1a/8e/e11a8e30ab4c9ee67f13d510bf11f8a5.jpg" },
  { name: "jQuery", description: "A fast, small, and feature-rich JavaScript library", link: "https://jquery.com/", image: "https://i.pinimg.com/564x/ca/b6/c7/cab6c762e02a0b4fe89ab3c977928398.jpg" },
  { name: "Bulma", description: "Bulma is a free, open source framework that provides ready-to-use frontend components ", link: "https://bulma.io/", image: "https://i.pinimg.com/564x/d7/5e/98/d75e986f0e4d9bcb4d11dacd4556fd40.jpg" },
  { name: "Foundation", description: "Foundation is a free, open source framework that provides ready-to-use frontend components and css classes for the direct use  ", link: "https://get.foundation/", image: "https://i.pinimg.com/236x/e7/77/1a/e7771ae79843be99e0cdacefd1c561ac.jpg" },
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
    description: "largest collection of free-to-use animations, with thousands of unique designs that can be used for both personal and commercial projects.The animations are professionally designed, and you can also change the colour, height, width, animation speed, and so on to match the theme of your website. ",
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
  }

  },
  {
     name: "Mambaui",
    description: "Mamba UI is a free, open-source collection of UI components and templates based on Tailwind CSS.",
    link: "https://mambaui.com/",
    image: "data:image/jpeg;base64,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"
  },
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
