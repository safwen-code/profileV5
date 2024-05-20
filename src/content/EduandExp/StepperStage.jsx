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

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'

const StepperWork = () => {
  return (
    <>
      <Stepper orientation="vertical">
        <Step key={0} active={1} sx={{ color: '#B4B4B8' }}>
          <StepLabel StepIconComponent={WorkOutlineOutlinedIcon}>
            <Typography component="span" sx={{ color: '#FFFFFF' }}>
              BQube ITS
            </Typography>
            <Chip label=" 2021, 2023" sx={{ color: '#DDDDDD' }} />
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

        <Step key={1} active={1} sx={{ color: '#B4B4B8' }}>
          <StepLabel StepIconComponent={WorkOutlineOutlinedIcon}>
            <Typography component="span" sx={{ color: '#FFFFFF' }}>
              TIMELEC
            </Typography>
            <Chip label="2020 - 2021" sx={{ color: '#DDDDDD' }} />
          </StepLabel>
          <StepContent
            sx={{
              display: 'flex',
              alignItems: 'start',
              borderColor: '#D74B76',
            }}
            style={{ height: '250px' }}
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
