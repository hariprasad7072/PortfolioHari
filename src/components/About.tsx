import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { services } from '../constants';
import { SectionWrapper } from '../hoc';

interface ServiceCardProps {
  index: number;
  title: string;
  icon: React.ElementType;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon: Icon, description }) => {
  return (
    <Tilt 
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='xs:w-[250px] w-full'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <Icon className='w-16 h-16 text-green-accent' />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
          
          <p className='text-secondary text-[14px] text-center'>
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: React.FC = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-start gap-10'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex-1'
        >
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            Introduction
          </p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            Overview.
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a B.Tech student in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning 
            at Karunya University, Coimbatore. I have a strong interest in technology and national service, and I'm 
            currently preparing for the SSB examination. I'm skilled in programming languages like Python, SQL, Java, C++, and C, 
            with experience in data analysis and AI applications. I take a disciplined and goal-oriented approach to 
            learning and problem-solving, developed through my academic studies and involvement in the National Cadet Corps.
          </motion.p>
        </motion.div>

       
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');