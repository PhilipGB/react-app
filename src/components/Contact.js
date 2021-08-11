import React from "react"

function Contact() {
  return (
<section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-yellow-100 tracking-widest text-xs">
                EMAIL
              </h2>
              <a 
                href="mailto: philip@philipburgess.dev" target="_blank" 
                rel="noopener noreferrer" className="text-indigo-400 leading-relaxed">
                  philip@philipburgess.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;