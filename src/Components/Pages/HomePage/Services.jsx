import { motion } from "framer-motion";
import { Meteors } from "../../ui/meteors";
import Wrapper from "../../Wrapper";

const Services = () => {
  return (
    <div className="mt-[5em]">
      <Wrapper>
        <h1 className="flex flex-col items-center text-center justify-center sm:text-5xl text-3xl overflow-hidden">
          <motion.span
            initial={{ y: "70%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
          >
            {" "}
            <h1>Services</h1>
          </motion.span>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "8%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-5 rounded-md"
          ></motion.span>
        </h1>
      </Wrapper>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-8">
        <div className="w-full relative">
          <div className="service relative shadow-xl px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl mb-4 relative z-50">
              Saving Strategies
            </h1>

            <p className="font-normal text-base text-gray-400 mb-4 relative z-50">
              Customized investment plans for all, catering to individual goals
              and circumstances, whether novice or seasoned.
            </p>
            <Meteors number={20} />
          </div>
        </div>
        <div className="w-full relative">
          <div className="service relative shadow-xl px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl mb-4 relative z-50">
              Competitive Price
            </h1>

            <p className="font-normal text-base text-gray-400 mb-4 relative z-50">
              Tailored investment plans for everyone, meeting unique goals and
              circumstances, whether new or experienced.
            </p>
            <Meteors number={20} />
          </div>
        </div>
        <div className="w-full relative">
          <div className="service relative shadow-xl px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl mb-4 relative z-50">
              24/7 Support
            </h1>

            <p className="font-normal text-base text-gray-400 mb-4 relative z-50">
              Dedicated financial experts provide guidance, answer questions,
              and ensure your path to financial success.
            </p>
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
