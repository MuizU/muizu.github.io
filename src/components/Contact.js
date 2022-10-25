import React from "react";

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <header style={{paddingLeft:'9.25rem'}} className="container px-5 py-10 mx-auto flex flex-col sm:flex-nowrap flex-wrap justify-center align-center">
        <h1 style={{paddingRight:'175px'}} className="sm:text-4xl mb-5 text-3xl font-medium title-font text-white mx-auto">
          Contact Me</h1>

          <p className="text-base mx-auto leading-relaxed xl:w-2/4 lg:w-3/4">
          If you've seen my potential or want to talk to me, don't hesitate to contact me.</p>
      </header>
      <div style={{paddingLeft:'9.25rem'}} className="container px-5 py-10 mx-auto flex align-center justify-center sm:flex-nowrap flex-wrap">
            <div className="px-6 lg:w-1/2">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href={'mailto:muizuvais99@gmail.com'}
                className="no-underline hover:underline">
                muizuvais99@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a href={"tel:+94765357344"}
                className="no-underline hover:underline"

              >&#43;94 765 357 344</a>
            </div>
      </div>
    </section>
  );
}
