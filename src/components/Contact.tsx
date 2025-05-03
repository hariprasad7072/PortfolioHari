import React, { useRef, useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { contactInfo } from '../constants';
import { SectionWrapper } from '../hoc';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Mock successful email sending for demo purposes
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, 1500);

    // In a real implementation, you would use EmailJS:
    /*
    emailjs
      .send(
        'service_id',
        'template_id',
        {
          from_name: form.name,
          to_name: 'Hari Prasad',
          from_email: form.email,
          to_email: 'hp4921121@gmail.com',
          message: form.message,
        },
        'public_key'
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        setError('Something went wrong. Please try again.');
        console.log(error);
      });
    */
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='flex-1 bg-black-100 p-8 rounded-2xl'
      >
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Get in touch</p>
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none'
              required
            />
          </label>

          {error && (
            <div className='bg-red-800 text-white p-3 rounded-lg'>{error}</div>
          )}

          {success && (
            <div className='bg-green-800 text-white p-3 rounded-lg'>
              Thank you. I will get back to you as soon as possible.
            </div>
          )}

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl border-2 border-green-accent hover:bg-green-accent hover:text-black transition-all duration-300'
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <div className='bg-black-100 p-8 rounded-2xl h-full'>
          <h3 className='text-white font-bold text-[24px] mb-5'>
            Contact Information
          </h3>
          
          <div className='space-y-6'>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div 
                  key={index}
                  className='flex items-start gap-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className='bg-tertiary rounded-full p-3'>
                    <Icon className='w-6 h-6 text-green-accent' />
                  </div>
                  <div>
                    <h4 className='text-white font-medium'>{info.title}</h4>
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='text-secondary hover:text-green-accent transition-colors duration-300'
                    >
                      {info.content}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className='mt-10'>
            <h3 className='text-white font-bold text-[24px] mb-3'>
              Hobbies
            </h3>
            <p className='text-secondary'>
              Actively engaged in sports with a strong focus on football; represented at the national level in the U-14 category.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');