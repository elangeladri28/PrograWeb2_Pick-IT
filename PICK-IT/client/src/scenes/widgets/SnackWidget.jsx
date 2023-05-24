import { forwardRef } from "react";
import MuiAlert from '@mui/material/Alert';
import { Snackbar, Stack,} from '@mui/material';

const Alert = forwardRef(function Alert(props, ref) {
     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackWidget = ({open, type = "info", message = "msg prueba", handleClose = undefined}) => {
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
        </Stack>
    );
};

export default SnackWidget;