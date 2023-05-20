import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import ProductWidget from "scenes/widgets/ProductWidget";
import ProductDetailWidget from "scenes/widgets/ProductDetailWidget";
//import ProductImage from "components/ProductImage";
//import CommentWidget from "scenes/widgets/CommentWidget";

const ProductPage = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  var prodMostrado = null;
  var prodDetail = null;
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + productId)
      .then((res) => res.json())
      .then((product) => {
        setProducto(product);
      });
  }, [productId])

  if (producto){
    prodMostrado = <ProductWidget key={producto.id} id={producto.id} 
    nombre={producto.title} categoria={producto.category} descripcion={producto.description}
    precio={producto.price} imagen={producto.image}
    />;

    prodDetail = <ProductDetailWidget props={producto}/>
  }

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
          {prodMostrado}
        </Box>
        <Box flexBasis={isNonMobileScreens ? "50%" : undefined}>
          {prodDetail}
        </Box>


      </Box>
      
      {/* <CommentWidget /> */}
      
    </Box>
  );
};

export default ProductPage;