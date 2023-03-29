import { ImageList, ImageListItem, Box } from "@mui/material";

export default function StandardImageList() {
    return (
      <Box display="flex" justifyContent="center">
      <ImageList 
      sx={{ width: 500, height: 170, alignItems:"center", justifyItems:"center"}} 
      cols={4} rowHeight={100}
      display="flex"
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
    );
  }
  
  const itemData = [
    {
      img: '../assets/amd-radeon-rx-6600-xt.webp',
      title: 'Graphic AMD',
    },
    {
      img: '../assets/nvidia-geforce-rtx-3070.webp',
      title: 'Graphic NVIDIA 1',
    },
    {
      img: '../assets/nvidia-geforce-rtx-3080.webp',
      title: 'Graphic NVIDIA 2',
    },
    {
        img: '../assets/nvidia-rtx-3080-feature.webp',
        title: 'Graphic NVIDIA 3',
      },
  ];