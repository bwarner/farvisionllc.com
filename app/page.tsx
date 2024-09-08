import Image from "next/image";
import Intro from "@/components/intro";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import One from "@/components/one";
import Two from "@/components/two";
import Three from "@/components/three";

export const meta = {
  title: "Farvision LLC",
};

export default function Home() {
  return (
    <>
      <Sidebar />
      <div id="wrapper">
        <Intro />
        <One />
        <Two />
        <Three />
        <Footer />
      </div>
    </>
  );
}
