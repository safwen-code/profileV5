import React from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'
import Stepper from './Stepper.jsx'
import StepperWork from './StepperWork.jsx'
import StepperStage from './StepperStage.jsx'
const EduExp = ({ loadingprofessional, professionalpath }) => {
  const { eductaion: education, experience, internship } = professionalpath

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ m: 4 }}>
          Resume
        </Typography>
        <Divider sx={{ bgcolor: '#ff007f', height: 3, width: 300, mb: 4 }} />
      </Box>
      <Grid container spacing={2}>
        {' '}
        <Grid item xs={12} sm={6}>
          <Stepper education={education} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StepperWork experience={experience} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StepperStage internship={internship} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Khowledge /> */}
        </Grid>
      </Grid>
    </>
  )
}

export default EduExp
