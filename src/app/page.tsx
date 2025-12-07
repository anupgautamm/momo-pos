"use client";
import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/Home/Hero/index";
import Gallery from "@/components/Home/Gallery/index";
import AboutUs from "@/components/Home/AboutUs/index";


export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main>
      <Hero />
      <Gallery />
      <AboutUs />
    </main>
  );
}
