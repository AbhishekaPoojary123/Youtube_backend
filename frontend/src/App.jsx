import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import Register from "./views/auth/pages/Register";
import Login from "./views/auth/pages/Login";
import Home from "./views/home/pages/Home";
import ChannelLayout from "./layouts/ChannelLayout";
import Channel from "./views/channel/pages/Channel";
import ChannelDashboard from "./views/channel/pages/ChannelDashboard";
import ChannelProfile from "./views/channel/pages/ChannelProfile";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route element={<MainLayout />}>
                    <Route path="/home" element={<Home />} />
                </Route>

                <Route element={<ChannelLayout />}>
                    <Route path="/channel" element={<Channel />} />
                    <Route
                        path="/channel/dashboard"
                        element={<ChannelDashboard />}
                    />
                    <Route
                        path="channel/profile"
                        element={<ChannelProfile />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
