import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const pathName = useLocation().pathname.toUpperCase();
  return (
    <div key={pathName}>
        <Navbar />
        <motion.div
          className="main-layout-wrapper"
          animate={{ height: "0vh", opacity: 0 }}
          exit={{ height: "100vh" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>{pathName === "/" ? "ABOUT ME" : pathName.slice(1)}</h1>
        </motion.div>
        <div>
          <Outlet />
        </div>
    </div>
  );
}
