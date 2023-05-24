import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import TableContainer from "scenes/widgets/HistoryList";
import WidgetWrapper from "components/WidgetWrapper";
import Button from '@mui/material/Button';


export function BasicButtons() {
    return (
        <Button variant="contained">Contained</Button>
    );
}


const ShopHistory = () => {
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
                    <TableContainer />


                </WidgetWrapper>
                
            </Box>
        </Box>



    );

};


export default ShopHistory;