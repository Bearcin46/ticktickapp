"use client";
import Image from "next/image";
import { DatePickContextProvider } from "./components/contexts/DatePickContext";
import DatePickingComponent from "./components/DatePickingComponent";

export default function Home({ Component, pageProps }) {
  return (
    <DatePickContextProvider>
      <DatePickingComponent />
    </DatePickContextProvider>
  );
}
