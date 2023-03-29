import {
    EditOutlined,
    LocationOnOutlined,
    EmailOutlined,
    BadgeOutlined,
    KeyOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, Button, useTheme, IconButton, TextField, DialogContent } from "@mui/material";
import { Formik } from "formik";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
    //const [user, setUser] = useState(null);
    const user = "userId";
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const {
        firstName = "Jesús",
        lastName = "Ortíz",
        location = "Monterrey, Nuevo Leon",
        email = "jesusortiz@gmail.com",
        password = "1234",
    } = user;

    return (
        <Formik>
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <WidgetWrapper>
                    <form>
                        {/* FOTO Y NOMBRE */}
                        <Box display="flex" justifyContent="center" pb="1rem"
                        onClick={() => navigate(`/profile/${userId}`)}
                        >
                        <UserImage image={picturePath} size={"250px"} />
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
                                        disabled
                                        label="Nombre(s)"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={firstName}
                                        name="firstName"
                                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{ gridColumn: "span 2" }}
                                        
                                    />
                                    <TextField
                                        disabled
                                        label="Apellidos"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={lastName}
                                        name="lastName"
                                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                </Box>
                                </Box>
                            </FlexBetween>
                            <IconButton>
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
                                        disabled
                                        label="Domicilio"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={location}
                                        name="location"
                                        error={Boolean(touched.location) && Boolean(errors.location)}
                                        helperText={touched.location && errors.location}
                                        sx={{ gridColumn: "span 4" }}
                                        />
                                        {/* <Typography color={medium}>{location}</Typography> */}
                                    </Box>
                                </Box>
                            </FlexBetween>
                            <IconButton>
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
                                        disabled
                                        label="Email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={email}
                                        name="email"
                                        error={Boolean(touched.email) && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                        sx={{ gridColumn: "span 4" }}
                                        />
                                        {/* <Typography color={medium}>{email}</Typography> */}
                                    </Box>
                                </Box>
                            </FlexBetween>
                            <IconButton>
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
                                        disabled
                                        label="Password"
                                        type="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={password}
                                        name="password"
                                        error={Boolean(touched.password) && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                        sx={{ gridColumn: "span 4" }}
                                        />
                                        {/* <Typography color={medium}>{password}</Typography> */}
                                    </Box>
                                </Box>
                            </FlexBetween>
                            <IconButton>
                                <EditOutlined sx={{ color: main }} />
                            </IconButton>
                        </FlexBetween>

                        <Box display="flex" justifyContent="flex-end">
                            <Button
                                type="submit"
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
                    </form>
                </WidgetWrapper>
            )}
        </Formik>
    );
};

export default UserWidget;