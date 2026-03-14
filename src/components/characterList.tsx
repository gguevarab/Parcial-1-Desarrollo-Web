"use client";

import { useFetchCharacters } from "../hooks/useFetchCharacters";
import CharacterCard from "./characterCard";

export default function CharacterList() {
    const { characters } = useFetchCharacters();
    return (
        <div>
            {characters.slice(0, 12).map((character) => (
                <CharacterCard key={character.name} character={character} />
            ))}
        </div>
    );
}