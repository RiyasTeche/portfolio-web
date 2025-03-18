import "./bio.css";
import { motion, useInView } from "framer-motion";
import { experianceList } from "./../../../public/data";
import { useRef } from "react";

const WorkHistory = () => {
  const historyRef = useRef();
  const isInView = useInView(historyRef, { margin: "-110px" });

  const variants = {
    initial: { opacity: 0, x: "-300px" },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 2, delay: 0.7 },
  }

  return (
    <div className="experiance-wrapper"  >
      <motion.h3
        variants={variants}
        animate={isInView ? "animate" : "initial"}
      >
        EXPERIANCE
      </motion.h3 >
      {/* EXPERIANCE LIST CONTAINER */}
      <div ref={historyRef}>
        {/* EXPERIANCE LIST ITEM */}

        {experianceList.map((job, index) => (
          <div className="experiance-list-item" key={index}>
            {/* LEFT */}
            <div className="experiance-item-left">
              {job.id % 2 === 1 && (
                <>
                  <div className="job-title">{job.title}</div>
                  <div className="job-desc">{job.desc}</div>
                  <div className="job-date">{job.date}</div>
                  <div className="job-company">{job.company}</div>
                </>
              )}
            </div>
            {/* CENTER */}
            <div className="experiance-item-centre">
              {/* LINE */}
              <div className="line">
                {/* LINE CIRCLE*/}
                <div className="line-circle"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="experiance-item-right">
              {job.id % 2 === 0 && (
                <>
                  <div className="job-title">{job.title}</div>
                  <div className="job-desc">{job.desc}</div>
                  <div className="job-date">{job.date}</div>
                  <div className="job-company">{job.company}</div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* SKILL SCROLL SVG */}
      <div className="svg-skills-conatiner">
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 5 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {/* Circle border */}
          <circle cx="12" cy="12" r="10" stroke="currentColor" />
          {/* Scroll UP Arrow */}
          <path d="M12 16V8" />
          <path d="M8 12l4-4 4 4" />
        </motion.svg>
      </div>
    </div>
  );
};

export default WorkHistory;
