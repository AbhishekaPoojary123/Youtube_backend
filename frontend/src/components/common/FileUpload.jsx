import { Button, Typography, Stack } from "@mui/material";

function FileUpload({ label, register, error }) {
    return (
        <Stack spacing={1}>
            <Button
                component="label"
                variant="outlined"
                sx={{
                    justifyContent: "flex-start",
                    textTransform: "none",
                    color: "#aaaaaa",
                    borderColor: "#3f3f3f",
                    height: "56px",

                    "&:hover": {
                        borderColor: "#f2f2f2",
                        backgroundColor: "transparent",
                    },

                    "&.Mui-focusVisible": {
                        borderColor: "#ffffff",
                    },
                }}
            >
                {label}

                <input hidden type="file" accept="image/*" {...register} />
            </Button>

            {error && (
                <Typography variant="caption" color="error">
                    {error}
                </Typography>
            )}
        </Stack>
    );
}

export default FileUpload;
