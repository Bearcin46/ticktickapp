"use client";
import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";

const WeeklyOptions = () => {
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

  const handleDayChange = (day) => {
    let updatedDays;
    if (recurrency.customization.specificDays.includes(day)) {
      updatedDays = recurrency.customization.specificDays.filter(
        (d) => d !== day
      );
    } else {
      updatedDays = [...recurrency.customization.specificDays, day];
    }
    setRecurrency({
      ...recurrency,
      customization: { ...recurrency.customization, specificDays: updatedDays },
    });
  };

  return (
    <div>
      <h3>Select Days of the Week</h3>
      {daysOfWeek.map((day) => (
        <label key={day}>
          <input
            type="checkbox"
            checked={recurrency.customization.specificDays.includes(day)}
            onChange={() => handleDayChange(day)}
            className="ml-4"
          />
          {day}
        </label>
      ))}
    </div>
  );
};

export default WeeklyOptions;
