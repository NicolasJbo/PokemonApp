import Card from 'react-bootstrap/Card';
import './PokeCard.css';



export default function PokeCard(pokemon){
     // Lógica para determinar el color
  const getColor = (condicion) => {
    if (condicion === 'rock') {
      return 'var(--type-color-earth)';
    } else if (condicion === 'electric') {
      return 'var(--type-color-ligth)';
    } else if (condicion === 'water') {
      return 'var(--type-color-water)';
    } else if(condicion === 'fire') {
      return 'var(--type-color-fire)'; 
    } else if(condicion === 'psychic'){
      return 'var(--type-color-psychic)';
    } else if(condicion === 'normal'){
        return 'grey';
    }else{
        return 'grey';
    }
  };

    return (
        <>
                        <Card className="shadow-xl" style={{ backgroundColor: getColor(pokemon.poke.base.type) }}>
                             <Card.Img className='img' variant="top" src={pokemon.poke.base.sprite} /> 
                            <Card.Body>
                                <Card.Title className='title'>{pokemon.poke.base.name}</Card.Title>
                            </Card.Body>
                        </Card>
                        {pokemon.poke.firstEvo &&
                        <Card className="shadow-xl" style={{ backgroundColor: getColor(pokemon.poke.firstEvo.type) }}>
                             <Card.Img className='img' variant="top" src={pokemon.poke.firstEvo.sprite} /> 
                            <Card.Body>
                                <Card.Title className='title'>{pokemon.poke.firstEvo.name}</Card.Title>
                            </Card.Body>
                        </Card>
                        }
                        {
                          pokemon.poke.secondEvo &&
                          <Card className="shadow-xl" style={{ backgroundColor: getColor(pokemon.poke.secondEvo.type) }}>
                             <Card.Img className='img' variant="top" src={pokemon.poke.secondEvo.sprite} /> 
                            <Card.Body>
                                <Card.Title className='title'>{pokemon.poke.secondEvo.name}</Card.Title>
                            </Card.Body>
                        </Card>
                        }
                        
        </>
    );
}



