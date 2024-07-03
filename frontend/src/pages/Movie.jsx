import React from "react";
import "../style/Movie.css";

const movies = [
  {
    title: 'React Basics',
    category: "Computer Science",
    description:
      "Learn the basics of React, a powerful JavaScript library for building user interfaces.",
    image:
      "https://i.pinimg.com/564x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg",
    releaseDate: "2024-09-01",
  },
  {
    title: 'Advanced React',
    category: 'Computer Science',
    description:
      "Dive deeper into React and learn about advanced concepts and patterns.",
    image:
      "https://i.pinimg.com/564x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg",
    releaseDate: "2024-09-05",
  },
  {
    title: "JavaScript Essentials",
    category: "Computer Science",
    description:
      "Master the essentials of JavaScript, the programming language of the web.",
    image:
      "https://i.pinimg.com/564x/bc/c9/fc/bcc9fce91549fb9f1295e6e4ee84d66e.jpg",
    releaseDate: "2024-10-01",
  },
  {
    title: "Node.js in Action",
    category: "Computer Science",
    description:
      "Learn how to build scalable network applications using Node.js.",
    image:
      "https://i.pinimg.com/564x/bc/c9/fc/bcc9fce91549fb9f1295e6e4ee84d66e.jpg",
    releaseDate: "2024-09-15",
  },
  {
    title: "CSS Mastery",
    category: "Design",
    description:
      "Become a CSS expert and learn how to create beautiful, responsive web designs.",
    image:
      "https://i.pinimg.com/736x/8e/95/47/8e95479da2c5e493b835c8533c2d5ba5.jpg",
    releaseDate: "2024-09-20",
  },
  {
    title: "Python for Beginners",
    category: "Computer Science",
    description:
      "Get started with Python, one of the most popular programming languages.",
    image:
      "https://i.pinimg.com/564x/58/69/23/58692343bfbe53e78820a839efa0e51e.jpg",
    releaseDate: "2024-10-10",
  },
  {
    title: "Django Development",
    category: 'Computer Science',
    description:
      "Learn how to build web applications using Django, a high-level Python web framework.",
    image:
      "https://static.djangoproject.com/img/logos/django-logo-negative.1d528e2cb5fb.png",
    releaseDate: "2024-11-01",
  },
  {
    title: "Machine Learning",
    category: "Data Science",
    description:
      "Understand the basics of machine learning and how to implement algorithms using Python.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU61gHjrBj82OI2mq97amNjrhOcN4ouggl7w&s",
    releaseDate: "2024-11-15",
  },
  {
    title: "DevOps Fundamentals",
    category: "Computer Science",
    description:
      "Learn the fundamentals of DevOps and how to implement a successful DevOps culture.",
    image:
      "https://i.pinimg.com/564x/40/56/d9/4056d91b5e4b1c81af71afec6620f9fe.jpg",
    releaseDate: "2024-12-01",
  },
];

const Movie = () => {
  return (
    <div className='container'>
      <h1 className='title' style={{ marginTop: "60px" }}>
        Movies & Series
      </h1>
      <div className='grid-container'>
        {movies.map((movie, index) => (
          <div key={index} className="grid-item">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h2 className='movie-title'>{movie.title}</h2>
            <p className="movie-category">{movie.category}</p>
            <p className="movie-description">{movie.description}</p>
            <p className="movie-releaseDate">
              Release Date: {movie.releaseDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
