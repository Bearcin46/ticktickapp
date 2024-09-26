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
          if (
            recurrency.customization.specificDays.includes(currentDate.getDay())
          ) {
            date.push(currentDate);
          }

          currentDate = addWeeks(currentDate, 1);
        }
        break;

      case "monthly":
        while (currentDate <= new Date(recurrency.endDate)) {
          let count = 0;
          let daysInMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
          ).getDate();

          for (let i = 1; i <= daysInMonth; i++) {
            let date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              i
            );
            if (date.getDay() === recurrency.customization.nthDayOfWeek) {
              count++;
              if (count === recurrency.customization.nthDay) {
                date.push(date);
                break;
              }
            }
          }

          currentDate = addMonths(currentDate, 1);
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
