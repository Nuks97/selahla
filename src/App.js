import React, { useState, useEffect } from 'react';
import HeroImage from './Images/main.jpg';
import logo from './Images/Selahla Logo.png';
 import PrintingIcon from './Images/copy.jpg';
  import ScanningIcon from './Images/lami.jpg';
 import  flat from "./Images/Flat-Leaflets.jpg";
 import online from "./Images/Online.avif";
 import Business from "./Images/Business.webp";
 import personal from "./Images/Personalized.jpg";
 import web from "./Images/web.jpg";
 import sars from "./Images/SARS.jpg";
import WhatsAppQuoteForm from './Component.js/chat.js';


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

const locationsData = [
  {
    name: 'Mokopane',
    address: 'Mapela  Opposite Usave',
    mapUrl: 'https://maps.google.com/?q=Mapela+Mokopane'
  },
  {
    name: 'Tembisa',
    address: 'Ethafeni',
    mapUrl: 'https://maps.google.com/?q=Tembisa+Ethafeni'
  },
  {
    name: 'Soekmekaar',
    address: 'Nthabiseng Next to Clinic',
    mapUrl: 'https://maps.google.com/?q=Soekmekaar+Nthabiseng'
  },
  {
    name: 'Johannesburg',
    address: 'Turffontein',
    mapUrl: 'https://maps.google.com/?q=Johannesburg+Turffontein'
  }
];



// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section while scrolling
      const sections = ['home', 'about', 'services', 'locations'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActiveSection(section.toLowerCase());
  };

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61584014472940', icon: (
      <svg width="24" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )},
    { name: 'TikTok', url: 'https://www.tiktok.com/@selahla.net?_r=1&_t=ZS-91hKBo4jNcW', icon: (
      <svg width="26" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    )}
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: !isMobile 
        ? (scrolled 
          ? 'linear-gradient(135deg,#0d47a1)' 
          : 'transparent')
        : 'linear-gradient(135deg,#0d47a1)',
      backdropFilter: scrolled && !isMobile ? 'blur(10px)' : 'none',
      boxShadow: (scrolled && !isMobile) || isMobile ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: scrolled && !isMobile ? '1rem 0' : '1.5rem 0',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo on the left - Always visible */}
        <div style={{ 
          flex: '0 0 auto',
          display: 'block',
      
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.opacity = '0.9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.opacity = '1';
        }}
        onClick={() => scrollToSection('home')}
        >
          <img 
            src={logo} 
            alt="Selahla.Net Logo" 
            style={{
              height: isMobile ? '50px' : (scrolled ? '60px' : '150px'),
              width: 'auto',
              transition: 'all 0.4s ease',
              borderRadius: '8px',
             
            }}
          />
        </div>

        {/* Navigation links in the center - Hidden on mobile */}
        <div style={{ 
          display: !isMobile ? 'flex' : 'none', 
          gap: '2rem',
          flex: '1',
          justifyContent: 'center',
        }}>
          {['Home', 'About', 'Services', 'Locations'].map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              style={{
                color: activeSection === item.toLowerCase() ? '#d5d5d5ff' : '#fff',
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '0.5rem 0',
                position: 'relative',
                transition: 'transform 0.2s ease',
                borderBottom: activeSection === item.toLowerCase() ? '2px solid #fff' : 'none',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Social media icons on the right - Hidden on mobile */}
        <div style={{ 
          display: !isMobile ? 'flex' : 'none', 
          gap: '1rem',
          flex: '0 0 auto',
        }}>
          {socialLinks.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Hamburger Menu Icon - Visible only on mobile, positioned to the right */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: isMobile ? 'flex' : 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            marginLeft: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="hamburger-menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu - Shows on small screens */}
      {menuOpen && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(13, 71, 161, 0.95) 100%)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          {/* Mobile Navigation Links */}
          {['Home', 'About', 'Services', 'Locations'].map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              style={{
                color: activeSection === item.toLowerCase() ? '#d5d5d5ff' : '#fff',
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '0.5rem 0',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                borderBottom: activeSection === item.toLowerCase() ? '2px solid #fff' : 'none',
                paddingBottom: activeSection === item.toLowerCase() ? '0.3rem' : '0.5rem',
              }}
            >
              {item}
            </button>
          ))}

          {/* Mobile Social Links */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            {socialLinks.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};


// Animated Section Wrapper
const AnimatedSection = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id]);

  return (
    <div
      id={id}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};

// Home Section
const Home = () => {
  return (
    <div id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: `url(${HeroImage})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
         <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 177, 153, 0.3), transparent 50%)',
        animation: 'pulse 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        color: '#fff',
        padding: '2rem',
        animation: 'fadeInUp 1s ease-out',
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 800,
          marginBottom: '1.5rem',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)',
           background: 'linear-gradient(45deg, #fff 30%, #90caf9 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Selahla.Net Printing Services
        </h1>

      
        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          maxWidth: '700px',
          margin: '0 auto 2.5rem',
          opacity: 0.95,
        }}>
          Your reliable printing partner for high-quality and affordable printing solutions
        </p>
        
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};




// About Section
const About = () => {
  return (
    <AnimatedSection id="about">
      <div style={{
        background: 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)',
        padding: '6rem 2rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            textAlign: 'left',
            marginBottom: '4rem',
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(13, 71, 161, 0.95) 100%)' ,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            About Us
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
           <div
  style={{
    height: '400px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(13, 71, 161, 0.95) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 30px 60px rgba(102, 126, 234, 0.4)',
    transition: 'transform 0.3s ease',
  }}
>
  <img
    src={HeroImage}           // <- src must be inside opening tag
    alt="Logo"           // <- always include alt for accessibility
    style={{
      width: '100%',
      height: '100%',
      opacity: 0.9,
         transform: 'scaleX(-1)'
    }}
  />
</div>

            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>
                Your Trusted Printing Partner
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', marginBottom: '1.5rem' }}>
                Selahla.Net Printing Services was founded to provide affordable, high-quality printing solutions for individuals and businesses. Our commitment is to offer cutting-edge printing technology and exceptional customer service.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                We specialize in copying, scanning, laminating, personalized T-shirts, mugs, and more. With a passion for excellence, our dedicated team ensures every project is handled with care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Services Section
const Services = () => {
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
        title: "Business Registration (CK)", 
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

  return (
    <AnimatedSection id="services">
      <div style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '4rem',
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(13, 71, 161, 0.95) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Our Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                style={{
                 
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  background: 'white',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${service.color}40`;
                  e.currentTarget.style.borderColor = service.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{
                  height: '120px',
                  background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}90 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3.5rem',
                }}>
                  {service.image && <img src={service.image} alt={service.title} style={{ height: '100%', width: '100%', objectFit: 'fill' }} />}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#333' }}>
                    {service.title}
                  </h4>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>
                    {service.description} 
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};


       

{/* Our Locations */}

const Locations = ()=>{

  return(

    <AnimatedSection id="locations">
      <div style={{
        padding: '6rem 2rem',
        background: '#f8f9fa',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '4rem',
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(13, 71, 161, 0.95) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Our Locations
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}>
            {locationsData.map((location, idx) => (
              <a
                key={idx}
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: '#333',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(25, 118, 210, 0.3)';
                  e.currentTarget.style.borderColor = '#1976d2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  margin: '0 auto 1rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0d47a1 0%, #8bb1e9ff 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                }}>
                  📍
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {location.name}
                </h4>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>
                  {location.address}
                </p>
            
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
    );
  };




// Contact Section (Moved to Footer)
const Contact = () => {
  return null;
};

// Footer
const Footer = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61584014472940', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@selahla.net?_r=1&_t=ZS-91hKBo4jNcW', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    }
  ];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      padding: '4rem 2rem 2rem',
      background: 'linear-gradient(135deg, #0d47a1 0%)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.2), transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '3rem',
          marginBottom: '3rem',
          alignItems: 'flex-start',
        }}>
          {/* About Section */}
          <div>
            <h4 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              background: 'linear-gradient(45deg, #fff 30%, #90caf9 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Selahla.Net Printing Services
            </h4>
           <p style={{ fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '1.5rem' }}>
  Your trusted partner for high-quality printing services,
  <br />
  web design, and business solutions in South Africa.
</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#fff',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: '#fff',
              textAlign: 'right',
            }}>
              Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', flexDirection: 'row-reverse' }}>
                <span style={{ fontSize: '1.3rem', marginTop: '0.1rem' }}>📞</span>
                <div>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: '0 0 0.1rem 0' }}>Phone</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: 500, margin: '0 0 0.1rem 0' }}>060 751 1793</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>071 629 9701</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', flexDirection: 'row-reverse' }}>
                <span style={{ fontSize: '1.3rem', marginTop: '0.1rem' }}>✉️</span>
                <div>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: '0 0 0.1rem 0' }}>Email</p>
                  <p style={{ fontSize: '0.9rem', fontWeight: 500, wordBreak: 'break-word', margin: 0 }}>
                    selahla.netinternetcafe@gmail.com
                  </p>
                </div>
              </div>
             
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', flexDirection: 'row-reverse' }}>
                <span style={{ fontSize: '1.3rem', marginTop: '0.1rem' }}>🚚</span>
                <div>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: '0 0 0.1rem 0' }}>Delivery</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>Nationwide via Pep Paxi or Courier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: '2rem',
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ 
            opacity: 0.9, 
            fontSize: '0.95rem',
            margin: 0,
          }}>
            © {new Date().getFullYear()} Selahla.Net Printing Services. All rights reserved.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem',
            fontSize: '0.9rem',
            opacity: 0.8,
          }}>
            <a 
              href="#home" 
              style={{ 
                color: '#fff', 
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              Privacy Policy
            </a>
            <a 
              href="#home" 
              style={{ 
                color: '#fff', 
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {

  return (
     <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Navbar />
      <Home />
       <WhatsAppQuoteForm services={servicesData} />
      <About />
      <Services />
      <Locations/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
