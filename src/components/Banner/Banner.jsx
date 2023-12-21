import React from "react";
import bannerImage from "../../assets/banner.png";
import { Button } from "keep-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-screen">
      <div className="space-y-4">
        <h2 className="text-4xl lg:text-6xl font-bold">
          {" "}
          Conquer Your Day: Unleash Your Inner Productivity Hero with <span className="text-blue-600">TaskUp</span>
        </h2>
        <p className="text-lg">
          Manage your tasks efficiently with TaskUp. Stay organized and boost
          your productivity.
        </p>
        <div>
          <Link>
            <Button size="md" type="primary">
              Let's Explore
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
