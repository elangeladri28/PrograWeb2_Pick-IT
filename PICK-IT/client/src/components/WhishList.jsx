import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton, Button } from "@mui/material";
import { DeleteOutline, Info } from "@mui/icons-material";
import { useEffect, useState } from "react";

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
                //console.log(wishListsItems);
                setWishlistItems(wishListsItems);
            }
        };

        getWishlists().catch(console.error);
    }, [token]);

    const deleteWishList = async (wishListID) => {
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

    if (wishlistItems) {
        wishlistItems.map(e => {
            whishItemsShow.push(
                <ImageListItem key={e._id}>
                <img
                    src={`${e.image}?w=248&fit=crop&auto=format`}
                    srcSet={`${e.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={e.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={e.title}
                    subtitle={e.author}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${e.title}`}
                        >
                            <Info />
                        </IconButton>
                    }
                />
            </ImageListItem>
            );
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