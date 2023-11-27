import React from 'react';
import "./Pokecard.css"

const POKEMON_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function Pokecard(props) {

    const imgPokemon = `${POKEMON_API}/${props.id}.png`;

    return (
        <div className="Pokecard">
            <h4 className="Pokecard-title">{props.name}</h4>
            <img src={imgPokemon} alt={props.name} width="200" />
            <p>Type: {props.type}</p>
            <p>EXP: {props.exp}</p>
            
        </div>
    );
}

export default Pokecard;