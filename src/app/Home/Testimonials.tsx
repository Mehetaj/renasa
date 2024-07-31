"use client"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Container, Rating } from "@mui/material";

const Testimonials = () => {
    const datas = [
        {
            star: 5,
            sub: "Efficient and Professional Team!",
            text: "I was very impressed with the solar panel installation process. The team was efficient, professional, and always kept me informed of the progress. They did an excellent job and I would highly recommend them to anyone looking for a quality solar panel installation.",
            name: "Sarah Johnson"
        },
        {
            star: 5,
            sub: "Smooth and Hassle-Free Process!",
            text: "I was very impressed with the solar panel installation process. The team was efficient, professional, and always kept me informed of the progress. They did an excellent job and I would highly recommend them to anyone looking for a quality solar panel installation.",
            name: "Sarah Johnson"
        },
        {
            star: 4,
            sub: "Excellent Customer Service from Mentary!",
            text: "I was very impressed with the solar panel installation process. The team was efficient, professional, and always kept me informed of the progress. They did an excellent job and I would highly recommend them to anyone looking for a quality solar panel installation.",
            name: "Sarah Johnson"
        },
        {
            star: 5,
            sub: "Top-notch Workmanship from Mentary!",
            text: "I was very impressed with the solar panel installation process. The team was efficient, professional, and always kept me informed of the progress. They did an excellent job and I would highly recommend them to anyone looking for a quality solar panel installation.",
            name: "Sarah Johnson"
        },
        {
            star: 2,
            sub: "Affordable and Reliable Services!",
            text: "I was very impressed with the solar panel installation process. The team was efficient, professional, and always kept me informed of the progress. They did an excellent job and I would highly recommend them to anyone looking for a quality solar panel installation.",
            name: "Sarah Johnson"
        },
        {
            star: 5,
            sub: "Eco-friendly and Convenient Product!",
            text: "I was very impressed with the solar panel installation process. The team was efficient, professional, and always kept me informed of the progress. They did an excellent job and I would highly recommend them to anyone looking for a quality solar panel installation.",
            name: "Sarah Johnson"
        },
    ]
    return (
        <Container>
            <div className="text-center mt-20">
                <p className="capitalize text-red-900"> <WbSunnyIcon /> TESTIMONIALS</p>
                <h2 className="text-6xl my-5">Happy Customers, <br /> Happy World</h2>
            </div>
            <div className='my-10 grid grid-cols-3 gap-5'>
                {
                    datas?.map((data, index) => {
                        return (
                            <div key={index} className='shadow-lg border-2 p-10 rounded-xl'>
                                <Rating name="read-only" value={data.star} readOnly />
                                <h2 className='my-3 text-xl font-semibold'>{data.sub}</h2>
                                <p  className='my-3 text-xs'>{data.text}</p>
                                <h3>{data.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    );
};

export default Testimonials;