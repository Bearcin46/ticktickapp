"use client";
import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";

const NthDayOptions = () => {
  const { recurrency, setRecurrency } = useContext(DatePickerContext);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const nthOptions = [1, 2, 3, 4, 5]; // 1st, 2nd, 3rd, 4th, Last

  const handleNthChange = (e) => {
    setRecurrency({
      ...recurrency,
      customization: { ...recurrency.customization, nthDay: e.target.value },
    });
  };

  return (
    <div>
      <label>Select Nth Occurrence</label>
      <select
        onChange={handleNthChange}
        value={recurrency.customization.nthDay}
      >
        {nthOptions.map((nth) => (
          <option key={nth} value={nth}>
            {nth}th
          </option>
        ))}
      </select>

      <label>Select Day of the Week</label>
      <select
        onChange={(e) =>
          setRecurrency({ ...recurrency, nthDayOfWeek: e.target.value })
        }
        value={recurrency.customization.nthDayOfWeek}
      >
        {daysOfWeek.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NthDayOptions;
