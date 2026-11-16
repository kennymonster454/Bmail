import type { Metadata } from "next";
import "./globals.css";
import { AppwriteStatus } from "@/components/appwrite-status";

export const metadata: Metadata = {
  title: "BMail",
  description: "A simple email experience, built step by step.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppwriteStatus />
        {children}
      </body>
    </html>
  );
}
