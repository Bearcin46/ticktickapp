"use client";
import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";
import ReccuringOptions from "./ReccuringOptions";
import DateRanges from "./DateRanges";
import MiniCalender from "./MiniCalender";
import Weeklyoptions from "./Weeklyoptions";
import NthDayOptions from "./Weeklyoptions";

const DatePickingComponent = () => {
  const { recurrency, setRecurrency, selectedDates } =
    useContext(DatePickerContext); // Destructure as an object

  return (
    <div>
      <h1 className="mb-6 underline">Select the Recurring Dates</h1>

      <section className="flex flex-col gap-4">
        {/* Select the recurrency pattern */}
        <ReccuringOptions />

        {/* Selecting the desired date ranges */}
        <DateRanges />

        {/* weekly selection options */}
        <Weeklyoptions />

        {/* select by nth day */}
        <NthDayOptions />

        {/* Previewing the calendar */}
        <MiniCalender dates={selectedDates} />
      </section>
    </div>
  );
};

export default DatePickingComponent;
