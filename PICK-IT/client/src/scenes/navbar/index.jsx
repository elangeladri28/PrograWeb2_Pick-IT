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
    ConstructionOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout, /*setShoppingCart*/ } from "state";
import { json, useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import ShoppingCartWidget from "scenes/widgets/ShoppingCartWidget";
import HistoryIcon from '@mui/icons-material/History';

const Navbar = () => {

    const [selectedResult, setSelectedResult] = useState(null);
    const [results, setResults] = useState([]);
    const [autocompleteResults, setAutocompleteResults] = useState([]);

    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const styles = {
        searchInput: {
            backgroundColor: "#f2f2f2",
            borderRadius: "9px",
            padding: "0.1rem 1.5rem",
        },
        autocompleteList: {
            listStyle: "none",
            padding: 0,
            margin: 0,
        },
        autocompleteListItem: {
            cursor: "pointer",
            padding: "0.5rem",
            backgroundColor: "#ffffff",
        },
        autocompleteListItemSelected: {
            backgroundColor: "#f2f2f2",
        },
    };

    const [input, setInput] = useState("");
    const fetchData = (value) => {

        fetch("http://localhost:8080/products/getAll").then((response) => response.json())
            .then((json) => {
                const results = json.products.filter((product) =>
                    product.product_name.toLowerCase().includes(value.toLowerCase())
                );
                setResults(results);
                setAutocompleteResults(results.slice(0, 4));

            });
    }



    const handleChange = (value) => {
        setInput(value);
        if (value === "") {
            setAutocompleteResults([]);
        } else {
            fetchData(value);
        }
        setSelectedResult(null);
    }

    const [selectedValue,setValue] = useState();

    const handleResultClick = (result) => {
        setSelectedResult(result);
        setInput(result.product_name);
        setAutocompleteResults([]);

        setValue(result.product_name);
        

        console.log(selectedValue);
    };



    const user = useSelector((state) => state.user);
    var isLogged = false;
    var fullName = null;

    if (user !== null) {
        //console.log(user);
        fullName = `${user.firstname} ${user.lastname}`;
        isLogged = true;
    }

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;


    const [state, setState] = useState({
        right: false,
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
                        <InputBase placeholder="Buscar producto..." value={input} onChange={(e) => handleChange(e.target.value)} endAdornment={
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0,
                                backgroundColor: '#ffffff',
                                borderRadius: '0 0 9px 9px',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                            }}>
                                {autocompleteResults.length > 0 && (
                                    <ul className="autocomplete-list" style={styles.autocompleteList}>
                                        {autocompleteResults.map((result, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleResultClick(result)}
                                                style={{
                                                    ...styles.autocompleteListItem,
                                                    backgroundColor: selectedResult === result ? "black" : "black",
                                                }}
                                            >
                                                {result.product_name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        } />
                        <IconButton onClick={() => navigate("/search/"+selectedValue)}>
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

                    <IconButton onClick={() => navigate("/historyPurchase")}>
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