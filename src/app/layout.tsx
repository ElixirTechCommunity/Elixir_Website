"use client";
import { fontSans } from "./font";
import "./globals.css";
import { cn } from "@/utils/cn";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
          "min-h-screen min-w-screen bg-background font-sans antialiased dark:bg-black bg-white  dark:bg-grid-white/[0.09] bg-grid-black/[0.09]",
          fontSans.variable
        )}
      >
        <Provider store={appStore}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {/* <Navbar /> */}
            {children}
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
