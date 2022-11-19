import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4x1 md:text-7x1 mb-1 md:mb-3 font-bold">
        {" "}
        Federico{" "}
      </h1>
      <p className="text-base md:text-xl mb-e font-medium ">
        Software Web Engineer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        This is my bio, pay attention. <br />
        <a
          href="https://ar.linkedin.com/in/ffailla"
          target="blank"
          className="text-cyan-600 hover-underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          {" "}
          my LinkedIn{" "}
        </a>
      </p>
    </div>
  );
};

export default Intro;
