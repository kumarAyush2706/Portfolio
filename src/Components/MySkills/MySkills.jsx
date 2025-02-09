import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./MySkills.css";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="skills_item"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const MySkills = () => {
  const [refresh, setRefresh] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRefresh((prev) => !prev);
        }
      },
      { threshold: 0.5 } // Adjust visibility threshold (50% visible)
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div className="skills-main" id='skills' ref={skillsRef}>
      <h2 className="skills_title">Skills</h2>
      <div className="skills">
        <div className="skills_container">
          <motion.div className="skills_item" whileHover={{ scale: 1.05 }}>
            Web
          </motion.div>
          <Skill name="CSS" x="13vw" y="8vw" key={refresh} />
          <Skill name="HTML" x="15vw" y="-2vw" key={refresh + 1} />
          <Skill name="JavaScript" x="-21vw" y="-7vw" key={refresh + 2} />
          <Skill name="Bootstrap" x="3vw" y="-10vw" key={refresh + 3} />
          <Skill name="React" x="25vw" y="-3vw" key={refresh + 4} />
          <Skill name="Next" x="-14vw" y="11vw" key={refresh + 5} />
          <Skill name="Tailwind" x="-15vw" y="-1vw" key={refresh + 6} />
          <Skill name="Node" x="3vw" y="15vw" key={refresh + 7} />
          <Skill name="Express" x="16vw" y="-13vw" key={refresh + 8} />
          <Skill name="MongoDB" x="28vw" y="6vw" key={refresh + 9} />
          <Skill name="Mongoose" x="-30vw" y="3vw" key={refresh + 10} />
          <Skill name="My SQL" x="-10vw" y="-14vw" key={refresh + 11} />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
