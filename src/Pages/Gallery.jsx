import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center gap-3 ml-6 md:ml-0">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xl"
          >
            Our Gallery
          </motion.p>
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl"
          >
            See the Difference We're Making Together
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 w-[80%] mx-auto mt-20">
            
                <img className="w-[420px] h-[280px] rounded-xl" src="https://i.ibb.co/DDvBy0YH/slider-03.jpg" alt="" />
                <img className="w-[420px] h-[280px] rounded-xl" src="https://i.ibb.co/yFtCgwFT/pexels-ron-lach-9034676.jpg" alt="" />
                <img className="w-[420px] h-[280px] rounded-xl" src="https://i.ibb.co/zWJyNF5c/gettyimages-1333028314-640x640.jpg" alt="" />
                <img className="w-[420px] h-[280px] rounded-xl" src="https://i.ibb.co/zTZyjccF/coca-cola-41d07af249c74265f76d192790b775eb.jpg" alt="" />
                <img className="w-[420px] h-[280px] rounded-xl" src="https://i.ibb.co/HDrjthmx/f5a27d13f68ad4a0de8c50014262eb99.jpg" alt="" />
                <img className="w-[420px] h-[280px] rounded-xl" src="https://i.ibb.co/kgM58dkP/international-coastal-cleanup-coxsbazar-171123-026.jpg" alt="" />
                <img className="w-[420px] h-[280px] rounded-xl" src="https://i.ibb.co/DDLPxYxH/TRF-6-1.webp" alt="" />
                <img className="w-[420px] h-[280px] rounded-xl" src="https://i.ibb.co/vxTvGvXf/VG-g-10.webp" alt="" />
                <img className="w-[420px] h-[280px] rounded-xl" src="https://i.ibb.co/DP9W3s7Y/Whats-App-Image-2024-02-23-at-18-24-26-cb3eca99a428de7c241ecb58d9ca9abf.webp" alt="" />
            
        </div>
      </div>
    </div>
  );
};

export default Gallery;
