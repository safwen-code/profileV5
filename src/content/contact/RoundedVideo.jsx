import React from 'react'
import { Box } from '@mui/material'

const RoundedVideo = ({ src }) => {
  return (
    <Box
      sx={{
        width: '50px',
        height: '50px',
        overflow: 'hidden',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          //   objectFit: 'cover',
        }}
      />
    </Box>
  )
}

export default RoundedVideo
