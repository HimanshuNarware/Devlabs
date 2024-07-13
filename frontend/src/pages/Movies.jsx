import React from "react";
import "../style/Movies.css";

const movies = [
  { name: "Netflix", description: "Netflix is one of the original OTT streaming servicesIt started as an online DVD rental shop. Its quick adaptation as live streaming technology began to surface is part of its success.", link: "https://www.netflix.com/in/", image: "data:image/png;base64,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" },
  { name: "Disney+", description: "Disney+ is an over-the-top streaming service offering access to films and TV series owned by The Walt Disney Company. These include programs by Disney, Pixar, Marvel, Star, National Geographic, and Star Wars.", link: "https://disneyplus.com/home", image: "data:image/jpeg;base64,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" },
  { name: "Prime Video", description: "Amazon’s own service, Prime Video, offers unlimited access to a library of video content with a subscription, and it also has additional content available for rent or purchase.", link: "https://www.primevideo.com/", image: "data:image/png;base64,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" },
  { name: "HBO Max", description: "An exciting aspect of HBO Max's over-the-top service is that it offers access to movies that are still in theaters at no additional cost. ", link: "https://www.max.com/", image: "data:image/jpeg;base64,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" },
  { name: "Hulu", description: "Hulu is another popular over-the-top video service. Hulu is different from Netflix, as new episodes are uploaded the day after they air.", link: "https://hulu.com/welcome", image: "data:image/jpeg;base64,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" },
  { name: "ESPN+", description: "ESPN+ is an OTT service dedicated to sports streaming. This service differs slightly from the others we’ve covered because it focuses on live video streaming.", link: "https://www.espn.com/espnplus/", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA0CAMAAADomgtXAAAAb1BMVEX///8AAADb29vv7+8YGBjX19cVFRXs7Oz7rQD7qwD7sQDz8/NHR0eSkpL7pgCzs7O8vLyenp7m5uZ0dHT/+fD+8+L+9uk6Ojr8ynn8wFX92aBdXV0LCwtnZ2ciIiJTU1P91Zb94bWAgIDOzs7+7dSSPCnGAAAA10lEQVRIie2R6xKCIBCFFw1RUbynlVlp7/+M7YLWuDM9gDN8fzhwOMPuAuDxeDwHQgUWCRDs+O7/BRvhCMWeSK8io1ttd+bBzNl9zoKi3ATdGszAg6FD63VV64ECFSqlSCCX+MqD4kSI6jbSGt1hiqyYCnwU7fEBYJI0jc1zP5u1nqJgFVZYuyS7gdbEFHztglKI/LerbHDepqZgcXabJC2rtOSjQFFZp6exYB0F6rdJeIs5C86uNWqegmgv9jc6Hqyl+39tV1njgdSuCRmQLXnC4/F4DsEHDqQIFc/NU3UAAAAASUVORK5CYII=" },
];

const Movie = () => {
  return (
    <div className="movies">
      <h1 className="title">Movies & Series</h1>
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.image} alt={movie.name} className="movie-image" />
            <h2 className="movie-name">{movie.name}</h2>
            <p className="movie-description">{movie.description}</p>
            <a href={movie.link} target="_blank" rel="noopener noreferrer" className="movie-link">Visit Website</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;