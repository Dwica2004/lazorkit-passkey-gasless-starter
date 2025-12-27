import { Providers } from "./providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passkey Portal",
  description: "Passwordless Solana smart wallet using passkeys & gasless transactions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
