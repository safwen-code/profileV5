import React from 'react'
import {
  Typography,
  Divider,
  Grid,
  Card,
  IconButton,
  CardContent,
  CardActions,
} from '@mui/material'

// import apprelease from './app-release.apk'
import { motion } from 'framer-motion'

// import ui from '../../images/ui.jpg'
// import appdev from '../../images/appdev.jpg'
// import management from '../../images/management.png'
// import webdev from '../../images/webdev.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

const Project = () => {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  // const download = () => {
  //   window.location.href = apprelease
  // }
  return (
    <>
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={gridItemVariants}>
          <Typography variant="h3" component="h3" align="left" m={4} mb={2}>
            Projects
          </Typography>
        </motion.div>
        <Divider light />
        <motion.div variants={gridItemVariants}>
          <Typography
            variant="subtitle1"
            component="h3"
            align="left"
            ml={5}
            mt={1}
          >
            Software Engineer with 3 years Computer Science degree and more than
            2 year of experience.As a dedicated problem solver , I have many
            skill in Javascript ,node js , php and supporting
            laguages/libraries/frameworks that solve real-word problems through
            code.
          </Typography>
        </motion.div>
        <motion.div variants={gridItemVariants}>
          <Typography variant="h3" component="h3" align="left" m={4} mb={2}>
            Project I Done
          </Typography>
        </motion.div>
        <Divider light />

        <Grid container spacing={2} mt={4} mb={4}>
          <Grid item xs={12} sm={8} md={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  // background: `url(${ui})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.9',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: 'dark' }}
                  >
                    Jungel Home
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: 'dark' }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: '#D80032' }} />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon sx={{ color: 'whitesmoke' }} />
                  </IconButton>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  // background: `url(${appdev})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: 'dark' }}
                  >
                    E comerce
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: 'dark' }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: '#D80032' }} />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon sx={{ color: 'whitesmoke' }} />
                  </IconButton>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  // background: `url(${management})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: 'dark' }}
                  >
                    Gits
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: 'dark' }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: '#D80032' }} />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon sx={{ color: 'whitesmoke' }} />
                  </IconButton>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  // background: `url(${webdev})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: 'dark' }}
                  >
                    Profiles
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: 'dark' }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: '#D80032' }} />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon sx={{ color: 'whitesmoke' }} />
                  </IconButton>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </>
  )
}
export default Project
