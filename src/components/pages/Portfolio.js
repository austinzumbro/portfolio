import React from "react";
import Project from "../Project";
import PageHead from "../PageHead";

export default function Portfolio() {
  const projectList = [
    {
      title: "MeloRE:",
      description: `An experiment in developing full-stack applications. Requires a Spotify login. Allows the user to connect to Spotify and import playlists. Utlizizes the ChartJS library to provide some simple visual representations of information about the user's songs, including danceability, valence, etc. Pulling lyric samples from MusixMatch, it uses Google Cloud's Natural Language Processing API to give a sentiment analysis based on those lyrics.`,
      github: "https://github.com/austinzumbro/syncaethesia",
      link: "https://melore.herokuapp.com/",
      image: "melore.png",
      alt: "Screenshot of MeloRE: App",
    },
    {
      title: "PWA Text Editor",
      description: `Playing around with webpack, service workers, manifets, etc.`,
      github: "https://github.com/austinzumbro/progressiveweb-text-editor",
      deployed: "https://young-shore-20097.herokuapp.com/",
      image: "progressweb-text-editor.png",
      alt: "Screenshot of Progressive Web App: Text Editor",
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
      title: "Timed Coding Quiz",
      description: `Simple quiz testing Javascript concepts. Built in vanilla JS, HTML, and CSS.`,
      github: "https://github.com/austinzumbro/timed-coding-quiz",
      deployed: "https://austinzumbro.github.io/timed-coding-quiz/",
      image: "timed-coding-quiz.png",
      alt: "Screenshot of Timed Coding Quiz App",
    },
    {
      title: "Multi-City Weather Forecast",
      description: `An initial exploration of third-party apis. Allows the user to look up weather information for various cities.`,
      github: "https://github.com/austinzumbro/multi-city-weather-forecast",
      deployed: "https://austinzumbro.github.io/multi-city-weather-forecast/",
      image: "multi-city-weather-forecast.png",
      alt: "Screenshot of Multi-City Weather Forecast",
    },
    {
      title: "Marketing Website Refactor",
      description: `Given an existing HTML and CSS file, what can I do to make the site and source code more accessible, without otherwise changing anything about its appearance or function?`,
      github: "https://github.com/austinzumbro/marketing-website-refactor",
      deployed: "https://austinzumbro.github.io/marketing-website-refactor/",
      image: "horiseon-square.png",
      alt: "Screenshot of a marketing company's website",
    },
  ];

  return (
    <div className="w-full">
      <PageHead heading={"Portfolio"} />

      <div className="grid grid-cols-1 md:grid-cols-2">
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
