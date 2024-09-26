"use client";
import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";
import ReccuringOptions from "./ReccuringOptions";
import DateRanges from "./DateRanges";
import MiniCalender from "./MiniCalender";

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

        {/* Previewing the calendar */}
        <MiniCalender dates={selectedDates} />
      </section>
    </div>
  );
};

export default DatePickingComponent;
