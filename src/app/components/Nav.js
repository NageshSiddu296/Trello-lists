import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiWorld, BiMenuAltLeft,BiSolidRocket } from "react-icons/bi";
import { VscGraphLeft } from "react-icons/vsc";
import { MdArrowForwardIos, MdOutlineSupervisorAccount,MdFlashOn } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const Nav = () => {
  return (
    <header className="flex justify-between px-10 text-slate-300 items-center bg-[#084066] h-[10vh]">
      <div className="flex gap-5">
        <input
          placeholder="FE-ASSIGNMENT"
          className="text-slate-300 text-xl font-extrabold px-2 rounded-lg"
        ></input>
        <AiOutlineStar className=" text-3xl hover:bg-[#76a0f4]/25 rounded-lg p-1" />
        <button className="flex gap-2 items-center hover:bg-[#76a0f4]/25 rounded-lg  p-1">
          <MdOutlineSupervisorAccount className=" text-3xl " />Workspace visible
        </button>
        <button className="flex justify-around items-center bg-slate-300  p-3 rounded-md h-8 text-xl gap-2 font-semibold hover:bg-slate-100 text-black">
          <VscGraphLeft /> Board
        </button>
        <button className=" rotate-90 text-2xl hover:bg-[#76a0f4]/25 rounded-lg p-1">
          <MdArrowForwardIos />
        </button>
      </div>
          <div className="flex gap-5 items-center">
          <button className="flex  items-center text-xl font-bold gap-2 hover:bg-[#76a0f4]/25 p-1 rounded-lg">
          <BiSolidRocket />
          Power-Ups
              </button>
              <button className="flex  items-center text-xl font-bold gap-2 hover:bg-[#76a0f4]/25 p-1 rounded-lg">
          <MdFlashOn />
          Automation
        </button>
        <button className="flex  items-center text-xl font-bold gap-2 hover:bg-[#76a0f4]/25 p-1 rounded-lg">
          <BiMenuAltLeft />
          Filter
        </button>
        <h1 className="">|</h1>
        <button className="rounded-full bg-[#182A4D]  p-2 font-bold">
          AE
        </button>
        <BsThreeDots className=" text-3xl hover:bg-[#76a0f4]/25 p-1 scale-110 rounded-lg" />
      </div>
    </header>
  );
};

export default Nav;
