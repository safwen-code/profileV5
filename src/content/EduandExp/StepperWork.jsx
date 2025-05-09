import React, { useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Modal,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Chip,
  Backdrop,
  Fade,
  Button,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'

const Experience = () => {
  const [open, setOpen] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null)

  const experiences = [
    {
      company: 'BQube ITS',
      dates: '29-03-22 / 03-04-24',
      role: 'Développeur Full Stack',
      details: [
        'Participation au développement de CRM et CMS solutions, adapté aux besoins des clients.',
        "Conception et création d'un système MES dédié à la gestion et au suivi de la production :",
        '- Surveillance et suivi de la production en temps réel.',
        '- Automatisation de la génération de tickets pour les emballages et palettes.',
        '- Analyse des rebuts, suivi des PPM (parties par million), analyse de Pareto et capacités de production.',
        '- Garantie de la qualité fournisseur et client.',
        'Technologies utilisées : Frontend (HTML, SASS, JavaScript, React), Backend (PHP, Node.js, PostgreSQL).',
      ],
    },
    {
      company: 'TIMELEC',
      dates: '10-02-2020 / 27-11-21',
      role: 'Opérateur Machine',
      details: [
        'Opérateur du Montage Timelec. Vérification du produit.',
        'Assemblage du produit en utilisant le système FT bios.',
        "Identification et gestion des QRQS en cas d'erreur.",
        'Enregistrement des données sur la plateforme TRS.',
        "Utilisation de la méthodologie LEAN pour accroître l'efficacité de l'équipe.",
      ],
    },
  ]

  const handleOpen = (work) => {
    setSelectedWork(work)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedWork(null)
  }

  return (
    <Box>
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
          Experiences
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          px: { xs: 2, sm: 4 },
        }}
      >
        {experiences.map((exp, index) => (
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
              onClick={() => handleOpen(exp)}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {exp.role}
                </Typography>
                <Chip
                  label={exp.dates}
                  sx={{
                    bgcolor: '#6a4c93',
                    color: '#FFFFFF',
                    mt: 1,
                  }}
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* Modal for detailed view */}
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
            {selectedWork && (
              <>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: 'primary.main', textAlign: 'center' }}
                >
                  {selectedWork.company}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}
                >
                  {selectedWork.role}
                </Typography>
                <Chip
                  label={selectedWork.dates}
                  sx={{
                    display: 'block',
                    margin: '0 auto',
                    color: '#FFFFFF',
                    bgcolor: '#1976D2',
                    mb: 2,
                  }}
                />
                <List>
                  {selectedWork.details.map((detail, index) => (
                    <ListItem key={index} sx={{ padding: '0.5rem 0' }}>
                      {detail}
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
    </Box>
  )
}

export default Experience
