import "./bio.css";
import Skills from "./Skills";
import WorkHistory from "./WorkHistory";

import { motion } from "framer-motion";

const Bio = () => {
  return (
    <div className="bio">
      <div className="bio-wrapper">
        {/* TEXT CONATINER */}
        <div className="bio-text-wrapper">
          {/* SKILLS */}
          <Skills />
          {/* EXPERIANCE */}
          <WorkHistory />
          {/* BIOGRAPHY */}
          <div className="biogarphy-conatiner">cariculam</div>
        </div>
        {/* SVG CONATINER */}
        <div className="bio-svg-wrapper">
        svg
        </div>
      </div>
    </div>
  );
};

export default Bio;
