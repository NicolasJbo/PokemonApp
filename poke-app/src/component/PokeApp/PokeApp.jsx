import React, { useEffect, useState } from 'react'
import './PokeApp.css'
import PokeList from "../PokeList/PokeList";
import SearchInput from "../SearchInput/SearchInput";
import { usePokeFetch } from '../../utils/Hooks/usePokeFetch';


export default function PokeApp(){

    const { pokemons, isLoading ,getPokeEvolution} = usePokeFetch();

    async function handleSearch(name){    
        await getPokeEvolution(name);
        console.log("Input  ",pokemons);
    }


    return(
        <>
          <div className="searach">
                <h2>Search a Pokemon</h2>
                <SearchInput search={((name)=>handleSearch(name))} ></SearchInput>
            </div>
            
            <div className="container">
                Pokemon Evolution
                { pokemons &&
                <PokeList pokemon={pokemons}></PokeList>
                }
                
             </div>
        </>
    );
}