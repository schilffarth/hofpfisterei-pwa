import {
    Box,
    Stack,
    Typography,
    Button,
    useMediaQuery,
} from "@mui/material";
import {
    East as EastIcon,
    LocationOn as LocationOnIcon,
    TipsAndUpdates as TipsAndUpdatesIcon,
    Work as WorkIcon,
    School as SchoolIcon,
} from "@mui/icons-material";

import useNavigate from "../components/Link/useNavigate";

const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <StoreSection />
            <JobSection />
        </>
    );
};

const HeroSection = () => {
    const navigate = useNavigate();
    const isBig = useMediaQuery('(min-width:1000px)');
    const height = '550px';
    const spacing = isBig ? '140px' : '80px';

    return (
        <Box
            sx={{
                height: height, // Adjust this to your desired hero section height
                width: '100%', // Set the width to 100% to make it scale dynamically
                overflow: 'hidden', // Hide the excess part of the image if it doesn't fit the container height
                position: 'relative', // Make the container a positioned ancestor for the child
            }}
            className="landing-page"
        >
            <Box
                component="img" // Set the Box component to render an img element
                alt="Hero Section Background Image" // Provide an alternative text for the image
                src="landingpage/hero_bg.jpeg" // Set the image source
                sx={{
                    height: height, // Maintain the original image height
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
                    padding: `${spacing} 0`,
                }}
            >
                {isBig ? (
                    "HANDWERK | TRADITION | ÖKOLOGIE"
                ) : (
                    <>HANDWERK<br/>TRADITION<br/>ÖKOLOGIE</>
                )}
            </Typography>
            <Box
                justifyContent="center"
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<TipsAndUpdatesIcon sx={{ color: 'secondary.dark' }}/>}
                    endIcon={<EastIcon sx={{ color: 'secondary.dark' }}/>}
                    onClick={() => navigate("/way-of-the-bread")}
                    sx={{
                        minWidth: '300px',
                        maxWidth: '600px',
                        margin: '0 5rem',
                        backgroundColor: "secondary.light",
                        "&:hover": {
                            backgroundColor: "secondary.light", // Maintain the same color on hover
                        },
                    }}
                >
                    <Typography
                        variant="overline"
                        color={"secondary.dark"}
                    >
                        Der Weg des Brotes
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};

const StoreSection = () => {
    const navigate = useNavigate();
    const isBig = useMediaQuery('(min-width:600px)');
    const height = isBig ? '600px' : '500px';
    const spacing = isBig ? '140px' : '80px';

    return (
        <Box
            sx={{
                height: height, // Adjust this to your desired hero section height
                width: '100%', // Set the width to 100% to make it scale dynamically
                overflow: 'hidden', // Hide the excess part of the image if it doesn't fit the container height
                position: 'relative', // Make the container a positioned ancestor for the child
            }}
            className="landing-page"
        >
            <Box
                component="img" // Set the Box component to render an img element
                alt="Stores Section Background Image" // Provide an alternative text for the image
                src="landingpage/stores_bg.jpeg" // Set the image source
                sx={{
                    height: height, // Maintain the original image height
                    width: '100%', // Make the image scale dynamically in width
                    objectFit: 'cover', // Cover the entire container width without distorting the aspect ratio
                    position: 'absolute', // Position the image absolutely inside the parent container
                    zIndex: -2, // Optional, to ensure the image is always behind the content
                }}
            />
            <Box
                sx={{
                    height: '100%', // Cover only the top half
                    width: '100%',
                    position: 'absolute',
                    zIndex: -1,
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent black background color
                }}
            />
            <Typography
                variant="h1"
                align="center"
                color="inherit"
                sx={{
                    width: '100%',
                    padding: `${spacing} 0 0`,
                }}
            >
                {isBig ? (
                    "Die Filiale in Ihrer Nähe"
                ) : (
                    <>Die Filiale in<br/>Ihrer Nähe</>
                )}
            </Typography>
            <Typography
                variant="h5"
                align="center"
                color="inherit"
                sx={{
                    width: '100%',
                    padding: `0 0 ${spacing}`,
                }}
            >
                ...nur einen Schritt entfernt
            </Typography>
            <Box
                justifyContent="center"
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<LocationOnIcon sx={{ color: 'inherit' }}/>}
                    endIcon={<EastIcon sx={{ color: 'inherit' }}/>}
                    onClick={() => navigate("/way-of-the-bread")}
                    sx={{
                        minWidth: '300px',
                        maxWidth: '600px',
                        margin: '0 5rem',
                        backgroundColor: "background.paper",
                        "&:hover": {
                            backgroundColor: "background.paper", // Maintain the same color on hover
                        },
                    }}
                >
                    <Typography
                        variant="overline"
                        color={"inherit"}
                    >
                        Meine Filiale
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};

const JobSection = () => {
    const navigate = useNavigate();
    const isBig = useMediaQuery('(min-width:600px)');
    const height = isBig ? '600px' : '580px';
    const spacing = isBig ? '140px' : '80px';

    return (
        <Box
            sx={{
                height: height, // Adjust this to your desired hero section height
                width: '100%', // Set the width to 100% to make it scale dynamically
                overflow: 'hidden', // Hide the excess part of the image if it doesn't fit the container height
                position: 'relative', // Make the container a positioned ancestor for the child
            }}
            className="landing-page"
        >
            <Box
                component="img" // Set the Box component to render an img element
                alt="Career Section Background Image" // Provide an alternative text for the image
                src="landingpage/jobs_bg.jpeg" // Set the image source
                sx={{
                    height: height, // Maintain the original image height
                    width: '100%', // Make the image scale dynamically in width
                    objectFit: 'cover', // Cover the entire container width without distorting the aspect ratio
                    position: 'absolute', // Position the image absolutely inside the parent container
                    zIndex: -2, // Optional, to ensure the image is always behind the content
                }}
            />
            <Typography
                variant="h1"
                align="center"
                color="primary.dark"
                sx={{
                    width: '100%',
                    padding: `${spacing} 0 0`,
                }}
            >
                {isBig ? (
                    "Karriere in der Hofpfisterei"
                ) : (
                    <>Karriere in der<br/>Hofpfisterei</>
                )}
            </Typography>
            <Stack
                width="100%"
                display="flex"
                flexWrap="wrap"
                alignContent="center"
                justifyContent="center"
                padding="5rem 2rem"
            >
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<WorkIcon sx={{ color: 'primary.dark' }}/>}
                    endIcon={<EastIcon sx={{ color: 'primary.dark' }}/>}
                    onClick={() => navigate("/career")}
                    sx={{
                        maxWidth: '600px',
                        marginBottom: '2rem',
                        backgroundColor: "primary.light",
                        "&:hover": {
                            backgroundColor: "primary.light", // Maintain the same color on hover
                        },
                    }}
                >
                    <Typography
                        variant="overline"
                        color={"primary.dark"}
                    >
                        Offene Stellen
                    </Typography>
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<SchoolIcon sx={{ color: 'primary.light' }}/>}
                    endIcon={<EastIcon sx={{ color: 'primary.light' }}/>}
                    onClick={() => navigate("/career/schooling")}
                    sx={{
                        maxWidth: '600px',
                        backgroundColor: "primary.dark",
                        "&:hover": {
                            backgroundColor: "primary.dark", // Maintain the same color on hover
                        },
                    }}
                >
                    <Typography
                        variant="overline"
                        color={"primary.light"}
                    >
                        Ausbildung
                    </Typography>
                </Button>
            </Stack>
        </Box>
    );
};

export default LandingPage;
