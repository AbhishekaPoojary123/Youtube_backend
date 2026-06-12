import { Snackbar, Alert } from "@mui/material";

function AppSnackbar({ open, onClose, severity = "success", message }) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={onClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <Alert onClose={onClose} severity={severity} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
}

export default AppSnackbar;
