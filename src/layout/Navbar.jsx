import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Button,
  Container,
  MenuItem,
  Avatar,
} from '@mui/material'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
// import safwe from '../images/safwe.jpg'

const pages = ['description', 'project', 'skills', 'SW.Skills', 'contact']

const Navbar = ({ activeNavItem, setActiveNavItem }) => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null)

    switch (page) {
      case 'description':
        return setActiveNavItem('description')
      case 'project':
        return setActiveNavItem('project')
      case 'skills':
        return setActiveNavItem('skills')
      case 'SW.Skills':
        return setActiveNavItem('SW.Skills')
      case 'contact':
        return setActiveNavItem('contact')
      default:
        return setActiveNavItem('description')
    }
  }

  //hundel content Movement
  const hundelNavItem = (page) => {
    console.log(page)
    switch (page) {
      case 'description':
        return setActiveNavItem('description')
      case 'project':
        return setActiveNavItem('project')
      case 'skills':
        return setActiveNavItem('skills')
      case 'SW.Skills':
        return setActiveNavItem('SW.Skills')
      case 'contact':
        return setActiveNavItem('contact')
      default:
        return setActiveNavItem('description')
    }
  }

  return (
    <Box
      mt={2}
      style={{ position: 'sticky', top: 0, zIndex: 999, margin: '40px' }}
    >
      <AppBar position="static" sx={{ borderRadius: 2 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              // src={safwe}
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Djebbi
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Typography
                      textAlign="center"
                      onClick={() => hundelNavItem(page)}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Avatar
              // src={safwe}
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DJEBBI
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Navbar
