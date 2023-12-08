import React from "react";
import "./notice.css";
const Notice = () => {
  return (
    <div className=" flex  flex-col items-center p-4 ">
      <h2 className="text-center text-4xl font-bold text-[#2c4964]">NOTICE</h2>

      <div className=" px-8 lg:px-16 pb-10 mt-4  bg-[#01204E] lg:w-[800px] rounded-[15px] ">
        <div className="pt-14 text-white title ">
          <p className=" lg:text-2xl cursor-pointer text-left font-medium">
            Backlog Routine 7th & 5th Sem Examination 2023-24
          </p>
          <span className="text-xs lg:text-[15px] text-left font-extralight">
            04 December 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notice;
