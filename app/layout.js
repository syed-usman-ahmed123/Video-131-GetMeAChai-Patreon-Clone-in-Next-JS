import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SessionWrapper from "@/components/sessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get ME A Chai - Fund your projects with chai",
  description: "This website is a crowdfunding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
        <Navbar />
        <div className="min-h-[78.9vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        
          {children}
        </div>
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
