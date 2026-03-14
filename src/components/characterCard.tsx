"use client";

import { Character } from "../hooks/useFetchCharacters";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CharacterCard({ character }: { character: Character }) {
    const params = useParams();
    const lang = params.lang || "en";

    return (
        <div>
            <Link href={`/${lang}/${encodeURIComponent(character.name)}`}>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
            </Link>
        </div>
    );
}