import type { Metadata } from "next";
// import { Manrope } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// const manrope = Manrope({
//   variable: "--font-title",
//   subsets: ["latin"],
//   display: "swap",
//   weight: "400",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-w-[375px]">
        <div>
          <Header />
          <div className="min-h-[calc(100vh-260px)]">{children}</div>
          <Footer />
        </div>
        <ToastContainer
          position="top-right"
          theme="light"
          autoClose={3000}
          hideProgressBar={true}
          toastClassName={"m-3 rounded-xl text-sm font-semibold-all"}
        />
      </body>
    </html>
  );
}
