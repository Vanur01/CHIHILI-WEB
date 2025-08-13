// src/app/(site)/layout.tsx
import "../globals.css";
import Navbar from "@/components/Navbar";
import NewsletterFooter from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="mt-[65px] md:mt-[149px]">
        <Navbar />
        {children}
      </main>
      <NewsletterFooter />
    </div>
  );
}
