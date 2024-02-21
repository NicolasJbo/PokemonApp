import { useState } from "react";
import './SearchInput.css'

export default function SearchInput(){

    const [inputValue,setInputValue] = useState('');

    function handleChange(event){
        setInputValue(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        if( inputValue.trim().length <= 1) {
            alert('mas de 1 caracter')
           return;
        }else {
        setInputValue('');
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleChange} placeholder="Enter a Pokemon to search" value={inputValue} />
            </form>
       
        </>
    );
}