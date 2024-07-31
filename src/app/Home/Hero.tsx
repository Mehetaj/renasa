"use client"
import { Box, Button, Typography } from '@mui/material';
import banner from '@/Images/hero/banner.png';

const Hero = () => {
    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh', // Full viewport height
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    overflow: 'hidden', // Ensures content does not overflow
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${banner.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 1,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black shadow with 50% opacity
                        zIndex: 2,
                    }}
                />
                <Box sx={{ zIndex: 3, textAlign: 'center' }}>
                    <Typography variant="h1" component="div">
                        Investing to <br /> accelerate the <br /> energy transition
                    </Typography>

                    <Typography variant="h6" sx={{ width: '50%', textAlign: 'center', marginY: '20px', marginX: 'auto' }} component="div">
                        Converting thousands of volts of electricity to levels that can be managed by your substation requires seamless interactions between its components. They include switchgear containing transformers, circuit breakers, protective relays and more. Failure in even one element of the system may lead to total collapse.
                    </Typography>
                    <Button variant='contained' sx={{paddingX:"20px", paddingY:"10px"}} color="error">
                        Explore More
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Hero;
