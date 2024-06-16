import React, { useState } from 'react'
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
  Menu,
  MenuItem,
} from '@mui/material'

import WordIcon from '@mui/icons-material/Description'
import PDFIcon from '@mui/icons-material/PictureAsPdf'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PinDropIcon from '@mui/icons-material/PinDrop'
import CakeIcon from '@mui/icons-material/Cake'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

import { saveAs } from 'file-saver'
import { IconButton } from '@mui/material'

import cv from '../file/DjebbiSafwen.pdf'
import cvdocs from '../file/DjebbiSafwen.docx'

const style = {
  width: '100%',
  bgcolor: '#2C3E50',
}

let styles = {
  fontFamily: 'DethronePoliceSerifModerne, serif',
  fontSize: '34px',
}

const AboutMe = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const downloadFile = (file, fileName) => {
    fetch(file)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, fileName)
      })
      .catch((error) => {
        console.error('Error downloading the file:', error)
      })
  }

  const handleDownloadPDF = () => {
    downloadFile(cv, 'DjebbiSafwen.pdf')
    handleClose()
  }

  const handleDownloadWord = () => {
    downloadFile(cvdocs, 'DjebbiSafwen.docx')
    handleClose()
  }

  const handleWhatsAppCall = () => {
    let phoneNumber = '+21626706437'
    // Construct the WhatsApp call link
    const whatsappCallLink = `https://wa.me/${phoneNumber}`

    // Open the WhatsApp call link in a new tab/window
    window.open(whatsappCallLink, '_blank')
  }
  return (
    <Box sx={{ position: 'relative', paddingY: 7 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          top: -50,
          left: 0,
          right: 0,
          zIndex: 3,
        }}
      >
        <Avatar sx={{ height: 100, width: 100 }}>DS</Avatar>
      </Box>

      <Box sx={{ zIndex: 1, margin: 2 }}>
        <List sx={style} component="div" aria-label="mailbox folders">
          <ListItem
            sx={{ color: '#ECF0F1', bgcolor: '#34495E', borderRadius: '4px' }}
          >
            <ListItemText
              sx={{
                color: '#5c6bc0',
                display: 'flex',
                justifyContent: 'center',
              }}
              primary={
                <Typography
                  variant="h1"
                  style={styles}
                  sx={{ color: '#E2DFD0' }}
                >
                  Djebbi Safwen
                </Typography>
              }
            />
          </ListItem>
          <Divider sx={{ marginTop: '10px', borderColor: '#D74B76' }} />
          <ListItem
            divider
            sx={{
              bgcolor: '#3B536D',
              borderRadius: '4px',
              margin: '10px 10px 10px 0',
            }}
          >
            <ListItemText
              sx={{
                color: '#E2DFD0',
                display: 'flex',
                justifyContent: 'center',
              }}
              style={{ fontFamily: 'cursive' }}
              primary={
                <Typewriter
                  options={{
                    strings: [
                      'FullStack Developer',
                      'Web Developer',
                      'Software Engineer',
                      'Mobile Developer',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              }
            />
          </ListItem>
          <Divider sx={{ borderColor: '#D74B76' }} />
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '10px',
              bgcolor: '#34495E',
              borderRadius: '4px',
            }}
          >
            <Card sx={{ marginRight: '5px' }}>
              <IconButton href="https://github.com/safwen-code" target="_blank">
                <GitHubIcon sx={{ color: '#212121' }} fontSize="medium" />
              </IconButton>
            </Card>
            <Divider orientation="vertical" flexItem />
            <Card sx={{ marginRight: '5px', marginLeft: '5px' }}>
              <IconButton
                href="https://www.linkedin.com/in/safwen-djebbi-5a996b204/"
                target="_blank"
              >
                <LinkedInIcon sx={{ color: '#0e76a8' }} fontSize="medium" />
              </IconButton>
            </Card>
            <Divider orientation="vertical" flexItem />
            <Card sx={{ marginLeft: '5px' }}>
              <IconButton
                href="https://www.facebook.com/profile.php?id=100078734872887"
                target="_blank"
              >
                <FacebookIcon sx={{ color: '#1877f2' }} fontSize="medium" />
              </IconButton>
            </Card>
          </ListItem>
        </List>
        <List
          sx={{
            border: 1,
            borderColor: '#2C3E50',
            borderRadius: '10px',
            marginTop: '10px',
            bgcolor: '#34495E',
          }}
        >
          <ListItem disablePadding>
            <ListItemButton onClick={handleWhatsAppCall}>
              <ListItemIcon>
                <OnDeviceTrainingIcon
                  color="info"
                  sx={{ marginRight: '5px', marginLeft: '5px' }}
                />
              </ListItemIcon>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: '#D74B76', marginRight: '20px' }}
              />
              <ListItemText
                primary="+216 26 706 437"
                sx={{ color: '#DDDDDD' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailOutlineIcon
                  color="primary"
                  sx={{ marginRight: '5px', marginLeft: '5px' }}
                />
              </ListItemIcon>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: '#D74B76', marginRight: '20px' }}
              />
              <ListItemText
                primary="safwendjebbi1234@gmail.com"
                sx={{
                  color: '#DDDDDD',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  minWidth: 0,
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PinDropIcon
                  color="secondary"
                  sx={{ marginRight: '5px', marginLeft: '5px' }}
                />
              </ListItemIcon>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: '#D74B76', marginRight: '20px' }}
              />
              <ListItemText
                primary="Tunisie, Ben Arous"
                sx={{ color: '#DDDDDD' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CakeIcon color="warning" sx={{ marginLeft: '5px' }} />
              </ListItemIcon>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: '#D74B76', marginRight: '20px' }}
              />
              <ListItemText primary="20/08/1994" sx={{ color: '#DDDDDD' }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
        >
          <Button
            variant="outlined"
            sx={{
              height: '48px',
              color: '#ECF0F1',
              borderRadius: '10px',
              borderColor: '#2A3E56',
              backgroundColor: '#5A6A82',
              '&:hover': {
                backgroundColor: '#2A3E56',
                borderColor: '#D4AF37',
                color: '#ECF0F1',
              },
            }}
            endIcon={<CloudDownloadIcon />}
            onClick={handleClick}
          >
            Télécharger CV
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleDownloadPDF}>
              <ListItemIcon>
                <PDFIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Download as PDF" />
            </MenuItem>
            <MenuItem onClick={handleDownloadWord}>
              <ListItemIcon>
                <WordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Download as Word" />
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutMe
