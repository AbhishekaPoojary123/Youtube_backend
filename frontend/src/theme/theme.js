import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#ff0000",
        },
        background: {
            default: "#0f0f0f",
            paper: "#0f0f0f",
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    boxShadow: "none",
                },
            },
        },
    },
});

export default theme;
