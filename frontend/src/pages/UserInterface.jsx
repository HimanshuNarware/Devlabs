import React from "react";
import "../style/UserInterface.css";
const design = [
  { name: "Onsen UI", description: "Onsen UI is a UI framework for developing hybrid and online mobile apps. It includes all of the necessary UI components for a mobile app's user experience. To support ALL frameworks, the CSS Components are written in cssnext, while the Web Components are written in native JavaScript. The Framework Bindings were intended to make it easier to integrate popular frameworks like Vue.js, AngularJS 1, Angular 2+, and React with each other.", link: "https://onsen.io/?utm_source=startupstash.com&utm_medium=startupstash.com&utm_campaign=alternative_page", image: "https://startupstash.com/wp-content/uploads/2022/04/b3UUdakh_400x400.png" },
  { name: "Tailwind CSS", description: "Tailwind CSS is a highly flexible, low-level CSS framework based largely on the concept of utility classes, which are also available in Bootstrap out of the box. You can use utility classes to mix and match CSS properties without resorting to inline styles. It comes with a menu of predesigned widgets to help you develop your site, but it doesn't force you to make difficult-to-undo design mistakes.", link: "https://tailwindcss.com/?utm_source=startupstash.com&utm_medium=startupstash.com&utm_campaign=alternative_page", image: "https://startupstash.com/wp-content/uploads/2022/04/a_op8KnL_400x400.jpg" },
  { name: "HTML5 Boilerplate", description: "HTML5 Boilerplate is a frontend template that uses HTML5, CSS3, and JavaScript. It may be used to create any type of web page and aids in the development of quick, strong, and adaptive web apps or sites. It comes with all the necessary building elements in a vanilla frontend bundle to develop a small or complicated website, such as CSS helper classes, default print styles, and other programming languages such as jQuery, Modernizr, and CSS.", link: "https://html5boilerplate.com/?utm_source=startupstash.com&utm_medium=startupstash.com&utm_campaign=alternative_page", image: "https://startupstash.com/wp-content/uploads/2022/04/9a0ae1624d6c5ba27168971558305c92_400x400.png" },
  { name: "Materialize", description: "Materialize is a new responsive front-end framework based on Google's Material Design concepts. The Material Design framework includes components and animations that give users greater feedback. The UI components (including JS plugins) are quite similar to Bootstrap's, but they appear and feel lighter, making applications more appealing to look at and use.",link:"https://materializecss.com/?utm_source=startupstash.com&utm_medium=startupstash.com&utm_campaign=alternative_page", image: "https://startupstash.com/wp-content/uploads/2022/04/GN559Lfb_400x400.png" },
  { name: "Metro UI ", description: "Metro UI comes with over 100 user interface components to assist you in creating any type of website. It includes a variety of designs, functionalities, and templates. Metro UI also includes a JS library called M4Q, which acts as a replacement for jQuery and is the foundation for numerous JS-based features. It's simple to use and stylish, featuring a variety of standard components such as a button, tile, menu, date picker, and more.", link: "https://metroui.org.ua/?utm_source=startupstash.com&utm_medium=startupstash.com&utm_campaign=alternative_page", image: "https://startupstash.com/wp-content/uploads/2022/04/D4o5RAVg_400x400.jpg" },
  { name: "Ink", description: "Ink is a front-end framework that uses HTML, CSS, and Javascript to create faster user interfaces. Developers can also use the INK framework to access pre-designed cookbooks, allowing them to adapt and use a theme quickly. Tables, tabs, data picker, modal, sortable list, tree view, gallery, form validator, and other reusable interface elements make it simple for developers to construct modern layouts.", link: "https://ink.sapo.pt/?utm_source=startupstash.com&utm_medium=startupstash.com&utm_campaign=alternative_page", image: "https://startupstash.com/wp-content/uploads/2022/04/ink_opengraph_400x400.png" },
];

const UI = () => {
  return (
    <div className="ui-design">
    <h1 className="title">UI</h1>
    <div className="design-grid">
      {design.map((design, index) => (
        <div key={index} className="design-card">
          <img src={design.image} alt={design.name} className="design-image" />
          <h2 className="design-name">{design.name}</h2>
          <p className="design-description">{design.description}</p>
          <a href={design.link} target="_blank" rel="noopener noreferrer" className="design-link">Visit Website</a>
        </div>
      ))}
    </div>
  </div>
);
};
export default UI;