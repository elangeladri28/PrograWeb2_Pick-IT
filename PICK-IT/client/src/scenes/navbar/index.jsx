import { useState } from "react";
import {
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  ShoppingCart,
  DarkMode,
  LightMode,
  Menu,
  Person,
  ShoppingBag,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout, /*setShoppingCart*/ } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import ShoppingCartWidget from "scenes/widgets/ShoppingCartWidget";
import HistoryIcon from '@mui/icons-material/History';

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    var isLogged = false;
    var fullName =  null;
    
<<<<<<< Updated upstream
    if(user !== null){
        //console.log(user);
        fullName = `${user.firstname} ${user.lastname}`;
        isLogged = true;
    }
=======
    // if(user.email !== undefined){
    //     fullName = `${user.firstname} ${user.lastname}`;
    //     isLogged = true;
    // }
>>>>>>> Stashed changes

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;


    const [state, setState] = useState({
        right:false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <FlexBetween padding="1rem 6%" backgroundColor={alt}>
            <FlexBetween gap="1.75rem">
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    onClick={() => navigate("/")}
                    sx={{
                        "&:hover": {
                            color: primaryLight,
                            cursor: "pointer",
                        },
                    }}
                >
                    PICK-IT
                </Typography>

                {isNonMobileScreens && (
                    <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
                        <InputBase placeholder="Buscar producto..." />
                        <IconButton onClick={() => navigate("/search")}>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                )}
            </FlexBetween>

            {/* DESKTOP NAV */}
            {isNonMobileScreens ? (
                <FlexBetween gap="2rem">
                    <ShoppingCartWidget state={state} setState={setState} toggleDrawer={toggleDrawer} />
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                            <DarkMode sx={{ fontSize: "25px" }} />
                        ) : (
                            <LightMode sx={{ color: dark, fontSize: "25px" }} />
                        )}
                    </IconButton>
                    
                    <IconButton onClick={() => navigate("/shoppingcart")}>
                    <ShoppingCart sx={{ fontSize: "25px" }} />
                    </IconButton>
                    
                    <IconButton onClick={() => navigate("/whishlist")}>
                    <ShoppingBag sx={{ fontSize: "25px" }} />
                    </IconButton>
                   
                    <IconButton onClick={() => navigate("/shophistory")}>
                    <HistoryIcon sx={{ fontSize: "25px" }} />
                    </IconButton>

                    {!isLogged ? (
                        <IconButton onClick={() => navigate("/login")}>
                            <Person sx={{ fontSize: "25px" }} />
                        </IconButton>
                    ) : (
                    <FormControl variant="standard" value={fullName}>
                        <Select
                            value={fullName}
                            sx={{
                                backgroundColor: neutralLight,
                                width: "150px",
                                borderRadius: "0.25rem",
                                p: "0.25rem 1rem",
                                "& .MuiSvgIcon-root": {
                                    pr: "0.25rem",
                                    width: "3rem",
                                },
                                "& .MuiSelect-select:focus": {
                                    backgroundColor: neutralLight,
                                },
                            }}
                            input={<InputBase />}
                        >
                            <MenuItem onClick={() => navigate("/profile/" + user._id)} value={fullName}>
                                <Typography>{fullName}</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => dispatch(setLogout())}>Cerrar Sesión</MenuItem>
                        </Select>
                    </FormControl>
                    )}
                </FlexBetween>
            ) : (
                <IconButton
                    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                >
                    <Menu />
                </IconButton>
            )}

        </FlexBetween>
    );
};

export default Navbar;