// src/components/Footer.jsx
import { Box, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Footer = () => {
  return (
    <Box
    component="footer"
    sx={{
      position: 'static',        // Pin it
      bottom: 0,                // to the bottom
      left: 0,
      width: '100%',            // Full width
      backgroundColor: 'primary.main',
      color: '#fff',
      textAlign: 'center',
      py: 5,
      zIndex: (theme) => theme.zIndex.appBar + 1, 
      // ↑ ensures it's above most content
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} Selahla.net Printing Services
    </Typography>
    <Typography variant="body2">
     <LocationOnOutlinedIcon/> R518 Road Mapela Fothane | selahla.netinternetcafe@gmail.com
    </Typography>
    <Typography variant="body2"> <LocalShippingOutlinedIcon/>   We deliver Nationwide via Pep Paxi</Typography>
    <span style={{ fontSize: '0.9em', color: '#888' }}>Designed by Sekweta M.E</span>

  </Box>
  );
};

export default Footer;