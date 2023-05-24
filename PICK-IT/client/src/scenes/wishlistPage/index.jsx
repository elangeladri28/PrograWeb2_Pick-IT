import { Box, useMediaQuery, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import WishList from "components/WhishList";
import WhislistWidget from "scenes/widgets/WishlistWidget";
import { useEffect, useState } from "react";

const WishlistPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    const token = useSelector((state) => state.token);
    const [wishlists, setWishlists] = useState(null);
    const wishlistsShow = [];

    useEffect(() => {
        const getWishlists = async () => {
            const getWishlistsRes = await fetch("http://localhost:8080/wishlist/get",
                {
                    method: "GET",
                    headers: { xtkn: token },
                }
            );

            const wishLists = await getWishlistsRes.json();
            if (wishLists) {
                //console.log(wishLists);
                setWishlists(wishLists.wishlists);
            }
        };

        getWishlists().catch(console.error);
    }, [token]);

    if (wishlists) {
        wishlists.map(e => {
            wishlistsShow.push(
                <WishList key={e._id} token = {token} wishlist={e}/>
            );
            return 0;
        })
    }

    return (
        <Box>
            <Navbar />
            <WhislistWidget />
            <Box width="100%"
                padding="2rem"
                display={isNonMobileScreens ? "flex" : "block"}
                sx={{ borderRadius: "0.75rem" }}
            >
                <Grid container spacing={1}>
                    <Grid container item spacing={2} justifyContent="center">
                        {wishlistsShow}
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );


};

export default WishlistPage;