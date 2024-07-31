import Image from "next/image";
import Homes from "./_components/Home";
import Navbar from "./_components/Navbar";
import ZoomParallax from "./_components/ZoomParallax";
import Footer from "./_components/Footer";
import InvestorShowcase from "./_components/InvestorShowcase";
import ScrollingCards from "./_components/ScrollingCards";
export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Homes />
      <div className="absolute w-full top-0 right-0 h-[200vh] bg-black opacity-80"></div>
      <div className="absolute w-full top-0 right-0 h-screen">
        <div className="flex w-full h-full justify-center items-center">
          <h2 className=" text-center text-5xl text-white uppercase ">
            Making ai data accessible
          </h2>
        </div>
      </div>
      <ZoomParallax />
      <div className="relative z-50">
        <ScrollingCards />
      </div>
      <div className="h-[100vh]"></div>
      <InvestorShowcase />
      <Footer />
    </div>
  );
}
