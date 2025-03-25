import { motion } from "framer-motion";
import "./aboutme.css";

const AboutMe = () => {
  const textVariants = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 5, staggerChildren: 0.1 },
    viewport: { amount: 1, margin: "-100px" },
  };

  return (
    <div className="aboutMe">
      <div className="about-wrapper">
        <div className="top">
          <h3>Get To Know More</h3>
          <h2>About Me</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="./hero1.png" alt="" />
          </div>
          <motion.div
            className="right"
            variants={textVariants}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.div className="aboutme-badges" variants={textVariants}>
              <motion.div className="aboutme-badge" variants={textVariants}>
                <img src="./certificate.png" alt="" />
                <h3>Experience</h3>
                <p>10+ years</p>
                <p>UI & Full Stack Developer</p>
                <p>Management and Team lead</p>
              </motion.div>
              <motion.div className="aboutme-badge" variants={textVariants}>
                <img src="./book.png" alt="" />
                <h3>Education</h3>
                <p>B.Tech Computer Science</p>
                <p>Diploma in Computer Engineering</p>
              </motion.div>
            </motion.div>
            <motion.div className="bio-container" variants={textVariants}>
              <h2>BIOGRAPHY</h2>
              <p>
                Energetic Information technology master, Inventory, HR and
                System analysis with 8 + years of experience in administration
                and almost 2year experience in full stack web developer as well.
                I do have not only in good knowledge about I.T Basics,
                development and Electrical Retailing & Marketing but also have
                all-round experience with 10 years in different areas related
                with the same
              </p>
              <div>
                <img src="./signature.png" alt="" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
