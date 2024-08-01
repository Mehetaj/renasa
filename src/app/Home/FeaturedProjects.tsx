import { Box, Button, Container, Grid, Typography } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import image1 from '@/Images/featured_projects/image1.jpg'
import image2 from '@/Images/featured_projects/image2.jpg'
import image3 from '@/Images/featured_projects/image3.jpg'
import image4 from '@/Images/featured_projects/image4.jpg'
import image5 from '@/Images/featured_projects/image5.jpg'
import Image from "next/image";



const FeaturedProjects = () => {
    const projects = [
        {
            image: image1,
            title: ""
        },
        {
            image: image2,
            title: ""
        },
        {
            image: image3,
            title: ""
        },
        {
            image: image4,
            title: ""
        },
        {
            image: image5,
            title: ""
        },
    ];

    // Split the projects array into top and bottom rows
    const topRowProjects = projects.slice(0, 2);
    const bottomRowProjects = projects.slice(2);


    return (
        <Container>
            <div className="mt-24 md:flex justify-between items-start">
                <div className="">
                    <p className="text-3xl md:text-6xl mb-4 md:mb-0">Recent Projects</p>
                </div>
                <Button variant='contained' sx={{ paddingX: "20px", paddingY: "10px", display: 'flex', gap: '10px' }} color="error">
                    Explore More <EastIcon />
                </Button>
            </div>
            <Box sx={{ flexGrow: 1, my: 5 }}>
                <Grid data-aos="zoom-in-up" container spacing={2}>
                    {/* Top row: 2 images */}
                    {topRowProjects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="responsive"
                                width={600}
                                height={400}
                                className="rounded-2xl"
                            />
                        </Grid>
                    ))}

                    {/* Bottom row: 3 images */}
                    {bottomRowProjects.map((project, index) => (
                        <Grid data-aos="zoom-in-up"  item xs={12} md={4} key={index}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="responsive"
                                width={400}
                                height={300}
                                className="rounded-2xl"
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default FeaturedProjects;