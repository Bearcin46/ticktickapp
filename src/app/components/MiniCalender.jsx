import React from "react";

const MiniCalendar = ({ dates }) => {
  return (
    <div className="border rounded p-4 mt-4">
      <h3 className="font-semibold mb-2">Selected Dates:</h3>
      {dates.length > 0 ? (
        <ul>
          {dates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      ) : (
        <p>No dates selected.</p>
      )}
    </div>
  );
};

export default MiniCalendar;
