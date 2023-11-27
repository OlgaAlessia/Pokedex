import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

function Pokedex({ pokemons, totExp, isWinner }) {

    return (
        <div className="Pokedex">
            <div className="Pokedex-cards">
                {pokemons.map(p => <Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                />)}
            </div>
            <p>Total experience: {totExp}</p>
            <p>{isWinner ? "THIS HAND WINS!" : ""}</p>
        </div>
    );
}

export default Pokedex;