import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import { Typography, useTheme, Box, Divider, Grid, Button } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import { useSelector } from 'react-redux';
import SnackWidget from './SnackWidget';
import { useState } from 'react';
//import { useNavigate } from "react-router-dom";


const ProductDetailWidget = ({props}) => {
    const { palette } = useTheme();
    //const navigate = useNavigate();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const token = useSelector((state) => state.token);
    const [snack, setSnack] = useState({open: false, type: 'info', message: ''});
    const OnSnackClose = ()=>{
        setSnack({...snack, open: false});
    }

    const addPCar = async () => {
        const formData = new FormData();
        formData.append("productId", props.id);
        
        console.log(formData);
        const prodAddcarRes = await fetch("http://localhost:8080/carts/add",
            {
                method: "POST",
                headers: { xtkn: token },
                body: formData,
            }
        );
    
        const prodAddcar = await prodAddcarRes.json();
        if (prodAddcar){
            setSnack({open: true, type: 'success', message:'Producto añadido al carrito de compras.'});
        } else {
            setSnack({open: true, type: 'error', message:'Algo salió mal :/'});
        }
    };
    
    const handleSubmit = ({type = "error"}) => {
        
        if (token) {
            if (type === "car")
                addPCar();
            if (type === "wish")
                setSnack({open: true, type: 'success', message:'Producto añadido al tu wishlist'});
        }
    }

    return (
        <Box>
            <SnackWidget 
            open={snack.open} 
            type={snack.type}
            message={snack.message}
            handleClose={OnSnackClose}
            />
            <FlexBetween p="1rem 0">
                <Typography color={dark} variant="h1" fontWeight="700"> {props.title}</Typography>
                <Typography color={main} variant="h1" fontWeight="500"> ${props.price} </Typography>
            </FlexBetween>

            <Divider />

            <Box p="1rem 0">
                <Typography color={main} variant="h3"> Descripción </Typography>
                <Typography color={medium} variant="h4" m="0.5rem 0"> {props.description} </Typography>
            </Box>

            <Divider />

            <Box p="1rem 0">
                <FlexBetween>
                    <Typography color={main} variant="h3" p="1rem 0">Caracteristicas</Typography>
                    <Typography color={main} variant="h3" p="1rem 0">Rendimiento</Typography>
                </FlexBetween>

                <Grid container>
                    <Grid item xs>
                        <Typography color={medium} variant="h5"> 32 Unidades de procesamiento y aceleradores de rayos </Typography>
                        <Typography color={medium} variant="h5"> 32 MB Infinity Cache </Typography>
                        <Typography color={medium} variant="h5"> 8 GB GDDR6 </Typography>
                        <Typography color={medium} variant="h5"> Hasta 2359 MHz Reloj de juego </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem > <SportsEsportsRoundedIcon sx={{ fontSize: "40px" }} /> </Divider>
                    <Grid item xs textAlign="right">
                        <Typography color={medium} variant="h5" fontWeight="700"> Configuración máxima en 1080p
                        </Typography>
                        <Typography color={medium} variant="h5"> 92 FPS Assassins Creed Valhalla </Typography>
                        <Typography color={medium} variant="h5"> 164 FPS Battlefield 5 </Typography>
                        <Typography color={medium} variant="h5">137 FPS Forza Horizon 4 </Typography>
                        <Typography color={medium} variant="h5">186 FPS Apex Legends </Typography>
                        <Typography color={medium} variant="h5">289 FPS DOTA 2 </Typography>
                        <Typography color={medium} variant="h5">553 FPS Valorant </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Divider />

            <FlexBetween p="1rem 0">
                <Typography color={main}>AMD</Typography>
                <Typography color={medium}> {props.category} </Typography>
            </FlexBetween>

            <Box>
                <Button
                    fullWidth
                    type="submit"
                    onClick={() =>handleSubmit({type: "car"})}
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
                    onClick={()=>handleSubmit({type: "wish"})}
                    sx={{
                        m: "1rem 0 0",
                        backgroundColor: main,
                        color: medium,
                        "&:hover": { color: main },
                    }}
                >
                    AGREGAR A LA BOLSA DE DESEOS
                </Button>
                
            </Box>

        </Box>
    );
};

export default ProductDetailWidget;