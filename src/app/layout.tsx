"use client";
import { fontSans } from "./font";
import "./globals.css";
import { cn } from "@/utils/cn";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import appStore from "@/store/store";
import RetroGrid from "@/components/magicui/retro-grid";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={cn("min-h-screen min-w-screen  font-sans antialiased  ", fontSans.variable)}>
        <Provider store={appStore}>
          {/* <Header /> */}
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
