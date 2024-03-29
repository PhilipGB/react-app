import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { projects } from './Data.js';

function Projects() {
  return (
    <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <CodeBracketIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-green-400'>
            {"Projects I've Built"}
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            {"Here are some of the projects I've created."}
          </p>
        </div>
        <div className='flex flex-wrap space-x-4 space-y-4 justify-center'>
          {projects.map((project) => (
            <div
              className='sm:w-1/3 w-100 p-4 flex relative'
              key={project.subtitle}
            >
              <img
                alt='gallery'
                className='absolute inset-0 w-full h-96 object-cover object-center'
                src={project.image}
              />
              <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 hover:transition-all duration-700 ease-in-out'>
                <h2 className='tracking-widest text-sm title-font font-medium text-pink-400 mb-1'>
                  {project.subtitle}
                </h2>
                <h1 className='title-font text-lg font-medium text-white mb-3'>
                  {project.title}
                </h1>
                <p className='leading-relaxed'>{project.description}</p>
                <br />
                <ul>
                  <li>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-indigo-200'
                    >
                      <b>Link:</b>
                      <br /> {project.link.replace('https://', '')}
                    </a>
                  </li>
                  <li>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-indigo-200'
                    >
                      <b>Github:</b>
                      <br /> {project.github.replace('https://', '')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
