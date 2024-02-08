"use client";

import { AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_b6cw4ab", "template_rp3kqnq", form.current, "Nbq_YZcBmI7h4PZRE")
      .then((result) => {
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="w-full h-fit px-[40px]  py-20 md:py-20 max-xs:px-[20px] relative bg-light-bg" id="contact">
      <div className="max-w-[1250px] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <div className="inline-block">
              <p className="section-title mb-10">
                <span className="mb-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
                  </svg>
                </span>
                Contact Me!
              </p>
            </div>
            <p className="text-dark-blue">
            Feel free to reach out. I'm always open for new opportunities and projects.
            </p>
            <p className="text-dark-blue mt-12">Email Me!</p>
            <h4>
              <a href="#" className="text-lg font-semibold text-dark-blue">
                ganesh2070784@gmail.com
              </a>
            </h4>
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5 className="text-dark-blue">Socials</h5>
                <div className="flex gap-5">
                  <a href="#" className="text-3xl text-dark-blue">
                    <AiFillGithub />
                  </a>
                  <a href="#" className="text-3xl text-dark-blue">
                    <AiFillLinkedin />
                  </a>
                  <a href="#" className="text-3xl text-dark-blue">
                    <AiFillInstagram />
                  </a>
                  <a href="#" className="text-3xl text-dark-blue">
                    <AiFillTwitterSquare />
                  </a>
                  <a href="#" className="text-3xl text-dark-blue">
                    <FaDev />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={sendEmail} ref={form} className="w-full">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
                />
                <textarea
                  className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
                  id="message"
                  name="message"
                  rows="7"
                  style={{ resize: "none" }}
                  placeholder="Message"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-6 font-semibold text-white bg-dark-red hover:shadow-lg hover:bg-dark-red/75 transition-all duration-500 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;