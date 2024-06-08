import { Roboto, Source_Sans_3 } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  variable: "--font-roboto"
});

export const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "600", "700"],
  variable: "--font-source-sans-3"
});
