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
                <p>10+ years</p>
                <p>Fontend & Full Stack Dev</p>
                <p>Management and Team lead</p>
              </div>
              <div className="aboutme-badge">
                <img src="./book.png" alt="" />
                <h3>Education</h3>
                <p>B.Tech Computer Science</p>
                <p>Diploma in Computer Engineering</p>
              </div>
            </div>
            <p>
              Energetic Information technology master, Inventory, HR and System
              analysis with 8 + years of experience in administration and almost
              2year experience in full stack web developer as well. I do have
              not only in good knowledge about I.T Basics, development and
              Electrical Retailing & Marketing but also have all-round
              experience with 10 years in different areas related with the same
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
