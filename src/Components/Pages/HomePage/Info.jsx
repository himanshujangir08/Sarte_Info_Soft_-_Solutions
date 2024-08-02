import { CardRotate } from "../../ui/CardRotate";

/* eslint-disable react/no-unescaped-entities */
const Info = () => {
  return (
    <div className="mt-[5em] w-full grid lg:grid-cols-2 grid-cols-1">
      <div className="sm:-mt-40 -mt-10">
        <CardRotate />
      </div>
      <div className="mr-2 flex flex-col gap-5 sm:mt-0 -mt-40">
        <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
          WHO WE ARE
        </h1>
        <h2 className="font-semibold md:text-5xl sm:text-3xl text-2xl">
          We Aim To Be The Best Manager For Our Clients
        </h2>
        <p className=" font-light">
          At Marvellous Mining, our main goal is to help you take control of
          your financial future. We offer expert investment management services
          to protect and grow your hard-earned money. We believe that everyone
          deserves a chance to succeed financially, and we're committed to
          helping you reach your goals.
        </p>
        <h1 className="font-semibold md:text-3xl text-xl">
          5+YEARS EXPERIENCE
        </h1>
      </div>
    </div>
  );
};

export default Info;
