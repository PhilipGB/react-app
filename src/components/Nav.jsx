import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';
// import React from 'react';

function Nav() {
  return (
    <header className='bg-gray-900 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='title-font font-medium text-indigo-200 mb-4 md:mb-0'>
          <a href='#about' className='ml-3 text-xl'>
            Philip Burgess
          </a>
        </a>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center'>
          <a href='#projects' className='mr-5 text-green-400 hover:text-white'>
            Projects
          </a>
          <a href='#skills' className='mr-5 text-pink-400 hover:text-white'>
            Skills
          </a>
        </nav>
        <a
          href='#contact'
          className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-yellow-100'
        >
          Contact Me
          <ChatBubbleBottomCenterIcon className='w-4 h-4 ml-1' />
        </a>
      </div>
    </header>
  );
}

export default Nav;
