import React from 'react'
import Description from './about/Description.jsx'
import Project from './project/Project.jsx'
import EduExp from './Edu&Exp/EduExp.jsx'
import Skills from './skills/Skills.jsx'
import Contact from './contact/Contact.jsx'

const Containers = ({ activeNavItem }) => {
  return (
    <div className=" col-md-8 ">
      {activeNavItem === 'description' && <Description />}
      {activeNavItem === 'project' && <Project />}
      {activeNavItem === 'skills' && <EduExp />}
      {activeNavItem === 'SW.Skills' && <Skills />}
      {activeNavItem === 'contact' && <Contact />}
    </div>
  )
}

export default Containers
