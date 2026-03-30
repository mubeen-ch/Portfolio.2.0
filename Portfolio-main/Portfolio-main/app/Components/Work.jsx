import { inProcess, workData } from '@/next_js_portfolio_assets/assets/assets';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// Optimized for snappier performance
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4, 
      staggerChildren: 0.1 // Reduced from 0.2 for faster entrance
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 }, // Less extreme scale for subtle feel
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    y: -10, // Lift effect feels more "premium" than just scale
    transition: { duration: 0.2 },
  },
};

const ProjectCard = ({ title, description, frameworks, bgImage, link }) => (
  <motion.div
    variants={cardVariants}
    whileHover="hover"
    className="group h-full flex"
  >
    <Link href={link} target="_blank" rel="noopener noreferrer" className="w-full flex">
      <div className="w-full border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-xl p-5 bg-white dark:bg-darkHover/20 flex flex-col items-center transition-all duration-300">
        
        {/* Responsive Image Container */}
        <div className="w-full aspect-video relative overflow-hidden rounded-xl mb-6 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
          <Image
            src={bgImage}
            alt={title}
            fill
            className="object-fit group-hover:scale-105 transition-transform duration-500 "
          />
        </div>

        <div className="flex flex-col flex-grow w-full text-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-black dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed line-clamp-3">
            {description}
          </p>
          
          {/* Framework Tags - Senior Detail */}
          <div className="mt-auto pt-6">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2 font-bold">Tech Stack</span>
            <p className="text-sm font-medium text-gray-700 dark:text-white/80 italic">
              {frameworks}
            </p>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Work = () => {
  return (
    <motion.div
      id="work"
      className="w-full px-[8%] md:px-[12%] py-20 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h4 className="text-lg font-Ovo tracking-widest uppercase text-gray-500 mb-2" variants={cardVariants}>
          Portfolio
        </motion.h4>
        <motion.h2 className="text-4xl md:text-5xl font-Ovo font-medium mb-6" variants={cardVariants}>
          Latest Engineering Projects
        </motion.h2>
        <motion.p className="text-center max-w-3xl mx-auto font-Ovo text-lg text-gray-600 dark:text-gray-300" variants={cardVariants}>
          A curated selection of production-ready applications, ranging from AI-integrated platforms to specialized fintech solutions.
        </motion.p>
      </div>

      {/* Grid 1: Completed Projects */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        variants={sectionVariants}
      >
        {workData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>

      {/* Section 2: In-Progress */}
      <div className="pt-10">
        <motion.h2 className="text-center text-3xl md:text-4xl font-Ovo font-medium mb-12 flex items-center justify-center gap-4" variants={cardVariants}>
          <span className="hidden sm:block h-[1px] w-12 bg-gray-300"></span>
          Development Lab (In-Progress)
          <span className="hidden sm:block h-[1px] w-12 bg-gray-300"></span>
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
        >
          {inProcess.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;