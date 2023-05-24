import { EditOutlined } from "@mui/icons-material";
import { Typography, useTheme, Box, IconButton, TextField } from "@mui/material";
//import { useNavigate } from "react-router-dom";

const CommentWidget = (props) => {
    const { palette } = useTheme();
    //const navigate = useNavigate();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <Box display="flex"
            width="100%"
            gap="1rem"
            flexDirection="rows"
        >
            <TextField id="outlined-multiline-flexible" label="Comentario" multiline maxRows={4} />
            <IconButton onClick={() => { }}> <EditOutlined /> </IconButton>

        </Box>
    );


};

export default CommentWidget;