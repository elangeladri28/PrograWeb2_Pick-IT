import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const ProductWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper margin="1rem">
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          AMD Radeon RX 6600 ZT
        </Typography>
        <Typography color={medium}>Ver detalles</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="../assets/amd-radeon-rx-6600-xt.webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>AMD</Typography>
        <Typography color={medium}>amd.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      La tarjeta gráfica AMD Radeon™ RX 6600 XT, diseñada con la revolucionaria arquitectura AMD RDNA™ 2, 
      nació para ofrecerte la mejor experiencia de juego en 1080p.
      </Typography>
    </WidgetWrapper>
  );
};

export default ProductWidget;