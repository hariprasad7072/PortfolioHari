import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import profilePhoto from '../assets/Profilephoto.jpeg';
 // adjust if path differs

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-col md:flex-row items-start gap-10'>
        {/* Left side - Text content */}
        <div className='flex flex-row items-start gap-5 flex-1'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-green-accent' />
            <div className='w-1 sm:h-80 h-40 green-gradient' />
          </div>

          <div>
            <motion.h1 
              className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm <span className='text-green-accent'>Hari</span>
            </motion.h1>
            
            <motion.div
              className='text-[30px] text-white font-bold relative h-[36px] overflow-hidden'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className='flex flex-col animate-text-slide'>
                <span>CS Student</span>
                <span>Programmer</span>
                <span>NCC Cadet</span>
                <span>Developer</span>
                <span>Problem Solver</span>
                <span>Learner</span>
              </div>
            </motion.div>
            
            <motion.p 
              className='text-secondary text-[17px] max-w-3xl mt-10'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              B.Tech student in Computer Science Engineering with AI & ML specialization at Karunya University, Coimbatore.
              Passionate about technology and national service, currently preparing for the SSB examination.
              Skilled in programming, data analysis, and AI applications with a disciplined approach to learning.
            </motion.p>
          </div>
        </div>

        {/* Right side - Profile Image */}
        <motion.img
          src={profilePhoto}
          alt='Profile'
          className='w-60 h-60 rounded-full object-cover shadow-xl'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isMounted ? 1 : 0, x: isMounted ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-green-accent flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-green-accent mb-1'
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
