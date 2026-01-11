import type { Metadata } from "next";
import { Geist_Mono, Figtree, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mosaiconi Web App",
  description:
    "Página de ventas de K-pop donde puedes agendar eventos y comprar tus productos favoritos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
