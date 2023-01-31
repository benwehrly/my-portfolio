import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";

export const Projects = () => {
  const projects = [
    {
      name: "Memo Ring",
      text: "Simon-like Memory Game",
      src: proj1,
      link: "https://glowing-chebakia-792313.netlify.app/",
      github: "https://github.com/benwehrly/memo_ring",
    },
    {
      name: "Hit-Box",
      text: "Browser Based Drum Machine",
      src: proj2,
      link: "https://marvelous-entremet-b2c9ac.netlify.app/",
      github: "https://github.com/benwehrly/hit-box",
    },
    {
      name: "Quicktionary",
      text: "Animated Dictionary Website",
      src: proj3,
      link: "https://dictionary-app-5f940.web.app/",
      github: "https://github.com/benwehrly/dictionary",
    },
    {
      name: "Instacar",
      text: "Mock Online Car Retailer",
      src: proj4,
      link: "https://car-app-828cb.web.app/",
      github: "https://github.com/benwehrly/instacar",
    },
  ];

  const url = "https://github.com/benwehrly";

  return (
    <div>
      <h4 className="pb-3 max-w-lg m-auto text-left">
        Some of my recent projects. Click on a card to view the live demo or
        visit my{" "}
        <a href={url} target="_blank" className="underline">
          Github
        </a>{" "}
        for a closer look.
      </h4>
      <div className="grid md:grid-cols-2 w-fit m-auto gap-3 sm: grid-cols-1">
        {projects.map(
          (
            project: {
              name: string;
              text: string;
              src: string;
              link: string;
              github: string;
            },
            i: number
          ) => (
            <Project key={i} project={project} />
          )
        )}
      </div>
    </div>
  );
};

type ProjectProps = {
  project: {
    name: string;
    text: string;
    src: string;
    link: string;
    github: string;
  };
};

const Project = ({ project }: ProjectProps) => {
  const { name, text, src, link, github } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-44 w-64 flex flex-col bg-black text-white items-between justify-between rounded-md shadow-md shadow-gray-500 overflow-hidden">
      <div className="flex justify-between h-fit border-b border-gray-700 items-center">
        <div className="w-full">
          <h1 className="h-6 text-left w-full px-2">{name}</h1>
          <p className="flex items-center text-left pb-0 h-6 justify-cente text-xs w-full mx-auto whitespace-nowrap px-2">
            {text}
          </p>
        </div>
        <a
          className="bg-black w-11 text-white h-9 rounded-full mx-2 flex justify-center items-center hover:border-violet-600"
          href={github}
          target="_blank"
          tabIndex={-1}
        >
          <button className="rounded-full">
            <AiFillGithub size={28} className="rounded-full bg-white text-black transition duration-100 hover:bg-violet-500" />
          </button>
        </a>
      </div>
      <a
        className="h-full w-64 relative overflow-hidden"
        href={link}
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={src}
          alt=""
          className={`w-64 h-40 object-cover filter lg: brightness-75 absolute -top-4 transition duration-500 cursor-pointer ${
            isHovered && "scale-125 lg:brightness-100"
          } sm: brightness-90`}
        />
        {/* <button className="absolute h-8 left-20 bottom-2 w-32 -translate-x-1/2 rounded bg-black border-2 border-white opacity-40">Live Demo</button> */}
      </a>
    </div>
  );
};
