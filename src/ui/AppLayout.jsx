import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../navbars/StickyNavbar";
import { Footer } from "../Footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <nav className="sticky top-0 z-10">
          <StickyNavbar/>
        </nav>
        <main className="flex-grow ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
