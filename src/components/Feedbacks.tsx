import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  image: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index, testimonial, name, designation, image
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks: React.FC = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div className='bg-tertiary rounded-2xl min-h-[300px] sm:px-16 px-6 sm:py-16 py-10'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            What others say
          </p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div className='sm:px-16 px-6 sm:-mt-16 -mt-10 pb-14 flex flex-wrap gap-7 justify-center'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');