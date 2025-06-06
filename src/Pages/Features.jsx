import React, { useRef } from "react";
import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";
import { motion, useInView } from "framer-motion";
const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="md:ml-9">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-semibold font2"
        >
          Features That Help You Make an Impact
        </motion.h1>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl font-medium font1 mt-3.5"
        >
          Discover events with Jointly, join causes, and track your impact — all
          in one place.
        </motion.p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center md:ml-9">
        {/* card 1  */}
        <div className="bg-4  p-6 w-[320px] h-[300px] rounded-xl flex flex-col justify-center items-center">
          <img className="w-28 h-28" src={img1} alt="" />
          <div>
            <h1 className="text-2xl text-center font-semibold font2">
              Create Events Easily
            </h1>
            <p className="text-base text-center font-normal font2 mt-3">
              Empower your community by organizing social initiatives with a
              simple, user-friendly event creation form
            </p>
          </div>
        </div>
        {/* card 2  */}
        <div className="bg-4 p-6 w-[320px] h-[300px] rounded-xl flex flex-col justify-center items-center">
          <img className="w-28 h-28" src={img2} alt="" />
          <div>
            <h1 className="text-2xl text-center font-semibold font2">
              Join Local Causes
            </h1>
            <p className="text-base text-center font-normal font2 mt-3">
              Find and participate in nearby cleanups, plantation drives,
              donation events, and more.
            </p>
          </div>
        </div>
        {/* card 3  */}
        <div className="bg-4 p-6 w-[320px] h-[300px] rounded-xl flex flex-col justify-center items-center">
          <img className="w-28 h-28" src={img3} alt="" />
          <div>
            <h1 className="text-2xl text-center font-semibold font2">
              Track Your Impact
            </h1>
            <p className="text-base text-center font-normal font2 mt-3">
              View your joined events and contributions — all in one place,
              sorted and organized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
