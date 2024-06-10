import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import Loading from "@/app/[locale]/loading";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "@/app/[locale]/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
          <NextIntlClientProvider messages={messages}>
            <Providers>
              <Suspense fallback={<Loading />}>
                <div className="flex-grow">{children}</div>
              </Suspense>
            </Providers>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
