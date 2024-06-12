import React from 'react';
import '../style/EthicalHacking.css';

const blogs = [
  {
    title: 'Introduction to Ethical Hacking',
    date: 'June 1, 2024',
    summary: 'Learn the basics of ethical hacking, its importance, and how it differs from malicious hacking.',
    image: 'https://i.pinimg.com/564x/b4/7f/9e/b47f9e5afd8f47e8aa42f5ad00cfeb84.jpg',
  },
  {
    title: 'Top 10 Tools for Ethical Hackers',
    date: 'June 5, 2024',
    summary: 'Discover the essential tools used by ethical hackers to identify and fix security vulnerabilities.',
    image: 'https://i.pinimg.com/564x/1b/85/31/1b853115b5c17ce0911c85f1daa3296f.jpg',
  },
  {
    title: 'Best Practices for Ethical Hacking',
    date: 'June 10, 2024',
    summary: 'A guide to the best practices every ethical hacker should follow to ensure ethical and legal compliance.',
    image: 'https://i.pinimg.com/736x/2a/42/c4/2a42c40b99eac872a3a4247d54364346.jpg',
  },
  {
    title: 'How to Start a Career in Ethical Hacking',
    date: 'June 15, 2024',
    summary: 'A step-by-step guide on how to begin a career in ethical hacking, including necessary skills and certifications.',
    image: 'https://i.pinimg.com/564x/5b/59/1a/5b591ac56f20337445b413a24f4e9616.jpg',
  },
  {
    title: 'Understanding Penetration Testing',
    date: 'June 20, 2024',
    summary: 'An in-depth look at penetration testing, its methodologies, and its role in maintaining cybersecurity.',
    image: 'https://i.pinimg.com/564x/f4/0d/34/f40d34270396400c2c4066a6da106297.jpg',
  },
  {
    title: 'The Future of Ethical Hacking',
    date: 'June 25, 2024',
    summary: 'Explore the future trends in ethical hacking and how they will shape the cybersecurity landscape.',
    image: 'https://i.pinimg.com/736x/87/8f/95/878f95801c46d367905f5e9c8f8ecb0e.jpg',
  },
];

const EthicalHacking = () => {
  return (
    <div className="container">
      <h1 className="title">Ethical Hacking Blog</h1>
      <div className="grid-container">
        {blogs.map((blog, index) => (
          <div key={index} className="grid-item" style={{objectFit:"cover" , maxWidth: "100%"}}>
            <img src={blog.image} alt={blog.title} height={300} width={"100%"} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-date">{blog.date}</p>
            <p className="blog-summary">{blog.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EthicalHacking;
