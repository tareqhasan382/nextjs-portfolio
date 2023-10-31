import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 py-24  md:flex-row md:space-x-4 md:text-left">
      <div className="md:mt-2 md:w-1/2 ">
        <Image
          src="/images/tareq.png"
          alt="img"
          width={325}
          height={325}
          className="rounded-full shadow-2xl border border-teal-600 "
        />
      </div>
      <div className="md:mt-2 md:w-3/5">
        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
          Hi, I&#39;m Tareq!
        </h1>
        <p className="text-lg mt-4 mb-6 md:text-2xl">
          I&#39;m a{" "}
          <span className="font-semibold text-teal-600">
            Full-Stack developer{" "}
          </span>
          I have a wide range of hobbies and passions that keep me busy. From
          reading, traveling, to making YouTube videos. I am always seeking new
          experiences and love to keep myself engaged and learning new things.
        </p>

        <div className=" flex flex-row items-center lg:justify-start md:justify-around gap-3 ">
          <Link
            href="https://drive.google.com/file/d/1boaCu3NeB4pn8FfqKJlbI_bsYDpUdXxH/view"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
          >
            CV
          </Link>
          <Link
            href="https://github.com/tareqhasan382/"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
          >
            Github
          </Link>
          <Link
            href="https://www.facebook.com/tareqhasan211/"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
          >
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
