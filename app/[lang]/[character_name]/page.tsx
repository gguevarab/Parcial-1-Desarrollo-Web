import { getDictionary, Locale } from "../../../src/utils/dictionaries";
import CharacterSpecs from "@/src/components/characterSpecs";

export async function generateMetadata({
    params,
}: {
    params: { lang: string; character_name: string };
}) {
    const { lang, character_name } = await params;
    const dictionary = await getDictionary(lang as Locale);

    return {
        title: dictionary.detailMetadata.title1 + character_name + dictionary.detailMetadata.title2,
        description: dictionary.detailMetadata.description,
    };
}

export default async function CharacterDetail({ params }: { params: { lang: string; character_name: string } }) {
    const { lang, character_name } = await params;
    const decodedName = decodeURIComponent(character_name);
    const dictionary = await getDictionary(lang as Locale);
    
    return (
        <div className="flex flex-col items-center justify-start pt-24 pb-16 px-4 min-h-[calc(100vh-76px)] grow">
            <h1 className="text-3xl md:text-4xl font-bold text-[#FDB608] mb-8 text-center drop-shadow-sm">{decodedName}</h1>
            <CharacterSpecs character={decodedName} dict={dictionary.characterSpecs} />
        </div>
    );
}