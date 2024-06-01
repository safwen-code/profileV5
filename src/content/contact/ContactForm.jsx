import React, { useState } from 'react'
import { Alert, Divider, Grid, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'
import emailjs from '@emailjs/browser'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: '#5AB2FF',
}))

const ContactForm = () => {
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
      <Stack spacing={2} mt={3} height={8}>
        <Item>Contact Me</Item>
      </Stack>
      <Divider variant="middle" style={{ backgroundColor: '#4dabf5' }} mb={3} />
      <Grid spacing={2} pt={6} mt={2} direction="column">
        <Grid item xs={12} sm={6} mt={3}>
          <TextField
            sx={{ width: '20rem' }}
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
          .
        </Grid>
        <Grid item xs={12} sm={6} mt={3}>
          <TextField
            sx={{ width: '20rem' }}
            error={email === '' && errorField}
            helperText={errorField && email === '' ? 'Email is required' : ''}
            required
            id="standard-read-only-input"
            label="your email please"
            variant="standard"
            margin="dense"
            name="email"
            value={email}
            onChange={ChangeHundel}
          />{' '}
        </Grid>
        <Grid item xs={12} sm={6} mt={3}>
          <TextField
            sx={{ width: '20rem' }}
            error={message === '' && errorField}
            helperText={
              errorField && message === '' ? 'message is required' : ''
            }
            required
            label="message please"
            id="fullWidth"
            margin="dense"
            multiline
            rows={4}
            name="message"
            value={message}
            onChange={ChangeHundel}
          />
        </Grid>
      </Grid>
      <Button
        style={{ marginTop: '10px', marginBottom: '5px' }}
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

export default ContactForm
