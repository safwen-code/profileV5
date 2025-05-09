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
  Box,
} from '@mui/material'

// import apprelease from './app-release.apk'
import { motion } from 'framer-motion'

// import ui from '../../images/ui.jpg'
// import appdev from '../../images/appdev.jpg'
// import management from '../../images/management.png'
// import webdev from '../../images/webdev.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import Spinner from '../../layout/Spinner'

const Project = ({ loadingproject, project }) => {
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
  const { projectdescription, projects } = project
  return (
    <>
      {loadingproject && !project ? (
        <Spinner />
      ) : (
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={gridItemVariants}>
            <Box display="flex" alignItems="center" m={2}>
              <Typography
                variant="h4"
                component="h2"
                fontWeight="bold"
                sx={{
                  borderLeft: '4px solid #ff007f',
                  pl: 2,
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                }}
              >
                Intro
              </Typography>
              <Box
                sx={{
                  height: 2,
                  flexGrow: 1,
                  backgroundColor: '#ff007f',
                  ml: 2,
                }}
              />
            </Box>
          </motion.div>
          {/* <Divider sx={{ borderColor: '#D74B76' }} /> */}
          <motion.div variants={gridItemVariants}>
            <Typography
              variant="subtitle1"
              component="h3"
              align="left"
              ml={5}
              mt={1}
              sx={{ color: '#B4B4B8' }}
            >
              {project && projectdescription}
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
          <Divider sx={{ border: '1px solid #ff007f', margin: '10px' }} />

          <Grid container spacing={4} rowSpacing={1} mt={1}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  variants={gridItemVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Card
                    sx={{
                      height: 170,
                      maxWidth: 345,
                      margin: 'auto',
                      opacity: '0.9',
                      display: 'flex',
                      padding: 2,
                      backgroundColor: '#1e1e1e',
                      border: '1px solid #ffffff33',
                      borderRadius: 3,
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 100, height: 70 }}
                      image={
                        project.image || 'https://via.placeholder.com/100x70'
                      } // Fallback image
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: '#DDDDDD', fontWeight: 400 }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          color: '#B4B4B8',
                        }}
                      >
                        {project.description || 'No description available.'}
                      </Typography>
                      <CardActions
                        disableSpacing
                        sx={{
                          justifyContent: 'flex-end',
                          mt: 1,
                          gap: 1.5,
                        }}
                      >
                        {/* Like Button */}
                        <IconButton
                          aria-label="add to favorites"
                          sx={{
                            color: '#D80032',
                            transition: 'transform 0.2s ease, color 0.2s ease',
                            '&:hover': {
                              color: '#ff4b2b',
                              transform: 'scale(1.2)',
                              backgroundColor: '#ffffff10',
                            },
                          }}
                        >
                          <FavoriteIcon />
                          <Typography
                            variant="caption"
                            sx={{ ml: 0.5, fontWeight: 500, color: 'inherit' }}
                          >
                            {project.likes.length}
                          </Typography>
                        </IconButton>

                        {/* Share Button */}
                        <IconButton
                          aria-label="share"
                          sx={{
                            color: 'whitesmoke',
                            transition: 'transform 0.2s ease, color 0.2s ease',
                            '&:hover': {
                              color: '#00BFFF',
                              transform: 'rotate(10deg) scale(1.1)',
                              backgroundColor: '#ffffff10',
                            },
                          }}
                        >
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      )}
    </>
  )
}
export default Project
