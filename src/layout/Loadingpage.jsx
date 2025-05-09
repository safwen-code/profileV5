import React from 'react'
import {
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import developer from '../image/developer.png'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PinDropIcon from '@mui/icons-material/PinDrop'
import CakeIcon from '@mui/icons-material/Cake'
import Typewriter from 'typewriter-effect'

import Navbar from './Navbar.jsx'

const Loadingpage = () => {
  return (
    <Container
      maxWidth="gl"
      sx={{
        border: '2px solid',
        // display: 'flex',
        height: '695px',
        backgroundColor: '#95BBDB',
        backgroundImage: `url(${developer})`,
        backgroundSize: '800px 700px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundPositionY: '4rem',
      }}
    >
      <Navbar />
      <Grid xs={2} sx={{ width: '46rem' }}>
        <List component="div" aria-label="mailbox folders">
          <ListItem>
            <ListItemText
              sx={{
                color: '#5c6bc0',
                display: 'flex',
                justifyContent: 'center',
              }}
              primary={
                <Typography
                  variant="h1"
                  // style={styles}
                  sx={{ color: '#212121' }}
                >
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
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '10px',
            }}
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
      </Grid>
    </Container>
  )
}

export default Loadingpage
