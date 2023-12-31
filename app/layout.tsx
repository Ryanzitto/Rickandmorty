import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Home/Header";
import { Providers } from "./GlobalRedux/provider";
import ProviderTheme from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RICK AND MORTY",
  description: "Project based on rick and morty TV series",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <ProviderTheme>{children}</ProviderTheme>
        </Providers>
      </body>
    </html>
  );
}
