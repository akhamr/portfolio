import {
  Della_Respira,
  Gloria_Hallelujah,
  Mansalva,
  Nunito,
} from "next/font/google";
import localFont from "next/font/local";

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

export const bimbo = localFont({
  src: "../styles/bimbo.woff2",
  display: "swap",
  variable: "--font-bimbo",
});
