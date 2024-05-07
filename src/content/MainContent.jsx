import React, { useState } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Navbar from '../layout/Navbar'
import Aboutme from '../layout/Aboutme'
import Containers from './Containers'

//define item
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const MainContent = () => {
  const [activeNavItem, setActiveNavItem] = useState('description')

  return (
    <>
      <Container fixed maxWidth="xl">
        <Navbar
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
        <Box sx={{ flexGrow: 1 }} p={1} mt={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Item sx={{ borderRadius: '25px' }}>
                <Aboutme />
              </Item>
            </Grid>
            <Grid item xs={12} md={8}>
              <Item sx={{ borderRadius: '25px' }}>
                {' '}
                <Containers activeNavItem={activeNavItem} />{' '}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default MainContent
