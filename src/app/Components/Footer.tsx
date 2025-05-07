import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="absolute bottom-10 flex gap-10 text-3xl">
      <a href="https://github.com/mhdajfer">
        <FaGithub className="hover:opacity-70 cursor-pointer" />
      </a>
      <a href="https://www.linkedin.com/in/muhammed-ajfer-kh/">
        <FaLinkedin className="hover:opacity-70 cursor-pointer" />
      </a>
    </div>
  );
};

export default Footer;
