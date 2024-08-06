import React from "react";
import "../style/UI.css";

const UI = () => {
  const blogs = [
    {
      title: "Introduction to UI Design",
      date: "August 1, 2024",
      summary:
        "Learn the basics of UI, its importance, and how it shapes user experiences. Gain insight into the fundamentals and start your journey in UI design.",
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219162542/Become-UI-Designer-in-2023.png",
      content:
        "UI design stands for User Interface design. It is the process of making interfaces in software or computerized devices with a focus on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design typically refers to graphical user interfaces but also includes others, such as voice-controlled interfaces."
    },
    {
      title: "Goal of a UI Designer",
      date: "August 1, 2024",
      summary:
        "Understand the primary objectives of a UI designer and the key elements they focus on to create effective user interfaces.",
      image:
        "https://media.licdn.com/dms/image/D5612AQFZeUkjuMCnzA/article-cover_image-shrink_720_1280/0/1715100675161?e=2147483647&v=beta&t=1Ne74qf43GsJ0SIa1E5PzZgN0lVlyHlhOPq4eQyOc9M",
      content:
        "A UI designer’s main goal is to create an interface that users find easy to use and pleasurable. They focus on the look and style of a product, ensuring that the interface is intuitive and engaging. Key elements include visual design, interactive design, and information architecture."
    },
    {
      title: "Why is UI Important in Technology",
      date: "August 1, 2024",
      summary:
        "Discover the significance of UI in modern technology and how it impacts user satisfaction and overall experience.",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231011121732/Importance-of-UIUX-Design-copy.webp",
      content:
        "UI is crucial in technology because it is the point of interaction between the user and a digital device or application. A good UI can enhance the user experience, leading to higher user satisfaction, increased engagement, and more effective product use."
    },
    {
      title: "How to Establish a Career in UI",
      date: "August 15, 2024",
      summary:
        "A comprehensive guide on starting a career in UI design, including necessary skills, education, and certifications.",
      image:
        "https://i.pinimg.com/564x/b2/c2/56/b2c2564d7f5ad67962bccf7858704bc3.jpg",
      content:
        "Starting a career in UI design requires a mix of technical skills and creativity. Key steps include learning design principles, gaining proficiency in design tools like Sketch and Adobe XD, building a strong portfolio, and obtaining certifications in UI design. Networking and staying updated with industry trends are also important."
    },
    {
      title: "Benefits of UI",
      date: "August 25, 2024",
      summary:
        "Learn about the various benefits of good UI design and how it can improve user satisfaction and business outcomes.",
      image:
        "https://blog.techliance.com/wp-content/uploads/2020/12/Benefits-of-User-Interface-Design-1024x611.jpg",
      content:
        "Good UI design offers numerous benefits, including improved user satisfaction, higher conversion rates, and better user retention. It can also reduce development time and costs by preventing the need for frequent redesigns. A well-designed UI makes a product more accessible and easier to use."
    },
    {
      title: "The Future of UI",
      date: "August 25, 2024",
      summary:
        "Explore future trends in UI design and their potential impact on technology and user experiences.",
      image:
        "https://i0.wp.com/www.admecindia.co.in/wp-content/uploads/2019/07/admec-internal-ui-design-future-prospect-1.jpg?fit=2001%2C1112&ssl=1",
      content:
        "The future of UI design is likely to be shaped by emerging technologies such as artificial intelligence, augmented reality, and voice interfaces. These advancements will create new opportunities for more interactive, personalized, and immersive user experiences. Staying updated with these trends is crucial for UI designers."
    },
    {
      title: "Steps to Create A Good UI",
      date: "August 06, 2024",
      summary:
        "A Good UI design will help people to undertand the website easily and user feels comfortable with that Website",
      image:
        "data:image/jpeg;base64,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",
      content:
        "Research: Conduct user research to understand your target audience's needs, behaviors, and pain points. This can involve surveys, interviews, and analyzing user data. Create Personas: Develop detailed user personas that represent different segments of your target audience. These should include demographic information, goals, challenges, and behaviors.Scenarios: Outline typical scenarios in which users will interact with your interface. This helps in understanding the context in which features will be used."
    },
  ];

  return (
    <div className="container1">
      <h1 className="title" style={{ marginTop: "60px" }}>UI Design</h1>
      <div className="grid-container">
        {blogs.map((blog, index) => (
          <div key={index} className="grid-item" style={{ objectFit: "cover", maxWidth: "100%" }}>
            <img
              src={blog.image}
              alt={blog.title}
              height={300}
              width={"100%"}
              style={{ objectFit: "cover" }}
              className="blog-image"
            />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-date">{blog.date}</p>
            <p className="blog-summary">{blog.summary}</p>
            <p className="blog-content" style={{textAlign: "start"}}>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UI;
