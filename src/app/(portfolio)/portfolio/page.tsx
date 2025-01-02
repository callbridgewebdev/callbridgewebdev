import React from "react";
import Container from "@/components/Container";
import HeroSection from "./_components/sections/PortfolioHero";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import { Metadata } from "next";
import ProjectSection from "./_components/sections/PortfolioProject";


export const metadata: Metadata = {
  title: "Callbridge Web Design Services | Best web designer agency in Bohol, Philippines.",
  description:
    "Bohol's Best Web Design Agency | Experts in Social Media Build-up, Search Engine Optimization , Email & Facebook Marketing, Website Hosting, Website Design and Development, Mobile Application, Logo Design, Graphic Design suits to all types of business needs .",
};

const page = () => {
  return (
    <>
      <Intro />
      <Navigation className="md:hidden" />
      <main className="flex flex-col items-center justify-center ">
        <Container
          className="md:flex sm:justify-between lg:justify-end 
            md:space-x-10 md:relative md:w-full"
        >
          <HeroSection />
          <ProjectSection />
        </Container>
      </main>
      <Footer className="md:hidden " />
    </>
  );
};

export default page;
