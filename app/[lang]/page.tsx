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
    <div className="flex flex-col items-center justify-center py-8 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-[#FDB608] mb-4 text-center drop-shadow-sm">{dict.homeMetadata.title}</h1>
      <p className="text-sm md:text-base text-gray-800 mb-8 max-w-3xl text-center px-4">{dict.homeMetadata.description}</p>
      <CharacterList />
    </div>
  )
}
