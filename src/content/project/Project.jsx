import React from 'react'
import {
  Typography,
  Divider,
  Grid,
  Card,
  IconButton,
  CardContent,
  CardActions,
  CardMedia,
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
          <Typography
            variant="h3"
            component="h3"
            align="left"
            m={4}
            mb={2}
            sx={{ color: '#DDDDDD' }}
          >
            Projects
          </Typography>
        </motion.div>
        <Divider sx={{ borderColor: '#D74B76' }} />
        <motion.div variants={gridItemVariants}>
          <Typography
            variant="subtitle1"
            component="h3"
            align="left"
            ml={5}
            mt={1}
            sx={{ color: '#B4B4B8' }}
          >
            Software Engineer with 3 years Computer Science degree and more than
            2 year of experience.As a dedicated problem solver , I have many
            skill in Javascript ,node js , php and supporting
            laguages/libraries/frameworks that solve real-word problems through
            code.
          </Typography>
        </motion.div>
        <motion.div variants={gridItemVariants}>
          <Typography
            variant="h3"
            component="h3"
            align="left"
            m={4}
            mb={2}
            sx={{ color: '#DDDDDD' }}
          >
            Project I Done
          </Typography>
        </motion.div>
        <Divider sx={{ borderColor: '#D74B76' }} />

        <Grid container spacing={4} rowSpacing={1} mt={1}>
          <Grid item xs={12} sm={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  margin: 'auto',
                  opacity: '0.9',
                  display: 'flex',
                  padding: 2,
                  bgcolor: '#49243E',
                  border: '1px solid #E2DFD0',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 70 }}
                  // image={uiux}
                  alt="Hungel Home"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: '#DDDDDD' }}
                  >
                    Jungel Home
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#B4B4B8' }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon sx={{ color: '#D80032' }} />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon sx={{ color: 'whitesmoke' }} />
                    </IconButton>
                  </CardActions>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  margin: 'auto',
                  opacity: '0.9',
                  display: 'flex',
                  padding: 2,
                  bgcolor: '#49243E',
                  border: '1px solid #E2DFD0',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 70 }}
                  // image={appdev}
                  alt="E comerce"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: '#DDDDDD' }}
                  >
                    ECommerce App
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#B4B4B8' }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon sx={{ color: '#D80032' }} />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon sx={{ color: 'whitesmoke' }} />
                    </IconButton>
                  </CardActions>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  margin: 'auto',
                  opacity: '0.9',
                  display: 'flex',
                  padding: 2,
                  bgcolor: '#49243E',
                  border: '1px solid #E2DFD0',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 70 }}
                  // image={concep}
                  alt="Gits"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: '#DDDDDD' }}
                  >
                    Gits profile
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#B4B4B8' }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon sx={{ color: '#D80032' }} />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon sx={{ color: 'whitesmoke' }} />
                    </IconButton>
                  </CardActions>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  margin: 'auto',
                  opacity: '0.9',
                  display: 'flex',
                  padding: 2,
                  bgcolor: '#49243E',
                  border: '1px solid #E2DFD0',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 70 }}
                  // image={mobileapp}
                  alt="Profile screen"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: '#DDDDDD' }}
                  >
                    Profile Screen
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#B4B4B8' }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon sx={{ color: '#D80032' }} />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon sx={{ color: 'whitesmoke' }} />
                    </IconButton>
                  </CardActions>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </>
  )
}
export default Project
