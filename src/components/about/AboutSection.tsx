import Image from "next/image";
import Link from "next/link";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Prisma" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "Next.js" },
  { skill: "Bun" },
  { skill: "Node" },
  { skill: "Express" },
  { skill: "Mongoose" },
  { skill: "MongoDB" },
  { skill: "NoSQL" },
  { skill: "PostgreSQL" },
  { skill: "Tailwind CSS" },
  { skill: "Ant Design" },
  { skill: "Git" },
  { skill: "GitHub" },
];
const AboutSection = () => {
  return (
    <div className=" my-16 pb-4 md:pt-16">
      <h1 className="text-center font-bold text-4xl">
        About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        <div className="md:w-1/2 ">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Get to know me!
          </h1>
          <p>
            Hi, my name is Tareq Hasan and I am a Passionate and highly skilled
            in web development, I bring a wealth of experience and expertise in
            a range of technologies. My skills span from front-end to back-end,
            making me a versatile full-stack developer. With a strong foundation
            in HTML, JavaScript, and CSS, I have worked extensively with modern
            libraries and frameworks such as React, Next.js, and React
            Bootstrap, crafting exceptional user experiences.
          </p>
          <br />
          <p>
            On the server side, I am proficient in Prisma, TypeScript, Node.js,
            and Express, delivering robust and efficient back-end solutions. I
            have experience with both NoSQL (MongoDB, Mongoose) and relational
            databases (PostgreSQL), and I can seamlessly integrate them into
            applications
          </p>
          <br />
          <p>
            I am well-versed in Redux, offering state management solutions that
            enhance performance and maintainability. My coding expertise extends
            to C# and Java, and I apply object-oriented programming principles
            to create scalable and maintainable code. I am also proficient with
            tools like VSCode, Git, and various deployment platforms, including
            Firebase, Netlify, and Vercel.
          </p>
          <br />
          <p>
            I believe that you should{" "}
            <span className="font-bold text-teal-500">never stop growing</span>{" "}
            and that&#39;s what I strive to do, I have a passion for technology
            and a desire to always push the limits of what is possible. I am
            excited to see where my career takes me and am always open to new
            opportunities. 🙂
          </p>
        </div>
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="text-2xl font-bold mb-6">My Skills</h1>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start pb-3 ">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
          <Image
            src="/images/kids.png"
            alt="kind"
            width={625}
            height={625}
            className=" md:bottom-4 md:left-32 md:z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
