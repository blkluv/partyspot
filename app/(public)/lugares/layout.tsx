import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LugaresLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section
        className={`${inter.className} mx-auto my-12 px-4 py-8 sm:px-6 lg:px-16`}
      >
        {children}
      </section>
      {/* <Footer /> */}
    </>
  );
}
