import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Grid, Card, useMediaQuery } from '@mui/material'
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

  let showScroll = useMediaQuery(theme.breakpoints.down('md'))
  const imagescrol = [
    {
      label: 'Frameworks ',
      imgPath: react,
    },
    {
      label: ' Envirement that I Use',
      imgPath: nodejs,
    },
    {
      label: 'Database I Use',
      imgPath: mongodb,
    },
  ]

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
          background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
          borderRadius: '10px',
        }}
      >
        <Typography
          color="#E2DFD0"
          ml={3}
          sx={{
            [theme.breakpoints.down('sm')]: {
              margin: 'auto',
            },
          }}
        >
          {!showScroll
            ? images[activeStep].label
            : imagescrol[activeStep].label}
        </Typography>
      </Paper>
      {!showScroll ? (
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <Grid
              key={step.label}
              sx={{
                marginLeft: '50px',
                [theme.breakpoints.down('md')]: {
                  marginLeft: '2px',
                },
              }}
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <Grid
                  container
                  spacing={3}
                  mt={0.1}
                  mb={4}
                  sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                  }}
                >
                  {step.imgPath.map((img, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      key={index}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <motion.div variants={gridItemVariants}>
                        <Card
                          sx={{
                            height: { xs: '120px', md: '120px', sm: '60px' },
                            width: { xs: '140px', md: '160px', sm: '120px' },
                            background: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              ) : null}
            </Grid>
          ))}
        </AutoPlaySwipeableViews>
      ) : (
        <>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {imagescrol.map((step, index) => (
              <Grid key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Grid
                    container
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    spacing={3}
                    mt={0.1}
                    mb={4}
                  >
                    <Grid item key={index}>
                      <motion.div variants={gridItemVariants}>
                        <Card
                          sx={{
                            height: '100px',
                            width: '100px',
                            background: `url(${step.imgPath})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></Card>
                      </motion.div>
                    </Grid>
                  </Grid>
                ) : null}
              </Grid>
            ))}
          </AutoPlaySwipeableViews>
        </>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <MobileStepper
          steps={maxSteps}
          position="static"
          sx={{
            background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
            borderRadius: '10px',
          }}
          activeStep={activeStep}
        />
      </Box>
    </Box>
  )
}

export default SwipeableTextMobileStepper
