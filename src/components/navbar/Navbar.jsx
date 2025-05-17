import { useState } from "react";
import ToggleButton from "./ToggleButton";
import "./navbar.css";

import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sideBarVariants = {
    open: {
      clipPath: "circle(1000px at 600px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const links = [
    { url: "/", title: "About" },
    { url: "/experiance", title: "Experiance" },
    { url: "/projects", title: "Projects" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <span>Mohd.</span>
            <span> Riyas</span>
          </Link>
        </div>
        <div className="links">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
        <div className="sidebar-menu" onClick={() => setOpen((prev) => !prev)}>
          <ToggleButton open={open} />
          {/* LIST MENU */}
          {open && (
            <motion.div
              className="sidebar-links"
              variants={sideBarVariants}
              animate={open ? "open" : "closed"}
            >
              {links.map((link) => (
                <NavLink link={link} key={link.title} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
