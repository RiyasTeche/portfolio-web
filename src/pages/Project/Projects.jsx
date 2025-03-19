import { Link } from "react-router-dom";
import "./project.css";
import { useRef } from "react";
import { motion,  useScroll, useTransform } from "framer-motion";

const experianceList = [
  {
    id: 1,
    title: "WEBSITE WITH VITE REACT",
    desc: " Very simply designed Cafe 4key officail Website ,used 3D objects ,animations,email and parelex effects for eye catching!",
    img: "./../../public/p1.jpeg",
    demo: "https://riyasteche.github.io/cafe4key-web/",
    code: "#",
  },
  {
    id: 2,
    title: "Website with vite2",
    desc: " Very simply designed Cafe 4key officail Website ,used 3D objects ,animations,email and parelex effects for eye catching!",
    img: "./../../public/p2.jpeg",
    demo: "",
    code: "",
  },
  {
    id: 3,
    title: "Website with vite3",
    desc: " Very simply designed Cafe 4key officail Website ,used 3D objects ,animations,email and parelex effects for eye catching!",
    img: "./../../public/p3.jpeg",
    demo: "",
    code: "",
  },
  {
    id: 4,
    title: "Website with vite4",
    desc: " Very simply designed Cafe 4key officail Website ,used 3D objects ,animations,email and parelex effects for eye catching!",
    img: "./../../public/p1.jpeg",
    demo: "",
    code: "",
  },
];

const SingleProject = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-45, 200]);

  return (
    <section className="project-section">
      <div className="project-wrapper" ref={ref}>
        <div className="project-img-wrapper">
          <img src={item.img} alt="" />
        </div>
        <motion.div className="project-text-wrapper" style={{ y: y }}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <div className="project-buttons-conatiner">
            <Link to={item.demo} target="_blank">
              <button style={{cursor: item.demo ? "pointer" :" not-allowed" }} >See Demo</button>
            </Link>
            <Link to={item.code} target="_blank">
              <button style={{cursor: item.code ? "pointer" :" not-allowed" }}>Code Review</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <div className="project">
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
      {experianceList.map((item) => (
        <SingleProject item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
