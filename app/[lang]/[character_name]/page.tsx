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
    return <CharacterSpecs character={character_name} />;
}