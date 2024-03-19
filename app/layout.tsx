import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import Banner from "./components/Banner";
import BackgroundImages from "./components/BackgroundImages";
import Footer from "./components/Footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barranqui-IA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${jakarta.className} ${noto.className} relative overflow-hidden `}>
        <BackgroundImages />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
