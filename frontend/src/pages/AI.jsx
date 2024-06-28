import React from "react";
import "../style/AI.css";
const AI = () => {
  const blogs = [
    {
      title: "Introduction to AI",
      date: "July 1, 2024",
      summary:
        "Learn the basics of AI, its importance.Gain insight into a topic and learn the fundamentals",
      image:
        "https://amta.sg/wp-content/uploads/2023/09/Introduction-to-Artificial-Intelligence-scaled.jpg",
    },
    {
      title: "Different types of AI",
      date: "July 10, 2024",
      summary: "Explore the different types of AI and their importance.",
      image: "https://www.bluefin.com/wp-content/uploads/2020/08/ai-future.jpg",
    },
    {
      title: "Top 10 AI tools",
      date: "July 5, 2024",
      summary:
        "Use AI tools to help develop ideas and content, make more informed decisions, and speed up daily work tasks",
      image:
        "https://media.licdn.com/dms/image/D4D12AQE-62Ifk1Ky-Q/article-cover_image-shrink_600_2000/0/1693372628210?e=2147483647&v=beta&t=nvztC0_RuPSchP_tjjSTlVIh1q5kBuuBSV1eMydJU50",
    },
    {
      title: "How to Start a Career in AI",
      date: "July 15, 2024",
      summary:
        "A step-by-step guide on how to begin a career in AI, including necessary skills and certifications.",
      image:
        "https://plate.libpx.com/prod1-img/3d017cb903/Header%20AI%20Blog%20Articles%209altitudes.png?width=768&crop=0%2C0%2C1200%2C675&mode=crop&format=jpeg&dpr=1.0&signature=38f685ff6660d422abe1bd633a92f87b40dda314",
    },
    {
      title: "Benefits of AI",
      date: "July 25, 2024",
      summary:
        "Unlock and leverage the potential of AI. Learn how you can use the capabilities of AI to enhance your work and daily life.",
      image:
        "https://sdsdigitals.com/wp-content/uploads/2023/09/What-is-Artiificial-IntelligenceAI.webp",
    },
    {
      title: "The Future of AI",
      date: "July 25, 2024",
      summary:
        "Explore the future trends in AI and how they will have an impact on our lives.",
      image:
        "https://static.cegos.com/wp-content/uploads/sites/3/2023/06/19103608/Blog-Global-LD-Post-banner-AI-20210610-scaled-1.jpg",
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
  );
};
export default AI;
