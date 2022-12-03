import React from "react";

const BestPokemon = (props) =>{
//   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
console.log(props);
  return(
    <div>
    <p> "My favorite Pokemon is Squirtle"</p>
    <ul>
        <li>{props.abilities}</li>
    </ul>
    </div>
  );
}

export default BestPokemon ;