import React from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-100 py-14">
      <div className="container mx-auto text-center space-y-4">
        <img className="mx-auto" src={logo} />
        <p className="text-lg max-w-[90%] lg:max-w-[50%] mx-auto">
          Simplify your life with our powerful task management system. Stay
          organized, focused, and productive with Task Manager.
        </p>
        <ul className="flex gap-4 justify-center">
          <li>
            <Link>
              <img className="w-8" src={facebook} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img className="w-8" src={twitter} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img className="w-8" src={instagram} alt="" />
            </Link>
          </li>
          <li>
            <Link>
              <img className="w-8" src={github} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
