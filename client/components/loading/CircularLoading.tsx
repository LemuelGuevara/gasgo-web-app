"use client";

import { Box, CircularProgress } from "@mui/joy"

export const CircularLoading = () => {
    return (
        <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9999,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(3px)',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          zIndex: 10000,
        }}
      >
        <CircularProgress variant="soft"/>
      </Box>
    </>
    )
}