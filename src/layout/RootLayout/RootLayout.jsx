import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[70vh]">
                <Outlet></Outlet>
            </div>
            <div className="bg-dark1">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayout;