import React from 'react'
import { Grid, Divider } from '@mui/material'
import Stepper from './Stepper.jsx'
import StepperWork from './StepperWork.jsx'
import StepperStage from './StepperStage.jsx'
// import { deepOrange } from '@mui/material/colors'
// import gomy from '../../images/gomy.png'
// import iset from '../../images/iset.jpg'
// import openclass from '../../images/openclass.png'
// import bqube from '../../images/bqube.jpg'
// import tim from '../../images/tim.jpg'
// import simac from '../../images/simac.jpg'
// import intercom from '../../images/intercom.png'
// import Modalskills from './Modalskills'
// import { useState } from 'react'

// import {
//   openclassroomData,
//   isetData,
//   bqubeData,
//   gomycodeData,
//   timelecData,
//   interData,
//   simacData,
// } from '../../utils/fakedata'

// import Stepper from './skillsComp/Stepper.jsx'
// import StepperWork from './skillsComp/StepperWork.jsx'
// import StepperStage from './skillsComp/StepperStage.jsx'
// import Khowledge from './Khowledge.jsx'
// const styletitle = {
//   fontZize: '2rem',
//   fontWeight: 'bold',
//   color: '#3f50b5  ',
//   marginBottom: '10x px',
//   textAlign: 'center',
//   textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
// }
const EduExp = () => {
  // const [open, setopen] = useState({
  //   gomy: false,
  //   openclass: false,
  //   iset: false,
  //   bqube: false,
  //   timelec: false,
  //   inter: false,
  //   sim: false,
  // })
  // const hundelshow = (modalName) => {
  //   setopen((prevState) => ({
  //     ...prevState,
  //     [modalName]: true,
  //   }))
  // }
  // const handleClose = (modalName) => {
  //   setopen((prevState) => ({
  //     ...prevState,
  //     [modalName]: false,
  //   }))
  // }
  return (
    <>
      <Grid container spacing={2}>
        {' '}
        <Grid item xs={12} sm={6}>
          <Stepper />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StepperWork />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StepperStage />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Khowledge /> */}
        </Grid>
      </Grid>
    </>
  )
}

export default EduExp
