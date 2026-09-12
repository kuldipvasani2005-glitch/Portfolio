import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Kuldip Vasani | Full-Stack Web Developer",
  description: "Portfolio of Kuldip Vasani, a Full-Stack Web Developer building modern web applications.",
};

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
