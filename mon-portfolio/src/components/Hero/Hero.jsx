import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="hero" className="hero" >
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Hello, I'm Cyrine ALOUI</h1>
        <h2>Web Developer</h2>
        <p></p>

        <div className="hero-buttons">
          <button className="button">
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
            Download CV
          </button>

          <button className="button">
            ✉️ Contact Me
          </button>
        </div>
      </motion.div>

    </section>
  );
};
