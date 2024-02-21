import Card from 'react-bootstrap/Card';
import './PokeCard.css';



export default function PokeCard({name='',id='',img='',type=''}){
     // Lógica para determinar el color
  const getColor = (condicion) => {
    if (condicion === 'earth') {
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
                        <Card key={id}className="shadow-xl" style={{ backgroundColor: getColor(type) }}>
                             <Card.Img className='img' variant="top" src={img} /> 
                            <Card.Body>
                                <Card.Title className='title'>{name}</Card.Title>
                            </Card.Body>
                        </Card>
        </>
    );
}



