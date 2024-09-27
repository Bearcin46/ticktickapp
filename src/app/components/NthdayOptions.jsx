"use client";
import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";

const NthDayOptions = () => {
  const { recurrency, setRecurrency } = useContext(DatePickerContext);
  const daysOfWeek = [
    { name: "Sunday", value: 0 },
    { name: "Monday", value: 1 },
    { name: "Tuesday", value: 2 },
    { name: "Wednesday", value: 3 },
    { name: "Thursday", value: 4 },
    { name: "Friday", value: 5 },
    { name: "Saturday", value: 6 },
  ];
  const nthOptions = [1, 2, 3, 4, 5]; // 1st, 2nd, 3rd, 4th, Last

  const handleNthChange = (e) => {
    setRecurrency({
      ...recurrency,
      customization: {
        ...recurrency.customization,
        nthDay: parseInt(e.target.value),
      },
    });
  };

  const handleDayOfWeekChange = (e) => {
    setRecurrency({
      ...recurrency,
      customization: {
        ...recurrency.customization,
        nthDayOfWeek: parseInt(e.target.value), // Convert to integer
      },
    });
  };

  return (
    <div className="flex gap-6">
      <label>Select Nth Occurrence:</label>
      <select
        onChange={handleNthChange}
        value={recurrency.customization.nthDay || ""}
        className="border rounded-md outline-none px-4 py-1"
      >
        {nthOptions.map((nth) => (
          <option key={nth} value={nth}>
            {nth}th
          </option>
        ))}
      </select>

      <label>Select Day of the Week:</label>
      <select
        onChange={handleDayOfWeekChange}
        value={recurrency.customization.nthDayOfWeek || ""}
        className="border rounded-md outline-none px-4 py-1"
      >
        {daysOfWeek.map((day) => (
          <option key={day.value} value={day.value}>
            {day.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NthDayOptions;
