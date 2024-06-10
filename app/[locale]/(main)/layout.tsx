import { Suspense } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}
export default async function AuthLayout({
  children,
}: Readonly<MainLayoutProps>) {
  return (
    <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
