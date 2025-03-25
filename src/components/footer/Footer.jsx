import "./footer.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1], {
    duration: 1,
    delay: 1,
  }); // Fades out on scroll

  return (
    // <div className={`footer ${showFooter ? "show" : ""}`}>
    <motion.div className="footer" style={{ opacity }}>
      <motion.div className="footer-container">
        <motion.div whileHover={{ scale: 1.1 }} className="footer-title">
          Designed & Built by Mohd. Riyas
        </motion.div>

        <motion.div
          className="footer-copy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          +91 8891 724 302 &copy; {new Date().getFullYear()} Muhammed Riyas. All Rights Reserved.
        </motion.div>

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
            href="https://www.linkedin.com/in/muhammed-riyas-8aa65471"
            target="_blank"
            className="icon"
          >
            <img src="./linkedin.png" alt="LinkedIn" title="LinkedIn" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
