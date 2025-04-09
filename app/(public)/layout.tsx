import Navbar from "@/components/layouts/navbar/navbar";
import NavLinks from "@/components/layouts/navbar/nav-links";
import Footer from "@/components/layouts/footer/footer";

export default function PublicLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar>
        <NavLinks />
      </Navbar>
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}

// Note: For better structure, consider moving components from src/components to:
// - components/layout for layout components
// - components/ui for UI components
// - components/sections for page sections
// - components/forms for form-related components
