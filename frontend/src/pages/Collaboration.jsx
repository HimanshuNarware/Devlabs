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
  {
    title: "Notion",
    category: "Collaboration Tools",
    description: "Notion is an all-in-one workspace for note-taking, project management, and collaboration. It is best for organizing tasks, managing projects, and creating databases in a user-friendly and flexible interface.",
    image: "https://i.pcmag.com/imagery/reviews/05FBstbqla0pEWrlFLTw4ML-17.fit_lim.size_1050x591.v1704906459.png",
    releaseDate: "2018-6-1"
  },
  {
    title: "Basecamp",
    category: "Project Management",
    description: "Basecamp is a project management and team collaboration software. It is best for organizing projects, tracking progress, and facilitating team communication in a straightforward and user-friendly platform.",
    image: "https://pbs.twimg.com/profile_images/1671513829522432003/BwPEpDI0_400x400.jpg",
    releaseDate: "2004-2-5"
  },
  {
    title: "Google Meet",
    category: "Video Conferencing",
    description: "Google Meet is a video conferencing tool that offers high-quality video meetings for businesses and individuals. It is best for seamless integration with Google Workspace, allowing easy scheduling, screen sharing, and collaboration in real-time.",
    image: "https://i.pcmag.com/imagery/reviews/02y6SQ4hhnWGi8zjE2FlYqi-8.fit_scale.size_760x427.v1615070874.jpg",
    releaseDate: "2017-3-9"
  },
  
  {
    title: "Eraser",
    category: "Collaboration Tools",
    description: "Documents & diagrams for engineering teams All-in-one markdown editor, collaborative canvas, and diagram-as-code builder.",
    image: "https://i.ibb.co/z8KTr7D/download.jpg",
    releaseDate: "2023-8-1"
  },
  {
    title: "Zoho Connect",
    category: "Collaboration Tools",
    description: "Zoho Connect is a team collaboration software that unifies people, resources, and applications on a single platform for efficient communication and collaboration.",
    image: "https://www.zohowebstatic.com/sites/zweb/images/ogimage/connect-logo.png",
    releaseDate: "2016-09-15"
  },
  {
    title: "Bitrix24",
    category: "Collaboration Tools",
    description: "Bitrix24 is a collaboration platform offering a suite of tools for communication, project management, CRM, and more, designed to improve team productivity and efficiency.",
    image: "https://logowik.com/content/uploads/images/bitrix241512.jpg",
    releaseDate: "2012-04-12"
  }, 
  {
    title: "Glip",
    category: "Collaboration Tools",
    description: "Glip is a collaborative platform designed for teams to communicate, manage projects, and streamline workflows effectively.",
    image: "https://img.utdstc.com/icon/5dc/193/5dc1931ffa409f64bd7c56c5e9bdb5fc13aa04a740fdfb39c4995eba9e9a06b5:200",
    releaseDate: "2014-05-15"
  },
  {
    title: "Ryver",
    category: "Collaboration Tools",
    description: "Ryver is a team communication and collaboration platform that integrates chat, task management, and workflow automation to streamline team productivity.",
    image: "https://ryver.com/wp-content/uploads/2024/05/thumbnail_ryver-cloverleaf-graphic-ACompany.png",
    releaseDate: "2015-09-01"
  },
  {
    title: "nTask",
    category: "Collaboration Tools",
    description: "nTask is a project management and collaboration tool that helps teams manage tasks, projects, and workflows efficiently.",
    image: "https://www.ntaskmanager.com/wp-content/uploads/2022/05/nTask-Logo-Vertical.svg",
    releaseDate: "2015-07-01"
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