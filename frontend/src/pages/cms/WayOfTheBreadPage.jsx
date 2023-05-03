import {
    Box,
    Typography,
} from "@mui/material";

const WayOfTheBreadPage = () => {
    return (
        <Box>
            <CmsContainer
                image="wayofthebread_001.jpeg"
                alignment="right"
            >
                <Typography
                    variant="overline"
                    color="secondary"
                >
                    Anfrischsauer
                </Typography>
                <Typography
                    variant="h6"
                    color="secondary"
                >
                    Das Anstellgut, eine Portion ausgereifter Vollsauer, wird durch Zugabe
                    von Mehl, Wasser und 24 Stunden Geduld zum Anfrischsauer. In ihm entwickeln sich die
                    teiglockernden Hefen.
                </Typography>
            </CmsContainer>
            <CmsContainer
                image="wayofthebread_009.jpeg"
                alignment="left"
            >
                <Typography
                    variant="overline"
                    color="secondary"
                >
                    Filiale
                </Typography>
                <Typography
                    variant="h6"
                    color="secondary.light"
                >
                    Blabla nach langem asdfasdfaf
                </Typography>
            </CmsContainer>
        </Box>
    );
};

const CmsContainer = ({
    image,
    alignment,
    children,
}) => {
    return (
        <Box
            sx={{
                height: '500px', // Adjust this to your desired hero section height
                width: '100%', // Set the width to 100% to make it scale dynamically
                overflow: 'hidden', // Hide the excess part of the image if it doesn't fit the container height
                position: 'relative', // Make the container a positioned ancestor for the child
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: alignment,
            }}
            className="landing-page"
        >
            <Box
                component="img" // Set the Box component to render an img element
                alt="Stores Section Background Image" // Provide an alternative text for the image
                src={image} // Set the image source
                sx={{
                    height: '500px', // Maintain the original image height
                    width: '100%', // Make the image scale dynamically in width
                    objectFit: 'cover', // Cover the entire container width without distorting the aspect ratio
                    position: 'absolute', // Position the image absolutely inside the parent container
                    zIndex: -2, // Optional, to ensure the image is always behind the content
                }}
            />
            <Box
                sx={{
                    height: '100%',
                    width: '50%',
                    minWidth: '250px',
                    position: 'absolute',
                    zIndex: -1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background color
                    justifyContent: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '2rem 1rem',
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default WayOfTheBreadPage;
