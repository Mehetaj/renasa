"use client"
import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

interface AnimateValueProps {
    start: number;
    end: number;
    duration: number;
}

const AnimateValue: React.FC<AnimateValueProps> = ({ start, end, duration }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obj = ref.current;
        if (!obj) return;

        let startTimestamp: number | null = null;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [start, end, duration]);

    return (
        <Box>
            <Typography variant="h2" ref={ref}>
                {start}
            </Typography>
        </Box>
    );
};

export default AnimateValue;
