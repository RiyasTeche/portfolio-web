import "./footer.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [.5, 1], [0, 0.9], {
    duration: 1,
    delay: 1,
  }); // Fades out on scroll

  return (
    // <div className={`footer ${showFooter ? "show" : ""}`}>
     <motion.div className="footer" style={{ opacity }}>
      <div className="footer-container">
      <motion.div whileHover={{ scale: 1.1 }} className="footer-title">
        Designed & Built by Mohd. Riyas
      </motion.div>
      <motion.div
        className="footer-copy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        &copy; {new Date().getFullYear()} Muhammed Riyas. All Rights Reserved.
      </motion.div>
    </div>

 

      {/* <motion.div
        className="footer-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/yourprofile"
          target="_blank"
          className="icon"
        >
          { <FaGithub /> }
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="icon"
        >
          { <FaLinkedin /> }
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com/yourprofile"
          target="_blank"
          className="icon"
        >
          {/* <FaTwitter /> }
        </motion.a>
      </motion.div> */}

    </motion.div>
  );
};

export default Footer;
