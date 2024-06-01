import React, { useState } from 'react'
import {
  Alert,
  Divider,
  Grid,
  Button,
  Typography,
  Box,
  Avatar,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'
import emailjs from '@emailjs/browser'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import phone from '../../image/phone.mp4'
import RoundedVideo from './RoundedVideo'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: '#5AB2FF',
}))

const Contact = () => {
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [alertVisible, setAlertVisible] = useState(false)
  const [errorField, seterrorField] = useState(false)
  const { name, email, message } = formdata
  const ChangeHundel = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const submitHundel = (e) => {
    e.preventDefault()
    //console.log(Contact)
    if (name === '' || email === '' || message === '') {
      seterrorField(true)
      setTimeout(() => {
        seterrorField(false)
      }, 5000)
    } else {
      emailjs
        .send(
          'service_ctwp9zo',
          'template_nf8js4z',
          formdata,
          'MCWeJugFmMWwVfeiC',
        )
        .then(
          function (response) {
            //console.log('SUCCESS!', response.status, response.text)
            if (response.status === 200) {
              setAlertVisible(true)
              setTimeout(() => {
                setAlertVisible(false)
              }, 5000)
              setformdata({
                name: '',
                email: '',
                message: '',
              })
            }
          },
          function (err) {
            console.log('FAILED...', err)
          },
        )
    }
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          m: 4,
          mb: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          align="left"
          sx={{ color: '#DDDDDD' }}
        >
          Contact Me
        </Typography>
        <Divider sx={{ flex: 1, borderColor: '#D74B76', ml: 2 }} />
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item
            sx={{
              bgcolor: '#49243E',
              border: '1px solid #E2DFD0',
              display: 'flex',
            }}
          >
            {' '}
            <RoundedVideo src={phone} />
            <Grid sx={{ marginLeft: '20px' }}>
              <Typography component="h3" sx={{ color: '#DDDDDD' }}>
                Phone N° :
              </Typography>
              <Typography
                component="span"
                sx={{ color: '#DDDDDD', marginLeft: '30px' }}
              >
                +216 26 406 437
              </Typography>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ bgcolor: '#49243E', border: '1px solid #E2DFD0' }}>
            2
          </Item>
        </Grid>
      </Grid>

      <Grid spacing={2} pt={6} mt={3} direction="column">
        <Divider sx={{ borderColor: '#D74B76' }} />
        <Grid item xs={12} sm={6} mt={3}>
          <TextField
            sx={{
              width: '20rem',
              '& .MuiInputBase-root.MuiInput-root': {
                color: '#DDDDDD',
              },
              '& .MuiInputLabel-root': {
                color: '#DDDDDD',
              },
            }}
            error={name === '' && errorField}
            helperText={errorField && name === '' ? 'Name is required' : ''}
            required
            id="standard-read-only-input"
            label="your name please"
            variant="standard"
            margin="dense"
            name="name"
            value={name}
            onChange={ChangeHundel}
            style={{ marginRight: '5px' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} mt={3}>
          <TextField
            sx={{
              width: '20rem',
              '& .MuiInputBase-root.MuiInput-root': {
                color: '#DDDDDD',
              },
              '& .MuiInputLabel-root': {
                color: '#DDDDDD',
              },
            }}
            error={email === '' && errorField}
            helperText={errorField && email === '' ? 'Email is required' : ''}
            required
            id="standard-read-only-input"
            label="your email please"
            variant="standard"
            margin="dense"
            name="email"
            value={email}
            color="secondary"
            onChange={ChangeHundel}
          />{' '}
        </Grid>
        <Grid item xs={12} sm={6} mt={3}>
          <TextField
            sx={{
              width: '20rem',
              '& .MuiInputBase-root.MuiInput-root': {
                color: '#DDDDDD',
              },
              '& .MuiInputLabel-root': {
                color: '#DDDDDD',
              },
            }}
            error={message === '' && errorField}
            helperText={
              errorField && message === '' ? 'Message is required' : ''
            }
            required
            label="message please"
            id="fullWidth"
            margin="dense"
            multiline
            rows={4}
            color="success"
            name="message"
            value={message}
            onChange={ChangeHundel}
          />
        </Grid>
      </Grid>
      <Button
        sx={{
          marginTop: '10px',
          marginBottom: '5px',
          color: '#DDDDDD',
          borderColor: '#DDDDDD',
          '&:hover': {
            color: '#A91D3A', // Text color on hover
            borderColor: '#A91D3A', // Border color on hover
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          },
        }}
        variant="outlined"
        endIcon={<SendIcon />}
        onClick={submitHundel}
      >
        Send Email
      </Button>
      {alertVisible && (
        <Alert
          severity="success"
          style={{
            backgroundColor: '#f0f8ea',
            color: '#4caf50',
            fontWeight: 'bold',
          }}
        >
          Thank you for your email! We'll get back to you soon.
        </Alert>
      )}
    </>
  )
}

export default Contact
