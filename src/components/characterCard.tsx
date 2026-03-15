"use client";

import { Character } from "../hooks/useFetchCharacters";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const BgColorHouses: Record<string, string> = {
    Gryffindor: 'bg-[#740001]',
    Slytherin: 'bg-[#1A472A]',
    Ravenclaw: 'bg-[#0E1A40]',
    Hufflepuff: 'bg-[#FFD800]',
}

const BorderColorHouses: Record<string, string> = {
    Gryffindor: 'border-[#740001]',
    Slytherin: 'border-[#1A472A]',
    Ravenclaw: 'border-[#0E1A40]',
    Hufflepuff: 'border-[#FFD800]',
    NoHouse: 'border-[#D1D5DB]',
}

export default function CharacterCard({ character }: { character: Character }) {
    const params = useParams();
    const lang = params.lang || "en";

    const houseColorClass = BorderColorHouses[character.house] || BorderColorHouses.NoHouse;
    const headerBgColorClass = BgColorHouses[character.house] || 'bg-gray-700';

    return (
        <div className={`rounded-xl overflow-hidden border-4 ${houseColorClass} shadow-md bg-white flex flex-col mx-auto w-full transition-transform hover:scale-[1.02] cursor-pointer`}>
            <Link href={`/${lang}/${encodeURIComponent(character.name)}`} className="w-full flex flex-col h-full">
                <div className={`${headerBgColorClass} text-white font-semibold py-2 px-2 text-center text-sm`} style={{ minHeight: '36px' }}>
                    {character.name}
                </div>
                <div className="grow w-full bg-black h-[380px]">
                    <Image
                        src={character.image || 'https://placehold.co/400x550?text=No+Image'}
                        alt={character.name}
                        className="w-full h-full object-cover object-top"
                        width={400}
                        height={550}
                    />
                </div>
            </Link>
        </div>
    );
}