import { useEffect } from "react";
import "./footer.css";
import { useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  let lastScrollTop = 0;
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop < lastScrollTop) {
        setShowFooter(true); // Show footer when scrolling up
      } else {
        setShowFooter(false); // Hide footer when scrolling down
      }
      lastScrollTop = scrollTop;    
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`footer ${showFooter ? "show" : ""}`}>
      <div className="footer-container">footer</div>
    </div>
  );
};

export default Footer;
