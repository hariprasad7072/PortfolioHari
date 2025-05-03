import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';

import { navLinks } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href='#'
            className='flex items-center gap-2'
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <Code className='w-9 h-9 text-green-accent' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Hari &nbsp;
              <span className='sm:block hidden'>| AIML Engineer</span>
            </p>
          </a>
        </motion.div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              className={`${
                active === link.title ? 'text-green-accent' : 'text-secondary'
              } hover:text-green-accent text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div 
            className='w-[28px] h-[28px] cursor-pointer z-20'
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X className='text-white' /> : <Menu className='text-white' />}
          </div>

          <motion.div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === link.title ? 'text-green-accent' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;