"use client";
import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";

export const WeeklyOptions = () => {
  const { recurrency, setRecurrency } = useContext(DatePickerContext);

  // Array of weekdays as numbers (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const daysOfWeek = [
    { name: "Sunday", value: 0 },
    { name: "Monday", value: 1 },
    { name: "Tuesday", value: 2 },
    { name: "Wednesday", value: 3 },
    { name: "Thursday", value: 4 },
    { name: "Friday", value: 5 },
    { name: "Saturday", value: 6 },
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
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold mb-2 ">Select Days of the Week</h3>
      <div className="grid grid-cols-4 gap-2">
        {daysOfWeek.map((day) => (
          <label key={day.value} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={recurrency.customization.specificDays.includes(
                day.value
              )}
              onChange={() => handleDayChange(day.value)}
              className="cursor-pointer"
            />
            {day.name}
          </label>
        ))}
      </div>
    </div>
  );
};
