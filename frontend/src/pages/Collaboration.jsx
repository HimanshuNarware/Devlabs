import React from 'react'
import '../style/Collaboration.css'
const movies = [
  {
    title: "Google Drive",
    category: "Collaboration Tools",
    description:
      "Google Drive is a cloud-based storage platform that allows users to store, share, and collaborate on files and documents online.",
    image:
      "https://mailmeteor.com/logos/assets/PNG/Google_Drive_Logo_512px.png",
    releaseDate: "2012-04-18",
  },
  {
    title: "Airtable",
    category: "Collaboration Tools",
    description:
      "Airtable is a collaborative work-management tool that uses relational databases at its core.",
    image:
      "https://logowik.com/content/uploads/images/airtable3348.jpg",
    releaseDate: "2012-09-15",
  },
  {
    title: "Dropbox Paper",
    category: "Collaboration Tools",
    description:
      "Dropbox was one of the first virtual collaboration tools for file sharing and cloud storage, and it now boasts over 700 million registered users. ",
    image:
      "https://play-lh.googleusercontent.com/yJlI8MRoj7PHDe0OAwpj6DWtZzOsgEm7oPJEIrZepJA9ZFndK5oSbyCTUDq05H7aRg",
    releaseDate: "2015-09-20",
  },
  {
    title: "Google Chat",
    category: "Collaboration Tools",
    description:
      "Google Chat is a cloud-based collaborative productivity tool for productive teams that offers real-time messaging, video chat, and email in one place .",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSRZXU6U-qFytvbCXnWlaZ59ZMIDa_w5SAtJy_o1539tJ12Kkk",
    releaseDate: "2024-10-10",
  },
  {
    title: "Zoom",
    category: "Collaboration Tools",
    description:
      " Zoom provide an excellent voice and video service for virtual communication",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaps0VLCtNGDh-nbDAldJZFvqn6VIT-h-jLp2MYfao4OGRZxa9",
    releaseDate: "2024-11-01",
  },
  {
    title: "Microsoft Teams",
    category: "Collaboration Tools",
    description:
      "Microsoft Teams is a team collaboration application developed by Microsoft,offering workspace chat and video conferencing, file storage, and integration of proprietary and third-party applications and services.",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTThN_hvgYRjH2wN8IHwtUSEGOBMZSgGziCNBncclLQn7lFb_IW",
    releaseDate: "2024-11-15",
  },
  {
    title: "Canva",
    category: "Collaboration Tools",
    description:
      "Canva is a web-based design online collaboration tool that allows users to create stunning graphics, presentations, posters, and other visual content. ",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnN19E18xtM23VtnQAxytEgzdujZ3XKCtnFrfzdXp-tBn1TKKJ",
    releaseDate: "2024-09-05",
  },
  {
    title: "Invision",
    category: "Collaboration Tools",
    description:
      "Invision is among the top collaborative productivity applications that help teams to stay productive by streamlining the design process.",
    image:
      "https://rm-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/sites/4/2020/08/InVision-App-logo.png",
    releaseDate: "2024-09-01",
  },
  {
    title: "Miro",
    category: "Collaboration Tools",
    description:
      "Miro is a visual collaboration tool that helps teams plan projects, run meetings, and brainstorm. ",
    image:
      "https://logowik.com/content/uploads/images/miro3962.jpg",
    releaseDate: "2024-10-01",
  },
  {
    title: "Figma",
    category: "Collaboration Tools",
    description:
      "Figma is a Web design tool with collaborative features. Best for User-friendly graphic design, social media content creation, and online collaboration.",
    image:
      "https://i.pinimg.com/564x/17/06/c9/1706c9f16bd08eb5e03f1df3e0a94a1c.jpg",
    releaseDate: "2016-9-27",
  },

];
const Collaboration = () => {
  return (
    <div className="container">
    <h1 className="title" style={{ marginTop: "60px" }}>
      Collaboration Tools
    </h1>
    <div className="grid-container">
      {movies.map((movie, index) => (
        <div key={index} className="grid-item">
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-category">{movie.category}</p>
          <p className="movie-description">{movie.description}</p>
          <p className="movie-releaseDate">
            Release Date: {movie.releaseDate}
          </p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Collaboration