import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Fitlog",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar></Navbar>

        <main className="flex-1 bg-black">{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
