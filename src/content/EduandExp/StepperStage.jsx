import React, { useState } from 'react'
import {
  Chip,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  List,
  ListItem,
  ListSubheader,
  Typography,
  Box,
  Button,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import { motion } from 'framer-motion'

// Data
const internship = [
  {
    company: 'Network Expertise Tunisia',
    date: '09-05-14 01-06-14',
    titleformation: 'Stage d Initiation',
    workFor: [
      'Participer à la conception et au développement d’applications informatiques en utilisant des technologies adaptées.',
      "Contribution à l'identification et à la résolution de problèmes techniques pour améliorer la performance des systèmes.",
      'Rédaction de rapports techniques et documentation des processus pour assurer un suivi et une amélioration continue des projets.',
    ],
  },
  {
    company: 'Intercom Technologie',
    date: '01-08-17 / 31-08-17',
    titleformation: 'Développeur Web',
    workFor: [
      "Développement d'un système de gestion des ressources humaines, incluant la gestion des équipes (Comsis).",
      "Mise en place d'un système de notifications par email pour informer les utilisateurs des statuts ANFR.",
      'Optimisation des processus internes via des solutions web adaptées aux besoins opérationnels.',
    ],
  },
]

const StepperWork = () => {
  const [open, setOpen] = useState(false)
  const [selectedInternship, setSelectedInternship] = useState(null)

  const handleOpen = (internship) => {
    setSelectedInternship(internship)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedInternship(null)
  }

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <Box sx={{ margin: '0 auto', maxWidth: '600px', padding: '1rem' }}>
        <Stepper orientation="vertical">
          {internship.map((item, index) => (
            <Step key={index} active={1}>
              <StepLabel StepIconComponent={WorkOutlineOutlinedIcon}>
                <Typography component="span" sx={{ color: '#FFFFFF' }}>
                  {item.company}
                </Typography>
                <Chip
                  label={item.date}
                  sx={{ color: '#DDDDDD', marginLeft: '8px' }}
                />
              </StepLabel>
              <StepContent>
                <List
                  subheader={
                    <ListSubheader
                      component="div"
                      sx={{
                        color: '#ECF0F1',
                        bgcolor: '#34495E',
                        borderRadius: '4px',
                        border: '1px solid #E2DFD0',
                        mb: 1,
                      }}
                    >
                      {item.titleformation}
                    </ListSubheader>
                  }
                >
                  {item.workFor.slice(0, 2).map((work, workIndex) => (
                    <ListItem key={workIndex} sx={{ padding: '0.5rem 0' }}>
                      {work}
                    </ListItem>
                  ))}
                  {item.workFor.length > 2 && (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleOpen(item)}
                      sx={{ mt: 1 }}
                    >
                      Voir plus
                    </Button>
                  )}
                </List>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              maxWidth: '500px',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              outline: 'none',
            }}
          >
            {selectedInternship && (
              <>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: 'primary.main', textAlign: 'center' }}
                >
                  {selectedInternship.company}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 2, fontWeight: 'bold' }}
                >
                  {selectedInternship.titleformation}
                </Typography>
                <List>
                  {selectedInternship.workFor.map((work, index) => (
                    <ListItem key={index} sx={{ padding: '0.5rem 0' }}>
                      {work}
                    </ListItem>
                  ))}
                </List>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2, display: 'block', margin: '0 auto' }}
                >
                  Fermer
                </Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </motion.div>
  )
}

export default StepperWork
