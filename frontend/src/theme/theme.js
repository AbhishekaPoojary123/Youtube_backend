import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#ff0000",
        },
        background: {
            default: "#0f0f0f",
            paper: "#1f1f1f",
        },
    },
});

export default theme;
