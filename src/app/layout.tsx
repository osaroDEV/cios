import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { ThemeProvider } from './theme-provider';
import './globals.css';
import Header from './components/Header';

const quicksand = Quicksand({
  subsets: ['latin'], // Specify the character subsets
  display: 'swap', // Ensures a fallback font is displayed while Quicksand loads
  weight: ['300', '400', '500', '700'], // Specify the weights
  variable: '--font-quicksand', // Optional: a CSS variable for easier use with Tailwind CSS or custom CSS
});

export const metadata: Metadata = {
  title: 'Home: Code Illustrated Online School',
  description: 'An online coding school for aspiring Software Engineers',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${quicksand.className} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
