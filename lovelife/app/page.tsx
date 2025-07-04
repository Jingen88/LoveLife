import Image from "next/image";
import Navbar from "./homePage/Navbar";
import Testimonials from "./homePage/Testimonials";
import Hero from "./homePage/Hero";
import About from "./homePage/About";
import CallToAction from "./homePage/CallToAction";
import Footer from "./homePage/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/> 
    <Testimonials/>
    <CallToAction/>
    <Footer/>
    </> )

}
