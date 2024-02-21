import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PokeList from './component/PokeList/PokeList.jsx'
import { pokemons } from './utils/Utils.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <div className="searach">
      <h2>Search a Pokemon</h2>

    </div>
    <div className="container">
      Pokemons List
      <PokeList pokemons={pokemons}></PokeList>
       
    </div>
  </React.StrictMode>,
)
