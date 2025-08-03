'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import SVGIconLibrary from "@/components/svgIcons";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SVGIconLibrary />
      <Toaster richColors />
      <Footer />
    </div>
  );
}
