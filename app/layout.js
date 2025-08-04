// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import SessionWrapper from '@/components/SessionWrapper';
import ClientLayout from '@/components/ClientLayout';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <ClientLayout>{children}</ClientLayout>
        </SessionWrapper>
        <Footer />
      </body>
    </html>
  );
}
