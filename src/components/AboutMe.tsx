import React from "react";

export const AboutMe = () => {
  return (
    <div className="lg:px-32 sm:px-5">
      <p className="leading-7 text-left m-auto font text-lg lg:max-w-none sm: max-w-xs">
        Hey, I'm Ben! I'm a web developer based in Lexington with 2 years
        experience. I specialize in user interfaces and have a real passion for
        building sleek, user-friendly applications. When I'm not working on code
        you can usually find me making digital music, loading boxes at UPS or
        playing Elden Ring for the 47th time. Feel free to peep my projects or
        contact me for any further info!
      </p>
      <br />
      <div className="max-w-xs mx-auto">
        <p className="text-left text-lg">Technologies I have experience with</p>
        <br />
        <ul className="mx-auto grid grid-cols-2 gap-x-12 text-left">
          <li>HTML</li>
          <li>React JS</li>
          <li>Javascript</li>
          <li>TypeScript</li>
          <li>CSS/Tailwind</li>
          <li>Node/Express</li>
        </ul>
      </div>
    </div>
  );
};
