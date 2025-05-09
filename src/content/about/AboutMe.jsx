import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import { useSelector, useDispatch } from 'react-redux'

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
  Menu,
  MenuItem,
  Stack,
} from '@mui/material'

import WordIcon from '@mui/icons-material/Description'
import PDFIcon from '@mui/icons-material/PictureAsPdf'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import {
  Facebook,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Cake,
  Twitter,
} from '@mui/icons-material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball' // placeholder for Dribbble

import { saveAs } from 'file-saver'
import { IconButton } from '@mui/material'

import cv from '../file/DjebbiSafwen.pdf'
import cvdocs from '../file/DjebbiSafwen.docx'
import { useEffect } from 'react'
import { getprofile } from '../../action/profileAction'

const style = {
  width: '100%',
  bgcolor: '#2C3E50',
}

let styles = {
  fontFamily: 'DethronePoliceSerifModerne, serif',
  fontSize: '34px',
}

const socialButtons = [
  { icon: <Facebook />, color: '#4267B2' },
  { icon: <Twitter />, color: '#1DA1F2' },
  { icon: <SportsBasketballIcon />, color: '#ea4c89' }, // Dribbble
  { icon: <LinkedIn />, color: '#0077B5' },
]
const AboutMe = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()
  const { about, loading, error } = useSelector((state) => state.profile)

  useEffect(() => {
    dispatch(getprofile())
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading profile: {error}</div>
  const { avatar, name, jobs, links, personaldata } = about
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
      <Avatar
        sx={{
          width: 120,
          height: 120,
          position: 'absolute',
          top: -60,
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: 3,
          border: '4px solid #111',
        }}
      >
        'Avatar'
      </Avatar>

      <Box sx={{ zIndex: 1, margin: 2 }}>
        <List sx={style} component="div" aria-label="mailbox folders">
          <ListItem
            sx={{ color: '#ECF0F1', bgcolor: '#222', borderRadius: '4px' }}
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
                  {about && name}
                </Typography>
              }
            />
          </ListItem>
          <Divider sx={{ marginTop: '10px', borderColor: '#D74B76' }} />
          <ListItem
            divider
            sx={{
              bgcolor: '#222',
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
                    strings: jobs,
                    autoStart: true,
                    loop: true,
                  }}
                />
              }
            />
          </ListItem>
          <Divider sx={{ borderColor: '#D74B76' }} />
          {/* Social Buttons */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            mb={2}
            mt={2}
          >
            {socialButtons.map((item, index) => (
              <IconButton
                key={index}
                sx={{
                  color: '#fff',
                  backgroundColor: item.color,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: `0 0 8px ${item.color}`,
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </List>
        <List
          sx={{
            border: 1,
            borderColor: '#2C3E50',
            borderRadius: '10px',
            marginTop: '10px',
            bgcolor: '#222',
          }}
        >
          <ListItem disablePadding>
            <ListItemButton onClick={handleWhatsAppCall}>
              <ListItemIcon>
                <Phone
                  sx={{
                    color: '#ff4081',
                    marginRight: '5px',
                    marginLeft: '5px',
                  }}
                />
              </ListItemIcon>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: '#D74B76', marginRight: '20px' }}
              />
              <ListItemText
                primary={personaldata && personaldata.num}
                sx={{ color: '#DDDDDD' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Email
                  color="primary"
                  sx={{
                    marginRight: '5px',
                    marginLeft: '5px',
                    color: '#f06292',
                  }}
                />
              </ListItemIcon>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: '#D74B76', marginRight: '20px' }}
              />
              <ListItemText
                primary={personaldata && personaldata.email}
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
                <LocationOn
                  color="secondary"
                  sx={{
                    marginRight: '5px',
                    marginLeft: '5px',
                    color: '#00e676',
                  }}
                />
              </ListItemIcon>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: '#D74B76', marginRight: '20px' }}
              />
              <ListItemText
                primary={personaldata && personaldata.country}
                sx={{ color: '#DDDDDD' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Cake sx={{ marginLeft: '5px', color: '#9575cd' }} />
              </ListItemIcon>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: '#D74B76', marginRight: '20px' }}
              />
              <ListItemText
                primary={personaldata && personaldata.birth}
                sx={{ color: '#DDDDDD' }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                boxShadow: '0 0 12px #ff416c',
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
