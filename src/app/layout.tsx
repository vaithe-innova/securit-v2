import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import { AppContextProvider } from '@/context/AppContext';
import { poppins } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <AppContextProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Suspense>
              <SmoothScrollProvider>
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:outline-none"
                >
                  Skip to main content
                </a>
                <Navbar />
                {children}
                <Footer />
                <ScrollToTopButton />
              </SmoothScrollProvider>
            </Suspense>
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
