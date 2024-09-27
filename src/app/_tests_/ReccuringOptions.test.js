import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ReccuringOptions from "../components/ReccuringOptions";
import { DatePickerContext } from "../components/contexts/DatePickContext";

describe("ReccuringOptions Component", () => {
  const sampleSetRecurrency = jest.fn();
  const sampleRecurrency = {
    pattern: "daily",
    customization: {
      every: 1,
    },
  };

  it("should render the correct selected recurrence pattern", () => {
    render(
      <DatePickerContext.Provider
        value={{
          recurrency: sampleRecurrency,
          setRecurrency: sampleSetRecurrency,
        }}
      >
        <ReccuringOptions />
      </DatePickerContext.Provider>
    );

    const selectElement = screen.getByRole("combobox", {
      name: /Select the Recurrence Pattern/i,
    });
    expect(selectElement).toHaveValue("daily");
  });

  it("should update the recurrency 'every' field when input changes", () => {
    render(
      <DatePickerContext.Provider
        value={{
          recurrency: sampleRecurrency,
          setRecurrency: sampleSetRecurrency,
        }}
      >
        <ReccuringOptions />
      </DatePickerContext.Provider>
    );

    const input = screen.getByLabelText(/Repeat every/i);

    fireEvent.change(input, { target: { value: "3" } });

    expect(sampleSetRecurrency).toHaveBeenCalledWith({
      ...sampleRecurrency,
      customization: { every: 3 },
    });
  });
});
