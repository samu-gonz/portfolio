import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

export const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const logoFont = Space_Grotesk({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});
