import { Typography, useTheme, Box, Divider, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import { useSelector } from 'react-redux';
import SnackWidget from './SnackWidget';
import { useEffect, useState } from 'react';
//import { useNavigate } from "react-router-dom";


const ProductDetailWidget = ({ props }) => {
    const { palette } = useTheme();
    //const navigate = useNavigate();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const token = useSelector((state) => state.token);
    const [snack, setSnack] = useState({ open: false, type: 'info', message: '' });
    const OnSnackClose = () => {
        setSnack({ ...snack, open: false });
    }

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
                setWishlists(wishLists.wishlists);
            }
        };

        getWishlists().catch(console.error);
    }, [token]);

    if (wishlists) {
        wishlists.forEach(e => {
            wishlistsShow.push(
                <MenuItem key={e._id} value={e._id}>{e.wishlist_name}</MenuItem>
            );
        })
    }

    const addPCar = async () => {
        const formData = new FormData();
        formData.append("productId", props._id);

        console.log(props._id);
        const prodAddcarRes = await fetch("http://localhost:8080/carts/add",
            {
                method: "POST",
                headers: { xtkn: token },
                body: formData,
            }
        );

        const prodAddcar = await prodAddcarRes.json();
        if (prodAddcar) {
            setSnack({ open: true, type: 'success', message: 'Producto añadido al carrito de compras.' });
        } else {
            setSnack({ open: true, type: 'error', message: 'Algo salió mal :/' });
        }
    };

    const addWList = async () => {
        const formData = new FormData();
        formData.append("productId", props._id);
        formData.append("wishlistId", WL_id);

        console.log(props._id);
        const prodAddWishRes = await fetch("http://localhost:8080/wishlist/add",
            {
                method: "POST",
                headers: { xtkn: token },
                body: formData,
            }
        );

        const prodAddWish = await prodAddWishRes.json();
        if (prodAddWish) {
            setSnack({ open: true, type: 'success', message: 'Producto añadido a .' });
        } else {
            setSnack({ open: true, type: 'error', message: 'Algo salió mal :/' });
        }
    }

    const handleSubmit = ({ type = "error" }) => {
        if (token) {
            if (type === "car")
                addPCar();
            if (type === "wish"){
                if (WL_id)
                    addWList();
                else
                    setSnack({ open: true, type: 'warning', message: 'Elige tu bolsa de deseos.' });
            }
        }
    }

    const [WL_id, setWL] = useState('');
    const handleChange = (event) => {
        setWL(event.target.value);
    };


    return (
        <Box>
            <SnackWidget
                open={snack.open}
                type={snack.type}
                message={snack.message}
                handleClose={OnSnackClose}
            />
            <FlexBetween p="1rem 0">
                <Typography color={dark} variant="h1" fontWeight="700"> {props.product_name}</Typography>
                <Typography color={main} variant="h1" fontWeight="500"> ${props.product_price} </Typography>
            </FlexBetween>

            <Divider />

            <Box p="1rem 0">
                <Typography color={main} variant="h3"> Descripción </Typography>
                <Typography color={medium} variant="h4" m="0.5rem 0"> {props.product_description} </Typography>
            </Box>

            <Divider />

            <FlexBetween p="1rem 0">
                <Typography color={main}>AMD</Typography>
                <Typography color={medium}> {props.product_category} </Typography>
            </FlexBetween>

            <Box>
                <Button
                    fullWidth
                    type="submit"
                    onClick={() => handleSubmit({ type: "car" })}
                    sx={{
                        m: "1rem 0 0",
                        backgroundColor: palette.primary.main,
                        color: palette.background.alt,
                        "&:hover": { color: palette.primary.main },
                    }}
                >
                    AÑADIR AL CARRITO
                </Button>

            </Box>
            <Box display="flex" justifyContent="center">
                <Button
                    fullWidth
                    type="submit"
                    onClick={() => handleSubmit({ type: "wish" })}
                    sx={{
                        m: "1rem 0 0",
                        backgroundColor: main,
                        color: medium,
                        "&:hover": { color: main },
                    }}
                >
                    AGREGAR A LA BOLSA DE DESEOS
                </Button>
                <FormControl sx={{ m: "1rem 0 0", minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Bolsa</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={WL_id}
                        label="Bolsa"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>Ninguna</em>
                        </MenuItem>
                        {wishlistsShow}
                    </Select>
                </FormControl>
            </Box>

        </Box>
    );
};

export default ProductDetailWidget;