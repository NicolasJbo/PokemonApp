import { useState } from 'react';
import PokeClass from '../Utils';


export const usePokeFetch = () => {

    const [pokemons, setpokemons] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [onError, setError] = useState();
    let pokke = new PokeClass();


    async function getPokes(pokeSearch) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + pokeSearch);
            const data = await response.json();
            const pokes = {
                name: data.name,
                id: data.id,
                sprite: data.sprites.front_default,
                type: data.types[0].type.name
            }
            return pokes;

        } catch (error) {
            setError(error);
        }
    }

    async function getPokeEvolution(pokeSearch) {
        try {
            setIsLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/` + pokeSearch);
            const data = await response.json();
            const pokeSpecieurl = data.evolution_chain.url

            const response2 = await fetch(pokeSpecieurl);
            const data2 = await response2.json();

            var firstEvo = "";
            var base = "";
            var secondEvo = "";
            base = data2.chain.species.name;
            pokke.base = await getPokes(base);

            if (data2.chain.evolves_to[0] != undefined) {
                firstEvo = data2.chain.evolves_to[0].species.name
                pokke.firstEvo = await getPokes(firstEvo);
                if (data2.chain.evolves_to[0].evolves_to[0] != undefined) {
                    secondEvo = data2.chain.evolves_to[0].evolves_to[0].species.name;
                    pokke.secondEvo = await getPokes(secondEvo);
                }
            }
            setpokemons(pokke);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            setError(error)
        }
    }



    return {
        getPokeEvolution,
        pokemons,
        isLoading,
        onError
    }

}