import React from "react";

export const Contact = () => {
  const linkedIn = "https://www.linkedin.com/in/ben-wehrly-34a515252/";
  const email = "mailto: bwehrly859@gmail.com"
  const github = "";

  return (
    <p>
      You can reach me on{" "}
      <a 
      href={linkedIn} target="_blank" className="underline">
        LinkedIn
      </a>{" "}
      or by{" "}
      <a href={email} target="_blank" className="underline">
        email
      </a>
      .
    </p>
  );
};
