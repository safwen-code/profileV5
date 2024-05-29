import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Grid, Card } from '@mui/material'
import { motion } from 'framer-motion'

import ang from '../../image/ang.jpg'
import react from '../../image/react.png'
import vue from '../../image/vue.png'
import nodejs from '../../image/nodejs.png'
import express from '../../image/express.png'
import php from '../../image/php.png'
import mongodb from '../../image/mongodb.png'
import mysql from '../../image/mysql.png'
import graph from '../../image/graph.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    label: 'Framework I Use',
    imgPath: [ang, react, vue],
  },
  {
    label: 'backend Envirement I Use',
    imgPath: [nodejs, php, express],
  },
  {
    label: 'Database I Use',
    imgPath: [mongodb, mysql, graph],
  },
]

const gridItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function SwipeableTextMobileStepper() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.length
  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ flexGrow: 1 }} m={1}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid container spacing={6} mt={4} mb={4}>
                {step.imgPath.map((img, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div variants={gridItemVariants}>
                      <Card
                        sx={{
                          height: 170,
                          maxWidth: 345,
                          background: `url(${img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          opacity: '0.9',
                        }}
                      ></Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
    </Box>
  )
}

export default SwipeableTextMobileStepper
