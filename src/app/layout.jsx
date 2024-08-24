import { Signika } from "next/font/google";
import "./globals.css";

const signika = Signika({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: {
    absolute: "",
    default: "Jaunt - Fun Events Around You",
    template: "%s | Jaunt"
  },
  description: "Locate Your Next Fun-Stop!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={signika.className}>{children}</body>
    </html>
  );
}
