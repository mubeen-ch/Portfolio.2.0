import { assets, serviceData, skills } from '@/next_js_portfolio_assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  // Refined Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <motion.div
      id="services"
      className="w-full px-[8%] py-20 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      {/* Section Headings */}
      <motion.h4 
        variants={fadeInUp}
        className="text-center mb-2 text-lg font-Ovo tracking-widest uppercase text-gray-500"
      >
        Capabilities
      </motion.h4>

      <motion.h2 
        variants={fadeInUp}
        className="text-center text-4xl md:text-5xl font-Ovo font-medium"
      >
        Solutions & Services
      </motion.h2>

      <motion.p 
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mt-6 mb-16 font-Ovo text-lg leading-relaxed text-gray-600 dark:text-gray-300"
      >
        I specialize in building **enterprise-grade frontend architectures** and high-performance web applications. My focus is on creating maintainable systems using React and Next.js, ensuring state management is optimized for speed and components are built for scalability.
      </motion.p>

      {/* Services Grid - Optimized for Mobile Stacking */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        variants={staggerContainer}
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="group relative p-10 border border-gray-300 dark:border-white/20 rounded-3xl cursor-default hover:bg-lightHover/30 transition-all duration-300 dark:hover:bg-darkHover/40"
          >
            <div className="bg-black dark:bg-white p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src={icon} alt="" className="w-6 invert dark:invert-0" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={fadeInUp} className="text-center mb-12">
         <h4 className="text-lg font-Ovo tracking-widest uppercase text-gray-500 mb-2">Technical Proficiency</h4>
         <h2 className="text-3xl md:text-4xl font-Ovo font-medium">Core Tech Stack</h2>
      </motion.div>

      {/* Skills Grid - Responsive Grid sizing */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        variants={staggerContainer}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-4 border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-darkHover/20 shadow-sm hover:shadow-md transition-all cursor-default"
          >
            <div className="flex-shrink-0 p-1 bg-gray-50 dark:bg-white/5 rounded-lg">
              <Image
                src={skill.bgImage}
                alt={skill.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="text-sm md:text-base font-medium text-gray-800 dark:text-white">
              {skill.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;