// import React from "react";

// interface dataType{
//     data : {
//       label:string,
//       lists:string[]
//     }
//   }
// const List = ({data}:dataType) => {
//   return (
//     <div>
//       <p className="flex flex-col">
//         {data?.lists?.map((items) => (
//           <div>{items}</div>
//         ))}
//       </p>
//     </div>
//   );
// };

// export default List;


"use client";
import { BiSolidPencil } from "react-icons/bi";

const List = () => {
  return (
    <>
      <div className="flex">
        <input
          type="text"
          className=" text-lg w-full bg-slate-800 rounded-md text-slate-300 px-2 py-1"
        />
        <button className="pl-2">
          <BiSolidPencil className=" text-3xl text-slate-400 hover:bg-[#76a0f4]/25 rounded-lg p-1" />
        </button>
      </div>
    </>
  );
};

export default List;