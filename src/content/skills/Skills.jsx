import React, { useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { motion } from 'framer-motion'
import { Card, Divider, Typography, Grid } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import './skill.css'
import AnimatedProgressProvider from './AnimatedProgressProvider'
import { easeQuadInOut } from 'd3-ease'
import { useState } from 'react'

// import Swip from './Swip'

// import ang from '../../images/ang.jpg'
// import react from '../../images/react.jpg'
// import vue from '../../images/vue.png'

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
        <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
          <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
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
                  width: { xs: '100%', sm: '100%', md: '450px' }, // Adjust the width as needed
                  height: 10,
                  borderRadius: 5,
                }}
                size={40}
                thickness={4}
              />
              <Typography
                variant="body2"
                sx={{ color: '#DDDDDD', marginLeft: 2 }}
              >{`${progress1}%`}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: '#DDDDDD', marginLeft: 2, marginRight: 2 }}
              >
                Jquery , DOM
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progress2}
                sx={{
                  marginTop: 3,
                  marginBottom: 2,
                  width: { xs: '100%', sm: '100%', md: '450px' }, // Adjust the width as needed
                  height: 10,
                  borderRadius: 5,
                }}
                size={40}
                thickness={4}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginLeft: 2, color: '#DDDDDD' }}
              >{`${progress2}%`}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginLeft: 2, color: '#DDDDDD' }}
              >
                Vanilla JavaScript
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progress3}
                sx={{
                  marginTop: 3,
                  marginBottom: 2,
                  width: { xs: '100%', sm: '100%', md: '450px' }, // Adjust the width as needed
                  height: 10,
                  borderRadius: 5,
                }}
                size={40}
                thickness={4}
              />
              <Typography
                variant="body2"
                sx={{ marginLeft: 2, color: '#DDDDDD' }}
              >{`${progress3}%`}</Typography>
            </Grid>
          </Grid>
          <Grid item sx={{}}>
            Second item
          </Grid>
        </Grid>
      </motion.div>
      <Divider sx={{ borderColor: '#D74B76' }} />

      {/* images react,ang , vue  fixed*/}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={6} mt={4} mb={4}>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  // background: `url(${ang})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.9',
                }}
              ></Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  // background: `url(${react})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.9',
                }}
              ></Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  // background: `url(${vue})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.9',
                }}
              ></Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
      <Divider light />
      {/* outil fixed image */}
      {/* <Swip /> */}
    </>
  )
}

export default Skills
