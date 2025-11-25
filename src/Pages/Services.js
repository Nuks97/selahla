// src/pages/Services.jsx
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
  } from '@mui/material';
  
  // Example images or icons for each service
  import PrintingIcon from '../Images/copy.jpg';
  import ScanningIcon from '../Images/lami.jpg';
 import  flat from "../Images/Flat-Leaflets.jpg";
 import online from "../Images/Online.avif";
 import Business from "../Images/Business.webp";
 import personal from "../Images/Personalized.jpg";
 import web from "../Images/web.jpg";
 import sars from "../Images/SARS.jpg";
 import PageWrapper from "../Component.js/PageWrapper";
  
  const servicesData = [
    {
      title: 'Copy, Printing & Scanning',
      description: 'High-quality document printing, copying, and scanning.',
      image: PrintingIcon,
    },
    {
      title: 'Typing, Laminating & Email',
      description: 'Fast typing, professional laminating, and email services.',
      image: ScanningIcon,
    },
    { 
        title: "Posters & Flyers", 
        description: "Custom poster and flyer printing for your business or events.", 
        image: flat, 
      },
      { 
        title: "Online Applications", 
        description: "We assist with online applications and form submissions.", 
        image: online, 
      },
      { 
        title: "Business Registration", 
        description: "Register your business, CK documents, and company profiles.", 
        image:  Business, 
      },
      { 
        title: "Personalized Printing", 
        description: "Custom T-shirts, mugs, caps, and engraved keyholders.", 
        image: personal,
      },
      { 
        title: "Web Design & Hosting",
        description: "Professional website design and hosting services.", 
        image: web,
      },
      { 
        title: "SARS & UIF Registrations",
        description: "CIBD, CSID, Register your business for SARS and Returns.", 
        image: sars,
      }
  
  ];
  
  const Services = () => {
    return (
      <PageWrapper>
      <Container sx={{ py: 5.8,  overflowY: 'auto' }}>
        <Typography variant="h4" color="primary" textAlign="center" mb={4}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {servicesData.map((service, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" color="text.primary">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </PageWrapper>
    );
  };
  
  export default Services;
  