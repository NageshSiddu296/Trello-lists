// import React from "react"
// import List from "./List";

// let Dummy = [{
//     label: "todo",
//     lists:['list1','list2','list3']
// },
//     {
//         label: "doing",
//         lists:["asdfgghj"]
//     }

// ]

// const MainContainer = () => {
//   return (
//     <div className="flex">
//           {Dummy?.map((data,idx) => {
//               return (
//                   <div key={data.label} >
//                       <p>
//                           {data.label}
//                       </p>
//                       <List data={data} />
//                   </div>
//           )
//       })}
//     </div>
//   )
// };

// export default MainContainer;
"use client"
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import List from "./List";
import Image from "next/image";

let Dummy = [
  {
    label: "todo",
    lists: ["list1", "list2", "list3"],
  },
  {
    label: "doing",
    lists: ["asdfgghj", "hi", "hello"],
  },
  {
    label: "done",
    lists: ["asdfgghj", "123", "456"],
  },
  {
    label: "anything",
    lists: ["abc", "def", "ghi"],
  },
  {
    label: "something",
    lists: ["qwerty", "asdfg", "zxcvb"],
  },
];

const MainContainer = () => {
  const [text, setText] = useState("");
  return (
    <div className="bg-black rounded-lg flex flex-col w-[280px] px-3 py-2 text-sm ml-3">
      <div className="flex justify-between">
        {/* <input
          type="text"
          placeholder="ToDo"
          value=
          className="bg-transparent text-lg focus:bg-slate-800 rounded-md px-2 text-slate-300"
        /> */}
        <p className="text-slate-300">
          {Dummy?.map((data) => {
            return (
              <div key={data.label}>
                <p>{data.label}</p>
              </div>
            );
          })}
        </p>
        <BsThreeDots
          className="text-slate-100 hover:bg-[#76a0f4]/25 rounded-lg p-1"
          size={25}
        />
      </div>

      <div className="my-3">
        <List />
      </div>
      <div className="flex my-2 gap-4">
        <button className="text-slate-300 rounded-md hover:bg-slate-600 w-full text-left text-lg">
          + Add a card
        </button>
        <button>
          <Image
            src="/icon.svg"
            width={18}
            height={18}
            alt="icon"
            className="invert"
          />
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
