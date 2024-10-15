import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Meds - Maa Tara Medicals",
  description: "Maa Tara Medical agency is online medicine distribution app. We deliver medicines only to retailers and doctors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
