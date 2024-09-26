"use client";
import { useState, createContext, useEffect } from "react";
import React from "react";
import { addDays, addWeeks, addMonths, addYears } from "date-fns";

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

  //calculating recurring
  const calculateReccuring = () => {
    let date = [];
    let currentDate = new Date(recurrency.startDate);
    switch (recurrency.pattern) {
      case "daily":
        while (currentDate <= new Date(recurrency.endDate)) {
          date.push(currentDate);
          currentDate = addDays(currentDate, recurrency.customization.every);
        }
        break;
      case "weekly":
        while (currentDate <= new Date(recurrency.endDate)) {
          date.push(currentDate);
          currentDate = addWeeks(currentDate, recurrency.customization.every);
        }
        break;

      case "monthly":
        while (currentDate <= new Date(recurrency.endDate)) {
          date.push(currentDate);
          currentDate = addMonths(currentDate, recurrency.customization.every);
        }
        break;
      case "yearly":
        while (currentDate <= new Date(recurrency.endDate)) {
          date.push(currentDate);
          currentDate = addYears(currentDate, recurrency.customization.every);
        }
        break;
    }
    setSelectedDates(date);
  };

  useEffect(() => {
    if (recurrency.startDate && recurrency.endDate) {
      calculateReccuring();
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
