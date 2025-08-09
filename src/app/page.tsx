"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import BentoGrid from "@/components/BentoGrid";
import Image from "next/image";
import loadImg from "@/assets/images/1-removebg-preview.png";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <Services />
      {/* <TestimonialsSection /> */}
      <AboutSection />
      {/* <BentoGrid/> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
