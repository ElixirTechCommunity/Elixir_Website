"use client";
import { fontSans } from "./font";
import "./globals.css";
import { cn } from "@/utils/cn";
import Header from "@/components/landingPage/Header";
import Footer from "@/components/landingPage/Footer";
import { Provider } from "react-redux";
import appStore from "@/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={cn(
          "min-h-screen min-w-screen  font-sans antialiased  bg-dot-white/[0.05]",
          fontSans.variable
        )}
      >
        <Provider store={appStore}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
