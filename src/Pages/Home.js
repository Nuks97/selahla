
import { Container, Typography, Button, Box } from "@mui/material";
import HeroImage from '../Images/main.jpg';
import PageWrapper from "../Component.js/PageWrapper";


const Home = () => {
  return (

    <PageWrapper>
    <Box
      sx={{
        position: 'relative',
        height: '77vh',
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Selahla.Net Printing Services
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 600, mb: 3 }}>
          We are a reliable printing partner ready to help you with high-quality
          and affordable printing services.
        </Typography>
     
      </Container>
    </Box>
    </PageWrapper>
  );
};

export default Home;
