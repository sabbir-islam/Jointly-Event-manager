import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Features from "./Features";
import Gallery from "./Gallery";
import NewsLetter from "./NewsLetter";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="">
      <div className="">
        <img className="" src="https://i.ibb.co/fYyT0zK4/b1.png" alt="" />
      </div>
      {/* our features  */}
      <div className="w-[80%] mx-auto mt-20">
        <Features></Features>
      </div>

      {/* doante section  */}
      <div className="w-[80%] mx-auto px-7 py-20 bg-[#66B40B] mt-24 flex flex-col md:flex-row justify-center items-center gap-16 rounded-xl">
        <div>
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-semibold text-white font1"
          >
            Together, We Make a Difference
          </motion.h1>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xl font-normal text-white font2 mt-4"
          >
            Join hands with others to bring positive change in your community —
            one event at a time.
          </motion.p>
        </div>
        <div>
          <button className="btn hover:bg-[#210F37] hover:text-white text-lg font-semibold">
            Join an Event
          </button>
        </div>
      </div>

      <div className="my-20">
        <Gallery></Gallery>
      </div>

      <div className="my-20">
        <NewsLetter></NewsLetter>
      </div>

    </div>
  );
};

export default Home;
