import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" lg:px-48 md:px-20  w-full h-24 py-5 bg-gray-700 flex items-center justify-center text-white ">
      <span className=" pl-4 ">Tareq by </span>{" "}
      <span className=" px-2 ">&copy;</span> {currentYear} All Rights Reserved.
    </div>
  );
};

export default Footer;
