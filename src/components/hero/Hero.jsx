import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="left">
          <img src="./hero.png" alt="" />
        </div>
        <div className="right">
          <h3>Hello,I'm</h3>
          <h1>MUHAMMED RIYAS</h1>
          <h2>
            Web Developer
            <br />
            and UI Designer
          </h2>
          <div className="hero-links">
            <button>Download CV</button>
            <button>Contact Info</button>
          </div>
          <div className="awardList">
            <a href="/" target="_blank">
              <img src="./linkedin.png" alt="LinkedIn" title="LinkedIn" />
            </a>
            <a href="/" target="_blank">
              <img src="./github.png" alt="GitHub" title="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
