import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
// import "./Skills.css"

const Skills = () => {
  return (
   <section className="skills section" id='skills'>
     <div className="title_container">
        <h2 className="section_title">Skills  </h2>
            <span className="section_subtitle">
            My technical level
            </span>
            </div>

          <div className="skills_container container grid">
            <Frontend/>
            <Backend/>
            </div>  
   </section>
  )
}

export default Skills
