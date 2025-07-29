import { inProcess, workData } from '@/next_js_portfolio_assets/assets/assets';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

// ✅ Reusable Project Card Component
const ProjectCard = ({ title, description, frameworks, bgImage, link }) => (

<Link href={link} passHref legacyBehavior>
  <a target="_blank" rel="noopener noreferrer" className="w-full">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      whileHover="hover"
      className="border h-[400px] border-gray-200 rounded-xl shadow-md p-4 bg-white dark:bg-transparent text-center flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-500"
    >
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h2>
      <p className="text-lg text-gray-500 mt-3 dark:text-white">{description}</p>
      <h2 className="text-xl font-medium mt-5 dark:text-white">FrameWorks: {frameworks}</h2>
      <div className="mt-4 w-full h-full flex flex-col justify-end">
        <img
          src={bgImage}
          alt={title}
          className="rounded-md h-40 w-full object-contain shadow-sm border border-gray-400"
        />
      </div>
    </motion.div>
  </a>
</Link>

);

// ✅ Main Work Component
const Work = () => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Section Header */}
      <motion.h4 className="text-center mb-2 text-2xl font-Ovo" variants={cardVariants}>
        My Portfolio
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-bold text-black-300" variants={cardVariants}>
        My Latest Work
      </motion.h2>
      <motion.p
        className="text-center max-w-5xl mx-auto mb-12 mt-5 font-Ovo text-xl"
        variants={cardVariants}
      >
        Welcome to my portfolio! 🎉 Dive in to explore my journey, skills, and projects. Feel free to
        look around, and I hope you find my work inspiring and engaging!
      </motion.p>

      {/* Completed Projects */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10"
        variants={sectionVariants}
      >
        {workData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>

      {/* In-Progress Projects */}
      <motion.h2 className="text-center text-5xl font-bold text-black-300" variants={cardVariants}>
        Projects in Process
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10"
        variants={sectionVariants}
      >
        {inProcess.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
