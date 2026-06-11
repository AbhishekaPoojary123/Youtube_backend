import { TextField } from "@mui/material";

function AppTextField(props) {
    const { label, error, helperText, type = "text" } = props;

    return (
        <>
            <TextField
                fullWidth
                variant="outlined"
                label={label}
                type={type}
                error={error}
                helperText={helperText}
                sx={{
                    "& .MuiInputLabel-root": {
                        color: "#aaaaaa",
                    },

                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#ffffff",
                    },

                    "& .MuiOutlinedInput-root": {
                        color: "#ffffff",

                        "& fieldset": {
                            borderColor: "#3f3f3f",
                        },

                        "&:hover fieldset": {
                            borderColor: "#f2f2f2",
                        },

                        "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                            borderWidth: "2px",
                        },
                    },

                    "& .MuiFormHelperText-root": {
                        color: "#ff4e45",
                    },
                }}
                {...props}
            />
        </>
    );
}

export default AppTextField;
