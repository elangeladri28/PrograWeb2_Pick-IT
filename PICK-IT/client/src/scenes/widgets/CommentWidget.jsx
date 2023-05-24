import { Typography, useTheme, Box, Card, CardContent } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";

const CommentWidget = (props) => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const [comments, setComments] = useState();
    const showComments = [];
    useEffect(() => {
        fetch("http://localhost:8080/comment/" + props.product_id)
        .then((res) => res.json())
        .then((coms) => {
            setComments(coms);
            //console.log(coms);
        });
    }, [props]);

    if (comments){
        console.log(comments);
        comments.map(e =>{
            showComments.push(
                <Card key={e._id} sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography color={medium} gutterBottom variant="h5" component="div">
                        {e.user_email}
                    </Typography>
                    <Typography color={dark} variant="body2">
                        {e.content}
                    </Typography>
                </CardContent>
            </Card>
            )
            return 0;
        })
    }
        
    return (
        <Box display="flex"
            width="100%"
            padding="2rem 6%"
            gap="2rem"
            flexDirection="column"
        >
            <Typography color={main} variant="h2" fontWeight="500"> Comentarios </Typography>

            <WidgetWrapper display="flex"
                width="100%"
                padding="2rem 6%"
                gap="1rem"
                flexWrap="wrap"
                justifyContent="center"
            >
                {showComments}

            </WidgetWrapper>

        </Box>
    );


};

export default CommentWidget;