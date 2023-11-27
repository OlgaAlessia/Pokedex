import React from "react";
import Pokedex from "./Pokedex";
import pokemons from "./pokemons";

function Pokegame() {

    let hand1 = [...pokemons];
    let hand2 = [];

    while(hand2.length < hand1.length){
        let pos = Math.floor(Math.random() * hand1.length);
        hand2.push(hand1[pos]);

        hand1.splice(pos, 1);
    }

    let exp1 = hand1.reduce((exp, pokemons) => exp + pokemons.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemons) => exp + pokemons.base_experience, 0);


    return (
        <div>
            <Pokedex pokemons={hand1} totExp={exp1} isWinner={exp1 > exp2} />
            <Pokedex pokemons={hand2} totExp={exp2} isWinner={exp2 > exp1} />
        </div>
    );
}

export default Pokegame;