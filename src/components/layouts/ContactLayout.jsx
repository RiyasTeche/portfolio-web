import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import { Outlet } from "react-router-dom";

export default function ContactLayout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
