import { Typography, useTheme, Box, Button, Card, CardActions, CardContent, Grid } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useNavigate } from "react-router-dom";

const CommentWidget = () => {
    const { palette } = useTheme();
    const navigate = useNavigate();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const itemData = [
        {
            name: 'Antonio',
            comment: 'Todo lo que necesitas en una gráfica.',
        },
        {
            name: 'Irving',
            comment: 'Excelente para mejorar tu PC.',
        },
        {
            name: 'Hector',
            comment: 'Requiere una gran fuente de poder en tu PC para un mejor funcionamiento.',
        },
        {
            name: 'Alan',
            comment: 'Perfecta por el precio.',
        },
        {
            name: 'Hector',
            comment: 'Requiere una gran fuente de poder en tu PC para un mejor funcionamiento.',
        },
        {
            name: 'Irving',
            comment: 'Excelente para mejorar tu PC.',
        },
        {
            name: 'Alan',
            comment: 'Perfecta por el precio.',
        },
        {
            name: 'Antonio',
            comment: 'Todo lo que necesitas en una gráfica.',
        },
    ];

    return (
        <Box display="flex"
            width="100%"
            padding="2rem 6%"
            gap="2rem"
            flexDirection="column"
        >
            <Typography color={main} variant="h2" fontWeight="500"> Comentarios </Typography>

            <WidgetWrapper display="flex"
                width="100%"
                padding="2rem 6%"
                gap="1rem"
                flexWrap="wrap"
                justifyContent="center"
            >
                    {itemData.map((item) => (
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography color={medium} gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography color={dark} variant="body2">
                                        {item.comment}
                                    </Typography>
                                </CardContent>
                            </Card>
                    ))}
                
            </WidgetWrapper>

        </Box>
    );


};

export default CommentWidget;