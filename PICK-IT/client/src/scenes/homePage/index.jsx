import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import ProductWidget from "scenes/widgets/ProductWidget";
import ProductCarousel from "components/ProductCarousel";
import { useEffect, useState } from "react";

// const getProducts = async () => {
//   const getAll = await fetch("http://localhost:8080/products/getAll",
//       {
//           method: "GET",
//       }
//   );
//   const products = await getAll.json();

//   if (products){
//       //console.log(products);
//   }
// };

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  //const { _id, picturePath } = useSelector((state) => state.user);

  const [productos, setProductos] = useState(null);

  var productComp = [];

  useEffect(()=> {
    fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => res.json())
    .then((product) => {
      setProductos(product);
    });
  }, [])

  if (productos) {
    console.log(productos);
    productos.forEach((item) => {
      productComp.push(<ProductWidget key={item.id} id={item.id}
        nombre={item.title} categoria={item.category} descripcion={item.description}
        precio={item.price} imagen={item.image} />);
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