import {
    Box,
    Button,
    Divider,
    Stack,
    Tab,
    Tabs,
    Typography,
    Paper,
    InputAdornment,
    CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext/useAuth";
import AppTextField from "../../../components/common/AppTextField";
import { checkUsername } from "../../auth/authApi";
import { useSnackbar } from "../../../context/snackbarContext/useSnackbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

function ChannelProfile() {
    const { handleSubmit, register, watch } = useForm();
    const { user } = useAuth();
    const { showSnackbar } = useSnackbar();

    const [tab, setTab] = useState(0);

    const onSubmit = async (data) => {
        console.log("data:", data);
    };

    const username = watch("username");

    const [checkingUsername, setCheckingUsername] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState(null);

    useEffect(() => {
        if (!username || username.length < 3) {
            setUsernameAvailable(null);
            return;
        }

        const timer = setTimeout(async () => {
            try {
                setCheckingUsername(true);

                const response = await checkUsername(username);

                if (response.data.available) {
                    setUsernameAvailable(true);
                } else {
                    setUsernameAvailable(false);
                }
            } catch (error) {
                showSnackbar(
                    error.response?.data?.message || "Something went wrong",
                    "error"
                );
            } finally {
                setCheckingUsername(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [username]);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#0f0f0f",
                color: "#fff",
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Header */}
                <Stack
                    direction="row"
                    sx={{
                        px: 4,
                        py: 3,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h4" fontWeight={700}>
                        Channel customization
                    </Typography>
                </Stack>

                {/* Tabs */}
                <Box
                    sx={{
                        px: 4,
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Tabs
                        value={tab}
                        onChange={(e, value) => setTab(value)}
                        textColor="inherit"
                        indicatorColor="primary"
                    >
                        <Tab label="Profile" />
                        <Tab label="Home tab" />
                    </Tabs>

                    <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: 999,
                                textTransform: "none",
                                bgcolor: "#3f3f3f",
                            }}
                        >
                            View channel
                        </Button>

                        <Button
                            variant="contained"
                            disabled
                            sx={{
                                borderRadius: 999,
                                textTransform: "none",
                            }}
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            variant="contained"
                            // disabled
                            sx={{
                                borderRadius: 999,
                                textTransform: "none",
                                bgcolor: "#ffff",
                                color: "black",
                            }}
                        >
                            Publish
                        </Button>
                    </Stack>
                </Box>

                <Divider sx={{ borderColor: "#2f2f2f" }} />

                {tab == 0 && (
                    <Box sx={{ px: 4, py: 4 }}>
                        {/* Banner Section */}
                        <Typography variant="h5" fontWeight={600}>
                            Banner image
                        </Typography>

                        <Typography sx={{ mb: 3 }}>
                            This image will appear across the top of your
                            channel
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={4}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <Paper
                                sx={{
                                    width: 360,
                                    height: 200,
                                    bgcolor: "#1a1a1a",
                                    borderRadius: 3,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 180,
                                        height: 120,
                                        bgcolor: "#ff0033",
                                        border: !user?.coverImg?.url
                                            ? "6px solid white"
                                            : null,
                                    }}
                                >
                                    <img
                                        src={user?.coverImg?.url}
                                        alt="coverImg"
                                        style={{ width: 180, height: 120 }}
                                    />
                                </Box>
                            </Paper>

                            <Box sx={{ maxWidth: 450 }}>
                                <Typography variant="body1" mb={3}>
                                    For the best results on all devices, use an
                                    image that's at least 2048 × 1152 pixels and
                                    6MB or less.
                                </Typography>

                                <Button
                                    variant="contained"
                                    component="label"
                                    sx={{
                                        borderRadius: 999,
                                        textTransform: "none",
                                        bgcolor: "#3f3f3f",
                                    }}
                                >
                                    Upload
                                    <input
                                        hidden
                                        type="file"
                                        {...register("coverImg")}
                                    />
                                </Button>
                            </Box>
                        </Stack>

                        {/* Profile Picture Section */}
                        <Typography variant="h5" fontWeight={600}>
                            Picture
                        </Typography>

                        <Typography sx={{ mb: 3 }}>
                            Your profile picture will appear where your channel
                            is presented on YouTube, like next to your videos
                            and comments.
                        </Typography>

                        <Stack direction="row" spacing={4}>
                            <Paper
                                sx={{
                                    width: 360,
                                    height: 200,
                                    bgcolor: "#1a1a1a",
                                    borderRadius: 3,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 180,
                                        height: 180,
                                        borderRadius: "50%",
                                        bgcolor: "#2196f3",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 80,
                                        color: "#fff",
                                    }}
                                >
                                    {user?.avatar?.url ? (
                                        <img
                                            src={user?.avatar?.url}
                                            style={{
                                                width: 180,
                                                height: 180,
                                                borderRadius: "50%",
                                            }}
                                        />
                                    ) : (
                                        user?.fullName[0]
                                    )}
                                </Box>
                            </Paper>

                            <Box sx={{ maxWidth: 450 }}>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    mb={3}
                                >
                                    It's recommended to use a picture that's at
                                    least 98 × 98 pixels and 4MB or less. Use a
                                    PNG or GIF (no animations) file.
                                </Typography>

                                <Button
                                    variant="contained"
                                    component="label"
                                    sx={{
                                        borderRadius: 999,
                                        textTransform: "none",
                                        bgcolor: "#3f3f3f",
                                    }}
                                >
                                    Upload
                                    <input
                                        hidden
                                        type="file"
                                        {...register("avatar")}
                                    />
                                </Button>
                            </Box>
                        </Stack>

                        <Stack>
                            <Typography variant="h5" fontWeight={600}>
                                Name
                            </Typography>
                            <Typography sx={{ mb: 3 }}>
                                Choose a channel name that represents you and
                                your content. Changes made to your name and
                                picture are visible only on YouTube and not
                                other Google services. You can change your name
                                twice in 14 days.
                            </Typography>
                            <AppTextField
                                {...register("fullName")}
                                defaultValue={user?.fullName}
                            />
                        </Stack>

                        <Stack>
                            <Typography variant="h5" fontWeight={600}>
                                Handle
                            </Typography>
                            <Typography sx={{ mb: 3 }}>
                                Your handle is a unique @name that helps people
                                find your channel, different from your channel
                                name. You can change your handle twice within a
                                14-day period. We hold your previous handle for
                                14 days in case you’d like to switch back.
                            </Typography>

                            <AppTextField
                                {...register("username")}
                                defaultValue={user?.username}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {checkingUsername ? (
                                                    <CircularProgress
                                                        size={20}
                                                    />
                                                ) : usernameAvailable ===
                                                  true ? (
                                                    <CheckCircleIcon color="success" />
                                                ) : usernameAvailable ===
                                                  false ? (
                                                    <ErrorIcon color="warning" />
                                                ) : null}
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Stack>
                    </Box>
                )}
            </form>
        </Box>
    );
}

export default ChannelProfile;
