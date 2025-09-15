import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import BuilderRegistryClient from "./BuilderRegistryClient";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Ali + Andy Z",
  description: "Activewear + Capsule Collections",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <BuilderRegistryClient />
        {children}
      </body>
    </html>
  );
}
