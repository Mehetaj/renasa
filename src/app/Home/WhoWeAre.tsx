"use client";
import { Container, Typography } from '@mui/material';
import image1 from '@/Images/whoweare/image1.jpg';
import image2 from '@/Images/whoweare/image2.jpg';
import Image from 'next/image';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useMediaQuery, useTheme } from '@mui/material';

const WhoWeAre: React.FC = () => {
    const theme = useTheme();
    const isTabletOrLarger = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Container sx={{ my: 10 }}>
            <div style={{
                display: isTabletOrLarger ? 'flex' : 'block',
                gap: '24px',
                width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: isTabletOrLarger ? '50%' : '100%',
                }}>
                    <Image className='rounded-2xl' src={image1} alt="" />
                    <Image className='rounded-2xl' src={image2} alt="" />
                </div>
                <div style={{
                    width: isTabletOrLarger ? '50%' : '100%',
                }}>
                    <p className="text-3xl md:text-6xl">Building a Brighter <br /> Future, Together</p>
                    <Typography className='text-xl my-10' variant="body1" gutterBottom>
                        At Renasa, we believe in the power of renewable energy to create a more sustainable future. With a passion for clean energy and a commitment to our customers, we are dedicated to delivering the best possible solutions.
                    </Typography>
                    <Typography variant="h5" gutterBottom fontWeight="fontWeightBold">Our Missions:</Typography>
                    <div>
                        <p className='shadow-sm border-2 hover:bg-red-900 transition-all duration-300 ease-in-out hover:text-white px-7 py-4 rounded-lg'>To provide clean, efficient, and affordable renewable energy solutions to our customers.</p>
                        <p className='shadow-sm border-2 hover:bg-red-900 transition-all duration-300 ease-in-out hover:text-white px-7 py-4 rounded-lg my-4'>To promote the widespread adoption of renewable energy and increase energy independence.</p>
                        <p className='shadow-sm border-2 hover:bg-red-900 transition-all duration-300 ease-in-out hover:text-white px-7 py-4 rounded-lg'>To stay at the forefront of renewable energy technology and offer cutting-edge solutions.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default WhoWeAre;
