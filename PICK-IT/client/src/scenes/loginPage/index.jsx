import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const primaryDark = theme.palette.primary.dark;

    return (
        <Box>
          <Box
            width="100%"
            backgroundColor={theme.palette.background.alt}
            p="1rem 6%"
            textAlign="center"
          >
            <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    onClick={() => navigate("/")}
                    sx={{
                        "&:hover": {
                            color: primaryDark,
                            cursor: "pointer",
                        },
                    }}
                >
                    PICK-IT
                </Typography>
          </Box>
    
          <Box
            width={isNonMobileScreens ? "50%" : "93%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
          >
            <Typography fontWeight="500" variant="h5" >
              ¡Bienvenido a PICK-IT!
            </Typography>
            <Typography fontWeight="200" variant="h6" sx={{ mb: "1.5rem" }}>
            "Las partes que te llevan al siguiente nivel."
            </Typography>
            <Form />
          </Box>
        </Box>
      );
};

export default LoginPage;