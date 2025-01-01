import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme to override the primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8C00', // Dark Orange color
    },
  },
});

const Loader: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Full viewport height
          width: '100vw', // Full viewport width
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
        }}
      >
        <CircularProgress 
          color="primary"
          size={60} // You can adjust the size as needed
        />
      </Box>
    </ThemeProvider>
  );
};

export default Loader;

