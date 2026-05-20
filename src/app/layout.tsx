import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-source",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "cashu.me · Ecash wallet",
  description:
    "Open-source ecash on the Cashu protocol. Mints custody the bitcoin, you hold blinded bearer tokens, withdraw to any Lightning address at any time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${jetbrainsMono.variable} antialiased`}
    >
      <body className="font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
