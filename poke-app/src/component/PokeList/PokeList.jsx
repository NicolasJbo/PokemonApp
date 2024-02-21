
import PokeCard from '../PokeCard/PokeCard';
import { useState } from 'react';
import './PokeList.css'



export default function PokeList(props){
    console.log("PokeList --> ,",props)
    const [pokemons,setPokemons]=useState(props.pokemon);

    return (
        <>
                <div className="grid-container">
                  
                     
                        <div key= {pokemons.id}class="grid-item">
                            <PokeCard name={pokemons.name} id={pokemons.id} img={pokemons.sprite} type={pokemons.type}  className='cards'/>
                        </div>
                
                </div>
        </>
    );
}



