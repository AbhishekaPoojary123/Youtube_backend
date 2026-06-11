import { Button } from "@mui/material";

function AppButton({ children, loading = false, ...props }) {
    return (
        <Button
            fullWidth
            variant="contained"
            size="large"
            disabled={loading}
            {...props}
        >
            {loading ? "Loading..." : children}
        </Button>
    );
}

export default AppButton;
