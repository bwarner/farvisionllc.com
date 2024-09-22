import type { Metadata } from "next";
import Intro from "@/components/intro";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import One from "@/components/one";
import Two from "@/components/two";
import Three from "@/components/three";

export const metadata: Metadata = {
  title: "Farvision LLC",
  description:
    "Farvision LLC is a software development company based in San Francisco, California. We specialize in building e-commerce websites and web applications for small businesses.",
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
