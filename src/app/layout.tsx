import type { Metadata } from "next";
import { Quicksand } from 'next/font/google';
import "./globals.css";

const quicksand = Quicksand({
  subsets: ['latin'], // Specify the character subsets you need
  display: 'swap',    // Ensures a fallback font is displayed while Quicksand loads
  weight: ['300', '400', '500', '700'], // Specify the weights you want to use
  variable: '--font-quicksand', // Optional: Define a CSS variable for easier use with Tailwind CSS or custom CSS
});

export const metadata: Metadata = {
  title: "Home: Code Illustrated Online School",
  description: "An online coding school for aspiring Software Engineers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
