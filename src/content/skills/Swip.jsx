import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Grid, Card } from '@mui/material'
import { motion } from 'framer-motion'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
]

const gridItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function SwipeableTextMobileStepper() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ flexGrow: 1 }} m={1}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid container spacing={6} mt={4} mb={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <motion.div variants={gridItemVariants}>
                    <Card
                      sx={{
                        height: 170,
                        maxWidth: 345,
                        background: `url(${step.imgPath})`,
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
                        background: `url(${step.imgPath})`,
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
                        background: `url(${step.imgPath})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: '0.9',
                      }}
                    ></Card>
                  </motion.div>
                </Grid>
              </Grid>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
    </Box>
  )
}

export default SwipeableTextMobileStepper
