import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/tanvirulhasan00" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/tanvirul-hasan-46aa642a0",
  },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((link, index) => {
        return (
          <Link key={index} href={link.path} className={iconStyles}>
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
