import { Box, useMediaQuery, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import WishList from "components/WhishList";

const WishlistPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    return (
        <Box>
            <Navbar />
            <Box width="100%"
                padding="2rem"
                display={isNonMobileScreens ? "flex" : "block"}
                sx={{ borderRadius: "0.75rem" }}
            >
                <Grid container spacing={1}>
                    <Grid container item spacing={2} justifyContent="center">
                    <WishList />
                    <WishList />
                    <WishList />
                    <WishList />
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );


};

export default WishlistPage;