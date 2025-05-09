import React from 'react'
import Description from './about/Description.jsx'
import Project from './project/Project.jsx'
import EduExp from './EduandExp/EduExp.jsx'
import Skills from './skills/Skills.jsx'
import Contact from './contact/Contact.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  getdescription,
  getproject,
  getskillProf,
  getskills,
} from '../action/profileAction.js'

const Containers = ({ activeNavItem }) => {
  const dispatch = useDispatch()
  const { loading, description } = useSelector((state) => state.profile)
  const { loading: loadingproject, project } = useSelector(
    (state) => state.profile,
  )
  const { loading: loadingprofessional, professionalpath } = useSelector(
    (state) => state.profile,
  )
  const { loading: loadingskills, skills } = useSelector(
    (state) => state.profile,
  )
  useEffect(() => {
    dispatch(getdescription())
    dispatch(getproject())
    dispatch(getskillProf())
    dispatch(getskills())
  }, [dispatch])

  return (
    <div className=" col-md-8 ">
      {activeNavItem === 'description' && (
        <Description loading={loading} description={description} />
      )}
      {activeNavItem === 'project' && (
        <Project loadingproject={loadingproject} project={project} />
      )}
      {activeNavItem === 'skills' && (
        <EduExp
          loadingprofessional={loadingprofessional}
          professionalpath={professionalpath}
        />
      )}
      {activeNavItem === 'SW.Skills' && (
        <Skills loadingskills={loadingskills} skills={skills} />
      )}
      {activeNavItem === 'contact' && <Contact />}
    </div>
  )
}

export default Containers
