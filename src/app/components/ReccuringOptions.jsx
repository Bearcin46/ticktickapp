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
        <label htmlFor="pattern">Select the Reccurence Pattern</label>
        <select
          name="pattern"
          value={recurrency.pattern}
          onChange={handlePatternChange}
          className="bg-slate-300 px-4 py-1"
        >
          <option value="daily">Daily</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </section>

      <section className="flex gap-6">
        <label htmlFor="every">
          Repeat it for how many{" "}
          {recurrency.pattern == "daily" ? "days" : recurrency.pattern} ?
        </label>
        <input
          type="number"
          value={recurrency.customization.every}
          name="every"
          min="1"
          onChange={handleEveryChange}
          className="bg-slate-300 px-4 py-1"
        />
      </section>
    </div>
  );
};

export default ReccuringOptions;
