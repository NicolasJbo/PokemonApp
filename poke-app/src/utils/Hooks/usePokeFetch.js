import { useState } from 'react';


export const usePokeFetch = () => {

    const [pokemons, setpokemons] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    async function getPokes(pokeSearch) {
        console.log("poke to search-->", pokeSearch)
        console.log(`https://pokeapi.co/api/v2/pokemon/` + pokeSearch)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + pokeSearch);
        const data = await response.json();
        const pokes = {
            name: data.name,
            id: data.id,
            sprite: data.sprites.front_default,
            type: data.types[0].type.name
        }
        setpokemons(pokes);
        setIsLoading(false);
        return pokes;
    }
    async function getPokeSpecies(pokeSearch) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/` + pokeSearch);
        const data = await response.json();
        const pokeSpecieurl = data.evolution_chain.url
        console.log("URL-->", data.evolution_chain.url);

        const response2 = await fetch(pokeSpecieurl);
        const data2 = await response2.json();
        /*    const pokeEvolution = {
               url: data.evolution_chain.url
           } */

        console.log("evolution -->", data2);
        setIsLoading(false);
        return data;
    }


    const getpokemons = async (pokeToSearch) => {
        await getPokes(pokeToSearch);
        console.log("spacies--> ", await getPokeSpecies(pokeToSearch));
        setIsLoading(false);
    }

    return {
        getpokemons,
        pokemons,
        isLoading
    }

}