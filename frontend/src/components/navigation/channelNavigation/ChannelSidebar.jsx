import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const collapsedWidth = 72;

function ChannelSidebar({ sidebarOpen }) {
    const navigate = useNavigate();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: sidebarOpen ? drawerWidth : collapsedWidth,
                flexShrink: 0,

                "& .MuiDrawer-paper": {
                    width: sidebarOpen ? drawerWidth : collapsedWidth,
                    overflowX: "hidden",

                    transition: "width 0.2s ease",

                    boxSizing: "border-box",
                    // border: "none",
                },
            }}
        >
            <Toolbar />

            <List>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: sidebarOpen ? "initial" : "center",
                        px: 2.5,
                    }}
                    onClick={() => navigate("/channel/dashboard")}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: sidebarOpen ? 3 : "auto",
                            justifyContent: "center",
                        }}
                    >
                        <HomeIcon />
                    </ListItemIcon>

                    {sidebarOpen && <ListItemText primary="Dashboard" />}
                </ListItemButton>

                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: sidebarOpen ? "initial" : "center",
                        px: 2.5,
                    }}
                    onClick={() => navigate("/channel/profile")}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: sidebarOpen ? 3 : "auto",
                            justifyContent: "center",
                        }}
                    >
                        <SubscriptionsIcon />
                    </ListItemIcon>

                    {sidebarOpen && <ListItemText primary="Profile" />}
                </ListItemButton>

                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: sidebarOpen ? "initial" : "center",
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: sidebarOpen ? 3 : "auto",
                            justifyContent: "center",
                        }}
                    >
                        <HistoryIcon />
                    </ListItemIcon>

                    {sidebarOpen && <ListItemText primary="History" />}
                </ListItemButton>

                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: sidebarOpen ? "initial" : "center",
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: sidebarOpen ? 3 : "auto",
                            justifyContent: "center",
                        }}
                    >
                        <ThumbUpIcon />
                    </ListItemIcon>

                    {sidebarOpen && <ListItemText primary="Liked Videos" />}
                </ListItemButton>
            </List>
        </Drawer>
    );
}

export default ChannelSidebar;
