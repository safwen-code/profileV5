import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { motion } from 'framer-motion'
import { Card, Divider, Typography, Grid } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import './skill.css'

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
  const percentage = 50

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
              <div className="skill-card">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: '#e34c26',
                    pathColor: '#e34c26',
                  })}
                />
                <p className="skill-name">HTML</p>
              </div>
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
              <div className="skill-card">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: '#264de4',
                    pathColor: '#264de4',
                  })}
                />
                <p className="skill-name">css</p>
              </div>
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
              <div className="skill-card">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: '#392467',
                    pathColor: '#392467',
                  })}
                />
                <p className="skill-name">Bootstrap </p>
              </div>
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
              <div className="skill-card">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: '#1B4242',
                    pathColor: '#1B4242',
                  })}
                />
                <p className="skill-name">React-bootstrap</p>
              </div>
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
              <div className="skill-card">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: '#1677ff',
                    pathColor: '#1677ff',
                  })}
                />
                <p className="skill-name">Ant Design</p>
              </div>
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
              <div className="skill-card">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: '#3081D0',
                    pathColor: '#3081D0',
                  })}
                />
                <p className="skill-name">Material-UI</p>
              </div>
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
              <div className="skill-card">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: '#161A30',
                    pathColor: '#161A30',
                  })}
                />
                <p className="skill-name">Framer Motion</p>
              </div>
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
              <div className="skill-card">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: '#0766AD',
                    pathColor: '#0766AD',
                  })}
                />
                <p className="skill-name">Devexpress</p>
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>

      <Divider light />
      {/* pogrsseve bar fixed */}

      <motion.div variants={gridContainerVariants}>
        <Grid
          container
          spacing={6}
          mt={4}
          mb={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
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
              sx={{ marginLeft: 2, marginRight: 2 }}
            >
              JavaScript
            </Typography>
            <LinearProgress
              variant="determinate"
              sx={{
                marginTop: 3,
                marginBottom: 2,
                width: { xs: '100%', sm: '100%', md: '700px' }, // Adjust the width as needed
                height: 10,
                borderRadius: 5,
              }}
              size={40}
              thickness={4}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginLeft: 2 }}
            >{`${Math.round(70)}%`}</Typography>
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
              sx={{ marginLeft: 2, marginRight: 2 }}
            >
              Jquery , DOM
            </Typography>
            <LinearProgress
              variant="determinate"
              sx={{
                marginTop: 3,
                marginBottom: 2,
                width: { xs: '100%', sm: '100%', md: '700px' }, // Adjust the width as needed
                height: 10,
                borderRadius: 5,
              }}
              size={40}
              thickness={4}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginLeft: 2 }}
            >{`${Math.round(70)}%`}</Typography>
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
              sx={{ marginLeft: 2 }}
            >
              Vanilla JavaScript
            </Typography>
            <LinearProgress
              variant="determinate"
              sx={{
                marginTop: 3,
                marginBottom: 2,
                width: { xs: '100%', sm: '100%', md: '700px' }, // Adjust the width as needed
                height: 10,
                borderRadius: 5,
              }}
              size={40}
              thickness={4}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginLeft: 2 }}
            >{`${Math.round(70)}%`}</Typography>
          </Grid>
        </Grid>
      </motion.div>
      <Divider light />

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
