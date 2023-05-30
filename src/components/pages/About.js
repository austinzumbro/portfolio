import React from "react";
import profilePic from "../../assets/images/profile-picture.jpeg";

export default function About() {
  const figureStyle = {
    backgroundImage: `url(${profilePic})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    width: "240px",
    height: "240px",
  };

  return (
    <div className="flex flex-col md:flex-row pb-10">
      <figure className="hidden md:flex md:relative" style={figureStyle}>
        <figcaption class="absolute bottom-0 right-0 bg-blue-500 px-3 rounded-tl-lg text-sm text-white italic">
          Photo credit:&nbsp;
          <a href="https://www.melnigro.com/" target="_blank" rel="noreferrer">
            Mel Nigro
          </a>
        </figcaption>
      </figure>
      <div className="px-10 prose prose-slate">
        <h2 className="text-3xl">Welcome to my Portfolio</h2>
        <div className="font-serif">
          <p>
            I am a considerate and creative collaborator based out of Oakland,
            CA.
          </p>
          <p>
            I love stories. Consuming them, making them, recycling and
            rebuilding them. They are the tools by which we structure the world
            around us. They are the problems we wrestle with and their
            solutions.
          </p>
          <p>
            Whether working with code, music, or dialogue, I've been privileged
            to contribute to a number of projects. This page collects a few of
            my favorites.
          </p>
        </div>
      </div>
    </div>
  );
}
