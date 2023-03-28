import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton } from "@mui/material";
import { Info } from "@mui/icons-material";

const WishList = () => {
    const itemData = [
        {
            img: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Titulo',
            author: 'Descripción',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Minimalist Setup',
            author: '@rJosh Sorenson',
        },
        {
            img: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Portatil',
            author: '@Eduardo Dutra',
        },
        {
            img: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Teclado',
            author: '@Soumil Kumar',
            cols: 2,
        },
        {
            img: 'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Espacio de trabajo',
            author: '@MateuszDch',
            cols: 2,
        },
        {
            img: 'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Apple Magic House',
            author: '@Vojtech Okenka',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
            cols: 2,
        },
    ];


    return (
        <ImageList sx={{ width: 500, height: "auto", borderRadius: "0.75rem", margin: "1rem"}}>
                    <ImageListItem key="Subheader" cols={2}>
                        <ListSubheader component="div">Bolsas de Deseos</ListSubheader>
                    </ImageListItem>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <Info />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
    );
};

export default WishList;