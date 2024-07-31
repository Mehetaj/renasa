"use client"
import { Container } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import image1 from '@/Images/home_services/image1.jpg'
import image2 from '@/Images/home_services/image2.jpg'
import image3 from '@/Images/home_services/image3.jpg'
import Image from "next/image";
import EastIcon from '@mui/icons-material/East';

const OurServices = () => {

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
            <div className="text-center mt-10">
                <p className="capitalize text-red-900"> <WbSunnyIcon /> OUR SERVICES</p>
                <h2 className="text-6xl my-5">Comprehensive Renewable <br /> Energy Solutions</h2>
                <p className="text-xl">
                    We offer a range of services to help you take advantage of renewable energy <br /> and reduce your carbon footprint.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-3">
                {
                    services?.map((service) => {
                        return (
                            <div>
                                <Image className="w-[365px] h-[380px] rounded-xl" src={service.image} alt={service.title} />
                                <h2 className="text-2xl my-3 font-semibold">{service?.title}</h2>
                                <p>{service?.description}</p>
                                <button className="mt-4 mb-14 hover:text-red-900">Learn More <EastIcon /></button>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
            <div className="grid grid-cols-4 gap-3 my-4">
                <div className="flex flex-col justify-center text-center gap-3 shadow-xl p-14 rounded-2xl border-2">
                    <h2 className="text-5xl">10+</h2>
                    <p className="text-xl">Years of Experience</p>
                </div>
                <div className="flex flex-col bg-red-900 text-white justify-center text-center gap-3 shadow-xl p-14 rounded-2xl border-2">
                    <h2 className="text-5xl">4.8/5</h2>
                    <p className="text-xl">Ratings from Customers</p>
                </div>
                <div className="flex flex-col justify-center text-center gap-3 shadow-xl p-14 rounded-2xl border-2">
                    <h2 className="text-5xl">20+</h2>
                    <p className="text-xl">Countries Served</p>
                </div>
                <div className="flex flex-col justify-center text-center gap-3 shadow-xl p-14 rounded-2xl border-2">
                    <h2 className="text-5xl">1.3k</h2>
                    <p className="text-xl">Successful Installations                    </p>
                </div>
            </div>
        </Container>
    );
};

export default OurServices;