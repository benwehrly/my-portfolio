import "./App.css";
import React, { useState, FC } from "react";
import { Buttons } from "./components/Buttons";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { motion, AnimatePresence } from "framer-motion";
import pfp from "./assets/me.jpeg";

const App: FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="min-h-screen px-5 lg:pt-28 text-center sm: pt-12 pb-10">
      <img
        className="h-36 w-36 rounded-full m-auto mb-5 border-violet-700 border-4"
        src={pfp}
      />
      <h1 className="text-3xl">Ben Wehrly</h1>
      <h2 className="text-2xl">Front-End / React Engineer</h2>
      <h3 className="text-xl">Lexington, KY</h3>
      <Buttons tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={tabIndex}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "tween" }}
          className={`${tabIndex === 2 && "mt-5"}`}
        >
          {tabIndex === 0 ? (
            <AboutMe />
          ) : tabIndex === 1 ? (
            <Projects />
          ) : (
            <Contact />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
