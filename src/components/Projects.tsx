import React, { useState } from "react";

import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";

export const Projects = () => {
  //   const projects = ["Memo Ring", "Hit-Box", "Quicktionary", "Instacar"];

  const projects = [
    {
      name: "Memo Ring",
      text: "Simon-like Memory Game",
      src: proj1,
      link: "https://glowing-chebakia-792313.netlify.app/",
    },
    {
      name: "Hit-Box",
      text: "Browser Based Drum Machine",
      src: proj2,
      link: "https://marvelous-entremet-b2c9ac.netlify.app/",
    },
    {
      name: "Quicktionary",
      text: "Animated Dictionary Website",
      src: proj3,
      link: "https://dictionary-app-5f940.web.app/",
    },
    {
      name: "Instacar",
      text: "Mock Online Car Retailer",
      src: proj4,
      link: "https://car-app-828cb.web.app/",
    },
  ];

  const url = "https://github.com/benwehrly";

  return (
    <div>
      <h4 className="pb-3 max-w-lg m-auto">
        Some of my recent projects. Click on a card to view the live site or
        visit my{" "}
        <a href={url} target="_blank" className="underline">
          Github
        </a>{" "}
        for a closer look.
      </h4>
      <div className="grid md:grid-cols-2 w-fit m-auto gap-3 sm: grid-cols-1">
        {projects.map(
          (
            project: { name: string; text: string; src: string; link: string },
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
  };
};

const Project = ({ project }: ProjectProps) => {
  const { name, text, src, link } = project;

  // h-48 w-64

  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-44 w-64 flex flex-col bg-black text-white items-between justify-between rounded-md shadow-md border-solid border-black shadow-gray-300 overflow-hidden"
    >
      <h1 className="h-6 mx-auto w-full">{name}</h1>
      <div className="h-full w-64 relative overflow-hidden border-t border-b border-gray-700">
        <img
          src={src}
          alt=""
          className={`w-64 h-40 object-cover filter lg: brightness-75 absolute -top-3 transition duration-500 cursor-pointer ${
            isHovered && "scale-125 lg:brightness-100"
          } sm: brightness-90`}
        />
        {/* <div className='absolute left-0 w-64 h-48 bg-violet-800 opacity-50'/> */}
      </div>
      <p className="flex items-center pb-0 h-9 justify-center text-xs w-full mx-auto">{text}</p>
    </a>
  );
};
