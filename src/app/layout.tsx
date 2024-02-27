import type { Metadata } from "next";
import '@fontsource-variable/jost';
import Container from "src/components/container";
import "./globals.css";


export const metadata: Metadata = {
  title: "Cripto",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
