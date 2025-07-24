import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white flex justify-around flex-wrap min-h-12 items-center gap-2 p-2">
      <h3 className="font-bold text-lg">Abhijit.dev</h3>
      <p className="text-sm">Copyright © 2025 abhijit.vercel.app</p>
      <div className="flex gap-2">
        <a href="https://github.com/AbhijitKumarPandey" target="_blank">
          <FaGithubSquare size="1.7rem" className="hover:scale-[0.9]"/>
        </a>
        <a href="https://www.linkedin.com/in/abhijit-kumar-pandey-31236633b/" target="_blank">
          <FaLinkedin size="1.7rem" className="hover:scale-[0.9]"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
