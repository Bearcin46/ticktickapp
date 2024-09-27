import React from "react";
import nothingImage from "./assests/images/nothing.png";
import Image from "next/image";
const MiniCalendar = ({ dates }) => {
  return (
    <div className="border rounded p-4 mt-4 bg-white shadow-md">
      <h3 className="font-semibold mb-2">Selected Dates:</h3>
      {dates.length > 0 ? (
        <div className="list-disc pl-5 grid grid-cols-4 gap-5 mt-5">
          {dates.map((date, index) => (
            <div
              key={index}
              className="px-4 py-4 bg-gray-500 text-center text-white shadow-md shadow-black"
            >
              {new Date(date).toLocaleDateString()} {/* Format date */}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-xl text-blue-900">
            Currently you dont have any tasks.
          </p>

          <Image
            src={nothingImage}
            className="h-48 w-48 drop-shadow-[0_35px_35px_rgba(10,120,100,0.75)]"
          />
        </div>
      )}
    </div>
  );
};
export default MiniCalendar;
