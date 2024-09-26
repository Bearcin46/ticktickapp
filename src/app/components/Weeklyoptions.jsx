import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";

const Weeklyoptions = () => {
  const { recurrency, setRecurrency } = useContext;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ](DatePickerContext);

  const handleDayChange = (day) => {
    let updatedDays;
    if (recurrency.customization.specificDays.includes(day)) {
      updatedDays = recurrency.customization.specificDays.filter(
        (d) => d != day
      );
    } else {
      updatedDays = [...recurrency.customization.specificDays, day];
    }
    setRecurrency({
      ...recurrency,
      customization: {
        ...recurrency.customization,
        specificDays: updatedDays,
      },
    });
  };
  return (
    <div>
      <h3>Select Days</h3>
      {daysOfWeek.map((day) => {
        <label htmlFor="" key={day}>
          <input
            type="checkbox"
            onChange={() => {
              handleDayChange(day);
            }}
            checked={recurrency.customization.specificDays.includes(day)}
          />
          {day}
        </label>;
      })}
    </div>
  );
};

export default Weeklyoptions;
