"use client";
import Image from "next/image";
import { DatePickContextProvider } from "./components/contexts/DatePickContext";
import DatePickingComponent from "./components/DatePickingComponent";

export default function Home({ Component, pageProps }) {
  return (
    <div className="max-w-3xl mx-auto px-5 h-screen pt-20 ">
      <h1 className="font-extrabold text-center mb-8 text-white  text-4xl">
        TASK MANAGEMENT CALENDER
      </h1>
      <DatePickContextProvider>
        <DatePickingComponent />
      </DatePickContextProvider>
    </div>
  );
}
