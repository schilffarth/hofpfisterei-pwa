import { useNavigate } from "react-router-dom";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import {
    East as EastIcon,
} from "@mui/icons-material";

import Link from "../components/Link/Link.jsx";

const LandingPage = () => {
    return (
        <HeroSection />
    );
};

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                height: '675px', // Adjust this to your desired hero section height
                width: '100%', // Set the width to 100% to make it scale dynamically
                overflow: 'hidden', // Hide the excess part of the image if it doesn't fit the container height
                position: 'relative', // Make the container a positioned ancestor for the child
            }}
            className="landing-page"
        >
            <Box
                component="img" // Set the Box component to render an img element
                alt="Hero Section Background Image" // Provide an alternative text for the image
                src="hero_bg.jpeg" // Set the image source
                sx={{
                    height: '675px', // Maintain the original image height
                    width: '100%', // Make the image scale dynamically in width
                    objectFit: 'cover', // Cover the entire container width without distorting the aspect ratio
                    position: 'absolute', // Position the image absolutely inside the parent container
                    zIndex: -1, // Optional, to ensure the image is always behind the content
                }}
            />
            <Typography
                variant="h1"
                align="center"
                color="secondary.dark"
                sx={{
                    width: '100%',
                    padding: '100px 0',
                }}
            >
                TRADITION<br/>HANDWERK<br/>ÖKOLOGIE
            </Typography>
            <Box
                justifyContent="center"
                sx={{
                    padding: 'auto',
                }}
            >
                <Button
                    variant="standard"
                    endIcon={<EastIcon />}
                    onClick={() => navigate("/way-of-the-bread")}
                >
                    <Typography
                        variant="h5"
                        color="inherit"
                    >
                        Der Weg des Brotes
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}

export default LandingPage;
