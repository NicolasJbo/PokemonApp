
import PokeCard from '../PokeCard/PokeCard';
import { useState } from 'react';
import './PokeList.css'



export default function PokeList(props){
    const [pokemons,setPokemons]=useState(props.pokemon);
    console.log("List ",pokemons)
    return (
        <>
                <div className="grid-container">
                  
                     
                        <div key= {pokemons.base.name}class="card-Evo">
                            <PokeCard poke={pokemons} className='cards'/>
                        </div>
                
                </div>
        </>
    );
}



