import { EditOutlined } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";


const postComment = async (token, prodID, comment) => {
    const formData = new FormData();
    formData.append("productId", prodID);
    formData.append("commentContent", comment);

    const res = await fetch("http://localhost:8080/comment/post",
        {
            method: "POST",
            headers: { xtkn: token },
            body: formData,
        }
    );

    if (comment == null)
        return;

    const req = await res.json();
    if (req) {
        console.log("Producto: " + prodID + " Comentario: " + comment);
    }
}

const CommentWidget = (props) => {
    //console.log(props);
    const [comment, setComment] = useState();

    const handleChangeComment = (e) => {
        setComment(e.target.value);
        console.log(comment);
    };


    return (
        <Box display="flex"
            gap="1rem"
            flexDirection="rows"
        >
            <TextField id="outlined-multiline-flexible" label="Comentario" multiline maxRows={4} value={comment}
             onChange={(e) =>handleChangeComment(e)}/>
            <IconButton onClick={()=>postComment(props.token, props.product_id, comment)}> <EditOutlined /> </IconButton>

        </Box>
    );
};

export default CommentWidget;