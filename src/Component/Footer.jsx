import React from "react";
import { Link } from "react-router";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg1 mt-[80px]">
      <div className="md:w-[80%] mx-auto px-5 md:px-0 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
          <div className="max-w-[360px]">
            <h1 className="text-2xl font-bold font1">Jointly</h1>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, reiciendis.
            </p>
          </div>
          <div>
            <h1>Navigate</h1>
            <div className="flex flex-col">
              <Link>Home</Link>
              <Link>Home</Link>
              <Link>Home</Link>
            </div>
          </div>
          <div>
            <h1>About Us</h1>
            <div className="flex flex-col">
              <a href="">Our History</a>
              <a href="">What We Believe</a>
              <a href="">Our Program</a>
            </div>
          </div>
          <div>
            <h1>Contact Info</h1>
            <div className="flex flex-col">
              <p>Location: Lorem ipsum dolor sit amet.</p>
              <p>Email: </p>
              <p>Phone:</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-4" />
      <div className="md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-3 justify-between py-5">
        <div>
          <h1>© 2025 Non-Profit Organization. All rights reserved.</h1>
        </div>
        <div className="flex gap-2">
          <SocialIcon
            className="cursor-pointer"
            style={{ height: 25, width: 25 }}
            network="facebook"
            url="https://facebook.com"
          />
          <SocialIcon
            className="cursor-pointer"
            style={{ height: 25, width: 25 }}
            network="x"
            url="https://x.com"
          />
          <SocialIcon
            className="cursor-pointer"
            style={{ height: 25, width: 25 }}
            network="instagram"
            url="https://instagram.com"
          />
          <SocialIcon
            className="cursor-pointer"
            style={{ height: 25, width: 25 }}
            network="youtube"
            url="https://youtube.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
