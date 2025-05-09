import React from 'react'
import {
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Avatar,
} from '@mui/material'
import { motion } from 'framer-motion'

import uiux from '../../image/uiux.png'
import Spinner from '../../layout/Spinner'

const clientLogos = [
  'https://via.placeholder.com/80x40?text=Logo+1',
  'https://via.placeholder.com/80x40?text=Logo+2',
  'https://via.placeholder.com/80x40?text=Logo+3',
  'https://via.placeholder.com/80x40?text=Logo+4',
  'https://via.placeholder.com/80x40?text=Logo+5',
]
const Description = ({ loading, description = {} }) => {
  const { profdescription = '', whatido = [] } = description // Set default values

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
      {loading && !description ? (
        <Spinner />
      ) : (
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={gridItemVariants}>
            {/* about title */}
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
                About Me
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
          {/* description about */}
          <motion.div variants={gridItemVariants}>
            <Typography
              variant="subtitle1"
              component="h3"
              align="left"
              ml={5}
              mt={1}
              sx={{ color: 'gray' }}
            >
              {profdescription}
            </Typography>
          </motion.div>
          {/* what i do */}
          <motion.div variants={gridItemVariants}>
            <Typography
              variant="h3"
              component="h3"
              align="left"
              m={4}
              mb={2}
              sx={{ color: '#DDDDDD' }}
            >
              What I do!
            </Typography>
          </motion.div>
          <Divider sx={{ border: '1px solid #ff007f', margin: '10px' }} />
          {/* card service */}
          <Grid container spacing={4} rowSpacing={1} mb={6.7}>
            {whatido.length > 0 ? (
              whatido.map((ele, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div variants={gridItemVariants}>
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
                        p: 3,
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
                        image={uiux}
                        alt={ele.title}
                      />

                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{ color: '#DDDDDD' }}
                        >
                          {ele.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#B4B4B8' }}>
                          {ele.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))
            ) : (
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ color: '#B4B4B8', textAlign: 'center', mt: 2 }}
              >
                No data available.
              </Typography>
            )}
          </Grid>
          {/* client */}
          <Grid
            container
            spacing={4}
            rowSpacing={1}
            mb={6.7}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Typography
              variant="h3"
              component="h3"
              align="left"
              m={4}
              ml={10}
              mb={2}
              sx={{ color: '#DDDDDD' }}
            >
              My Client
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              gap={4}
            >
              {clientLogos.map((logo, index) => (
                <Avatar
                  key={index}
                  src={logo}
                  variant="rounded"
                  sx={{
                    width: 80,
                    height: 40,
                    backgroundColor: 'white',
                    p: 1,
                  }}
                />
              ))}
            </Box>
          </Grid>
        </motion.div>
      )}
    </>
  )
}

export default Description
