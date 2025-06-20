// app/layout.tsx
import './globals.css';
import { Roboto } from 'next/font/google';
import Template from './template';

export const metadata = { title: 'Job Board' };
const roboto = Roboto({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-50`}>
        <Template>
          {children}
        </Template>
      </body>
    </html>
  );
}
