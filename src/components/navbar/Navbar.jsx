import { useState } from "react";
import ToggleButton from "./ToggleButton";
import "./navbar.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { url: "/", title: "About" },
    { url: "/Experiance", title: "Experiance" },
    { url: "/Projects", title: "Projects" },
    { url: "/Contacts", title: "Contact" },
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
            <Link to={item.url} key={item.title}>{item.title}</Link>
          ))}
        </motion.div>
        <div className="sidebar-menu" onClick={() => setOpen((prev) => !prev)}>
          <ToggleButton open={open} />
          {/* LIST MENU */}
          {open && (
            <div className="sidebar-links">
              {links.map((item) => (
                 <Link to={item.url} key={item.title}>{item.title}</Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
