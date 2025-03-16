import "./bio.css";
import { motion } from "framer-motion";

const WorkHistory = () => {
  return (
    <div className="experiance-wrapper">
      <h3>EXPERIANCE</h3>
      {/* EXPERIANCE LIST CONTAINER */}
      <div className="experiance-conatiner">
        {/* EXPERIANCE LIST ITEM */}
        <div className="experiance-list-item">
          {/* LEFT */}
          <div className="experiance-item-left">
            {/* JOB TITLE */}
            <div className="job-title">Senier Java script engineer</div>
            {/* JOB DESC */}
            <div className="job-desc">
              My Current emplyment ,may better than the position before!
            </div>
            {/* JOB DATE */}
            <div className="job-date">2024-Present</div>
            {/* JOB COMPANY */}
            <div className="job-company">Tronic rwanda ltd</div>
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
          <div className="experiance-item-right"></div>
        </div>
        {/* EXPERIANCE LIST ITEM */}
        <div className="experiance-list-item">
          {/* LEFT */}
          <div className="experiance-item-left"></div>
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
            {/* JOB TITLE */}
            <div className="job-title">Senier Java script engineer</div>
            {/* JOB DESC */}
            <div className="job-desc">
              My Current emplyment ,may better than the position before!
            </div>
            {/* JOB DATE */}
            <div className="job-date">2024-Present</div>
            {/* JOB COMPANY */}
            <div className="job-company">Tronic rwanda ltd</div>
          </div>
        </div>
        {/* EXPERIANCE LIST ITEM */}
        <div className="experiance-list-item">
          {/* LEFT */}
          <div className="experiance-item-left">
            {/* JOB TITLE */}
            <div className="job-title">Senier Java script engineer</div>
            {/* JOB DESC */}
            <div className="job-desc">
              My Current emplyment ,may better than the position before!
            </div>
            {/* JOB DATE */}
            <div className="job-date">2024-Present</div>
            {/* JOB COMPANY */}
            <div className="job-company">Tronic rwanda ltd</div>
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
          <div className="experiance-item-right"></div>
        </div>
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
          initial={{ y: -5 }}
          animate={{ y: 5 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {/* Circle border */}
          <circle cx="12" cy="12" r="10" stroke="currentColor" />
          {/* Scroll Arrow */}
          <path d="M12 8v8" />
          <path d="M16 12l-4 4-4-4" />
        </motion.svg>
      </div>
    </div>
  );
};

export default WorkHistory;
