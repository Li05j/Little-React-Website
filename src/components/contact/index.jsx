import React, { useState } from "react";
import PersonalPage from "../template/PersonalPage";

const FORM_URL = "#"; // TODO - Where to send the form-data when the form is submitted.

const ContactFormComp = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="m-20 p-20 border-0 border-gray-100 rounded-lg flex flex-col items-center ">
        <div className="text-4xl">Thank you!</div>
        <div className="text-xl mt-5">We'll be in touch soon... Actually no because your message does not go anywhere at the moment.</div>
      </div>
    );
  }

  return (
    <div className="m-20 p-20 border-0 border-gray-100 rounded-lg flex flex-col items-center ">
        <h1 className="-mt-10 font-bold text-5xl mb-10">Contact Me</h1>
    <div className="w-1/2">
    <form
      action={FORM_URL}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-600 text-gray-600 relative bg-white bg-white rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-600 text-gray-600 relative bg-white bg-white rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-600 text-gray-600 relative bg-white bg-white rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};

const ContactPage = (props) => {
    return <PersonalPage children={<ContactFormComp />} />;
  };
export default ContactPage;