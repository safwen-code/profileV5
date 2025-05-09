import React, { useRef, useState } from 'react'
import { Alert, Divider, Grid, Button, Typography, Box } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'
import emailjs from '@emailjs/browser'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import RoundedVideo from './RoundedVideo'
import phone from '../../image/phone.mp4'
import mail from '../../image/mail.mp4'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: '#5AB2FF',
}))

const Contact = () => {
  const formRef = useRef()

  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [alertVisible, setAlertVisible] = useState(false)
  const [errorField, seterrorField] = useState(false)

  const { name, email, message } = formdata
  const ChangeHundel = (e) => {
    const { name, value } = e.target
    setformdata({ ...formdata, [name]: value })
  }

  const submitHundel = (e) => {
    e.preventDefault()
    const { name, email, message } = formdata
    if (name === '' || email === '' || message === '') {
      seterrorField(true)
      setTimeout(() => {
        seterrorField(false)
      }, 5000)
    } else {
      // const Data = new FormData(formRef.current)
      emailjs
        .sendForm(
          'service_8p55toe',
          'template_nf8js4z',
          formRef.current,
          'GJr-oEbl07Zhj9ju2',
        )
        .then(
          function (response) {
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
  const theme = useTheme()

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <>
      {/* /* head  thing*/}
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

      {/* /* info  thing*/}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={gridItemVariants}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Item
                sx={{
                  bgcolor: '#34495E',
                  border: '1px solid #E2DFD0',
                  display: 'flex',
                }}
              >
                {' '}
                <Grid>
                  <RoundedVideo src={phone} />
                </Grid>
                <Grid
                  sx={{
                    marginLeft: '20px',
                    [theme.breakpoints.down('sm')]: {
                      marginLeft: '1px',
                    },
                  }}
                >
                  <Typography component={'h3'} sx={{ color: '#DDDDDD' }}>
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
            <Grid item xs={12} sm={6}>
              <Item
                sx={{
                  bgcolor: '#34495E',
                  border: '1px solid #E2DFD0',
                  display: 'flex',
                }}
              >
                {' '}
                <Grid>
                  <RoundedVideo src={mail} />
                </Grid>
                <Grid
                  sx={{
                    marginLeft: '10px',
                    flexDirection: 'column',
                    [theme.breakpoints.down('sm')]: {
                      marginLeft: '1px',
                    },
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{ color: '#DDDDDD', marginRight: '120px' }}
                  >
                    Email :
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ color: '#DDDDDD', marginLeft: '30px' }}
                  >
                    safwendjebbi1234@gmail.com
                  </Typography>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </motion.div>
      </motion.div>

      <motion.div
        className="box"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <form ref={formRef}>
          <Grid spacing={2} pt={2} mt={1} direction="column">
            <Divider sx={{ borderColor: '#D74B76' }} />
            <Grid item xs={12} sm={6} md={8} mt={3}>
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
            <Grid item xs={12} sm={6} md={8} mt={3}>
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
                helperText={
                  errorField && email === '' ? 'Email is required' : ''
                }
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
            <Grid item xs={12} sm={6} md={8} mt={3}>
              <TextField
                sx={{
                  width: '20rem',
                  '& .MuiInputBase-root': {
                    color: '#DDDDDD',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#DDDDDD',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#DDDDDD',
                    },
                    '&:hover fieldset': {
                      borderColor: '#AAAAAA',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#888888',
                    },
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
        </form>
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
      </motion.div>
      {/* /* form   thing*/}

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
