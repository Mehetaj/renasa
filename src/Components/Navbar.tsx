"use client"
// import * as React from 'react';
import renasa_logo from '@/Images/logo/logo.jpg';
// import Image from 'next/image';
// import Link from 'next/link';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedinIcon from '@mui/icons-material/LinkedIn';
// import CallIcon from '@mui/icons-material/Call';
// import MailIcon from '@mui/icons-material/Mail';
// import { Button, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from 'react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative flex items-center justify-between px-5 py-2 bg-white shadow-lg z-50">
//       <Link href="/">
//         <Image width={180} height={180} src={renasa_logo} alt="Renasa Logo" />
//       </Link>
//       <div className="hidden lg:flex gap-6">
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/services">Services</Link>
//         <Link href="/products">Products</Link>
//         <Link href="/gallery">Gallery</Link>
//         <Link href="/contact">Contact</Link>
//       </div>
//       <div className="hidden lg:flex gap-10 items-center">
//         <div className="flex gap-5 items-center">
//           <Link target='_blank' href="https://www.facebook.com"><FacebookIcon /></Link>
//           <Link target='_blank' href="https://www.x.com"><TwitterIcon /></Link>
//           <Link target='_blank' href="https://www.linkedin.com"><LinkedinIcon /></Link>
//           <Link target='_blank' href="tel:01644394337"><CallIcon /></Link>
//           <Link target='_blank' href="mailto:mehetajkhandaker@gmail.com"><MailIcon /></Link>
//         </div>
//         <Button variant='contained' color='error'>Login</Button>
//       </div>
//       <div className="lg:hidden flex items-center">
//         <IconButton onClick={handleToggle}>
//           <MenuIcon />
//         </IconButton>
//       </div>
//       {isOpen && (
//         <div className="absolute top-20 left-0 right-0 bg-white shadow-lg p-5 flex flex-col items-start lg:hidden">
//           <Link href="/" className="py-2 w-full text-center" onClick={handleToggle}>Home</Link>
//           <Link href="/about" className="py-2 w-full text-center" onClick={handleToggle}>About</Link>
//           <Link href="/services" className="py-2 w-full text-center" onClick={handleToggle}>Services</Link>
//           <Link href="/products" className="py-2 w-full text-center" onClick={handleToggle}>Products</Link>
//           <Link href="/gallery" className="py-2 w-full text-center" onClick={handleToggle}>Gallery</Link>
//           <Link href="/contact" className="py-2 w-full text-center" onClick={handleToggle}>Contact</Link>
//           <div className="flex gap-5 py-2 w-full justify-center">
//             <Link target='_blank' href="https://www.facebook.com" onClick={handleToggle}><FacebookIcon /></Link>
//             <Link target='_blank' href="https://www.x.com" onClick={handleToggle}><TwitterIcon /></Link>
//             <Link target='_blank' href="https://www.linkedin.com" onClick={handleToggle}><LinkedinIcon /></Link>
//             <Link target='_blank' href="tel:01644394337" onClick={handleToggle}><CallIcon /></Link>
//             <Link target='_blank' href="mailto:mehetajkhandaker@gmail.com" onClick={handleToggle}><MailIcon /></Link>
//           </div>
//           <Button variant='contained' color='error' className="w-full mt-2" onClick={handleToggle}>Login</Button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AdbIcon from '@mui/icons-material/Adb';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        paddingX: 3,
      }}
    >
      <Toolbar disableGutters>
        {/* Left side: Logo (always visible) */}
        <AdbIcon sx={{ display: 'flex', mr: 1, color: 'black' }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>

        {/* Center: Links (hidden on mobile) */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>

        {/* Right side: Menu button (visible on mobile) */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            color="inherit"
          >
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
        </Box>

        {/* Right side: Social Icons and Login Button (visible on desktop) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <IconButton color="inherit" href="https://www.facebook.com">
            <FacebookIcon sx={{ color: 'black' }} />
          </IconButton>
          <IconButton color="inherit" href="https://www.twitter.com">
            <TwitterIcon sx={{ color: 'black' }} />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com">
            <InstagramIcon sx={{ color: 'black' }} />
          </IconButton>
          <Button sx={{ ml: 2, color: 'black' }}>
            Login
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemText primary="LOGO" sx={{ fontWeight: 'bold' }} />
            </ListItem>
            <Divider />
            {pages.map((page) => (
              <ListItem button key={page}>
                <ListItemText primary={page} />
              </ListItem>
            ))}
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
              <IconButton color="inherit" href="https://www.facebook.com">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://www.twitter.com">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="https://www.instagram.com">
                <InstagramIcon />
              </IconButton>
            </Box>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default ResponsiveAppBar;
