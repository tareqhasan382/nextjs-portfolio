"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsXLg, BsList, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const styles = {
  navlink:
    " cursor-pointer ml-10 uppercase border-b border-black hover:border-red-300 text-xl ",
};

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMeno = () => setMenuOpen(!menuOpen);

  return (
    <header className=" ">
      <nav className=" lg:px-48 md:px-20  w-full h-16 shadow-xl bg-gray-700 text-white ">
        {/*======================================== Dekstop menu ============================================*/}
        <div className=" flex items-center justify-between h-full px-10 w-full ">
          <Link href="/">
            <Image
              src="/images/tareq.png"
              height={45}
              width={45}
              alt="logo"
              className=" cursor-pointer "
            />
          </Link>
          <div className=" text-white hidden sm:flex  ">
            <ul className=" hidden sm:flex ">
              <li className={styles.navlink}>
                <Link href="/">About</Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          {/*======================================== Mobile menu ============================================*/}
          <div className=" sm:hidden pl-24">
            <BsList
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer h-8 w-8 text-white  "
            />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-gray-400 p-10 ease-in-out duration-500"
              : " fixed left-[-100%] top-0 p-10 ease-in-out duration-500  "
          }
        >
          <div className=" flex w-full items-center justify-end ">
            <div onClick={toggleMeno} className=" cursor-pointer  ">
              <BsXLg className=" cursor-pointer h-8 w-8 text-white " />
            </div>
          </div>
          {/*======================================== Mobile menu icon list ============================================*/}
          <div className=" flex-col py-4  ">
            <ul>
              <li className=" py-3 hover:underline hover:decoration-red-500  ">
                {" "}
                <Link onClick={() => setMenuOpen(false)} href="/">
                  About
                </Link>{" "}
              </li>
              <li className=" py-3 hover:underline hover:decoration-red-500  ">
                {" "}
                <Link onClick={() => setMenuOpen(false)} href="/">
                  Contact
                </Link>{" "}
              </li>
              <li className=" py-3 hover:underline hover:decoration-red-500  ">
                {" "}
                <Link onClick={() => setMenuOpen(false)} href="/">
                  Dashboard
                </Link>{" "}
              </li>
            </ul>
          </div>
          {/*======================================== Social Media link =======================================*/}
          <div className=" flex flex-col justify-around pt-10 items-center gap-2  ">
            <Link href="/">
              <p className=" bg-black border-2 border-black hover:border-black hover:bg-gray-400 hover:ease-out duration-300 w-32 h-10 rounded-full items-center flex justify-center text-center ">
                <FcGoogle
                  size={30}
                  className=" text-center items-center justify-center "
                />
              </p>
            </Link>
            <Link href="/">
              <p className=" bg-black  border-2 border-black hover:border-black hover:text-black hover:bg-gray-400 hover:ease-out duration-300 w-32 h-10 rounded-full items-center flex justify-center text-center ">
                <BsGithub
                  size={30}
                  className="text-white hover:text-black text-center items-center justify-center "
                />
              </p>
            </Link>
          </div>
          <div className=" flex items-center justify-center text-center py-3 ">
            <Image
              src="/images/tareq.png"
              height={120}
              width={120}
              alt="logo"
            />
          </div>
          <h1 className=" bottom-0 text-center ">Generated by Tareq</h1>
        </div>

        {/*======================================== Social Media link =======================================*/}
        {/*======================================== Dekstop menu ============================================*/}
        {/*======================================== Dekstop menu ============================================*/}
      </nav>
    </header>
  );
};

export default Navbar;
