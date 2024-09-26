import React, { useContext } from "react";
import { DatePickerContext } from "./contexts/DatePickContext";

const ReccuringOptions = () => {
  const [recurrency, setRecurrency] = useContext(DatePickerContext);
  const handlePatternChange = (e) => {
    setRecurrency({ ...recurrency, pattern: e.target.value });
  };
  return (
    <div>
      <label htmlFor="pattern">Select the Reccurence Pattern</label>
      <select
        name="pattern"
        value={recurrency.pattern}
        onChange={handlePatternChange}
        className=""
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default ReccuringOptions;
