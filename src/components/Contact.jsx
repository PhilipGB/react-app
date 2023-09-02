import { UserIcon } from '@heroicons/react/24/solid';
// import React from 'react';

function Contact() {
  return (
    <section id='contact' className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <UserIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-yellow-200'>
            Contact Me
          </h1>
        </div>
        <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
          <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
            <span className='title-font font-semibold text-yellow-100 tracking-widest text-xs'>
              EMAIL:{'\u00A0'}
            </span>
            <a
              href='mailto: philip@philipburgess.dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-indigo-400 leading-relaxed'
            >
              philip@philipburgess.dev
            </a>
          </div>
          <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
            <span className='title-font font-semibold text-yellow-100 tracking-widest text-xs'>
              GITHUB:{'\u00A0'}
            </span>
            <a
              href='https://github.com/PhilipGB'
              target='_blank'
              rel='noopener noreferrer'
              className='text-indigo-400 leading-relaxed'
            >
              github.com/PhilipGB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
