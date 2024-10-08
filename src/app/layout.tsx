import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "aos/dist/aos.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { twJoin } from "tailwind-merge";

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/sofia-pro/SVN-Sofia Pro Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sofia-pro/SVN-Sofia Pro Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Yumup",
  description: "Yumup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={twJoin(myFont.className)}>
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
