import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import TableContainer from "scenes/widgets/HistoryProductsList";
import WidgetWrapper from "components/WidgetWrapper";
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { dark } from "@mui/material/styles/createPalette";
import { useNavigate } from "react-router-dom";
// import SnackWidget from './SnackWidget';

export function BasicButtons() {
    return (
        <Button variant="contained">Contained</Button>
    );
}


const HistoryPage = () => {

    const navigate = useNavigate();

    const token = useSelector((state) => state.token);
    const [snack, setSnack] = useState({ open: false, type: 'info', message: '' });
    const OnSnackClose = () => {
        setSnack({ ...snack, open: false });
    }

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


export default HistoryPage;