import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";

const DateRanges = () => {
  const [recurrency, setRecurrency] = useContext(DatePickerContext);
  const handleStartingDate = (e) => {
    setRecurrency({ ...recurrency, startDate: e.target.value });
  };
  const handleEndingDate = (e) => {
    setRecurrency({ ...recurrency, endDate: e.target.value });
  };
  return (
    <div>
      <label htmlFor="">Starting Date</label>
      <input
        type="date"
        value={recurrency.startDate || ""}
        onChange={handleStartingDate}
      />
      <label htmlFor="">Ending Date</label>
      <input
        type="date"
        value={recurrency.endDate || ""}
        onChange={handleEndingDate}
      />
    </div>
  );
};

export default DateRanges;
