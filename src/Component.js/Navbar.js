import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Logo from '../Images/IMG-20250223-WA0009.jpg';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'Services', path: '#services' },
    { title: 'About', path: '#about' },
    { title: 'Contact', path: '#contact' },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 200, borderRadius: '40px', backgroundColor: '#004386', height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <Typography variant="h6" color="white" textAlign="center" mb={4} mt={3}>
          Menu
        </Typography>

        {navLinks.map((link) => (
          <ListItem
            button
            key={link.title}
            component="a"
            href={link.path}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '40px',
              },
            }}
          >
            <ListItemText primary={link.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const desktopLinkStyle = {
    color: '#fff',
    textTransform: 'none',
    mr: 2,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.2)',
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="Selahla.net Printing" style={{ height: '90px', borderRadius: '50%' }} />
        </Box>

        {isMobile ? (
          <>
            <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
              <MenuOutlinedIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Box>
            {navLinks.map((link) => (
              <Button key={link.title} component="a" href={link.path} sx={desktopLinkStyle}>
                {link.title}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
