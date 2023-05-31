import React from "react";
import profilePic from "../../assets/images/profile-picture.jpeg";
import PageHead from "../PageHead";

export default function About() {
  const figureStyle = {
    backgroundImage: `url(${profilePic})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    width: "240px",
    height: "240px",
  };

  return (
    <div>
      <PageHead heading={"About Me"} />
      <div className="flex flex-col md:flex-row pb-10">
        <figure
          className="flex relative self-center rounded mb-6"
          style={figureStyle}
        >
          <figcaption className="absolute bottom-0 right-0 bg-blue-900 px-3 rounded-tl-lg text-sm text-blue-100 italic">
            Photo credit:&nbsp;
            <a
              href="https://www.melnigro.com/"
              target="_blank"
              rel="noreferrer"
            >
              Mel Nigro
            </a>
          </figcaption>
        </figure>
        <div className="px-10 prose prose-zinc">
          <h2 className="text-3xl text-center">Welcome to my Portfolio</h2>
          <div className="ps-3 font-serif">
            <p>
              I am a considerate and creative collaborator living in Oakland,
              CA.
            </p>
            <p>
              I love stories. Consuming them, making them, recycling and
              rebuilding them. They are the tools we have to structure the world
              around us. They are both the problems we wrestle with and their
              solutions.
            </p>
            <p>
              Composing in code, music, and speech, it has been my privilege to
              contribute to a number of projects. This page collects a few of my
              favorites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
