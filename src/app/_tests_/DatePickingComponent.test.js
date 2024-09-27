import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import DatePickingComponent from "../components/DatePickingComponent";
import { DatePickerContext } from "../components/contexts/DatePickContext";

describe("DatePickingComponent Integration Test", () => {
  const mockValue = {
    recurrency: {
      pattern: "daily",
      customization: { every: 1, specificDays: [], nthDay: null },
      startDate: null,
      endDate: null,
    },
    setRecurrency: jest.fn(),
    selectedDates: [],
    setSelectedDates: jest.fn(),
  };

  it("should allow users to select dates and display them in MiniCalendar", async () => {
    render(
      <DatePickerContext.Provider value={mockValue}>
        <DatePickingComponent />
      </DatePickerContext.Provider>
    );

    // Act
    const startDateInput = screen.getByLabelText(/Starting Date/i);
    fireEvent.change(startDateInput, { target: { value: "2024-09-27" } });

    const endDateInput = screen.getByLabelText(/Ending Date/i);
    fireEvent.change(endDateInput, { target: { value: "2024-10-05" } });

    const patternSelect = screen.getByLabelText(
      /Select the Recurrence Pattern/i
    );
    fireEvent.change(patternSelect, { target: { value: "daily" } });

    const everyInput = screen.getByLabelText(/Repeat every day/i);
    fireEvent.change(everyInput, { target: { value: "2" } });
    
      expect(screen.getByText(/27/9/2024/i)).toBeInTheDocument();
      expect(screen.getByText(/29/9/2024/i)).toBeInTheDocument();
      expect(screen.getByText(/01/10/2024/i)).toBeInTheDocument();
  
    expect(screen.getByText(/Manage your Dates/i)).toBeInTheDocument();
  });
});
