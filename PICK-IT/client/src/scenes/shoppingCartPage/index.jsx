import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import TableContainer from "scenes/widgets/ProductCartList";
import WidgetWrapper from "components/WidgetWrapper";
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SnackWidget from "scenes/widgets/SnackWidget";

export function BasicButtons() {
    return (
        <Button variant="contained">Contained</Button>
    );
}


const ShoppingCartPage = () => {

    const navigate = useNavigate();

    const token = useSelector((state) => state.token);
    const [snack, setSnack] = useState({ open: false, type: 'info', message: '' });
    const OnSnackClose = () => {
        setSnack({ ...snack, open: false });
    }

    const purchase = async () => {
        let res = await fetch("http://localhost:8080/purchase/pay",
            {
                method: "POST",
                headers: { xtkn: token }
            }
        );

        res = await res.json();

        if(res){
            setSnack({open: true, type: 'success', message:'Compra realizada exitosamente.'});
        } else {
            setSnack({open: true, type: 'error', message:'No se pudo realizar su compra.'});
        }

        const cartItems = document.querySelectorAll('tbody>tr');
        cartItems.forEach( item => item.remove());
        

        console.log(res);
    }

    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    return (
        <Box>
            <Navbar />
            <SnackWidget 
            open={snack.open} 
            type={snack.type}
            message={snack.message}
            handleClose={OnSnackClose}
            />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                justifyContent="center"
                flexDirection="column"
            >
                <WidgetWrapper>
                    <TableContainer />
                </WidgetWrapper>
                <Button onClick={() => purchase()} variant="contained" style={{ width: "100%", fontSize: 20 }}>Comprar</Button>
                <Button color={"inherit"} onClick={() => navigate("/historyPurchase")} variant="contained" style={{ width: "100%", fontSize: 20, marginTop: 10, color: "black" }}>Ver historial de compras</Button>
            </Box>
        </Box>
    );
};


export default ShoppingCartPage;