import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
            }}
        >
            <Outlet />
        </Box>
    );
}

export default AuthLayout;
