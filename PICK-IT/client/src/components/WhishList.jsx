import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton, Button } from "@mui/material";
import { DeleteOutline, Info } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WishList = ({token = null, wishlist = {wishlist_name: "Default"}}) => {
    const [wishlistItems, setWishlistItems] = useState(null);
    const whishItemsShow = [];
    //console.log(wishlist._id);

    useEffect(() => {
        const getWishlists = async () => {
            const getWishlistsRes = await fetch("http://localhost:8080/wishlist/getItems",
                {
                    method: "GET",
                    headers: { xtkn: token },
                }
            );

            const wishListsItems = await getWishlistsRes.json();
            if (wishListsItems) {
                console.log(wishListsItems);
                setWishlistItems(wishListsItems);
            }
        };

        getWishlists().catch(console.error);
    }, [token]);

    const deleteItemfromWishList = async (wishListID, productID) => {
        const formData = new FormData();
        formData.append("wishlistId", wishListID);
        formData.append("productId", productID);
        
        const deleteWLRes = await fetch("http://localhost:8080/wishlist/remove",
            {
                method: "DELETE",
                headers: { xtkn: token },
                body: formData,
            }
        );

        const deleteWL = await deleteWLRes.json();
        if (deleteWL){
            console.log("Producto de la lista elimnado: " + productID);
        }
    };


    const deleteWishList = async (wishListID) => {
        wishlistItems.forEach(e => {
            if (wishListID === e.wishlist_id)
                deleteItemfromWishList(wishListID, e.product_id);
        });
        
        const formData = new FormData();
        formData.append("wishlistId", wishListID);
        
        const deleteWLRes = await fetch("http://localhost:8080/wishlist/delete",
            {
                method: "DELETE",
                headers: { xtkn: token },
                body: formData,
            }
        );

        const deleteWL = await deleteWLRes.json();
        if (deleteWL){
            console.log("WishList elimnada: " + wishListID);
        }
    };

    const navigate = useNavigate();

    if (wishlistItems) {
        wishlistItems.map(e => {
            if (wishlist._id === e.wishlist_id){
                var product_img = "https://images.pexels.com/photos/1010487/pexels-photo-1010487.jpeg";
            whishItemsShow.push(
                <ImageListItem key={e.product_id}>
                <img
                    src={`${product_img}?w=248&fit=crop&auto=format`}
                    srcSet={`${e.product_img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={e.product_name}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={e.product_name}
                    subtitle={e.product_category}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${e.product_name}`}
                            onClick={()=>navigate("/product/" + e.product_id)}
                        >
                            <Info />
                        </IconButton>
                    }
                    
                    
                />
            </ImageListItem>
            );
                }
            return 0;
        })
    }


    return (
        
        <ImageList sx={{ width: 500, height: "auto", borderRadius: "0.75rem", margin: "1rem"}}>
            <ImageListItem key={wishlist._id} cols={2} >
                <ListSubheader component="div" id={wishlist._id} >
                    {wishlist.wishlist_name}
                    <Button onClick={()=>deleteWishList(wishlist._id)}><DeleteOutline/></Button>
                </ListSubheader>
            </ImageListItem>
            {whishItemsShow}
        </ImageList>
    );
};

export default WishList;