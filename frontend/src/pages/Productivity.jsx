import React from 'react'
import '../style/Productivity.css'
const products = [
  {
    title: "Asana",
    category: "Productivity Tool",
    description:
      "Asana is a versatile project management productivity tool known for its user-friendly interface.",
    image:
      "https://assets.asana.biz/m/7342a96f034ee491/original/trademark-logo-lockup-horizontal.png",
    releaseDate: "2008-09-01",
  },
  {
    title: "Slack",
    category: "Productivity Tool",
    description:
      "Slack is a productivity tool that helps in proper coordination and communication amongst team members.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMFeL3wuZcR9N0bMhYVDE0mFYd1UR-JYitw&s",
    releaseDate: "2020-09-05",
  },
  {
    title: "Trello",
    category: "Productivity Tool",
    description:
      "Trello is a well-regarded project management productivity tool that visualizes workflows, making project collaboration smooth and satisfying for support",
    image:
      "https://i.pcmag.com/imagery/reviews/04C2m2ye5UfXyb5x5WWIsZ4-19.fit_lim.size_1050x591.v1625759628.png",
    releaseDate: "2011-10-01",
  },
  {
    title: "Zapier",
    category: "Productivity Tool",
    description:
      "Zapier is a productivity tool that automates workflows by linking different apps and services without any coding. ",
    image:
      "https://i.pcmag.com/imagery/reviews/05fqDQUuRXgFxdx8qWP0fkY-5.fit_lim.size_1200x630.v1569471903.png",
    releaseDate: "2024-09-15",
  },
  {
    title: "Evernote",
    category: "Productivity Tool",
    description:
      "Evernote is one of the versatile productivity tools that provides a centralized platform for comprehensive note-taking, document organization.",
    image:
      "https://i.pcmag.com/imagery/reviews/00jhTm0Wm3HrXnMKoq2bcjU-18.fit_lim.size_1050x591.v1602169894.png",
    releaseDate: "2024-09-20",
  },
  {
    title: "Todoist",
    category: "Productivity Tool",
    description:
      "Todoist is a top productivity app to simplify and organize the workday. ",
    image:
      "https://sm.pcmag.com/pcmag_au/review/t/todoist/todoist_b6jd.jpg",
    releaseDate: "2024-10-10",
  },
  {
    title: "Toggl",
    category: "Productivity Tool",
    description:
      "Toggl Track is a reliable productivity software for tracking employee timesheets. ",
    image:
      "https://raw.githubusercontent.com/toggl-open-source/toggldesktop/gh-pages/assets/toggl-track-wide.png",
    releaseDate: "2024-11-01",
  },
  {
    title: "Harvest",
    category: "Productivity Tool",
    description:
      "Harvest is a productivity tool for freelancers and project management teams.",
    image:
      "https://logos-world.net/wp-content/uploads/2022/04/Harvest-New-Logo.png",
    releaseDate: "2006-11-15",
  },
  {
    title: "ProofHub",
    category: "Productivity Tool",
    description:
      "ProofHub is a productivity software that revolutionizes project management and team collaboration.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0WrVDo0kToN6N-lkYy1ouoOzmxjex4Y5PA&s",
    releaseDate: "2024-12-01",
  },
  {
    title: "Microsoft Power Automate",
    category: "Productivity Tool",
    description: "Microsoft Power Automate is a cloud-based service that allows users to automate repetitive tasks and workflows between apps and services.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPBjI73ssv9KbTW4NrIMubObeHOLyOKOQhg&s",
    releaseDate: "2016-04-05"
  },
  {
    title: "IFTTT",
    category: "Productivity Tool",
    description: "IFTTT (If This Then That) is a web-based service that allows users to create automation workflows by connecting different apps and services.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HWa196pV6IBx5mj9JCF4oJUlI_C53i3wlg&s",
    releaseDate: "2010-12-07"
  },
  {
    title: "Calendly",
    category: "Productivity Tool",
    description: "Calendly is an online scheduling tool that simplifies the process of booking meetings by automatically coordinating availability between users.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgDChsB6hsJMeq_hHSGK24FB_OvgYLV2l5A&s",
    releaseDate: "2013-06-06"
}

];

const Productivity = () => {
  return (
    <div className="container">
    <h1 className="title" style={{ marginTop: "60px" }}>
      Productivity Tools
    </h1>
    <div className="grid-container">
      {products.map((movie, index) => (
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

export default Productivity