import "./globals.css";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
