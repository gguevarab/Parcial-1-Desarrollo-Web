import { Metadata } from "next";
import { getDictionary, type Locale } from "../../src/utils/dictionaries";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";
import "../globals.css";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <html lang={lang}>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
