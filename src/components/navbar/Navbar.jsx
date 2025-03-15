import { useState } from "react";
import ToggleButton from "./ToggleButton";
import "./navbar.css";

import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { url: "/", title: "About" },
    { url: "/Experiance", title: "Experiance" },
    { url: "/Projects", title: "Projects" },
    { url: "/Cariculam", title: "Cariculam" },
    { url: "/Contact", title: "Contact" },
  ];

  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <motion.div
          className="logo"
          animate={{ x: 100 }}
          transition={{ duration: 2 }}
        >
          <span>Mohd.</span>
          <span> Riyas</span>
        </motion.div>
        <motion.div
          className="links"
          animate={{ x: -100 }}
          transition={{ duration: 2 }}
        >
          {links.map((item) => (
            <a href="#" key={item.title}>
              {item.title}
            </a>
          ))}
        </motion.div>
        <div className="sidebar-menu" onClick={() => setOpen((prev) => !prev)}>
          <ToggleButton open={open}/>
          {/* LIST MENU */}
          {open && (
            <div className="sidebar-links">
              {links.map((item) => (
                <a href="#" key={item.title}>
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
