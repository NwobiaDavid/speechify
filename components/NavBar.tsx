'use client'

import { motion } from "framer-motion";
import { IBM_Plex_Mono } from "next/font/google";
import WavyText from "./ui/WaveText";
import { useEffect, useState } from "react";

const poppins = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "500",
});

export default function NavBar() {
  const [replay, setReplay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setReplay((prevReplay) => !prevReplay);
    }, 4000); // 5000 milliseconds = 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="p-3 bg-[#BCA37F] text-white flex items-center justify-center text-2xl">
      <motion.a
        href="/"
        className={poppins.className}
      >
       
        <WavyText text=" ✨ Speechify ✨" replay={replay} />
      </motion.a>
    </div>
  );
}
