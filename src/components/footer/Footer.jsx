import { Link } from "react-router-dom";
import "./footer.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1], {
    duration: 1,
    delay: 1,
  }); // Fades out on scroll

  return (
    <motion.div className="footer" style={{ opacity }}>
      <div className="footer-container">
        <div className="footer-top">
          <h1>Hire Me - Content Creator - UI & UX Designer - Full Stack Web Application - Consulting - Freelancer - Hire Me</h1>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-conatiner">
            <div className="left">
              <h4>Get in Touch</h4>
              <p>Muhammed Riyas</p>
              <p>+91 8891 724 302</p>
              <p>muhammed_riyas_m@yahoo.in</p>
              <p>https://github.com/RiyasTeche</p>
            </div>
            <div className="center">
              <h4>Quick Links</h4>
              <p><Link to="/">About me</Link></p>
              <p><Link to="/experiance">Experiance</Link></p>
              <p><Link to="/projects">Projects</Link></p>
              <p><Link to="/contact">Contact</Link></p>
            </div>
            <div className="right">
              <h4>Services</h4>
              <p>UI design</p>
              <p>Full Stack Web App</p>
              <p>Rest Api</p>
              <p>Management</p>
              <p>Consultancy</p>
            </div>
          </div>
          <div className="footer-last">
            <span>
              Designed & Built by Mohd. Riyas {new Date().getFullYear()}
              Muhammed Riyas &copy; +91 8891 724 302 All Rights Reserved.
            </span>
            <motion.div
              className="footer-icons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <a
                href="https://github.com/RiyasTeche"
                target="_blank"
                className="icon"
              >
                <img src="./github.png" alt="GitHub" title="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-riyasm/"
                target="_blank"
                className="icon"
              >
                <img src="./linkedin.png" alt="LinkedIn" title="LinkedIn" />
              </a>
            </motion.div>
            <span>Privacy Terms FAQs Help</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
