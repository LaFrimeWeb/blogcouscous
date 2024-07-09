import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tabkh Bladi",
  description: "My amazing morrocan recipe app",
};

export default function RootLayout({ children }) {

  let header = (
    <header>
      <Link href={'/'}>
        <h1>Tabkh Bladi</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>Made with a Morrocan Passion</p>
    </footer>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
