import React, { useEffect, useState } from 'react'
import './PokeApp.css'
import PokeList from "../PokeList/PokeList";
import SearchInput from "../SearchInput/SearchInput";
import { usePokeFetch } from '../../utils/Hooks/usePokeFetch';


export default function PokeApp(){

    const { pokemons, isLoading ,onError,getPokeEvolution} = usePokeFetch();
    const[user,setUser]=useState('Nico');

    async function handleSearch(name){    
        await getPokeEvolution(name);
    }


    return(
        <>
          <div className="searach">
                <h2 className='title-landing'>Search Pokemon Evolutions</h2>
                <h3 className='user'>Bienvenido :{user}!</h3>
                <SearchInput search={handleSearch} ></SearchInput>
            </div>
            
            <div className="container">
                 <h2>Pokemon Evolution</h2>
                {
                   isLoading && <h2>Loading...</h2> 
                }

                { pokemons &&
                    <PokeList pokemon={pokemons}></PokeList>
                }
                
             </div>
        </>
    );
}