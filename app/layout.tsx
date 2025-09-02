import "./globals.css"; // Tailwind or your own global styles

export const metadata = {
  title: "Ali + Andy Z",
  description: "Activewear + Capsule Collections",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
