import React from 'react'
import Typewriter from 'typewriter-effect'

import {
  Button,
  ListItemIcon,
  ListItemButton,
  Divider,
  ListItemText,
  ListItem,
  Typography,
  List,
  Avatar,
  Box,
  Card,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PinDropIcon from '@mui/icons-material/PinDrop'
import CakeIcon from '@mui/icons-material/Cake'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

// import './style.css'
// import cv from './cv.pdf'
// import { saveAs } from 'file-saver'
import { IconButton } from '@mui/material'

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
}

let styles = {
  fontFamily: 'DethronePoliceSerifModerne, serif',
  fontSize: '34px',
}

const AboutMe = () => {
  // const DownloadCV = async () => {
  //   console.log('download')
  //   //console.log(cv)
  //   fetch(cv)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       // Trigger the download using FileSaver.js
  //       saveAs(blob, 'DS-FullStackDev.pdf')
  //     })
  //     .catch((error) => {
  //       console.error('Error downloading the file:', error)
  //     })
  // }

  const handleWhatsAppCall = () => {
    let phoneNumber = '+21626706437'
    // Construct the WhatsApp call link
    const whatsappCallLink = `https://wa.me/${phoneNumber}`

    // Open the WhatsApp call link in a new tab/window
    window.open(whatsappCallLink, '_blank')
  }
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar sx={{ bgcolor: 'info.main', width: 50, height: 50 }}>DS</Avatar>
      </Box>
      <List sx={style} component="div" aria-label="mailbox folders">
        <ListItem>
          <ListItemText
            sx={{
              color: '#5c6bc0',
              display: 'flex',
              justifyContent: 'center',
            }}
            primary={
              <Typography variant="h1" style={styles} sx={{ color: '#212121' }}>
                Djebbi Safwen
              </Typography>
            }
          />
        </ListItem>
        <Divider sx={{ marginTop: '10px' }} />
        <ListItem divider>
          <ListItemText
            sx={{
              color: '#616161',
              display: 'flex',
              justifyContent: 'center',
            }}
            style={{ fontFamily: 'cursive' }}
            primary={
              <Typewriter
                options={{
                  strings: [
                    'FullStack Developper',
                    'Web Developper',
                    'Software Engineer',
                    'Mobile Developepr',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
        >
          <Card sx={{ marginRight: '5px' }}>
            <IconButton href="https://github.com/safwen-code" target="_blank">
              <GitHubIcon color="#212121" fontSize="miduim" />
            </IconButton>
          </Card>
          <Divider orientation="vertical" flexItem></Divider>
          <Card sx={{ marginRight: '5px', marginLeft: '5px' }}>
            <IconButton
              href="https://www.linkedin.com/in/safwen-djebbi-5a996b204/"
              target="_blank"
            >
              <LinkedInIcon color="info" fontSize="miduim" />
            </IconButton>
          </Card>
          <Divider orientation="vertical" flexItem></Divider>
          <Card sx={{ marginLeft: '5px' }}>
            <IconButton
              href="https://www.facebook.com/profile.php?id=100078734872887"
              target="_blank"
            >
              <FacebookIcon color="primary" fontSize="miduim" />
            </IconButton>
          </Card>
        </ListItem>
      </List>
      <List
        sx={{
          border: 1,
          borderColor: 'secondary.main',
          borderRadius: '10px',
          marginTop: '10px',
          backgroundColor: '#f5f5f5',
          wrap: 'nowrap',
        }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={handleWhatsAppCall}>
            <ListItemIcon>
              <OnDeviceTrainingIcon
                color="info"
                sx={{ marginRight: '5px', marginLeft: '5px' }}
              />
              <Divider orientation="vertical" flexItem></Divider>
            </ListItemIcon>

            <ListItemText primary="+216 26 706 437" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ overflow: 'auto' }}>
          <ListItemButton>
            <ListItemIcon>
              <MailOutlineIcon
                color="primary"
                sx={{ marginRight: '5px', marginLeft: '5px' }}
              />
              <Divider orientation="vertical" flexItem></Divider>
            </ListItemIcon>

            <ListItemText
              primary="safwendjebbi1234@gmail.com"
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                minWidth: 0,
              }}
            ></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PinDropIcon
                color="secondary"
                sx={{ marginRight: '5px', marginLeft: '5px' }}
              />
              <Divider orientation="vertical" flexItem></Divider>
            </ListItemIcon>

            <ListItemText primary="tunisie , ben arous" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CakeIcon
                color="warning"
                sx={{ marginRight: '5px', marginLeft: '5px' }}
              />
              <Divider orientation="vertical" flexItem></Divider>
            </ListItemIcon>

            <ListItemText primary="20/08/1994" />
          </ListItemButton>
        </ListItem>
      </List>
      <Button
        variant="outlined"
        sx={{
          marginTop: '20px',
          marginBottom: '20px ',
          height: '50px ',
          color: '#311b92',
          borderRadius: '10px',
        }}
        endIcon={<CloudDownloadIcon />}
        // onClick={() => DownloadCV()}
      >
        telecharge CV
      </Button>
    </>
  )
}

export default AboutMe
