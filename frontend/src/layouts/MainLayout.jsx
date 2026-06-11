import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

function MainLayout() {
    return (
        <>
            <Navbar />

            <div className="layout">
                <Sidebar />

                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default MainLayout;
