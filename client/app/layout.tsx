import Navbar from "@/components/navbar/Navbar";
import { MenuMobile } from "@/components/navbar/menu/MenuMobile";
import Providers from "./providers";

export const metadata = {
  title: "GasGo",
  description: "Generated by create next app",
  icons: {
    icon: "/GasGo-web-solo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
