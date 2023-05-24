import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import { ProductLargeWidget } from "scenes/widgets/ProductWidget";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    const { nombreP } = useParams();
    const [product, setproduct] = useState(null);
    var producto1 = [];
    console.log(nombreP);

    useEffect(() => {
        fetch("http://localhost:8080/products/name/" + nombreP)
            .then((res) => res.json())
            .then((coms) => {
                setproduct(coms);
                console.log(coms);
            });
    }, [nombreP]);

    // if (product) {
    //     producto1 = <ProductLargeWidget props={product} />

    // }

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
                {product && <ProductLargeWidget product={product} />}

            </Box>
        </Box>
    );
};

export default SearchPage;