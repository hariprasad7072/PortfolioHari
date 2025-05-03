import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';

const SectionWrapper = (Component: React.ComponentType, idName: string) => {
  return function HOC() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;