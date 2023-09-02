import { StarIcon, CheckIcon } from '@heroicons/react/24/solid';
// import React from 'react';
import { skills } from './Data.js';

function Skills() {
  return (
    <section id='skills'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='text-center mb-20'>
          <StarIcon className='w-10 inline-block mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-pink-400 mb-4'>
            Skills
          </h1>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
          {skills.map((skill) => (
            <div key={skill} className='p-2 sm:w-1/2 w-full'>
              <div className='bg-pink-900 rounded flex p-4 h-full items-center'>
                <CheckIcon className='text-blue-200 w-6 h-6 flex-shrink-0 mr-4' />
                <span className='title-font font-medium text-white'>
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
