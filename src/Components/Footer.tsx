import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';
import Image from 'next/image';
import renasa_logo from '@/Images/logo/logo.jpg';
import EastIcon from '@mui/icons-material/East';


const Footer = () => {
    return (
        <Box className="shadow-xl shadow-black border" component="footer" sx={{ backgroundColor: 'white', marginTop: '40px', paddingTop: '60px', paddingBottom: "20px" }}>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={3}>
                        <Grid item xs={12} sm="auto" container alignItems="center" spacing={1}>
                            <Grid item>
                                <Image src={renasa_logo} alt="Renasa Logo" width={200} height={200} />
                            </Grid>
                        </Grid>
                        <Typography variant="body1" paragraph>
                            We believe in the power of renewable energy to create a more sustainable future.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <Typography variant="h6" gutterBottom>
                            Services
                        </Typography>
                        <Typography className="mt-1" variant="body1">Solar Panel Installation</Typography>
                        <Typography className="mt-1" variant="body1">Wind Turbine Installation</Typography>
                        <Typography className="mt-1" variant="body1">Solar Panel Maintenance</Typography>
                        <Typography className="mt-1" variant="body1">Energy Efficiency Audits</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Contact Info
                        </Typography>
                        <Typography className="mt-1" variant="body1">Address: 1128, Nurarchala, Gulshan, Dhaka-1212, Bangladesh</Typography>
                        <Typography className="mt-1"  variant="body1">Phone:
                            +880 1677280418, +880 1537008657</Typography>
                        <Typography  className="mt-1" variant="body1">Gmail: renasa.dhaka@gmail.com</Typography>
                        <Typography className="mt-1" variant="body1">Yahoo: renasa_bd@yahoo.com</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Newsletter
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Subscribe to our newsletter to stay up-to-date with the latest news, tips, and trends in the industry
                        </Typography>
                        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField label="Your Email" variant="outlined"  size="small" />
                            <Button
                        variant='contained'
                        sx={{ paddingX: "20px", paddingY: "10px", display: 'flex', gap: '10px' }}
                        color="error"
                    >
                        Contact Us <EastIcon />
                    </Button>
                        </Box>
                    </Grid>
                </Grid>
                <hr className="my-4 text-black bg-black h-[2px]" />
                <Box className="text-center">
                    <Typography className="text-center font-semibold" variant="body2">Copyright © 2023 Renasa</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
