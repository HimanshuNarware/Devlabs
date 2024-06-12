import React from 'react'
import "../style/CoursesPlatform.css";
const tools = [
  { name: "Striver A2Z DSA Course", description: "A DSA Course from takeuforward by striver", link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJNpQ_lbzLqCsgQb1dfTux4hAEPTHw2yZs5uIjkfGash21h4_875srglEmLgGhXtoDa0&usqp=CAU" },
{ name:"KG Coding webdev Course",description:"Web Development courses",linl:"https://www.kgcoding.in/courses/JavaScript-Youtube-Course-6528e3a1e4b0f4457f0f1baa",image:"https://d502jbuhuh9wk.cloudfront.net/courses/6528e3a1e4b0f4457f0f1baa/6528e3a1e4b0f4457f0f1baa_scaled_cover.jpg?v=1"

},];

const CoursesPlatform = () => {
  return (
    <div className="Courses-tools">
      <h1 className="title">Courses Platform</h1>
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
  )
}

export default CoursesPlatform;