import Image from "next/image";
import Intro from "@/components/intro";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import One from "@/components/one";
import Two from "@/components/two";
import Three from "@/components/three";

export default function Home() {
  return (
    <main className="grid grid-cols-12 grid-rows-4">
      <Nav className="col-span-full lg:col-span-3 lg:row-span-4 hidden md:block sm:absolute md:static" />
      <div className="col-span-full lg:col-span-9 overflow-scroll h-screen">
        <Intro className="h-screen" />
        <One />
        <Two className="h-screen" />
        <Three className="h-screen" />
        <Footer className="col-span-full" />
      </div>
    </main>
  );
}
