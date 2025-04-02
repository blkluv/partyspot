// import Footer from "@/src/components/layouts/footer/footer";
// import Navbar from "@/src/components/layouts/navbar/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LugaresLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar /> */}
      <main className={`${inter.className} mx-auto px-4 sm:px-6 lg:px-16`}>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
