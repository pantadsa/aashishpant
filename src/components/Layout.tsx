import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AuroraBackground from "@/components/AuroraBackground";
import MouseGlow from "@/components/MouseGlow";
import Particles from "@/components/Particles";

const Layout = () => (
  <div className="min-h-screen relative flex flex-col">
    <AuroraBackground />
    <MouseGlow />
    <ScrollProgress />
    <Navbar />

    <Particles count={18} className="!fixed inset-0 -z-10" />
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 dot-grid opacity-30" />
    </div>

    <main className="flex-1">
      <Outlet />
    </main>

    <Footer />
  </div>
);

export default Layout;
