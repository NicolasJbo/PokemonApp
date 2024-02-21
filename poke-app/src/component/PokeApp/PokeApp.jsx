import React, { useState } from 'react'
import './PokeApp.css'
import PokeList from "../PokeList/PokeList";
import SearchInput from "../SearchInput/SearchInput";
import { usePokeFetch } from '../../utils/Hooks/usePokeFetch';


export default function PokeApp(){

    const[pokes,setPokemons] = useState();
    const { pokemons, isLoading ,getpokemons} = usePokeFetch();

    async function handleSearch(name){    
        console.log("Buscador-->" ,name)
        const data = await getpokemons(name);
        console.log("pokemons2-->" ,pokemons)
        setPokemons(pokemons);


    

    }



    return(
        <>
          <div className="searach">
                <h2>Search a Pokemon</h2>
                <SearchInput search={((name)=>handleSearch(name))} ></SearchInput>
            </div>
            
            <div className="container">
                Pokemons List
                { pokes &&
                <PokeList pokemon={pokemons}></PokeList>
                }
                
             </div>
        </>
    );
}