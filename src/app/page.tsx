import Home from "@/src/app/home/page";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home-page/HeroSection";
const Page = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
};
export default Page;
