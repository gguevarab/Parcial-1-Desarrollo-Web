"use client";

import { useFetchCharacter } from "../hooks/useFetchCharacters";

export default function CharacterSpecs({ character }: { character: string }) {
    const { character: characterData, loading, error } = useFetchCharacter(character);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!characterData) return <div>Character not found</div>;

    return (
        <div>
            <img src={characterData.image} alt={characterData.name} />
            <p>{characterData.house}</p>
            <p>{characterData.gender}</p>
            <p>{characterData.wand.core}</p>
            <p>{characterData.wand.wood}</p>
            <p>{characterData.wand.length}</p>
        </div>
    );
}