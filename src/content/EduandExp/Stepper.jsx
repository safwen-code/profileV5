import React, { useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Modal,
  IconButton,
  Chip,
  List,
  ListItem,
  Button,
  ListItemText,
  Backdrop,
  Fade,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'

const VerticalLinearStepper = ({ education }) => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedEducation, setSelectedEducation] = useState(null)

  const handleOpenModal = (edu) => {
    if (edu.workFor && edu.workFor.length > 0) {
      setSelectedEducation(edu)
      setOpenModal(true)
    }
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedEducation(null)
  }

  return (
    <Box>
      {/* Title Typography centered above the cards */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            background: 'linear-gradient(to right, #4e79a7, #6a4c93)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Education
        </Typography>
      </Box>

      {/* Render Education as Cards in Column */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          px: { xs: 2, sm: 4 }, // Padding for better spacing on mobile
        }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card
              sx={{
                bgcolor: '#2C3E50',
                color: '#FFFFFF',
                borderRadius: '8px',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardActionArea onClick={() => handleOpenModal(edu)}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {edu.company}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {edu.titleformation}
                  </Typography>
                  {edu.date && (
                    <Chip
                      label={edu.date}
                      sx={{
                        bgcolor: '#6a4c93',
                        color: '#FFFFFF',
                        mt: 1,
                      }}
                    />
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        ))}
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              maxWidth: '600px',
              bgcolor: '#34495E',
              color: '#FFFFFF',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              outline: 'none',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '80vh', // Restrict the height of the modal
              overflowY: 'auto', // Add scrolling if content overflows
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                color: '#FFFFFF',
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedEducation && (
              <>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {selectedEducation.company}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {selectedEducation.titleformation}
                </Typography>
                <Chip
                  label={selectedEducation.date}
                  sx={{
                    bgcolor: '#6a4c93',
                    color: '#FFFFFF',
                    mt: 1,
                  }}
                />
                <List
                  sx={{
                    mt: 3,
                    bgcolor: '#2C3E50',
                    borderRadius: '4px',
                    padding: '10px',
                  }}
                >
                  {selectedEducation.workFor &&
                    selectedEducation.workFor.map((detail, index) => (
                      <ListItem key={index} sx={{ color: '#ECF0F1' }}>
                        <ListItemText primary={`${index + 1}. ${detail}`} />
                      </ListItem>
                    ))}
                </List>
                <Button
                  onClick={handleCloseModal}
                  variant="contained"
                  color="secondary"
                  sx={{
                    mt: 2,
                    display: 'block',
                    margin: '0 auto',
                  }}
                >
                  Close
                </Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}

export default VerticalLinearStepper
