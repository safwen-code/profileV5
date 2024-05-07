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

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'

const StepperWork = () => {
  return (
    <>
      <Stepper
        orientation="vertical"
        // activeStep={0} /* Specify the active step index here */
      >
        <Step key={0} active={1}>
          <StepLabel StepIconComponent={WorkOutlineOutlinedIcon}>
            BQube ITS
            <Chip label=" 2021, 2023" />
          </StepLabel>
          <StepContent sx={{ display: 'flex', alignItems: 'start' }}>
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Développeur Full Stack
                </ListSubheader>
              }
            >
              <ListItem>
                1. Conception et développement d’un MES (Manufacturing execution
                system) dédiée à la gestion et le suivie de la production
              </ListItem>
              <ListItem>
                2. Conception et développement d’un CRM destiné au pilotage de
                processus commercial{' '}
              </ListItem>
            </List>
          </StepContent>
        </Step>

        <Step key={1} active={1}>
          <StepLabel StepIconComponent={WorkOutlineOutlinedIcon}>
            TIMELEC
            <Chip label="2020 - 2021" />
          </StepLabel>
          <StepContent
            sx={{ display: 'flex', alignItems: 'start' }}
            style={{ height: '250px' }}
          >
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Opérateur Machine{' '}
                </ListSubheader>
              }
            >
              <ListItem>1. Contrôler le produit </ListItem>
              <ListItem>
                2. Suivie la méthodologie LEAN pour améliorer la productivité
                d’équipe .
              </ListItem>
              <ListItem>
                3. Définir et manipuler le QRQS dans le cas d’erreur '.
              </ListItem>
              <ListItem>4. Sauvegarder les données sur le site TRS.</ListItem>
            </List>
          </StepContent>
        </Step>
        <Step key={1} active={1}></Step>
      </Stepper>
    </>
  )
}

export default StepperWork
