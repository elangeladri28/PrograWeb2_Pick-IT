import {
    EditOutlined,
    LocationOnOutlined,
    EmailOutlined,
    BadgeOutlined,
    KeyOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, Button, useTheme, IconButton, TextField, DialogContent } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
    //const user = useSelector((state) => state.user);

    const [user, setUser] = useState(useSelector((state) => state.user));
    const handleUser = (property, value) => {
        setUser(prev => ({
            ...prev,
            [property]:value 
        }));
    };
    useEffect(() => {
        //console.log(user);
    }, [user]);

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
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;


    const updateSchema = yup.object().shape({
        firstname: yup.string().required("required"),
        lastname: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
        password: yup.string().required("required"),
        location: yup.string().required("required"),
        picture: yup.string().required("required"),
      });

    //console.log(user);
    const update = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value])
        }
    
        console.log(values);
        const savedUserResponse = await fetch("http://localhost:8080/users/" + user._id,
          {
            method: "PUT",
            headers: {xtkn: token},
            body: formData,
          }
        );
    
        const savedUser = await savedUserResponse.json();
        onSubmitProps.resetForm();
      };


    return (
        <Formik
            onSubmit={update}
            initialValues={user}
            validationSchema={updateSchema}
        >
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
                                        disabled={editNames}
                                        label="Nombre(s)"
                                        onBlur={handleBlur}
                                        onChange={(e) => handleUser("firstname", e.target.value)}
                                        value={user.firstname}
                                        name="firstName"
                                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{ gridColumn: "span 2" }}
                                        
                                    />
                                    <TextField
                                        disabled={editNames}
                                        label="Apellidos"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={user.lastname}
                                        name="lastName"
                                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
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
                                        disabled={editAdress}
                                        label="Domicilio"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={user.location}
                                        name="location"
                                        error={Boolean(touched.location) && Boolean(errors.location)}
                                        helperText={touched.location && errors.location}
                                        sx={{ gridColumn: "span 4" }}
                                        />
                                        {/* <Typography color={medium}>{location}</Typography> */}
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
                                        disabled={editEmail}
                                        label="Email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={user.email}
                                        name="email"
                                        error={Boolean(touched.email) && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                        sx={{ gridColumn: "span 4" }}
                                        />
                                        {/* <Typography color={medium}>{email}</Typography> */}
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
                                        disabled={editPassword}
                                        label="Password"
                                        type="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={user.password}
                                        name="password"
                                        error={Boolean(touched.password) && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                        sx={{ gridColumn: "span 4" }}
                                        />
                                        {/* <Typography color={medium}>{password}</Typography> */}
                                    </Box>
                                </Box>
                            </FlexBetween>
                            <IconButton onClick={handlePassword}>
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