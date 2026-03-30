import { assets, infoList, toolsData } from '@/next_js_portfolio_assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full px-[8%] md:px-[12%] py-16 scroll-mt-24"
    >
      {/* Section Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo tracking-widest uppercase text-gray-500"
      >
        Introduction
      </motion.h4>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo font-medium"
      >
        About Me
      </motion.h2>

      {/* Main Content Container */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 my-16">
        
        {/* Left Side: Image with Decorative Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-48 sm:w-64 lg:w-80 relative group"
        >
          <div className="absolute inset-0 border-2 border-black dark:border-white rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          <Image
            src={assets.Aboutpic}
            alt="User Image"
            className="w-full rounded-3xl grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
          />
        </motion.div>

        {/* Right Side: Narrative & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="mb-10 font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0">
            I am an accomplished **Senior Frontend Engineer** with over 3 years of professional experience in crafting high-performance web applications. My expertise lies in the **MERN stack**, specifically architecting scalable frontends using **React.js and Next.js**. I pride myself on writing clean, maintainable code and optimizing internal state management to deliver seamless, production-ready user experiences.
          </p>

          {/* Info List - Responsive Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-2xl mx-auto lg:mx-0">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-2xl p-6 cursor-default hover:bg-lightHover/50 transition-all duration-300 dark:border-white/30 dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mx-auto lg:mx-0 mb-3"
                />
                <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools Section */}
          <div className="mt-12">
            <h3 className="text-sm font-Ovo font-medium text-gray-500 uppercase tracking-widest mb-6">
              Core Tech Stack & Tools
            </h3>
            <ul className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
              {toolsData.map((tool, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-xl hover:shadow-md transition-all dark:border-white/20"
                >
                  <Image src={tool} alt="Tool" className="w-6 sm:w-8" />
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;