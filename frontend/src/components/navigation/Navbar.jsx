import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    InputBase,
    Avatar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
    return (
        <AppBar
            position="sticky"
            color="inherit"
            elevation={0}
            sx={{
                borderBottom: "1px solid #272727",
            }}
        >
            <Toolbar>
                {/* Left */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <IconButton>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" fontWeight="bold">
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

                    <Avatar />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
