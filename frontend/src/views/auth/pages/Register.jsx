import { useForm } from "react-hook-form";
import { checkUsername, registerUser } from "../authApi";
import { useAuth } from "../../../context/useAuth";
import { useNavigate } from "react-router-dom";
import AppTextField from "../../../components/common/AppTextField";
import { Box, Stack, Typography } from "@mui/material";
import AppButton from "../../../components/common/AppButton";
import { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onTouched" });

    const { setUser } = useAuth();
    const navigate = useNavigate();

    const [checkingUsername, setCheckingUsername] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState(null);
    const [usernameError, setUsernameError] = useState("");

    const username = watch("username");

    const onSubmit = async (data) => {
        const response = await registerUser(data);

        setUser(response.data);

        // Redirect to login page
        navigate("/login");
    };

    useEffect(() => {
        if (!username || username.length < 3) {
            setUsernameAvailable(null);
            setUsernameError("");
            return;
        }

        const timer = setTimeout(async () => {
            try {
                setCheckingUsername(true);

                const response = await checkUsername(username);

                if (response.data.available) {
                    setUsernameAvailable(true);
                    setUsernameError("");
                } else {
                    setUsernameAvailable(false);
                    setUsernameError("Username already exists");
                }
            } catch (error) {
                console.error(error);
            } finally {
                setCheckingUsername(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [username]);

    return (
        <>
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
                        <Stack spacing={1}>
                            <Typography variant="h4" fontWeight={600}>
                                Create your account
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Join YouTube and start sharing your content.
                            </Typography>
                        </Stack>

                        <AppTextField
                            label="Full Name"
                            {...register("fullName", {
                                required: "Full Name is required",
                            })}
                            error={!!errors.fullName}
                            helperText={errors.fullName?.message || " "}
                        />

                        <AppTextField
                            label="Username"
                            {...register("username", {
                                required: "Username is required",
                                minLength: {
                                    value: 3,
                                    message: "Minimum 3 characters",
                                },
                            })}
                            error={!!errors.username || !!usernameError}
                            helperText={
                                errors.username?.message || usernameError || " "
                            }
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {checkingUsername ? (
                                                <CircularProgress size={20} />
                                            ) : usernameAvailable === true ? (
                                                <CheckCircleIcon color="success" />
                                            ) : usernameAvailable === false ? (
                                                <ErrorIcon color="warning" />
                                            ) : null}
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        <AppTextField
                            label="Email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Invalid email address",
                                },
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message || " "}
                        />

                        <AppTextField
                            label="Password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Enter a combination of at least six numbers, letters and punctuation marks.",
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
                                    message:
                                        "Enter a combination of at least six numbers, letters and punctuation marks.",
                                },
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message || " "}
                        />

                        <AppButton type="submit">Register</AppButton>

                        <Stack
                            direction="row"
                            justifyContent="center"
                            spacing={1}
                        >
                            <Typography variant="body2" color="text.secondary">
                                Already have an account?
                            </Typography>

                            <Typography
                                component="button"
                                type="button"
                                onClick={() => navigate("/login")}
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
                                Sign in
                            </Typography>
                        </Stack>
                    </Stack>
                </form>
            </Box>
        </>
    );
}

export default Register;
