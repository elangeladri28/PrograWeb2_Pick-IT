import { Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import TableContainer from "scenes/widgets/HistoryProductsList";
import WidgetWrapper from "components/WidgetWrapper";

const HistoryPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                justifyContent="center"
                flexDirection="column"
            >
                <WidgetWrapper>
                    <Typography fontSize="clamp(1rem, 1.5rem, 2.25rem)" marginBottom={"1rem"} textAlign={"center"} color="darkgray">
                        Historial de Compras
                    </Typography>
                    <TableContainer />
                </WidgetWrapper>
            </Box>
        </Box>
    );
};


export default HistoryPage;