import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import ProductWidget from "scenes/widgets/ProductWidget";
import ProductCarousel from "components/ProductCarousel";
import { useEffect, useState } from "react";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const [productos, setProductos] = useState(null);
  var productComp = [];

  useEffect(()=> {
    fetch("http://localhost:8080/products/getAll")
    .then((res) => res.json())
    .then((product) => {
      setProductos(product.products);
    });
  }, [])

  if (productos) {
    console.log(productos);
    productos.forEach((item) => {
      productComp.push(<ProductWidget key={item._id} id={item._id}
        nombre={item.product_name} categoria={item.product_category} descripcion={item.product_description}
        precio={item.product_price} imagen={item.product_img} />);
    })
  }
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
          sx={{display:"grid",
          gridTemplateColumns:"repeat(4, 1fr)"}}
        >
          {productComp}
        </Box>
      </Box>

    </Box>
  );
};

export default HomePage;