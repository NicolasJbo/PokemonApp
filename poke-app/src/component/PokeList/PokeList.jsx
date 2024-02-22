
import PokeCard from '../PokeCard/PokeCard';
import { useState } from 'react';
import './PokeList.css'



export default function PokeList({pokemon}){
    return (
        <>
            <div key= {pokemon.base.name}className="card-Evo">
                <PokeCard poke={pokemon} className='cards'/>
            </div>
        </>
    );
}



