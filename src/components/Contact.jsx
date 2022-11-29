import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="flex flex-col mb-10 mx- auto">
      <div className="flex justify-center items-center">
        <form
          method="POST"
          action="https://getform.io/f/d1e01ef1-1c75-482b-bd28-efed517ec1d3"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          ></input>
          <input
            type="email"
            autocomplete="username"
            name="email"
            placeholder="Email"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          ></input>
          <textarea
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            name="message"
            placeholder="Message"
            rows="10"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 
              drop-shadow-md hover:stroke-white"
          >
            Work with me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
