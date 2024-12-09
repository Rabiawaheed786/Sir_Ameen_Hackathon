import Category from "@/components/category";
import Hero from "@/components/hero";
import LogoFeature from "@/components/logoFeature";
import OurProduct from "@/components/ourProduct";
import Image from "next/image";
import { BiCategory } from "react-icons/bi";

export default function Home() {
  return (
    <>

       
        <Hero/>
        <LogoFeature/>
        <Category/>
        <OurProduct/>

    </>
  );
}
