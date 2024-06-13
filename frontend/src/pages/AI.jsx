import React from "react";
import "../style/AI.css";

const blogs = [
  {
    id: 1,
    title: "Understanding the Basics of AI",
    content:
      "Artificial Intelligence (AI) is a branch of computer science that aims to create intelligent machines. It has become an essential part of the technology industry.",
    image: "https://i.pinimg.com/564x/89/bf/42/89bf42fe0ad34d9132e762d9398ab0e5.jpg",
    description:
      "Learn the fundamentals of Artificial Intelligence and its importance in modern technology.",
  },
  {
    id: 2,
    title: "Applications of AI",
    content:
      "AI has various applications in today's society. It is used in web search engines, recommendation systems, understanding natural language, and more.",
    image: "https://i.pinimg.com/564x/0a/6c/7c/0a6c7c72d826a0b9cae104538bcd964d.jpg",
    description: "Discover the diverse applications of AI in various fields.",
  },
  {
    id: 3,
    title: "Future of AI",
    content:
      "The future of AI looks promising with advancements in machine learning, deep learning, and other AI technologies. It is expected to revolutionize many industries.",
    image: "https://i.pinimg.com/564x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg",
    description: "Explore the potential future developments and impacts of AI.",
  },
  {
    id: 4,
    title: "AI in Healthcare",
    content:
      "AI is transforming healthcare with applications in diagnosis, treatment planning, and patient care.",
    image: "https://i.pinimg.com/564x/bd/76/0b/bd760b51404df1c0d24462c6e1b05e0c.jpg",
    description: "Learn how AI is revolutionizing the healthcare industry.",
  },
  {
    id: 5,
    title: "Ethics in AI",
    content:
      "As AI becomes more prevalent, ethical considerations such as privacy, bias, and accountability become crucial.",
    image: "https://i.pinimg.com/736x/e1/d8/a0/e1d8a094a3c0c0e1b2c244ad0cc4031e.jpg",
    description: "Understand the ethical challenges and considerations in AI.",
  },
  {
    id: 6,
    title: "AI in Finance",
    content:
      "AI is being used in finance for fraud detection, algorithmic trading, and personalized financial advice.",
    image: "https://i.pinimg.com/736x/0a/9e/d7/0a9ed7796b48f63ebb69305ebeaf0d7c.jpg",
    description: "Discover how AI is changing the finance industry.",
  },
];

const AI = () => {
  return (
    <div className="ai-container">
      <h1>AI Blogs</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-post">
            <img src={blog.image} height={300} style={{objectFit: "cover"}} width={"100%"} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p className="description">{blog.description}</p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AI;
