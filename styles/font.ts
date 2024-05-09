import {
  Della_Respira,
  Gloria_Hallelujah,
  Mansalva,
  Nunito,
} from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const footer = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const doodle = Mansalva({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-doodle",
});

export const della = Della_Respira({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-della",
});
