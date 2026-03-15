"use client";

import { useFetchCharacters } from "../hooks/useFetchCharacters";
import CharacterCard from "./characterCard";

export default function CharacterList() {
    const { characters } = useFetchCharacters();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto w-full px-4 mb-16">
            {characters.slice(0, 12).map((character) => (
                <CharacterCard key={character.name} character={character} />
            ))}
        </div>
    );
}