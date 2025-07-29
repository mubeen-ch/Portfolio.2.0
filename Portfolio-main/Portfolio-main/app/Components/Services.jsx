import { assets, serviceData, skills } from '@/next_js_portfolio_assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  // Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      id="services"
      className="w-full px-[6%] py-16 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Headings */}
      <motion.h4
        className="text-center mb-2 text-2xl font-Ovo"
        variants={fadeInUp}
      >
        What I Offer
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-bold text-black-300 dark:text-white"
        variants={fadeInUp}
      >
        My Services
      </motion.h2>

      <motion.p
        className="text-center max-w-4xl mx-auto my-6 font-Ovo text-gray-600 dark:text-gray-300"
        variants={fadeInUp}
      >
        I’ve gained a deep understanding of JavaScript, working extensively with
        React.js, Redux, Context API, Tailwind CSS, and various third-party
        libraries. Additionally, I’ve explored Node.js, Nest.js, and Next.js,
        enhancing my skills in frontend and backend development while mastering
        state management, styling, and scalable application architecture.
      </motion.p>

      {/* Services Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-14"
        variants={staggerContainer}
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="border border-gray-300 dark:border-white rounded-3xl px-8 py-10 hover:shadow-xl hover:bg-lightHover hover:-translate-y-1 transition duration-500 dark:hover:bg-darkHover"
          >
            <Image src={icon} alt={`${title} icon`} className="w-10 h-10" />
            <h3 className="text-lg font-semibold mt-4 text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-300 leading-5">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Heading */}
      <motion.h2
        className="text-center text-5xl font-bold text-black-300 dark:text-white"
        variants={fadeInUp}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center my-14"
        variants={staggerContainer}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="flex items-center gap-3 p-4 border border-gray-300 dark:border-white rounded-xl bg-white dark:bg-transparent shadow-sm hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            <Image
              src={skill.bgImage}
              alt={skill.title}
              width={40}
              height={40}
              className="rounded-md bg-white"
            />
            <h3 className="text-base font-medium text-gray-800 dark:text-white">
              {skill.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
