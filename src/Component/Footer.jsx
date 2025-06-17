import React from "react";
import { Link } from "react-router";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg1">
      <div className="md:w-[80%] mx-auto px-5 md:px-0 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
          <div className="max-w-[360px]">
            <h1 className="text-2xl font-bold font1">Jointly</h1>
            <p className="text-base font-normal">
              Jointly is a community platform to create, join, and track social events like cleanups, tree plantations, and donation drives.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-bold ">Navigate</h1>
            <div className="flex flex-col">
              <Link to={"/"} className="text-base font-semibold">Home</Link>
              <Link to={"/upcoming-events"} className="text-base font-semibold">Upcoming Events</Link>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">About Us</h1>
            <div className="flex flex-col">
              <a className="text-base font-semibold" href="">Our History</a>
              <a className="text-base font-semibold" href="">What We Believe</a>
              <a className="text-base font-semibold" href="">Our Program</a>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">Contact Info</h1>
            <div className="flex flex-col">
              <p className="text-base font-semibold">Location: Uttara,Dhaka,Bangladesh</p>
              <p className="text-base font-semibold">Email: jointly@mail.com</p>
              <p className="text-base font-semibold">Phone: +8801234567891</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-4" />
      <div className="md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-3 justify-between py-5">
        <div>
          <h1>© 2025 Jointly. All rights reserved.</h1>
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
