import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MiniCalender from "../components/MiniCalender";

describe("MiniCalender", () => {
  it("should display 'Currently you dont have any tasks.' when no dates are provided", () => {
    render(<MiniCalender dates={[]} />);

    // Assertion to check if 'Currently you don't have any tasks.' is displayed
    const noDateMessage = screen.getByText(
      /Currently you dont have any tasks./i
    );
    expect(noDateMessage).toBeInTheDocument();
  });
});

describe("MiniCalender display", () => {
  it("should display the selected dates", () => {
    // Sample dates in ISO format
    const sampleDates = ["2024-09-27T00:00:00Z", "2024-09-28T00:00:00Z"];

    // Render component with sample dates
    render(<MiniCalender dates={sampleDates} />);

    // Assert that the dates are correctly rendered in DD/MM/YYYY format
    const startingDate = screen.getByText("27/9/2024");
    const endingDate = screen.getByText("28/9/2024");

    expect(startingDate).toBeInTheDocument();
    expect(endingDate).toBeInTheDocument();
  });
});
