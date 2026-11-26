import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTASection from "../sections/common/CTASection";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CTASection />
      <Footer />
    </>
  );
};

export default Layout;
