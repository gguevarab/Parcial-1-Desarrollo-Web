import { notFound } from "next/navigation";
import { getDictionary, hasLocale, Locale } from "@/src/utils/dictionaries";
import CharacterList from "@/src/components/characterList";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return {
    title: dictionary.homeMetadata.title,
    description: dictionary.homeMetadata.description,
  };
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  return (
    <div>
      <CharacterList />
    </div>
  )
}
