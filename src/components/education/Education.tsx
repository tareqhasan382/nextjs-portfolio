const Education = () => {
  return (
    <div className=" my-12 pb-1 md:pt-1 md:pb-1">
      <h1 className="text-center font-bold text-4xl">
        Education
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        <div className=" lg:w-full md:w-1/2 ">
          <h1 className="text-center lg:text-2xl md:text-xl  font-bold mb-3 md:text-left">
            Bachelor at Computer Science
            <span className=" text-xl font-normal px-4 text-gray-500 ">
              Not Yet
            </span>
          </h1>
          <p className="text-xl mb-6">Will be Graduating Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
