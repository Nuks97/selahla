// src/pages/About.jsx
import { Container, Typography, Box } from '@mui/material';
import PageWrapper from "../Component.js/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
    <Container sx={{ py: 34 }}>
      <Typography variant="h4" color="primary" textAlign="center" mb={4}>
        About Selahla.Net
      </Typography>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Typography variant="body1" paragraph>
          Selahla.net Printing Services was founded to provide affordable, high-quality
          printing solutions for individuals and businesses. Our commitment is to offer 
          cutting-edge printing technology and exceptional customer service.
        </Typography>
        <Typography variant="body1" paragraph>
          We specialize in copying, scanning, laminating, personalized T-shirts, mugs, 
          and more. With a passion for excellence, our dedicated team ensures every 
          project is handled with care, delivering outstanding results every time.
        </Typography>
      </Box>
    </Container>
    </PageWrapper>
  );
};

export default About;
