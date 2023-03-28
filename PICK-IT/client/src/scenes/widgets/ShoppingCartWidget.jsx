import React from "react";
import { Drawer, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Box, useTheme, } from "@mui/material";
import { VerifiedRounded, ProductionQuantityLimitsRounded, VerifiedUserRounded } from "@mui/icons-material";
import WidgetWrapper from "components/WidgetWrapper";
import ProductWidget from "./ProductWidget";


export default function ShoppingCartWidget({ state, setState, toggleDrawer }) {

    const { palette } = useTheme();
    const dark = palette.primary.dark;
    const main = palette.background.default;
    const medium = palette.neutral.medium;

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600,
            backgroundColor: dark,
            justifyContent: "flex-end",

            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box>
            <List>
                {['Nvidia GeForce RTX 3080', 'Nvidia GeForce RTX 3070', 'Nvidia GeForce RTX 3090',
                    'Nvidia GeForce RTX 3060 Ti', 'AMD Radeon RX 6600 XT'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <VerifiedRounded />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>
            </Box>
            <Divider />
            <Box>
            <List>
                {['Comprar', 'Limpiar',].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <VerifiedUserRounded /> : <ProductionQuantityLimitsRounded />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            </Box>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        PaperProps={{
                            sx:{
                                backgroundColor: main
                            }
                        }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}