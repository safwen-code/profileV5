import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { motion } from 'framer-motion'
import { Divider, Typography, Grid, Chip, Box } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import AnimatedProgressProvider from './AnimatedProgressProvider'
import SwipeableTextMobileStepper from './Swip'
import 'react-circular-progressbar/dist/styles.css'
import './skill.css'
import { useTheme } from '@mui/material/styles'

const gridItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const Skills = ({ props }) => {
  const theme = useTheme()
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
  let softskill = [
    { name: 'html', count: 100 },
    { name: 'css', count: 60 },
    { name: 'js', count: 75 },
    { name: 'Dom', count: 70 },
    { name: 'react', count: 80 },
    { name: 'reactN', count: 60 },
    { name: 'vuejs', count: 60 },
    { name: 'angular', count: 50 },
  ]

  let skills = [
    { name: 'Php', progress: progress1 },
    { name: 'Node js', progress: progress2 },
    { name: 'C Sharp', progress: progress3 },
  ]
  return (
    <>
      {/* CircularProgressbar fixed */}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {softskill.map((skill, index) => (
            <Grid
              key={index}
              item
              xs={6}
              sm={4}
              md={3}
              lg={3}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <motion.div variants={gridItemVariants}>
                <AnimatedProgressProvider values={[0, 20, 40, 50, skill.count]}>
                  {(percentage) => (
                    <div className="skill-card">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathTransitionDuration: 0.15,
                        })}
                      />
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  )}
                </AnimatedProgressProvider>
              </motion.div>
            </Grid>
          ))}
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
            flexDirection: { xs: 'column', md: 'row', sm: 'column' },
            alignItems: 'flex-start',
          }}
        >
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                [theme.breakpoints.down('sm')]: {
                  float: 'right',
                },
              }}
            >
              {skills.map((skill, index) => (
                <Grid
                  container
                  item
                  alignItems="center"
                  key={index}
                  sx={{
                    flexWrap: 'nowrap',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#DDDDDD',
                      minWidth: '80px',
                    }}
                    mt={1}
                  >
                    {skill.name}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={skill.progress}
                      sx={{
                        marginTop: 3,
                        marginBottom: 2,
                        height: 10,
                        borderRadius: 5,
                        width: '100%',
                        [theme.breakpoints.down('md')]: {
                          width: '24rem',
                        },
                        [theme.breakpoints.down('sm')]: {
                          width: '11rem',
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    mt={1}
                    sx={{
                      color: '#DDDDDD',
                      marginLeft: 1,
                      minWidth: '40px',
                      textAlign: 'right',
                    }}
                  >
                    {`${skill.progress}%`}
                  </Typography>
                </Grid>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ mt: { xs: 2, md: 2 } }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                [theme.breakpoints.down('md')]: {
                  mb: 4,
                },
                [theme.breakpoints.down('sm')]: {
                  mb: 4,
                },
              }}
            >
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
