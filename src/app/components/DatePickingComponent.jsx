"use client";
import React, { useContext, useEffect } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";
import ReccuringOptions from "./ReccuringOptions";
import DateRanges from "./DateRanges";
import MiniCalender from "./MiniCalender";
import { WeeklyOptions } from "./Weeklyoptions";
import NthDayOptions from "./NthdayOptions";
import calculateRecurring from "./utils/DateUtils";

const DatePickingComponent = () => {
  const { recurrency, setRecurrency, selectedDates, setSelectedDates } =
    useContext(DatePickerContext);

  useEffect(() => {
    console.log("Recurrency State:", recurrency); // Debugging output
    if (recurrency.startDate && recurrency.endDate) {
      const dates = calculateRecurring(recurrency);
      console.log("Calculated Dates:", dates); // Debugging output
      setSelectedDates(dates);
    }
  }, [recurrency]);

  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-500 shadow-xl shadow-black px-6 py-7 ">
      <h1 className="mb-6 font-bold text-red-800 text-xl">Manage your Dates</h1>
      <section className="flex flex-col gap-4">
        <ReccuringOptions />
        {recurrency.pattern === "weekly" && <WeeklyOptions />}
        {recurrency.pattern === "monthly" && <NthDayOptions />}
        <DateRanges />
        <MiniCalender dates={selectedDates} />
      </section>
    </div>
  );
};

export default DatePickingComponent;
