import React from "react";
import bannerImage from "../../assets/banner.png";
import { Button } from "keep-react";
import { Link } from "react-router-dom";
import gradiant from "../../assets/gradiant.png";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/mJ7vwZF/line.png')] ">
      <div className="z-50 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-screen py-14 md:py-0">
        <div className="space-y-4 text-center md:text-left -z-10">
          <h2 className="text-4xl lg:text-6xl font-bold">
            {" "}
            Conquer Your Day: Unleash Your Inner Productivity Hero with{" "}
            <span className="text-blue-600">TaskUp</span>
          </h2>
          <p className="text-lg">
            Manage your tasks efficiently with TaskUp. Stay organized and boost
            your productivity.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/dashboard" className="cursor-pointer">
              <Button size="md" type="primary">
                Let's Explore
              </Button>
            </Link>
          </div>
        </div>
        <div className="-z-10">
          <img src={bannerImage} alt="" />
        </div>
      </div>
      <img className="-z-50 absolute top-0 left-0" src={gradiant} alt="" />
    </div>
  );
};

export default Banner;
