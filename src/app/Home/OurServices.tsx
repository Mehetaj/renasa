"use client"
import { Container, Grid, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import image1 from '@/Images/home_services/image1.jpg';
import image2 from '@/Images/home_services/image2.jpg';
import image3 from '@/Images/home_services/image3.jpg';
import Image from "next/image";
import EastIcon from '@mui/icons-material/East';

const OurServices = () => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Fake Data
    const services = [
        {
            image: image1,
            title: "Solar Panel Installation",
            description: "Our team of experienced technicians will install high-quality solar panels on your property to provide clean, renewable energy."
        },
        {
            image: image2,
            title: "Wind Turbine Installation",
            description: "We offer installation services for wind turbines to help you generate energy from the wind. Our turbines are designed to be efficient."
        },
        {
            image: image3,
            title: "Solar Panel Maintenance",
            description: "To keep your solar panels functioning at peak efficiency, we offer cleaning and maintenance services to keep them free of dirt and debris."
        },
    ]

    return (
        <Container>
            <Box className="text-center mt-10">
                <Typography variant={isMobile ? "h4" : (isTablet ? "h2" : "h2")}  className="my-5">Comprehensive Renewable <br /> Energy Solutions</Typography>
                <Typography variant="body1" className="text-xl">
                    We offer a range of services to help you take advantage of renewable energy <br /> and reduce your carbon footprint.
                </Typography>
            </Box>
            <Grid container spacing={3} className="mt-10">
                {
                    services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box className="cursor-pointer">
                                <Image className="w-full h-auto rounded-xl transition duration-300 ease-in-out hover:scale-105" src={service.image} alt={service.title} />
                                <Typography variant="h5" className="my-4 font-semibold">{service.title}</Typography>
                                <Typography variant="body1">{service.description}</Typography>
                                <button className="mt-4 mb-14 hover:text-red-900">Learn More <EastIcon /></button>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            <hr />
            <Grid container spacing={3} className="my-4">
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="flex flex-col justify-center text-center hover:bg-red-900 transition-all duration-300 ease-in-out hover:text-white gap-3 shadow-xl h-48 rounded-2xl border-2">
                        <Typography variant="h2">10+</Typography>
                        <Typography variant="body1" className="text-xl">Years of Experience</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="flex flex-col hover:bg-red-900 transition-all duration-300 ease-in-out hover:text-white justify-center text-center gap-3 shadow-xl h-48 rounded-2xl border-2">
                        <Typography variant="h2">4.8/5</Typography>
                        <Typography variant="body1" className="text-xl">Ratings from Customers</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="flex flex-col justify-center text-center hover:bg-red-900 transition-all duration-300 ease-in-out hover:text-white gap-3 shadow-xl h-48 rounded-2xl border-2">
                        <Typography variant="h2">20+</Typography>
                        <Typography variant="body1" className="text-xl">Countries Served</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="flex flex-col justify-center text-center hover:bg-red-900 transition-all duration-300 ease-in-out hover:text-white gap-3 shadow-xl h-48 rounded-2xl border-2">
                        <Typography variant="h2">1.3k</Typography>
                        <Typography variant="body1" className="text-xl">Successful Installations</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurServices;
