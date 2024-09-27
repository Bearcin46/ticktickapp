"use client";
import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";

const ReccuringOptions = () => {
  const { recurrency, setRecurrency } = useContext(DatePickerContext);

  const handlePatternChange = (e) => {
    setRecurrency({ ...recurrency, pattern: e.target.value });
  };

  const handleEveryChange = (e) => {
    setRecurrency({
      ...recurrency,
      customization: {
        ...recurrency.customization,
        every: parseInt(e.target.value),
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <section className="flex gap-6">
        <label htmlFor="pattern">Select the Recurrence Pattern:</label>
        <select
          name="pattern"
          value={recurrency.pattern}
          onChange={handlePatternChange}
          className="border rounded-md outline-none px-4 py-1"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </section>

      <section className="flex gap-6">
        <label htmlFor="every">
          Repeat every{" "}
          {recurrency.pattern === "daily"
            ? "day"
            : recurrency.pattern === "weekly"
            ? "week"
            : recurrency.pattern === "monthly"
            ? "month"
            : "year"}
          :
        </label>
        <input
          type="number"
          value={recurrency.customization.every}
          name="every"
          min="1"
          onChange={handleEveryChange}
          className="border rounded-md outline-none px-4 py-1"
        />
      </section>
    </div>
  );
};

export default ReccuringOptions;
