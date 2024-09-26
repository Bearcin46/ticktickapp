import { useState, createContext } from "react";
import React from "react";

export const DatePickerContext = createContext();

export const DatePickContextProvider = ({ children }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [recurrency, setRecurrency] = useState({
    pattern: "daily",
    customization: {
      every: 1,
      specificDays: [],
      nthDay: null,
    },
    startDate: null,
    endDate: null,
  });
  return (
    <DatePickerContext.Provider
      value={{ recurrency, setRecurrency, selectedDates, setSelectedDates }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};
