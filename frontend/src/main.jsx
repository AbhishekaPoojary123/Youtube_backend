import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme.js";
import { AuthProvider } from "./context/authContext/AuthProvider.jsx";
import { SnackbarProvider } from "./context/snackbarContext/SnackbarProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <AuthProvider>
                <SnackbarProvider>
                    <App />
                </SnackbarProvider>
            </AuthProvider>
        </ThemeProvider>
    </StrictMode>
);
