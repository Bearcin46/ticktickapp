"use client";
import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";

const DateRanges = () => {
  const { recurrency, setRecurrency } = useContext(DatePickerContext); // Destructure as an object

  const handleStartingDate = (e) => {
    setRecurrency({ ...recurrency, startDate: e.target.value });
  };

  const handleEndingDate = (e) => {
    setRecurrency({ ...recurrency, endDate: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4">
      <section className="flex gap-6">
        <label htmlFor="start-date">Starting Date :</label>
        <input
          id="start-date"
          type="date"
          value={recurrency.startDate || ""}
          onChange={handleStartingDate}
          className="border rounded-md outline-none px-4 py-1"
          min={recurrency.startDate || ""}
        />
      </section>

      <section className="flex gap-6">
        <label htmlFor="end-date">Ending Date :</label>
        <input
          id="end-date"
          type="date"
          value={recurrency.endDate || ""}
          onChange={handleEndingDate}
          className="border rounded-md outline-none px-4 py-1"
          min={recurrency.endDate || ""}
        />
      </section>
    </div>
  );
};

export default DateRanges;
