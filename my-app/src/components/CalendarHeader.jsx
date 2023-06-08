import React, { useContext, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// GlobalContext  親を飛び越えてpropのようなものを渡せる。
import GlobalContext from "../context/GlobalContext.js";
import dayjs from "dayjs";

export const CalendarHeader = () => {
  //分割代入。useContextを使って分割代入。
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleReset = () => {
    setMonthIndex(dayjs().month());
  };
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calender</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <MdChevronLeft />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <MdChevronRight />
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};
