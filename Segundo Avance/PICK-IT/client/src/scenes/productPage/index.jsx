import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import ProductWidget from "scenes/widgets/ProductWidget";
import ProductDetailWidget from "scenes/widgets/ProductDetailWidget";
import ProductImage from "components/ProductImage";
import CommentWidget from "scenes/widgets/CommentWidget";

const ProductPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "50%" : undefined}>
          <ProductWidget />
          <ProductImage />
        </Box>
        <Box flexBasis={isNonMobileScreens ? "50%" : undefined}>
          <ProductDetailWidget />
        </Box>


      </Box>
      
      <CommentWidget />
      
    </Box>
  );
};

export default ProductPage;