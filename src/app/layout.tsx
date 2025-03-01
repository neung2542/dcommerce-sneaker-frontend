import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
import Navtab from "@/nav/Navtab";
import Footer from "./ui/Footer";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { CartCounter } from "./ui/cart-couter";
import { CartProvider } from "./ui/CartProvider";
import FloatingActionButton from "@/ui/FloatingActionButton"; 

export const metadata: Metadata = {
  title: "Demo Store - CoriusDev",
  description: "Powered by CoriusDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased grid-layout`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {/* {children} */}
          <header className="header-container">
            <div className="bg-white grid grid-cols-12 px-12 items-center min-h-10">
              <div className="col-span-6 md:invisible">
                <Link
                  href="/"
                  className="text-xl font-bold text-red-600 hover:text-red-800 ease-in-out"
                >
                  Demo Store
                </Link>
              </div>
              <div className="col-span-6 flex justify-end gap-4">
                <Link href="/cart" className="relative">
                  <div>
                    <ShoppingCart className="h-5 w-5" />
                    <CartCounter />
                    <span className="sr-only">Shopping Cart</span>
                  </div>
                </Link>
                <a
                  href="mailto:coriusdev2025@gmail.com"
                  className=" font-bold text-gray-600 hover:text-gray-800 ease-in-out"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </header>
          <div className="nav-container">
            <div className="bg-white grid md:grid-cols-12 px-12 items-center border-t border-b border-gray-300">
              <div className="col-span-2 hidden md:block">
                <Link
                  href="/"
                  className="text-xl font-bold text-red-600 hover:text-red-800 ease-in-out"
                >
                  Demo Store
                </Link>
              </div>
              <div className="col-span-8">
                <Navtab />
              </div>
            </div>
          </div>
          <main>
            <div className="">{children}</div>
            {/* <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-800 text-white text-sm rounded-lg px-4 py-2 shadow-lg">
            Powered by CoriusDev
          </div> */}
          </main>
          <Footer />
          <FloatingActionButton />
        </CartProvider>
      </body>
    </html>
  );
}
