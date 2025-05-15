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
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

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
    <Box
      sx={{
        bgcolor: '#121212',
        color: '#fff',
        p: { xs: 2, sm: 4, md: 6 },
        borderRadius: 3,
        maxWidth: '900px',
        mx: 'auto',
      }}
    >
      {/* contact typo */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ m: 2 }}>
          Contact
        </Typography>
        <Divider sx={{ bgcolor: '#ff007f', height: 3, width: 300, mb: 4 }} />
      </Box>
      {/* email and adress info */}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={gridItemVariants}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  bgcolor: '#1e1e1e',
                  p: 2,
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  color="whitesmoke"
                >
                  <PhoneIcon />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Phone :
                  </Typography>
                </Box>
                <Typography color="whitesmoke">+452 666 386</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  bgcolor: '#1e1e1e',
                  p: 2,
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <EmailIcon />
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="whitesmoke"
                  >
                    Email :
                  </Typography>
                </Box>
                <Typography color="whitesmoke">ibthemes@gmail.com</Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </motion.div>
      {/* form control */}
      <motion.div
        className="box"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <Box
          sx={{
            mt: 4,
            p: 3,
            border: '1px solid #2e2e2e',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            I'm always open to discussing product{' '}
            <Box component="span" fontWeight="bold">
              design work or partnerships.
            </Box>
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ mt: 2 }}
            ref={formRef}
          >
            <TextField
              fullWidth
              required
              sx={{
                '& .MuiInputBase-root.MuiInput-root': {
                  color: '#DDDDDD',
                },
                '& .MuiInputLabel-root': {
                  color: '#DDDDDD',
                },
              }}
              error={name === '' && errorField}
              helperText={errorField && name === '' ? 'Name is required' : ''}
              label="Name"
              variant="standard"
              margin="dense"
              name="name"
              value={name}
              onChange={ChangeHundel}
            />
            <TextField
              fullWidth
              required
              label="Email"
              variant="standard"
              margin="normal"
              sx={{
                '& .MuiInputBase-root.MuiInput-root': {
                  color: '#DDDDDD',
                },
                '& .MuiInputLabel-root': {
                  color: '#DDDDDD',
                },
              }}
              error={email === '' && errorField}
              helperText={errorField && email === '' ? 'Email is required' : ''}
              id="standard-read-only-input"
              name="email"
              value={email}
              color="secondary"
              onChange={ChangeHundel}
            />
            <TextField
              fullWidth
              required
              label="Message"
              variant="standard"
              margin="normal"
              multiline
              rows={4}
              sx={{
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
              id="fullWidth"
              color="success"
              name="message"
              value={message}
              onChange={ChangeHundel}
            />
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
            >
              Submit
            </Button>
          </Box>
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
        </Box>
      </motion.div>
    </Box>
  )
}

export default Contact
