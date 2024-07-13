import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChakraThemeProvider from "./ChakraThemeProvider";
import { fonts } from "./fonts";
import { TodoProvider } from "@/context/useDemo";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

const { SITE_NAME } = process.env;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.inter.variable}>
        <ChakraThemeProvider>{children}</ChakraThemeProvider>
      </body>
    </html>
  );
}
