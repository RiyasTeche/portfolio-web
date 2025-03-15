import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="about-wrapper">
        <div className="top">
          <h3>Get To Know More</h3>
          <h2>About Me</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="./hero.png" alt="" />
          </div>
          <div className="right">
            <div className="aboutme-badges">
              <div className="aboutme-badge">
                <img src="./certificate.png" alt="" />
                <h3>Experience</h3>
                <p>5+ years</p>
                <p>Fontend & Full Stack Dev</p>
              </div>
              <div className="aboutme-badge">
              <img src="./book.png" alt="" />
                <h3>Education</h3>
                <p>B.Tech Computer Science</p>
                <p>Diploma in Computer Engineering</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              eveniet odio mollitia pariatur doloribus facere harum labore unde
              aperiam omnis nobis, ipsum minima similique ea officiis
              praesentium consectetur. Nostrum, consectetur!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
