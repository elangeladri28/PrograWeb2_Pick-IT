import {
    EditOutlined,
    LocationOnOutlined,
    EmailOutlined,
    BadgeOutlined,
    KeyOutlined,
} from "@mui/icons-material";
import { Box, Divider, Button, useTheme, IconButton, TextField} from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "state";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = () => {
    const [user, setUser] = useState(useSelector((state) => state.user));
    const dispatch = useDispatch();

    const handleChangeForm = (e) => {
        let obj = {};
        obj[e.target.name] = e.target.value;
        const nuevoObj = {...user, ...obj};
        setUser(nuevoObj);
    };

    const [editNames, setEditNames] = useState(true);
    const handleNames = () => {
        setEditNames(!editNames);
    };
    const [editAdress, setAdress] = useState(true);
    const handleAdress = () => {
        setAdress(!editAdress);
    };
    const [editEmail, setEmail] = useState(true);
    const handleEmail = () => {
        setEmail(!editEmail);
    };
    const [editPassword, setPassword] = useState(true);
    const handlePassword = () => {
        setPassword(!editPassword);
    };
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const main = palette.neutral.main;

    const update = async () => {
        //console.log(user);

        const formData = new FormData();
        for (const [key, value] of Object.entries(user)) {
            formData.append(key, value);
        }

        const savedUserResponse = await fetch("http://localhost:8080/users/" + user._id,
            {
                method: "PUT",
                headers: { xtkn: token },
                body: formData,
            }
        );

        const savedUser = await savedUserResponse.json();
        if (savedUser){
            dispatch(
                setLogin({
                user: user,
                token: token})
            );
        }
    };

    return (

        <WidgetWrapper>
            <div >
                {/* FOTO Y NOMBRE */}
                <Box display="flex" justifyContent="center" pb="1rem"
                    onClick={() => navigate(`/profile/${user._id}`)}
                >
                    <UserImage image={"http://localhost:8080/" + user.avatar} size={"250px"} />
                </Box>

                <Divider />

                <FlexBetween
                    gap="0.5rem"
                >

                    <FlexBetween gap="1rem">
                        <Box p="1rem 0">
                            <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                                <BadgeOutlined fontSize="large" sx={{ color: main }} />
                                <TextField
                                    required
                                    disabled={editNames}
                                    label="Nombre(s)"
                                    onChange={(e) => handleChangeForm(e)}
                                    value={user.firstname}
                                    name="firstname"
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    required
                                    disabled={editNames}
                                    label="Apellidos"
                                    onChange={(e) => handleChangeForm(e)}
                                    value={user.lastname}
                                    name="lastname"
                                    sx={{ gridColumn: "span 2" }}
                                />
                            </Box>
                        </Box>
                    </FlexBetween>
                    <IconButton onClick={handleNames}>
                        <EditOutlined sx={{ color: main }} />
                    </IconButton>
                </FlexBetween>

                <Divider />

                {/* DOMICILIO */}
                <FlexBetween gap="1rem">
                    <FlexBetween gap="1rem">
                        <Box p="1rem 0">
                            <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                                <LocationOnOutlined fontSize="large" sx={{ color: main }} />
                                <TextField
                                    required
                                    disabled={editAdress}
                                    label="Domicilio"
                                    onChange={(e) => handleChangeForm(e)}
                                    value={user.location}
                                    name="location"
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </Box>
                        </Box>
                    </FlexBetween>
                    <IconButton onClick={handleAdress}>
                        <EditOutlined sx={{ color: main }} />
                    </IconButton>
                </FlexBetween>


                <Divider />

                {/* EMAIL */}
                <FlexBetween gap="1rem">
                    <FlexBetween gap="1rem">
                        <Box p="1rem 0">
                            <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                                <EmailOutlined fontSize="large" sx={{ color: main }} />
                                <TextField
                                    required
                                    disabled={editEmail}
                                    label="Email"
                                    onChange={(e) => handleChangeForm(e)}
                                    value={user.email}
                                    name="email"
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </Box>
                        </Box>
                    </FlexBetween>
                    <IconButton onClick={handleEmail}>
                        <EditOutlined sx={{ color: main }} />
                    </IconButton>
                </FlexBetween>

                <Divider />

                <FlexBetween gap="1rem">
                    <FlexBetween gap="1rem">
                        <Box p="1rem 0">
                            <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                                <KeyOutlined fontSize="large" sx={{ color: main }} />
                                <TextField
                                    required
                                    disabled={editPassword}
                                    label="Password"
                                    type="password"
                                    onChange={(e) => handleChangeForm(e)}
                                    value={user.password}
                                    name="password"
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </Box>
                        </Box>
                    </FlexBetween>
                    <IconButton onClick={handlePassword}>
                        <EditOutlined sx={{ color: main }} />
                    </IconButton>
                </FlexBetween>

                <Box display="flex" justifyContent="flex-end">
                    <Button
                        onClick={()=>update()}
                        sx={{
                            m: "1rem 0",
                            backgroundColor: palette.primary.main,
                            color: palette.background.alt,
                            "&:hover": { color: palette.primary.main },
                        }}
                    >
                        Guardar
                    </Button>
                </Box>
            </div>
        </WidgetWrapper>
    );
};

export default UserWidget;