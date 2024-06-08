import { sourceSans3, roboto } from "./fonts";
import clsx from "clsx";
import Providers from "@/providers";
import "./globals.css";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  return (
    <html lang="pt" className={clsx(sourceSans3.variable, roboto.variable)}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
