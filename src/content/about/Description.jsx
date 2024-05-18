import React from 'react'
import {
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material'
import { motion } from 'framer-motion'

import uiux from '../../image/uiux.png'
import appdev from '../../image/appdev.png'
import concep from '../../image/concep.png'
import mobileapp from '../../image/mobileapp.png'

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
          About me
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
          Développeur Full Stack passionné par l’univer du web et doté d’une
          curiosité pour cette metier.j’exerce cette metier depuis 2017 avec 3
          ans d’experience. Je me suis spécialisé dans le développement frontend
          ansi que le backend et je suis capable d’adopter avec tous les
          environnements du développement. Je suis spécialisé sur les frameworks
          Symfony, React Native, React , Python, Php et Nodejs.
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
          What i do!
        </Typography>
      </motion.div>
      <Divider sx={{ borderColor: '#D74B76', marginBottom: '10px' }} />
      <Grid
        container
        spacing={4}
        rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mb={6.7}
      >
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
                image={uiux}
                alt="UIUX"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  UI/UX Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
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
                image={appdev}
                alt="applicationn Web"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  App Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
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
                image={concep}
                alt="conception"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Conception & Managment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
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
                image={mobileapp}
                alt="applicationn Mobile"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Application Mobile
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  )
}
export default Description
