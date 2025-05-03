import React from 'react';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { technologies, languages } from '../constants';

interface SkillBarProps {
  name: string;
  percent: number;
  icon: React.ElementType;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percent, icon: Icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-green-accent" />
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-green-accent font-medium">{percent}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className="bg-green-accent h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

interface LanguageCardProps {
  name: string;
  proficiency: string;
  percent: number;
  index: number;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ name, proficiency, percent, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-white font-medium">{name}</span>
        <span className="text-green-accent font-medium">{proficiency}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className="bg-green-accent h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Tech: React.FC = () => {
  return (
    <div id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My Skills</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Technical Proficiency.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <motion.h3 
            className="text-white font-bold text-[24px] mb-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technical Skills
          </motion.h3>
          <div>
            {technologies.map((technology, index) => (
              <SkillBar
                key={`technology-${index}`}
                index={index}
                name={technology.name}
                percent={technology.percent}
                icon={technology.icon}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <motion.h3 
            className="text-white font-bold text-[24px] mb-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Languages
          </motion.h3>
          <div>
            {languages.map((language, index) => (
              <LanguageCard
                key={`language-${index}`}
                index={index}
                name={language.name}
                proficiency={language.proficiency}
                percent={language.percent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");