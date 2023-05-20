import { Typography, useTheme, Box } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useNavigate } from "react-router-dom";

const ProductWidget = ({
  id = "0",
  nombre = "AMD Radeon RX 6600 ZT", 
  marca = "AMD",
  proveedor = "amd.com",
  descripcion = "La tarjeta gráfica AMD Radeon™ RX 6600 XT, diseñada con la revolucionaria arquitectura AMD RDNA™ 2, nació para ofrecerte la mejor experiencia de juego en 1080p.",
  categoria = "Tarjetas gráficas",
  precio = "$5,500" ,
  imagen = "../assets/amd-radeon-rx-6600-xt.webp",
}) => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper margin="1rem">
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          {nombre}
        </Typography>
        <Typography color={medium} onClick={() => navigate("/product/" + id)}
          sx={{
            "&:hover": {
              color: main,
              cursor: "pointer",
            },
          }}>Ver detalles</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={imagen}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}> {marca} </Typography>
        <Typography color={medium}> {proveedor} </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0"> {descripcion} </Typography>
    </WidgetWrapper>
  );
};

const ProductLargeWidget = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper margin="1rem">
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          NVIDIA Geforce RTX 3080
        </Typography>
        <Typography color={medium}>Ver detalles</Typography>

      </FlexBetween>

      <FlexBetween>
        <Box maxHeight="200px" maxWidth="200px" onClick={() => navigate("/product")}>
          <img
            width="100%"
            height="100%"
            alt="advert"
            src="../assets/nvidia-geforce-rtx-3080.webp"
            style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
          />
        </Box>
        <Box p="2rem">
          <Typography color={medium} m="0.5rem 0">
            Las tarjetas gráficas GeForce RTX™ 3080 Ti y RTX 3080 ofrecen el alto rendimiento que buscan los gamers.
            Basado en Ampere, la segunda generación de la arquitectura RTX de NVIDIA, cuentan con Núcleos RT mejorados y Núcleos Tensor, nuevos multiprocesadores de transmisión y memorias GDDR6X súper rápidas, para una experiencia de juego simplemente increíble.
          </Typography>
        </Box>

      </FlexBetween>

      <FlexBetween>
        <Typography color={main}>NVIDIA</Typography>
        <Typography color={medium}>nvidia.com</Typography>
      </FlexBetween>
    </WidgetWrapper>
  );
};

const ProductWidgetCart = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper margin="1rem">
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          NVIDIA Geforce RTX 3080
        </Typography>
        <Typography color={medium}>Ver detalles</Typography>

      </FlexBetween>

      <FlexBetween>
        <Box maxHeight="200px" maxWidth="200px" onClick={() => navigate("/product")}>
          <img
            width="100%"
            height="100%"
            alt="advert"
            src="../assets/nvidia-geforce-rtx-3080.webp"
            style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
          />
        </Box>
        <Box p="2rem">
          {/* <Typography color={medium} m="0.5rem 0">
            Las tarjetas gráficas GeForce RTX™ 3080 Ti y RTX 3080 ofrecen el alto rendimiento que buscan los gamers.
            Basado en Ampere, la segunda generación de la arquitectura RTX de NVIDIA, cuentan con Núcleos RT mejorados y Núcleos Tensor, nuevos multiprocesadores de transmisión y memorias GDDR6X súper rápidas, para una experiencia de juego simplemente increíble.
          </Typography> */}
        </Box>

      </FlexBetween>

      <FlexBetween>
        <Typography color={main}>NVIDIA</Typography>
        <Typography color={medium}>nvidia.com</Typography>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default ProductWidget;
export { ProductLargeWidget };
export { ProductWidgetCart };