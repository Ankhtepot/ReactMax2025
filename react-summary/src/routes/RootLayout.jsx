import MainHeader from "../components/MainHeader/MainHeader.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
}