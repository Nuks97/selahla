// src/pages/Contact.jsx
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import PageWrapper from "../Component.js/PageWrapper";

const Contact = () => {
  return (

    <PageWrapper>
    <Container sx={{ py: 32 }}>
      <Typography variant="h4" color="primary" textAlign="center" mb={4}>
        Contact Us
      </Typography>

      {/* Contact Info */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="body1">Phone: 060 751 7193 / 071 629 9701</Typography>
        <Typography variant="body1">Email: selahla.netinternetcafe@gmail.com</Typography>
        <Typography variant="body1">Address: R518 Road Mapela Fothane</Typography>
        <Typography variant="body1">We deliver Nationwide via Pep Paxi</Typography>
      </Box>


    </Container>
    </PageWrapper>  
  );
};

export default Contact;
