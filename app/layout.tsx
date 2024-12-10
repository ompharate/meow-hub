import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactQueryProvider } from "@/react-query/provider";
import { UserProvider } from "@/context/user";
export const metadata: Metadata = {
  title: "Meow-hub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#0D1117]`}>
        <ClerkProvider>
          <UserProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </UserProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
