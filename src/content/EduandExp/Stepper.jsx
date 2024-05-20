import * as React from 'react'

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
} from '@mui/material'

import ModelTrainingIcon from '@mui/icons-material/ModelTraining'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
const VerticalLinearStepper = () => {
  return (
    <>
      <Stepper orientation="vertical">
        <Step key={0} active={1} sx={{ color: '#B4B4B8' }}>
          <StepLabel StepIconComponent={ModelTrainingIcon}>
            <Typography component="span" sx={{ color: '#FFFFFF' }}>
              Go My Code
            </Typography>
            <Chip label="October 2018, 2019" sx={{ color: '#DDDDDD' }} />
          </StepLabel>
          <StepContent
            sx={{
              display: 'flex',
              alignItems: 'start',
              borderColor: '#D74B76',
            }}
          >
            <List
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    bgcolor: '#49243E',
                    border: '1px solid #E2DFD0',
                    borderRadius: '3px',
                    color: '#B4B4B8',
                  }}
                >
                  Instructeur Web
                </ListSubheader>
              }
            >
              <ListItem>
                1. Conception et présentation de cours avancés en react et
                javascript.
              </ListItem>
              <ListItem>
                2. Encadrement et mentorat d'étudiants dans leur apprentissage
                de la programmation JavaScript.
              </ListItem>
              <ListItem>
                3. Enseignement des bases de mongodb et node js
              </ListItem>
            </List>
          </StepContent>
        </Step>
        <Step key={1} active={1} sx={{ color: '#B4B4B8' }}>
          <StepLabel StepIconComponent={SchoolOutlinedIcon}>
            <Typography component="span" sx={{ color: '#FFFFFF' }}>
              Téchnicien Supérieur En Informatique
            </Typography>
            <Chip label="2014 - 2017" sx={{ color: '#DDDDDD' }} />
          </StepLabel>
          <StepContent
            sx={{
              display: 'flex',
              alignItems: 'start',
              borderColor: '#D74B76',
            }}
          >
            <List
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    bgcolor: '#49243E',
                    border: '1px solid #E2DFD0',
                    borderRadius: '3px',
                    color: '#B4B4B8',
                  }}
                >
                  Développeur du Systéme Informatique
                </ListSubheader>
              }
            >
              <ListItem>
                1. Etudier les notions de base de programmation et la logique
                informatique.
              </ListItem>
              <ListItem>
                2. Crée et manipuler des applicatin Web/Desktop à l'aide' des
                framwork comme JS,PhP, Python ' .
              </ListItem>
              <ListItem>
                3. développer un projet de fin d'étude pour aidée les étudiants
                de consulter et télécharger leur cours '
              </ListItem>
            </List>
          </StepContent>
        </Step>
        <Step key={2} active={1} sx={{ color: '#B4B4B8' }}>
          <StepLabel StepIconComponent={SchoolOutlinedIcon}>
            <Typography component="span" sx={{ color: '#FFFFFF' }}>
              Baccalaureate informatique
            </Typography>
            <Chip label="October 2013, 2014" sx={{ color: '#DDDDDD' }} />
          </StepLabel>
        </Step>
      </Stepper>
    </>
  )
}

export default VerticalLinearStepper
