import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FadeLoader } from "react-spinners";
import ScrollToTop from "../../utils/scrollToTop";

const RootLayout = () => {

    const navigation = useNavigation();

    return (
        <div>
            <ScrollToTop />
            <Navbar></Navbar>
            <div className="min-h-[70vh]">
                {
                    navigation.state === 'loading' ? <div className="flex justify-center items-center h-[70vh]"><FadeLoader color="#9873FF" /></div> : <Outlet></Outlet>
                }
            </div>
            <div className="bg-dark1">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayout;