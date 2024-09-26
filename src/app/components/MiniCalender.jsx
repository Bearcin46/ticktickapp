import React from "react";

const MiniCalendar = ({ dates }) => {
  return (
    <div className="border rounded p-4 mt-4 bg-white shadow-md">
      <h3 className="font-semibold mb-2">Selected Dates:</h3>
      {dates.length > 0 ? (
        <ul className="list-disc pl-5">
          {dates.map((date, index) => (
            <li key={index}>
              {/* Format date to a readable string if necessary */}
              {new Date(date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No dates selected.</p>
      )}
    </div>
  );
};

export default MiniCalendar;
