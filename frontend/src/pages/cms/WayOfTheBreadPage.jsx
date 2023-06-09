import {
    Box,
    Typography,
} from "@mui/material";

const WayOfTheBreadPage = () => {

    return (
        <Box>
            <CmsContainer
                image="wayofthebread/002.jpeg"
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
                    Das Anstellgut ist eine Portion ausgereifter Vollsauer.
                    Es wird durch Zugabe von Mehl, Wasser und Geduld zum Anfrischsauer.
                    In ihm entwickeln sich die teiglockernden Hefen.
                </Typography>
            </CmsContainer>
            <CmsContainer
                image="wayofthebread/004.jpeg"
                alignment="left"
            >
                <Typography
                    variant="overline"
                    color="secondary"
                >
                    Grundsauer
                </Typography>
                <Typography
                    variant="h6"
                    color="secondary.light"
                >
                    In der wichtigsten Stufe haben die Milchsäurebakterien Zeit, sich zu entwickeln.
                    Auf ganz natürliche Art entsteht im Grundsauer die Vielfalt des Pfister-typischen Geschmacks.
                </Typography>
            </CmsContainer>
            <CmsContainer
            image="wayofthebread/006.jpeg"
            alignment="right"
            >
                <Typography
                    variant="overline"
                    color="secondary"
                >
                    Vollsauer
                </Typography>
                <Typography
                    variant="h6"
                    color="secondary.light"
                >
                    Der reife Grundsauer wird durch die Zugabe von verschiedenen Mehlen, Wasser und Zeit
                    zum sortenspezifischen Vollsauer. Die Säureverhältnisse harmonisieren sich.
                </Typography>
            </CmsContainer>
            <CmsContainer
                image="wayofthebread/008.jpeg"
                alignment="left"
            >
                <Typography
                    variant="overline"
                    color="secondary"
                >
                    Der fertige Teig
                </Typography>
                <Typography
                    variant="h6"
                    color="secondary.light"
                >
                    Durch Zugabe von Mehl, Wasser und Salz, sowie Gewürze, Ölsaaten oder Nüsse,
                    wird aus dem reifen Vollsauer der sortenspezifische Teig hergestellt.
                </Typography>
            </CmsContainer>
            <CmsContainer
                image="wayofthebread/009.jpeg"
                alignment="right"
            >
                <Typography
                    variant="overline"
                    color="secondary"
                >
                    Das Brot Zuhause
                </Typography>
                <Typography
                    variant="h6"
                    color="secondary.light"
                >
                    In täglich zehntausenden Haushalten wird die sorgfältig produzierte Pfisterqualität
                    in vollen Zügen genossen.
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
                    width: '60%',
                    minWidth: '300px',
                    position: 'absolute',
                    zIndex: -1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background color
                    justifyContent: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '2rem 1rem',
                }}
            >
                <Box sx={{
                    minWidth: '250px',
                    maxWidth: '400px',
                    margin: 'auto',
                }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default WayOfTheBreadPage;
