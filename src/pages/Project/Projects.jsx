import { Link } from "react-router-dom";
import "./project.css";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectsList } from "./../../../public/experianceData";

const SingleProject = ({ item }) => {
  const ref = useRef();
  const PF = "./";

  // 👁️ Trigger when 50% is visible
  const isInView = useInView(ref, { amount: 0.5, once: false });

  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = item.img;

  // SLIDER PREVIOUS BTN CLICK
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  // SLIDER NEXT CLICK
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="project-section">
      <div className="project-wrapper">
        <div
          className="project-img-wrapper"
        >
          <div className="button-conatiner">
            <button
              className="prev"
              onClick={prevSlide}
              disabled={!(images.length > 1)}
            >
              &#10094;
            </button>
          </div>
          <div className="project-main-img-container" ref={ref}>
            <motion.img
              className="project-image"
              src={PF + images[currentIndex]}
              alt=""
              variants={variants}
              animate={ isInView ? "animate" : "initial"}
            />
            {item?.tech && (
              <div className="tech-images">
                {item.tech.map((icon) => (
                  <img
                    className="tech-img"
                    src={PF + "/png/" + icon + ".png"}
                    alt=""
                    key={icon}
                    title={icon}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="button-conatiner">
            <button
              className="next"
              onClick={nextSlide}
              disabled={!(images.length > 1)}
            >
              &#10095;
            </button>
          </div>
        </div>
        <div className="project-text-wrapper">
          <div className="project-text-container">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="listConatiner">
              {item?.techStack?.length > 0 && (
                <ul>
                  <h4>🔧 Tech Stack</h4>
                  {item?.techStack.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {item?.keyFeatures?.length > 0 && (
                <ul>
                  <h4>✨ Key Features</h4>
                  {item?.keyFeatures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="project-buttons-conatiner">
              <Link to={item.demo} target="_blank">
                <button
                  style={{ cursor: item.demo ? "pointer" : " not-allowed" }}
                  disabled={!item.demo}
                >
                  See Demo
                </button>
              </Link>
              {item.code && (
                <Link to={item.code} target="_blank">
                  <button
                    style={{ cursor: item.code ? "pointer" : "not-allowed" }}
                  >
                    Code Review
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <div className="project">
      <div className="project-main-wrapper">
        <div className="project-header-conatiner">
          <div className="scroll-project-div">
            <motion.img
              src="./scroll.png"
              alt=""
              animate={{ y: 10, opacity: 1 }} // Correct: Animating to a number value
              initial={{ y: 0, opacity: 0 }} // Correct: Initial value is also a number
              transition={{
                duration: 2, // Duration in seconds
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </div>
          <div className="project-header">
            <h1>Featured Works</h1>
          </div>
        </div>
        {ProjectsList.map((item) => (
          <SingleProject item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
