import React from "react";
import "../style/Movie.css";
const movies = [
  {
    title: "The Pursuit of Happyness",
    category: "Family,Drama",
    description:
      "Chris Gardner takes up an unpaid internship in a brokerage firm after he loses his life's earnings selling a product he invested in. His wife leaves him and he is left with the custody of his son.",
    image:
      "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/thepursuitofhappyness_onesheet_1400x2100.png?itok=BSpvsOsJ",
    releaseDate: "2006-12-12",
  },
  {
    title: "Taare Zameen Par",
    category: "Family,Musical",
    description:
      "Ishaan is criticised by his parents for his poor academic performance and is sent away to a boarding school. Ram, an art teacher, however, realises he has dyslexia and helps him uncover his potential.",
    image:
      "https://i.ytimg.com/vi/3Z14uE7U0HY/hqdefault.jpg",
    releaseDate: "2007-12-21",
  },
  {
    title: "3 Idiots",
    category: "Comedy",
    description:
      "In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.",
    image:
      "https://images.firstpost.com/uploads/2022/12/3i.jpg?im=FitAndFill=(596,336)",
    releaseDate: "2009-12-25",
  },
  {
    title: "Sachin: A Billion Dreams",
    category: "Sport,Documentary",
    description:
      "Sachin Tendulkar recounts his journey of becoming one of the most famous names in cricket with the help of archival footage, re-enactments and clips of his family, friends and colleagues.",
    image:
      "https://origin-staticv2.sonyliv.com/videoasset_images/Sachin_A_Billion_Dreams_lands.jpg",
    releaseDate: "2017-05-26",
  },
  {
    title: "Super 30",
    category: "Drama,Comedy",
    description:
      "Anand Kumar, a mathematician from Patna, India, works his way through challenges towards success before running the Super 30 programme for IIT aspirants in Patna.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWQzM2Y0ZDQtYjA1MS00YmUzLWFiMGQtZTliZWM1MWRiNDZhXkEyXkFqcGdeQXVyNTE2MzU4OTA@._V1_.jpg",
    releaseDate: "2019-07-12",
  },
  {
    title: "12th Fail",
    category: "Drama",
    description:
      "IPS officer Manoj Kumar Sharma fearlessly embraces the idea of restarting his academic journey and reclaiming his destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC.",
    image:
      "https://m.economictimes.com/thumb/msid-105086975,width-1200,height-1200,resizemode-4,imgsize-83368/12th-fail.jpg",
    releaseDate: "2023-10-27",
  },
  {
    title: "I Am Kalam",
    category: "Drama",
    description:
      "Chotu, a poor boy, derives inspiration from the former President of India APJ Abdul Kalam. He then decides to change his name to Kalam and harbours a dream of meeting the visionary.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEWzNQl0BuH5X56lglHNrSJvIM1VZ3VEgA9K0f4TNzo-93WHp",
    releaseDate: "2011-08-05",
  },
  {
    title: "Mary Kom",
    category: "Sports/Action",
    description:
      "When Mary Kom encounters a renowned coach in a boxing gym, she shares her boxing aspirations with him and convinces him to teach her. Despite her father's disapproval, she follows her passion.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkflHw3-Y9fnKzKa3YxTXl_3xe8YJEWp4KFrfM5NZEsHg4Dqfi",
    releaseDate: "2014-09-05",
  },
  {
    title: "Srikanth Bolla",
    category: "Biography",
    description:
      "Srikanth is a 2024 Indian Hindi-language biographical film on the life of Srikanth Bolla, a visually-impaired industrialist and the founder of Bollant Industries.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LbV2HkXt0qDQfwEFKjApCOsbn8poFpnMmg&s",
    releaseDate: "2024-05-13",
  },
  {
    title: "Chhichhore",
    category: "Comedy/Sport",
    description:
      "A tragic incident forces Anirudh, a middle-aged man, to take a trip down memory lane and reminisce his college days along with his friends, who were labelled as losers.",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/9771/1599771-h-2ce23e9cb135",
    releaseDate: "2019-09-06",
  },
];

const Movie = () => {
  return (
    <div className="container">
      <h1 className="title" style={{ marginTop: "60px", color: "white" }}>
        Movies & Series
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
  );
};

export default Movie;
