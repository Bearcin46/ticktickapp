"use client";
import { useState, createContext, useEffect } from "react";
import React from "react";
import calculateRecurring from "../utils/DateUtils";

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
  useEffect(() => {
    if (recurrency.startDate && recurrency.endDate) {
      const dates = calculateRecurring(recurrency);
      setSelectedDates(dates);
    }
  }, [recurrency]);
  return (
    <DatePickerContext.Provider
      value={{ recurrency, setRecurrency, selectedDates, setSelectedDates }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};
