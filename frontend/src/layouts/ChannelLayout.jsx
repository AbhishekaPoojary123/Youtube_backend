import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import ChannelNavbar from "../components/navigation/channelNavigation/ChannelNavbar";
import ChannelSidebar from "../components/navigation/channelNavigation/ChannelSidebar";

function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Box sx={{ display: "flex" }}>
            <ChannelNavbar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <ChannelSidebar sidebarOpen={sidebarOpen} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    transition: "margin 0.2s ease",
                    p: 3,
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

export default MainLayout;
