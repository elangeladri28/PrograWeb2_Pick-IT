import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import ProductWidget from "scenes/widgets/ProductWidget";
import ProductDetailWidget from "scenes/widgets/ProductDetailWidget";
//import ProductImage from "components/ProductImage";
import CommentWidget from "scenes/widgets/CommentWidget";

const ProductPage = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  var prodMostrado = null;
  var prodDetail = null;
  var showCommentW = null;
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  useEffect(() => {
    fetch("http://localhost:8080/products/" + productId)
      .then((res) => res.json())
      .then((product) => {
        setProducto(product);
      });
  }, [productId])

  if (producto){
    prodMostrado = <ProductWidget key={producto._id} id={producto._id} 
    nombre={producto.product_name} categoria={producto.product_category} descripcion={producto.product_description}
    precio={producto.product_price} imagen={producto.product_img}
    />;

    prodDetail = <ProductDetailWidget props={producto}/>
    
    showCommentW = <CommentWidget product_id={producto._id} />
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

      {showCommentW}
      
    </Box>
  );
};

export default ProductPage;