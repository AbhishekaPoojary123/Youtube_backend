import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    InputBase,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

function ChannelNavbar({ sidebarOpen, setSidebarOpen }) {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                // borderBottom: "1px solid #272727",
            }}
        >
            <Toolbar disableGutters sx={{ px: 2 }}>
                {/* Left */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        YouTube
                    </Typography>
                </Box>

                {/* Center */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "60%",
                            border: "1px solid #303030",
                            borderRadius: "999px",
                            overflow: "hidden",
                        }}
                    >
                        <InputBase
                            placeholder="Search"
                            sx={{
                                flex: 1,
                                px: 2,
                            }}
                        />

                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Box>

                {/* Right */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <IconButton>
                        <VideoCallIcon />
                    </IconButton>

                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>

                    <Avatar
                        onClick={handleAvatarClick}
                        sx={{
                            cursor: "pointer",
                        }}
                    />

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        slotProps={{
                            paper: {
                                sx: {
                                    backgroundColor: "#1f1f1f",
                                    color: "#fff",
                                    minWidth: 220,
                                    border: "1px solid #303030",
                                    borderRadius: 3,
                                    mt: 1,
                                },
                            },
                        }}
                    >
                        <MenuItem
                            onClick={() => {
                                navigate(`/channel`);
                                handleClose();
                            }}
                            sx={{
                                "&.Mui-focusVisible": {
                                    backgroundColor: "transparent",
                                },
                                "&:hover": {
                                    backgroundColor: "#303030",
                                },
                            }}
                        >
                            <ListItemIcon>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            View Channel
                        </MenuItem>

                        <MenuItem
                            onClick={() => {
                                navigate("/settings");
                                handleClose();
                            }}
                        >
                            <ListItemIcon>
                                <SettingsIcon fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>

                        <Divider />

                        <MenuItem
                            onClick={async () => {
                                handleClose();

                                // try {
                                //     await logoutUser();

                                //     setUser(null);

                                //     navigate("/login");
                                // } catch (error) {
                                //     console.error(error);
                                // }
                            }}
                        >
                            <ListItemIcon>
                                <LogoutIcon fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default ChannelNavbar;
