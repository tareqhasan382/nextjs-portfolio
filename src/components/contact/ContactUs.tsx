"use client";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = axios
      .post("https://portfolio-contact-mu.vercel.app/portfolio", data)
      .then((response) => {
        if (response.data) {
          alert("Send message successfully");
        }
      });
    console.log("Res:", res);
  };
  return (
    <div className=" flex flex-wrap ">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">
            <div>
              <h1 className=" text-center font-bold text-4xl">
                Contact Us
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
              <div className="col-span-2 lg:col-span-1">
                <input
                  required
                  {...register("name")}
                  type="text"
                  className=" rounded border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Name"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <input
                  required
                  {...register("email")}
                  type="email"
                  className=" rounded border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-span-2">
                <input
                  required
                  {...register("subject")}
                  type="text"
                  className=" rounded border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Subject"
                />
              </div>
              <div className="col-span-2">
                {/* <input
                  type="text"
                  className=" w-full h-32 border-solid border-gray-400 border-2 p-3 "
                  placeholder="Message"
                /> */}
                <textarea
                  required
                  {...register("message")}
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  className=" rounded border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-span-2 text-right">
                <button
                  type="submit"
                  className=" rounded py-3 px-6 bg-teal-600 text-white font-bold w-full sm:w-32"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

// re_EN2oGtzc_MJNDXw1tRRrV7cr4uXZ2bmkj
/*
import { Resend } from 'resend';

const resend = new Resend('re_EN2oGtzc_MJNDXw1tRRrV7cr4uXZ2bmkj');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'tareqhasan21100@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});

// re_EP9L31d7_5wjpiSCKdZkgW9LwCZVvf4ua || tareqhasan


 <textarea
                  required
                  {...register("message")}
                  name="text"
                  id="message"
                  cols={30}
                  rows={10}
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Message"
                ></textarea>
*/
