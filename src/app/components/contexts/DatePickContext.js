import { useState, createContext } from "react";
import React from "react";

export const DatePickerContext = createContext();

const DatePickContextProvider = ({ children }) => {
  const [selectedDates, setSelectedDates] = useState({});

  return <div></div>;
};

export default DatePickContext;
