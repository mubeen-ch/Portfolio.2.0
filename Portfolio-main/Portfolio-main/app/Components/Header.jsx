import { assets } from '@/next_js_portfolio_assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";

const Header = () => {
  // Animation Variants for cleaner code and synchronized staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div 
      id="up" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col items-center justify-center space-y-6 pt-32"
    >
      {/* Profile Image with subtle floating effect */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
        <Image 
          src={assets.profilePicture} 
          alt="Mubeen Anees - Senior Frontend Engineer" 
          className="w-32 md:w-40 rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl" 
          priority
        />
        <div className="absolute -bottom-2 -right-2 bg-black dark:bg-white p-2 rounded-lg">
           <Image src={assets.hand_icon} alt="Wave" className="w-5" />
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.h3
        variants={itemVariants}
        className="text-lg md:text-xl font-Outfit text-gray-600 dark:text-gray-400 tracking-wide"
      >
        Mubeen Anees — Senior Frontend Engineer
      </motion.h3>

      {/* Hero Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-6xl lg:text-7xl font-Ovo leading-tight"
      >
        Engineering <span className="italic">scalable</span> & <br /> 
        high-performance web interfaces.
      </motion.h1>

      {/* Professional Summary */}
      <motion.p
        variants={itemVariants}
        className="max-w-3xl mx-auto font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300"
      >
        With over 3 years of specialized experience in the **React ecosystem**, I bridge the gap between complex backend logic and intuitive, pixel-perfect user experiences. Based in Lahore, I build production-ready applications with a focus on performance, accessibility, and clean architecture.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center gap-5 mt-6"
      >
        <a
          href="#contact"
          className="group px-8 py-4 bg-black text-white rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all dark:bg-white dark:text-black"
        >
          Work with me
          <Image src={assets.right_arrow_white} alt="" className="w-4 group-hover:translate-x-1 transition-transform invert dark:invert-0" />
        </a>
        <a
          href="/Mubeen_resume.pdf"
          download
          className="group px-8 py-4 border border-gray-400 rounded-full flex items-center gap-3 hover:border-black transition-all"
        >
          Download CV
          <Image src={assets.download_icon} alt="" className="w-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Header;