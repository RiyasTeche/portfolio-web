import "./hero.css";
import resume from "./../../../public/resume_riyas.pdf";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      x: 1600,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
      scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
          duration: 2,
          repeat: Infinity,
        },
      },
    },
  };
  const sliderTextVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType:"mirror"
      },
    },
  };

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="left">
          <img src="./hero.png" alt="" />
        </div>
        <motion.div
          className="right"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <h3>Hello,I'm</h3>
          <h1>MUHAMMED RIYAS</h1>
          <h2>
            Web Developer
            <br />
            and UI Designer
          </h2>
          <div className="hero-links">
            <a href={resume} target="_blank">
              <button>Download CV</button>
            </a>
            <Link to="/contact">
              <button className="contact-button">Contact Info</button>
            </Link>
          </div>
          <div className="awardList">
            <a href="/" target="_blank">
              <img src="./linkedin.png" alt="LinkedIn" title="LinkedIn" />
            </a>
            <a href="/" target="_blank">
              <img src="./github.png" alt="GitHub" title="GitHub" />
            </a>
          </div>
          <div className="animated-conatiner">
            <motion.img
              src="./scroll.png"
              alt=""
              variants={textVariants}
              animate="scrollButton"
            />
          </div>
        </motion.div>
        <motion.div
          className="sliding-text-container"
          variants={sliderTextVariants}
          initial="initial" 
          animate="animate"
        >
          Writer Content Creator Influencer
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
