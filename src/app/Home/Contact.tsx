"use client"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Button, Container, Grid, Typography, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import contact_image from '@/Images/contact.jpg'
import Image from 'next/image';

const Contact = () => {
    return (
        <Container>
            <Grid container spacing={5} alignItems="center" mt={6}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="firebrick" gutterBottom>
                        <WbSunnyIcon /> CONTACT
                    </Typography>
                    <Typography className='my-4' variant="h2" gutterBottom>
                        Join the Clean Energy Revolution Today!
                    </Typography>
                    <Typography className='text-xl' variant="body1" gutterBottom>
                        Are you ready to take your first step towards a more sustainable and energy-efficient future?
                    </Typography>
                    <Typography className='text-xl' variant="body1" paragraph>
                        With our solar and renewable energy solutions, you can reduce your carbon footprint, lower your energy costs, and contribute to a greener planet. So what are you waiting for? Contact us now!
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{ paddingX: "20px", paddingY: "10px", display: 'flex', gap: '10px' }}
                        color="error"
                    >
                        Contact Us <EastIcon />
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <Image src={contact_image} alt="contact image" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
