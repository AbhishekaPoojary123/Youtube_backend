import { Box, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AppTextField from "../../../components/common/AppTextField";
import AppButton from "../../../components/common/AppButton";
import { loginUser } from "../authApi";
import { useAuth } from "../../../context/authContext/useAuth";
import { useSnackbar } from "../../../context/snackbarContext/useSnackbar";

function Login() {
    const navigate = useNavigate();

    const { setUser } = useAuth();
    const { showSnackbar } = useSnackbar();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onTouched",
    });

    const onSubmit = async (data) => {
        try {
            const response = await loginUser(data);
            setUser(response?.data?.user);

            showSnackbar("Login successful", "success");

            navigate("/home");
        } catch (error) {
            showSnackbar(
                "The login information you entered is incorrect",
                "error"
            );
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 500,
                mx: "auto",
                px: 2,
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    {/* Header */}
                    <Stack spacing={1}>
                        <Typography variant="h4" fontWeight={600}>
                            Sign in
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Welcome back to YouTube
                        </Typography>
                    </Stack>

                    {/* Email / Username */}
                    <AppTextField
                        label="Email or Username"
                        {...register("emailOrUsername", {
                            required: "Email or Username is required",
                        })}
                        error={!!errors.emailOrUsername}
                        helperText={errors.emailOrUsername?.message || " "}
                    />

                    {/* Password */}
                    <AppTextField
                        label="Password"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message || " "}
                    />

                    {/* Forgot Password */}
                    <Typography
                        variant="body2"
                        sx={{
                            cursor: "pointer",
                            color: "primary.main",
                            width: "fit-content",
                        }}
                    >
                        Forgot password?
                    </Typography>

                    {/* Login Button */}
                    <AppButton type="submit" disabled={isSubmitting}>
                        Sign In
                    </AppButton>

                    {/* Footer */}
                    <Stack direction="row" justifyContent="center" spacing={1}>
                        <Typography variant="body2" color="text.secondary">
                            Don't have an account?
                        </Typography>

                        <Typography
                            component="button"
                            type="button"
                            onClick={() => navigate("/register")}
                            sx={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "primary.main",
                                fontWeight: 600,
                                p: 0,
                                fontSize: "0.875rem",
                            }}
                        >
                            Create account
                        </Typography>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
}

export default Login;
