import React from "react";
import Link from "next/link";
import ParagraphText from "../Text/ParagraphText";
import { Button } from "@/components/ui/button";
import NavigationLinks from "./NavigationLinks";
import Container from "../Container";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={cn(`py-8 md:py-0 md:top-0 ${className}`)}>
  <Container className="flex justify-between items-center md:w-full md:p-0">
    <Link href={"/"}>
      {/* Replace ParagraphText with an image for the logo */}
      <img 
        src="../logo.png" // Change this to the actual path of your logo
        alt="Callbridge Logo" 
        className="h-8 md:h-10" // Adjust the height based on your design
      />
    </Link>
    {/* Multi Button */}  
    <NavigationLinks className="md:hidden" />
  </Container>
</nav>
  );
};

export default Navigation;
