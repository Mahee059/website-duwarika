import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "The Dwarika's Hotel Kathmand ",
  description: "Luxury heritage hotel site ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-serif">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
