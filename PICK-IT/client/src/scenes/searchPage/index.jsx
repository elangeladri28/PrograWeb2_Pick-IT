import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import { ProductLargeWidget } from "scenes/widgets/ProductWidget";

const SearchPage = () => {
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

                <ProductLargeWidget />
                <ProductLargeWidget />
                <ProductLargeWidget />
                <ProductLargeWidget />
            </Box>
        </Box>
    );
};

export default SearchPage;