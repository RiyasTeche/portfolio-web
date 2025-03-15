import "./navbar.css";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <motion.div className="logo"  animate={{ x: 100 }} transition={{duration:2}}>
          <span>Mohd.</span>
          <span> Riyas</span>
        </motion.div>
        <motion.div className="links" animate={{ x: -100 }} transition={{duration:2}}>
          <a href="#">About</a>
          <a href="#">Experiance</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
