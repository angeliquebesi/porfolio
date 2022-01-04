/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import emailjs from "@emailjs/browser";
import { NavBar } from "components/index";
import "./styles.scss";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "formulaire contact",
        "template_nehttid",
        e.target,
        "user_zEHAZSC5CRjgWv6cF0EBR"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Success!");
        },
        (error) => {
          console.log(error.text);
          alert("failed");
        }
      );
    e.target.reset();
  }
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      {/* formulaire */}
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <form className="w-full max-w-lg" onSubmit={sendEmail}>
          {/* identité */}
          <div className="flex flex-wrap -mx-3 mb-6">
            {/* prenom */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                name="firstname"
              />
            </div>
            {/* nom de famille */}
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                name="lastname"
              />
            </div>
          </div>
          {/* email */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="email"
              />
              <p className="text-red-500 text-xs italic">Champ obligatoire</p>
            </div>
          </div>
          {/* message */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
              />
            </div>
          </div>
          {/* envoi */}
          <div className="md:flex md:items-center">
            <input
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
