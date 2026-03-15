"use client";

import { useFetchCharacter } from "../hooks/useFetchCharacters";

const BorderColorHouses: Record<string, string> = {
  Gryffindor: 'border-[#740001]',
  Slytherin: 'border-[#1A472A]',
  Ravenclaw: 'border-[#0E1A40]',
  Hufflepuff: 'border-[#FFD800]',
  NoHouse: 'border-[#D1D5DB]',
}

export default function CharacterSpecs({ character, dict }: { character: string, dict: Record<string, string> }) {
    const { character: characterData, loading, error } = useFetchCharacter(character);

    if (loading) return <div className="text-center py-20 text-gray-500">Loading...</div>;
    if (error) return <div className="text-center py-20 text-red-500">Error: {error.message}</div>;
    if (!characterData) return <div className="text-center py-20 text-gray-500">Character not found</div>;

    const houseColorClass = BorderColorHouses[characterData.house] || BorderColorHouses.NoHouse;

    return (
        <div className={`flex flex-col md:flex-row w-full max-w-3xl bg-[#f0f0f0] rounded-xl overflow-hidden border-4 ${houseColorClass} shadow-lg`}>
            {/* Left Column: Properties */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center gap-4 text-black text-sm md:text-base">
                <p><span className="font-bold">{dict.house} </span> {characterData.house || dict.unknown_fem}</p>
                <p><span className="font-bold">{dict.gender} </span> {characterData.gender || dict.unknown}</p>
                {characterData.wand && characterData.wand.core && (
                    <p><span className="font-bold">{dict.wand} </span> {characterData.wand.core}</p>
                )}
                {characterData.wand && characterData.wand.wood && (
                    <p><span className="font-bold">{dict.wood} </span> {characterData.wand.wood}</p>
                )}
                {characterData.wand && characterData.wand.length && (
                    <p><span className="font-bold">{dict.length} </span> {characterData.wand.length}</p>
                )}
            </div>
            
            {/* Right Column: Image */}
            <div className="flex-1 bg-black min-h-[400px] md:min-h-[500px]">
                <img 
                    src={characterData.image || 'https://placehold.co/600x800?text=No+Image'} 
                    alt={characterData.name} 
                    className="w-full h-full object-cover" 
                />
            </div>
        </div>
    );
}