import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { motion } from 'framer-motion'
import { Divider, Typography, Grid, Chip, Box } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import AnimatedProgressProvider from './AnimatedProgressProvider'
import SwipeableTextMobileStepper from './Swip'
import 'react-circular-progressbar/dist/styles.css'
import './skill.css'

const gridItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const Skills = ({ props }) => {
  const [progress1, setProgress1] = useState(0)
  const [progress2, setProgress2] = useState(0)
  const [progress3, setProgress3] = useState(0)

  useEffect(() => {
    const timer1 = setInterval(() => {
      setProgress1((prevProgress) => {
        if (prevProgress >= 70) {
          clearInterval(timer1)
          return 70
        }
        return prevProgress + 1
      })
    }, 50)

    const timer2 = setInterval(() => {
      setProgress2((prevProgress) => {
        if (prevProgress >= 50) {
          clearInterval(timer2)
          return 50
        }
        return prevProgress + 1
      })
    }, 50)

    const timer3 = setInterval(() => {
      setProgress3((prevProgress) => {
        if (prevProgress >= 90) {
          clearInterval(timer3)
          return 90
        }
        return prevProgress + 1
      })
    }, 50)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
      clearInterval(timer3)
    }
  }, [])
  return (
    <>
      {/* CircularProgressbar fixed */}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div variants={gridItemVariants}>
              <AnimatedProgressProvider values={[0, 20, 40, 60, 80]}>
                {(percentage) => {
                  return (
                    <div className="skill-card">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathTransitionDuration: 0.15,
                        })}
                      />
                      <p className="skill-name">HTML</p>
                    </div>
                  )
                }}
              </AnimatedProgressProvider>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div variants={gridItemVariants}>
              <AnimatedProgressProvider values={[0, 20, 40, 60, 80]}>
                {(percentage) => {
                  return (
                    <div className="skill-card">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathTransitionDuration: 0.15,
                        })}
                      />
                      <p className="skill-name">HTML</p>
                    </div>
                  )
                }}
              </AnimatedProgressProvider>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div variants={gridItemVariants}>
              <AnimatedProgressProvider values={[0, 20, 40, 60, 80]}>
                {(percentage) => {
                  return (
                    <div className="skill-card">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathTransitionDuration: 0.15,
                        })}
                      />
                      <p className="skill-name">HTML</p>
                    </div>
                  )
                }}
              </AnimatedProgressProvider>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div variants={gridItemVariants}>
              <AnimatedProgressProvider values={[0, 20, 40, 60, 80]}>
                {(percentage) => {
                  return (
                    <div className="skill-card">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathTransitionDuration: 0.15,
                        })}
                      />
                      <p className="skill-name">HTML</p>
                    </div>
                  )
                }}
              </AnimatedProgressProvider>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div variants={gridItemVariants}>
              <AnimatedProgressProvider values={[0, 20, 40, 60, 80]}>
                {(percentage) => {
                  return (
                    <div className="skill-card">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathTransitionDuration: 0.15,
                        })}
                      />
                      <p className="skill-name">HTML</p>
                    </div>
                  )
                }}
              </AnimatedProgressProvider>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div variants={gridItemVariants}>
              <AnimatedProgressProvider values={[0, 20, 40, 60, 80]}>
                {(percentage) => {
                  return (
                    <div className="skill-card">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathTransitionDuration: 0.15,
                        })}
                      />
                      <p className="skill-name">HTML</p>
                    </div>
                  )
                }}
              </AnimatedProgressProvider>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div variants={gridItemVariants}>
              <AnimatedProgressProvider values={[0, 20, 40, 60, 80]}>
                {(percentage) => {
                  return (
                    <div className="skill-card">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathTransitionDuration: 0.15,
                        })}
                      />
                      <p className="skill-name">HTML</p>
                    </div>
                  )
                }}
              </AnimatedProgressProvider>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div variants={gridItemVariants}>
              <AnimatedProgressProvider values={[0, 20, 40, 60, 80]}>
                {(percentage) => {
                  return (
                    <div className="skill-card">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathTransitionDuration: 0.15,
                        })}
                      />
                      <p className="skill-name">HTML</p>
                    </div>
                  )
                }}
              </AnimatedProgressProvider>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>

      <Divider sx={{ borderColor: '#D74B76' }} />

      {/* pogrsseve bar fixed */}

      <motion.div variants={gridContainerVariants}>
        <Grid
          container
          spacing={4}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
          }}
        >
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Grid container item alignItems="center">
                <Typography
                  variant="body2"
                  sx={{ color: '#DDDDDD', marginLeft: 2, marginRight: 2 }}
                >
                  JavaScript
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progress1}
                  sx={{
                    marginTop: 3,
                    marginBottom: 2,
                    width: { xs: '100%', sm: '100%', md: '450px' },
                    height: 10,
                    borderRadius: 5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: '#DDDDDD', marginLeft: 2 }}
                >
                  {`${progress1}%`}
                </Typography>
              </Grid>
              <Grid container item alignItems="center">
                <Typography
                  variant="body2"
                  sx={{ color: '#DDDDDD', marginLeft: 2, marginRight: 2 }}
                >
                  Jquery, DOM
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progress2}
                  sx={{
                    marginTop: 3,
                    marginBottom: 2,
                    width: { xs: '100%', sm: '100%', md: '450px' },
                    height: 10,
                    borderRadius: 5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: '#DDDDDD', marginLeft: 2 }}
                >
                  {`${progress2}%`}
                </Typography>
              </Grid>
              <Grid container item alignItems="center">
                <Typography
                  variant="body2"
                  sx={{ color: '#DDDDDD', marginLeft: 2, marginRight: 2 }}
                >
                  Vanilla JavaScript
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progress3}
                  sx={{
                    marginTop: 3,
                    marginBottom: 2,
                    width: { xs: '100%', sm: '100%', md: '450px' },
                    height: 10,
                    borderRadius: 5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: '#DDDDDD', marginLeft: 2 }}
                >
                  {`${progress3}%`}
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ mt: { xs: 2, md: 0 } }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip label="Postman" variant="outlined" color="secondary" />
              <Chip label="VSCode" variant="outlined" color="secondary" />
              <Chip label="Eclipse" variant="outlined" color="secondary" />
              <Chip label="Jira" variant="outlined" color="secondary" />
              <Chip label="Docker" variant="outlined" color="secondary" />
              <Chip label="Git" variant="outlined" color="secondary" />
              <Chip label="UML" variant="outlined" color="secondary" />
            </Box>
          </Grid>
        </Grid>
      </motion.div>
      <Divider sx={{ borderColor: '#D74B76' }} />

      {/* outil fixed image */}
      <SwipeableTextMobileStepper />
    </>
  )
}

export default Skills
