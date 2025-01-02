import React from "react";
import ParagraphText from "./Text/ParagraphText";
import Container from "./Container";
import Spacer from "./Spacer";
import { cn } from "@/lib/utils";
import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa"; // Import necessary icons
import { FaTelegramPlane } from "react-icons/fa"; // Import Telegram icon from Fa

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(`${className} w-full `)}>
      <Spacer spaceingAmount={6} />
      <Container className="text-left lg:p-0 md:p-0">
        <ParagraphText
          className="font-bold"
          mode="sm"
          text="Copyright © 2025. All Rights Reserved"
        />
        <ParagraphText className="text-zinc-500 font-medium" mode="sm">
          Designed by{" "}
          <a
            href="https://www.facebook.com/imcoachpat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dev Patrick John P.
          </a>
        </ParagraphText>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.facebook.com/callbridgwebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </a>
          {/* X (formerly Twitter) Icon */}
          <a
            href="https://x.com/callbridgewebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-blue-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.youtube.com/@callbridgewebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-red-600"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://t.me/callbridgwebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-blue-500"
          >
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="https://github.com/callbridgewebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-gray-800"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </Container>
      <Spacer spaceingAmount={6} className="md:hidden" />
    </footer>
  );
};

export default Footer;
