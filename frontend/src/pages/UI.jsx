import React from 'react'
import "../style/UI.css";
const UI = () => {
  const blogs = [
    {
      title: "Introduction to UI Design",
      date: "August 1, 2024",
      summary:
        "Learn the basics of UI, its importance.Gain insight into a topic and learn the fundamentals",
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219162542/Become-UI-Designer-in-2023.png",
    },
    {
      title: "Goal of a UI Designer",
      date: "August 1, 2024",
      summary:
        "Get to know the goals of a UI designer.",
      image:
        "https://media.licdn.com/dms/image/D5612AQFZeUkjuMCnzA/article-cover_image-shrink_720_1280/0/1715100675161?e=2147483647&v=beta&t=1Ne74qf43GsJ0SIa1E5PzZgN0lVlyHlhOPq4eQyOc9M",
    },
    {
      title: "Why is UI important in technology ",
      date: "August 1, 2024",
      summary:
        "Learn the importance of UI .Gain insight into a topic and learn the fundamentals",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231011121732/Importance-of-UIUX-Design-copy.webp",
    },
    {
      title: " How to establish a Career in AI",
      date: "August 15, 2024",
      summary:
        "A step-by-step guide on how to begin a career in UI, including necessary skills and certifications.",
      image:
        "https://blog.uxfol.io/wp-content/uploads/2023/05/3.png",
    },
    {
      title: "Benefits of UI",
      date: "August 25, 2024",
      summary:
        "Unlock and leverage the potential of UI. Learn how you can use the capabilities of UI to enhance your work",
      image:
        "https://lh3.googleusercontent.com/bpXw5e0KSnpcK_Rdj5vzPqTVVy7mJO3gVHqHR4MoYwpa00GvR8Y3meek_D7Awcgy_uHz3ObwWliEgVmteWIbr98EWdUcKT4L4IaLx8R4NLgjj2t4x7xPAkMwIG-jB9ysEIwl05Y7QG7_veLkYsCBRNhRIkBGK4C-F66LUR9JoFeZBJXz-AnBM5mcUA",
    },
    {
      title: "The Future of UI",
      date: "August 25, 2024",
      summary:
        "Explore the future trends in AI and how they will have an impact on our lives.",
      image:
        "https://i0.wp.com/www.admecindia.co.in/wp-content/uploads/2019/07/admec-internal-ui-design-future-prospect-1.jpg?fit=2001%2C1112&ssl=1",
    },
  ];
  return (
    <div className="container">
      <h1 className="title">AI Blog</h1>
      <div className="grid-container">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="grid-item"
            style={{ objectFit: "cover", maxWidth: "100%" }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              height={300}
              width={"100%"}
              className="blog-image"
            />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-date">{blog.date}</p>
            <p className="blog-summary">{blog.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UI