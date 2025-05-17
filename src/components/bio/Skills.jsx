import { animate, delay, motion, useInView } from "framer-motion";
import "./bio.css";
import { skillSet } from "./../../../public/data";
import { useRef } from "react";

const Skills = ({ scrollableConatinerRef }) => {
  const skillRef = useRef(null);
  const isSkillInView = useInView(skillRef, { margin: "-100px" });
  const scrollableConatiner =scrollableConatinerRef.current;

  const variants = {
    initial: { opacity: 0, x: "-500px" },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 2, delay: 0.7 },
  };

  const moveToBottom = () => {
    scrollableConatiner.scrollTo({
      top: scrollableConatiner.scrollHeight, // Scroll to bottom
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="skills-conatiner" ref={skillRef}>
      <motion.h3
        variants={variants}
        animate={isSkillInView ? "animate" : "initial"}
      >
        SKILLS
      </motion.h3>
      <motion.div
        variants={variants}
        animate={isSkillInView ? "animate" : "initial"}
        className="skills-lists"
      >
        {skillSet.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </motion.div>
      {/* SKILL SCROLL SVG */}
      <div className="svg-skills-conatiner" title="scroll down">
        <motion.svg
          className="scroll-button"
          onClick={() => moveToBottom()}
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 5 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {/* Circle border */}
          <circle cx="12" cy="12" r="10" stroke="currentColor" />
          {/* Scroll Arrow */}
          <path d="M12 8v8" />
          <path d="M16 12l-4 4-4-4" />
        </motion.svg>
      </div>
    </div>
  );
};

export default Skills;
