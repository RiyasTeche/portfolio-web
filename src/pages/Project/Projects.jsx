import "./project.css";

const experianceList = [
  {
    id: 1,
    title: "Website with vite",
    desc: " Very simply designed Cafe 4key officail Website ,used 3D objects ,animations,email and parelex effects for eye catching!",
    img: "./../../public/p1.jpeg",
    demo: "/",
  },
  {
    id: 2,
    title: "Website with vite2",
    desc: " Very simply designed Cafe 4key officail Website ,used 3D objects ,animations,email and parelex effects for eye catching!",
    img: "./../../public/p2.jpeg",
    demo: "/",
  },
  {
    id: 3,
    title: "Website with vite3",
    desc: " Very simply designed Cafe 4key officail Website ,used 3D objects ,animations,email and parelex effects for eye catching!",
    img: "./../../public/p3.jpeg",
    demo: "/",
  },
  {
    id: 4,
    title: "Website with vite4",
    desc: " Very simply designed Cafe 4key officail Website ,used 3D objects ,animations,email and parelex effects for eye catching!",
    img: "./../../public/p1.jpeg",
    demo: "/",
  },
];

const SingleProject = ({ item }) => {
  return (
    <section className="project-section">
      <div className="project-wrapper">
        <div className="project-img-wrapper">
          <img src={item.img} alt="" />
        </div>
        <div className="project-text-wrapper">{item.title}</div>
      </div> 
    </section>
  );
};

const Projects = () => {
  return (
    <div className="project">
      <div className="project-header">
        <h1>Featured Works</h1>
        <div className="header-line" />
      </div>
      {experianceList.map((item) => (
        <SingleProject item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
