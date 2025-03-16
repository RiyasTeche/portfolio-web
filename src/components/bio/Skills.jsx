import { motion } from "framer-motion";
import "./bio.css";

const Skills = () => {
  const skillSet = [
    "html",
    "css",
    "scss",
    "JavaScript",
    "Node Js",
    "PHP",
    "MERN",
    "Express",
    "Zend",
    "SQL",
    "MONGO DB",
    "SAP",
    "Inflow",
    "Ms office",
    "Windows",
    "Linux",
  ];

  return (
    
    <div className="skills-conatiner">
      <h3>SKILLS</h3>
      <div className="skills-lists">
        {skillSet.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      {/* SKILL SCROLL SVG */}
      <div className="svg-skills-conatiner">
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ y: -5 }}
          animate={{ y: 5 }}
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
