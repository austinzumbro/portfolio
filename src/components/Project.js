import React from "react";
import GithubLogo from "../components/logos/GithubLogo";

export default function Project(props) {
  const image = require(`../assets/images/${props.image}`);

  const figureStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    // backgroundPosition: "top",
    width: "100%",
    // height: "300px",
  };

  return (
    <div className="flex flex-col lg:flex-row bg-zinc-100 mb-5 mx-5 rounded-lg shadow">
      <figure
        className="rounded-tl-lg rounded-tr-lg lg:rounded-tr-none h-60 bg-top"
        style={figureStyle}
      >
        {/* <img src={image} alt={props.alt} /> */}
      </figure>

      <div className="flex flex-col justify-between">
        <h2 className="flex-1 text-2xl bg-zinc-800 text-zinc-100 text-center font-bold py-5">
          {props.title}
        </h2>

        <p className="prose prose-zinc prose-sm font-serif p-5">
          {props.description}
        </p>

        <div className="flex-1 py-5 px-1 me-5 justify-self-end flex flex-row justify-end items-center">
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="px-3"
          >
            <GithubLogo />
          </a>
          <a
            className="px-3 py-1 bg-amber-500 text-amber-100 font-bold uppercase rounded"
            href={props.deployed}
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
        </div>
      </div>
    </div>
  );
}
