import './App.css'
import PokeList from './component/PokeList/PokeList';
import { pokemons } from './utils/Utils';


function App() {
  const pokemonsArray = pokemons;
  return (
    <>
    <div className="container">
         <PokeList pokemons={pokemonsArray} ></PokeList>
    </div>
    </>
  );
}

export default App
