import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <ScrollToTop /> 
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
