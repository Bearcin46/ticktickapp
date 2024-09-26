import Image from "next/image";
import { DatePickContextProvider } from "./components/contexts/DatePickContext";

export default function Home({ Component, pageProps }) {
  return (
    <DatePickContextProvider>
      <Component {...pageProps} />
    </DatePickContextProvider>
  );
}
