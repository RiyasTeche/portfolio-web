import "./hero.css";
import resume from "./../../../public/resume_riyas.pdf";
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
        delay:.8,
      },
    },
  };
  // const sliderTextVariants = {
  //   initial: {
  //     x: 0,
  //   },
  //   animate: {
  //     x: "-220%",
  //     transition: {
  //       duration: 20,
  //       repeat: Infinity,
  //       repeatType: "mirror",
  //     },
  //   },
  // };

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
            Web# Full Stack Developer
            <br />
            and _UI & UX Designer
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
            <a href="https://www.linkedin.com/in/mohd-riyasm/" target="_blank">
              <img src="./linkedin.png" alt="LinkedIn" title="LinkedIn" />
            </a>
            <a href="https://github.com/RiyasTeche" target="_blank">
              <img src="./github.png" alt="GitHub" title="GitHub" />
            </a>
          </div>
          <div className="animated-conatiner">
            <motion.img
              src="./scroll.png"
              alt=""
              animate={{ y: 10, opacity: 0 }} 
              initial={{ y: 0 }} 
              transition={{
                duration: 2, // Duration in seconds
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </div>
        </motion.div>
        <div className="sliding-text-container">
          <h1>#_Writer#Content_Creator-Influencer</h1>
        </div>
        {/* <motion.div
          className="sliding-text-container"
          variants={sliderTextVariants}
          initial="initial"
          animate="animate"
        >
          #Writer_#Content_Creator-Influencer
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;
