import "./globals.css";

export const metadata = {
  title: "Ali + Andy Z",
  description: "Activewear + Capsule Collections",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" 
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
