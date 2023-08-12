import React from "react"

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Philip Burgess.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a programmer from Skipton in the United Kingdom.
            This portfolio site was built using the React framework 
            and styled with tailwindcss.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 rounded text-lg">
              Contact Me
            </a>
          </div>
        </div>
        <div>
          <img
            className="object-cover object-center rounded-full h-64 w-64 shadow-2xl"
            alt="Philip Burgess"
            src="./images/IMG_20210331_154028.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;