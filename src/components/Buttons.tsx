import React, { SetStateAction, Dispatch } from "react";

type ContentProps = {
  tabIndex: number;
  setTabIndex: Dispatch<SetStateAction<number>>;
};

export const Buttons = ({ tabIndex, setTabIndex }: ContentProps) => {
  const sections = ["About Me", "My Work", "Get in touch"];

  return (
    <div className="flex lg:justify-around sm: justify-center items-center flex-wrap w-3/4 m-auto my-3">
      {sections.map((section: string, i: number) => (
        <Button
          key={i}
          currentIndex={i}
          section={section}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
        />
      ))}
    </div>
  );
};

type ButtonProps = {
  section: string;
  tabIndex: number;
  currentIndex: number;
  setTabIndex: React.Dispatch<SetStateAction<number>>;
};

const Button = ({
  section,
  tabIndex,
  setTabIndex,
  currentIndex,
}: ButtonProps) => {
  const isSelected = tabIndex === currentIndex;

  return (
    <button
      onClick={() => setTabIndex(currentIndex)}
      className={`bg-black text-white rounded py-1 px-6 my-2 lg:mx-6 cursor-pointer border-2 border-solid border-black sm: mx-1
        ${
          isSelected
            ? "bg-black text-white"
            : "bg-white text-black hover:bg-gray-200"
        }
        `}
    >
      {section}
    </button>
  );
};
