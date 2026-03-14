"use client";

import { useState, useEffect } from "react";

interface Wand {
    wood: string;
    core: string;
    length: number;
}

export interface Character {
    name: string;
    actor: string;
    wand: Wand;
    species: string;
    gender: string;
    ancestry: string;
    house: string;
    image: string;
}

const API_URL = "https://hp-api.onrender.com/api/characters";

export const useFetchCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCharacters(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacters();
    }, []);
    return { characters, loading, error };
}

export const useFetchCharacter = (name: string) => {
    const { characters, loading, error } = useFetchCharacters();
    const character = characters.find((character) => character.name === decodeURIComponent(name));
    return { character, loading, error };
}

export default useFetchCharacters;
