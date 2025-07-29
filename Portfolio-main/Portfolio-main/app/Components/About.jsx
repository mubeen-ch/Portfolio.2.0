import { assets, infoList, toolsData } from '@/next_js_portfolio_assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Heading */}
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-2xl font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold text-black-300"
      >
        About Me
      </motion.h1>

      {/* Content Section */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="w-64 sm:w-2/6 rounded-3xl max-w-none"
        >
          <Image
            src={assets.Aboutpic}
            className="w-full rounded-3xl opacity-80"
            alt="About Image"
          />
        </motion.div>

        {/* Right Side: Text & Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="max-w-2xl mb-10 font-Ovo">
            I am a Full Stack Developer specializing in the MERN stack, with a strong expertise in React.js.
            Throughout my career, I have primarily focused on frontend development, gaining in-depth experience
            in building user interfaces and managing application state efficiently. I have a solid understanding
            of how JavaScript works under the hood, as well as a comprehensive knowledge of how React.js operates
            to create Single Page Applications (SPAs). My skills include crafting responsive, dynamic, and maintainable
            applications while ensuring seamless integration with backend services.
          </p>

          {/* Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:shadow-black hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-700 dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools Section */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="text-lg font-semibold my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I Use
          </motion.h3>

          <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer hover:bg-lightHover hover:shadow-black hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-8" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
