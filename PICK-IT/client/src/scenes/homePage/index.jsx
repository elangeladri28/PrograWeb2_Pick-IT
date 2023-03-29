import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import ProductWidget from "scenes/widgets/ProductWidget";
import ProductCarousel from "components/ProductCarousel";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  //const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        // gap="0.5rem"
        flexDirection="column"
      >
          <ProductCarousel />
          <Box marginBottom="2.5rem" display="block" sx={{ p: "20px", backgroundColor: '#DA0037'}}></Box>
        
        <Box
          display="flex"
        >
          <ProductWidget />
          <ProductWidget />
          <ProductWidget />
          <ProductWidget />
        </Box>
      </Box>

    </Box>
  );
};

export default HomePage;