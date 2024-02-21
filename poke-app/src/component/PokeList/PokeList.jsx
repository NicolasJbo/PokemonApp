import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PokeCard from '../PokeCard/PokeCard';
import { useState } from 'react';
import './PokeList.css'



export default function PokeList(props){
    console.log("pokemons --> ,",props.pokemons)
    const [pokemons,setPokemons]=useState(props.pokemons);

    return (
        <>
                <div class="grid-container">
                    {pokemons.map(pokemon => (
                        <div key= {pokemon.id}class="grid-item">
                            <PokeCard name={pokemon.name} id={pokemon.id} img={pokemon.img} type={pokemon.type}  className='cards'/>
                        </div>
                    ))}
                </div>
        </>
    );
}



