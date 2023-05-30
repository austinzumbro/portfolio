import React from "react";
import Project from "../Project";

export default function Portfolio() {
  const projectList = [
    {
      title: "Refactor a Marketing Website",
      description: `Given an existing HTML and CSS file, what can I do to make the site and source code more accessible, without otherwise changing anything about its appearance or function?`,
      github: "https://github.com/austinzumbro/marketing-website-refactor",
      deployed: "https://austinzumbro.github.io/marketing-website-refactor/",
      image: "horiseon-square.png",
      alt: "Screenshot of a marketing company's website",
    },
    {
      title: "Fitness Community",
      description: `An experiment in using third-party APIs. Allows the user to lookup exercises and create workouts.`,
      github: "https://github.com/408broncos/fitness-community",
      deployed: "https://408broncos.github.io/fitness-community/",
      image: "fitness-community.png",
      alt: "Screenshot of Fitness Community App",
    },
    {
      title: "MeloRE:",
      description: `An experiment in developing full-stack applications. Requires a Spotify login. Allows the user to connect to Spotify and import playlists. Utlizizes the ChartJS library to provide some simple visual representations of information about the user's songs, including danceability, valence, etc. Pulling lyric samples from MusixMatch, it uses Google Cloud's Natural Language Processing API to give a sentiment analysis based on those lyrics.`,
      github: "https://github.com/austinzumbro/syncaethesia",
      link: "https://melore.herokuapp.com/",
      image: "melore.png",
      alt: "Screenshot of MeloRE: App",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            github={project.github}
            deployed={project.deployed}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </div>
    </div>
  );
}
