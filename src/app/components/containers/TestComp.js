"use client";
// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";

export const Test1 = () => {
  //AddComp, AddTitle, AddCard

  const [manageState, setManageState] = useState("AddComp");

  const [manageLists, setManageLists] = useState("");

  const [title, setTitle] = useState("");
  const [listItem, setListItem] = useState("");

  const [Dummy, setDummy] = useState([
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
  ]);

  return (
    <div className="flex gap-5 m-5">
      {Dummy?.map((item, index) => {
        return (
          <div key={index + 1} className="p-2 border rounded">
            <p className="">{item?.label}</p>
            <div className="flex flex-col gap-2">
              {item?.lists?.map((list, index2) => {
                return (
                  <div key={index2 + 1} className="border p-1 rounded">
                    {list}
                  </div>
                );
              })}
              {manageLists === item?.label ? (
                <div className="text-black">
                  <input
                    onChange={(e) => setListItem(e.target.value)}
                    value={listItem}
                  />
                  <div className="flex text-white justify-between p-1 rounded ">
                    <button
                      onClick={() => {
                        let idx = 0;
                        let obj = Dummy.filter((e, i) => {
                          if (e.label === manageLists) idx = i;
                          return e.label === manageLists;
                        });

                        setDummy([
                          ...Dummy?.slice(0, idx),
                          {
                            label: obj[0].label,
                            lists: [...obj[0]?.lists, listItem],
                          },
                          ...Dummy?.slice(idx + 1, Dummy?.length),
                        ]);
                        setListItem("")
                      }}
                    >
                      + Add Card
                    </button>
                    <button
                      onClick={() => {
                        setManageLists("");
                      }}
                    >
                      {" "}
                      X{" "}
                    </button>
                  </div>
                </div>
              ) : (
                <section
                  className="flex gap-2"
                  onClick={() => {
                    setManageLists(item?.label);
                  }}
                >
                  {" "}
                  <p>+</p>
                  <p>Add Card</p>{" "}
                </section>
              )}
            </div>
          </div>
        );
      })}
      {manageState === "AddComp" ? (
        <div
          onClick={() => {
            setManageState("AddTitle");
          }}
        >
          + Add Another List
        </div>
      ) : (
        <></>
      )}

      {manageState === "AddTitle" ? (
        <div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-red-300 text-black"
          />
          <div className="flex w-full justify-between">
            <button
              onClick={() => {
                setDummy((prev) => [...prev, { label: title, lists: [] }]);
                setTitle("");
              }}
            >
              Add List
            </button>
            <button
              onClick={() => {
                setManageState("AddComp");
              }}
            >
              {" "}
              X{" "}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
