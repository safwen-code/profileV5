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
} from '@mui/material'

import ModelTrainingIcon from '@mui/icons-material/ModelTraining'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
const VerticalLinearStepper = () => {
  return (
    <>
      <Stepper
        orientation="vertical"
        sx={{
          '& .MuiStepConnector-line': {
            borderColor: '#2196f3 !important',
          },
        }}
        // activeStep={0}
      >
        <Step key={0} active={1}>
          <StepLabel StepIconComponent={ModelTrainingIcon}>
            Go My Code <Chip label="October 2018, 2019" />
          </StepLabel>
          <StepContent sx={{ display: 'flex', alignItems: 'start' }}>
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
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
        <Step key={1} active={1}>
          <StepLabel StepIconComponent={SchoolOutlinedIcon}>
            Téchnicien Supérieur En Informatique <Chip label="2014 - 2017" />
          </StepLabel>
          <StepContent sx={{ display: 'flex', alignItems: 'start' }}>
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
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
        <Step key={2} active={1}>
          <StepLabel StepIconComponent={SchoolOutlinedIcon}>
            Baccalaureate informatique <Chip label="October 2013, 2014" />
          </StepLabel>
        </Step>
      </Stepper>
    </>
  )
}

export default VerticalLinearStepper
