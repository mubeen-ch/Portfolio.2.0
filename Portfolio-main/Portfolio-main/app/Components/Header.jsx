import { assets } from '@/next_js_portfolio_assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div id="up" className="w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col items-center justify-center">
      {/* Animated Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profilePicture} alt="Profile" className="w-40 rounded-full" />
      </motion.div>

      {/* Animated Introduction */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Outfit"
      >
        Hi! I'm Mubeen Anees 
        <Image src={assets.hand_icon} alt="Wave" className="w-6" />
      </motion.h3>

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Frontend Developer based in Lahore/Pakistan.
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl mx-auto font-ovo font-Ovo"
      >
        I am a Full Stack Developer with almost 2 Years of experience specializing in the MERN stack, with a strong expertise in React.js.
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me 
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4 mt-1" />
        </a>
        <a
          href="/Mubeen_resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
