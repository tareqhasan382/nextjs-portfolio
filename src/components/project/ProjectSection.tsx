import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
const projects = [
  {
    name: "Car selling website",
    description:
      "HTML || CSS || Bootstrap || React.js || Node.js || Redux || Firebase || Heroku || MongD",
    image: "/images/carSelling.png",
    github: "https://github.com/tareqhasan382/Car-selling-website",
    link: "https://stupefied-sammet-2a6261.netlify.app",
  },
  {
    name: "Health-Care",
    description:
      "HTML ||  CSS || Bootstrap || React.js || Node.js || Firebase || Mongodb",
    image: "/images/doctor.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://trusting-wilson-571bdb.netlify.app",
  },
  {
    name: "Todo App",
    description: "State Management Using Redux ",
    image: "/images/todo.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://roaring-horse-e6d290.netlify.app/",
  },
];
const ProjectSection = () => {
  return (
    <div>
      <div>
        <h1 className=" text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
      </div>
      {projects.map((item, index) => (
        <div
          key={index}
          className=" rounded flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2  md:flex-row md:space-x-4 md:text-left pb-8 gap-3 my-5 bg-gray-200 "
        >
          <div className=" md:mt-2 md:w-1/3 ">
            <Image
              src={item.image}
              alt="img"
              width={325}
              height={325}
              className=" rounded-t border-teal-600 object-cover w-full "
            />
          </div>
          <div className=" md:w-full flex flex-col items-start justify-start px-3  ">
            <p className=" text-lg font-bold pb-2 md:pr-3 ">{item.name}</p>
            <span className=" w-full ">{item.description}</span>
            <div className=" flex gap-3  ">
              <Link
                href="/"
                className="text-neutral-100 rounded font-semibold px-6 py-3 bg-teal-600 cursor-pointer"
              >
                <BsGithub size={24} />
              </Link>
              <Link
                href="/"
                className="text-neutral-100 rounded font-semibold px-6 py-3 bg-teal-600 cursor-pointer"
              >
                <BsArrowUpRightSquare size={24} />
              </Link>
              <Link
                href="/"
                className="text-neutral-100 rounded font-semibold px-6 py-3 bg-teal-600 cursor-pointer"
              >
                <BsArrowUpRightSquare size={24} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
