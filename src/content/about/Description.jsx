import React from 'react'
import {
  CardActions,
  IconButton,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
} from '@mui/material'
import { motion } from 'framer-motion'
// import ui from '../../images/ui.jpg'
// import appdev from '../../images/appdev.jpg'
// import management from '../../images/management.png'
// import webdev from '../../images/webdev.jpg'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import ShareIcon from '@mui/icons-material/Share'

const Description = () => {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={gridItemVariants}>
          <Typography variant="h3" component="h3" align="left" m={4} mb={2}>
            About me
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
            Développeur Full Stack JS,PHP passionnée par l’univer du web et
            dotée d’une curiosité pour cette metier.Polyvalent et forte de 4 ans
            d’experience, je me suis spécialisée dans le développement frontend
            ansi que le backend. Je suis spécialisée sur les frameworks React ,
            React native, angular,php et nodejs.
          </Typography>
        </motion.div>
        <motion.div variants={gridItemVariants}>
          <Typography variant="h3" component="h3" align="left" m={4} mb={2}>
            What i do!
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
                  //   background: `url(${ui})`,
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
                  {/* <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: '#22092C' }}
                  >
                    UI/UX Design
                  </Typography> */}
                  <Typography
                    mt={8}
                    variant="body2"
                    // color="text.secondary"

                    sx={{
                      color: '#192655',
                      fontSize: '19px',
                      fontFamily: 'cursive',
                      fontStyle: 'initial',
                    }}
                  >
                    helps create products with a good user experience
                  </Typography>
                </CardContent>
                {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: '#D80032' }} />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon sx={{ color: 'whitesmoke' }} />
                  </IconButton>
                </CardActions> */}
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  //   background: `url(${appdev})`,
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
                  {/* <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: 'dark' }}
                  >
                    Application Web
                  </Typography> */}
                  <Typography
                    mt={8}
                    variant="body2"
                    // color="text.secondary"

                    sx={{
                      color: '#192655',
                      fontSize: '19px',
                      fontFamily: 'cursive',
                      fontStyle: 'initial',
                    }}
                  >
                    Crée et maintenir les sites web , crée un contenue pour les
                    sites web avec un bonne perfermonce.{' '}
                  </Typography>
                </CardContent>
                {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: '#D80032' }} />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon sx={{ color: 'whitesmoke' }} />
                  </IconButton>
                </CardActions> */}
              </Card>
            </motion.div>
          </Grid>
          {/* <Grid item xs={12} sm={8} md={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  background: `url(${management})`,
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
                    Management Project
                  </Typography> 
                  <Typography
                  mt={8}
                    variant="body2"
                    // color="text.secondary"

                    sx={{
                      color: '#192655',
                      fontSize: '19px',
                      fontFamily: 'cursive',
                      fontStyle: 'initial',
                    }} >
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
          </Grid> */}
          {/* <Grid item xs={12} sm={8} md={6}>
            <motion.div variants={gridItemVariants}>
              <Card
                sx={{
                  height: 170,
                  maxWidth: 345,
                  background: `url(${webdev})`,
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
                    Developpment Web F/B .end
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
          </Grid> */}
        </Grid>
      </motion.div>
    </>
  )
}
export default Description
