import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function AppTextField(props) {
    const {
        label,
        error,
        helperText,
        type = "text",
        slotProps,
        ...rest
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    const isPasswordField = type === "password";

    return (
        <>
            <TextField
                fullWidth
                variant="outlined"
                label={label}
                type={
                    isPasswordField
                        ? showPassword
                            ? "text"
                            : "password"
                        : type
                }
                error={error}
                helperText={helperText}
                slotProps={{
                    ...slotProps,
                    input: {
                        ...slotProps?.input,
                        endAdornment: isPasswordField ? (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() =>
                                        setShowPassword((prev) => !prev)
                                    }
                                >
                                    {showPassword ? (
                                        <VisibilityIcon />
                                    ) : (
                                        <VisibilityOffIcon />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ) : (
                            slotProps?.input?.endAdornment
                        ),
                    },
                }}
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
                {...rest}
            />
        </>
    );
}

export default AppTextField;
