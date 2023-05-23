import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import {Box, Fab, TextField, Zoom} from '@mui/material/';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SnackWidget from './SnackWidget';

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};

const WhishlistWidget = () => {
    const theme = useTheme();

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const [snack, setSnack] = useState({open: false, type: 'info', message: ''});
    const OnSnackClose = ()=>{
        setSnack({...snack, open: false});
    }

    const [nombreWish, setNombreWish] = useState("");
    const token = useSelector((state) => state.token);

    const handleChange = e =>{
        setNombreWish(e.target.value);
        //console.log(nombreWish);
    }

    const newWhisList = async () => {
        const formData = new FormData();
        formData.append("wishlist_name", nombreWish);
        
        const newWishListRes = await fetch("http://localhost:8080/wishlist/new",
            {
                method: "POST",
                headers: { xtkn: token },
                body: formData,
            }
        );

        const newWishList = await newWishListRes.json();
        if (newWishList){
            setNombreWish("");
        }
    };

    const handleSubmit = () => {
        if (nombreWish) {
            setSnack({open: true, type: 'success', message:'Perfil actualizado exitosamente.'});
            newWhisList();
        } else {
            setSnack({open: true, type: 'error', message:'Asigna un nombre a tu nueva bolsa.'});
        }
    };

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                display: 'flex-center',
                position: 'relative',
                margin: 3,
            }}
        >
            <Box width="100%">
            <TextField fullWidth id="filled-basic" label="Nueva Bolsa de Deseos" variant="filled"
            value={nombreWish} onChange={(e) => handleChange(e)}/>
            <SnackWidget 
            open={snack.open} 
            type={snack.type}
            message={snack.message}
            handleClose={OnSnackClose}
            />
            </Box>
            <Zoom
                in = {true}
                timeout={transitionDuration}
                style={{
                    transitionDelay: `${transitionDuration.exit} + ms`,
                }}
                unmountOnExit
            >
                <Fab sx={fabStyle} aria-label="Add" color="primary">
                    <AddIcon onClick={()=>handleSubmit()} />
                </Fab>
            </Zoom>
        </Box>
        
    );
}

export default WhishlistWidget;