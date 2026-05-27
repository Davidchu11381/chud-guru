import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Lora } from "next/font/google";
import "./globals.css";

const serif = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minh Duc Chu — USC ISI",
  description:
    "Minh Duc Chu — PhD candidate at the USC Information Sciences Institute. AI alignment and safety, model psychology, model welfare, and the shift from AI-as-assistant to AI-as-companion.",
  metadataBase: new URL("https://minhducchu.com"),
  openGraph: {
    title: "Minh Duc Chu — USC ISI",
    description:
      "PhD candidate working on socio-technical alignment, model welfare, and human–AI companionship.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}
    >
      <body className="font-sans paper antialiased">{children}</body>
    </html>
  );
}
