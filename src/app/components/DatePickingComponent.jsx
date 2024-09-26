import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";
import ReccuringOptions from "./ReccuringOptions";
import DateRanges from "./DateRanges";
import MiniCalender from "./MiniCalender";

const DatePickingComponent = () => {
  const [recurrency, setRecurrency, selectedDates] =
    useContext(DatePickerContext);
  return (
    <div>
      <h1>Select the recurring Dates</h1>
      {/* select the reccurency pattern */}
      <ReccuringOptions />

      {/* selecting the desired date ranges */}
      <DateRanges />

      {/* Previewing the calender */}
      <MiniCalender dates={selectedDates} />
    </div>
  );
};

export default DatePickingComponent;
