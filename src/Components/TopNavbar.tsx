import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import renasa_logo from '@/Images/logo/Renasa-Logo.jpg';

const TopNavBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ padding: { xs: 2, sm: 3, md: 2 } }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm="auto" container alignItems="center" spacing={1}>
            <Grid item>
              <Image src={renasa_logo} alt="Renasa Logo" width={56} height={56} />
            </Grid>
            <Grid item>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: { xs: 'center', sm: 'left' } }}>
                <span style={{ color: 'firebrick' }}>Renasa</span> <br /> Corporation
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm="auto" container justifyContent={{ xs: 'center', sm: 'flex-end' }}>
            <Grid item className='mx-[-10px]'>
              <Button color="inherit">
                <Link target='_blank' href="https://www.facebook.com">
                  <FacebookIcon />
                </Link>
              </Button>
            </Grid>
            <Grid item className='mx-[-10px]'>
              <Button color="inherit">
                <Link target='_blank' href="https://www.x.com">
                  <TwitterIcon />
                </Link>
              </Button>
            </Grid>
            <Grid item className='mx-[-10px]'>
              <Button color="inherit">
                <Link target='_blank' href="https://www.linkedin.com">
                  <LinkedinIcon />
                </Link>
              </Button>
            </Grid>
            <Grid item className='mx-[-10px]'>
              <Button color="inherit">
                <Link target='_blank' href="tel:01644394337">
                  <CallIcon />
                </Link>
              </Button>
            </Grid>
            <Grid item className='mx-[-10px]'>
              <Button color="inherit">
                <Link target='_blank' href="mailto:mehetajkhandaker@gmail.com">
                  <MailIcon />
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
