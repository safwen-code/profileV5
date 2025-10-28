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
import SchoolIcon from '@mui/icons-material/School'

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
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          color="#ff4b2b"
        >
          <SchoolIcon sx={{ mr: 1 }} />
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
                color: '#DDDDDD',
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
                        background:
                          'linear-gradient(to right, #ff4b2b, #ff416c)',
                        color: '#DDDDDD',
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
              bgcolor: '#111',
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
                color: '#ff4b2b',
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
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 3, fontWeight: 'bold' }}
                >
                  {selectedEducation.titleformation}
                </Typography>
                <Chip
                  label={selectedEducation.date}
                  sx={{
                    bgcolor: '#ff4b2b',
                    color: '#FFFFFF',
                    mt: 1,
                  }}
                />
                <List
                  sx={{
                    mt: 3,
                    backgroundColor: '#1e1e1e',
                    border: '1px solid #ffffff33',
                    borderRadius: 3,
                    padding: '10px',
                    mb: 1,
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
                  sx={{
                    mt: 2,
                    display: 'block',
                    margin: '0 auto',
                    bgcolor: '#ff4b2b',
                    color: '#fff',
                    boxShadow: '0 4px 15px rgba(255, 75, 43, 0.5)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#e04326',
                      boxShadow: '0 6px 20px rgba(255, 75, 43, 0.6)',
                    },
                    '&:active': {
                      boxShadow: '0 3px 10px rgba(255, 75, 43, 0.4)',
                    },
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
