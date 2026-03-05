import { getDictionary, hasLocale } from "./dictionaries";

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
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        <h1>{dictionary.title}</h1>
        {children}
      </body>
    </html>
  );
}
