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

const drawerWidth = 240;

function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    borderRight: "1px solid #272727",
                },
            }}
        >
            <Toolbar />

            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>

                    <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <SubscriptionsIcon />
                    </ListItemIcon>

                    <ListItemText primary="Subscriptions" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <HistoryIcon />
                    </ListItemIcon>

                    <ListItemText primary="History" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <ThumbUpIcon />
                    </ListItemIcon>

                    <ListItemText primary="Liked Videos" />
                </ListItemButton>
            </List>
        </Drawer>
    );
}

export default Sidebar;
