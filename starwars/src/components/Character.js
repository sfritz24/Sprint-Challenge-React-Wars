// Write your Character component here
import React from 'react';
import CharacterStyles from '../styles/CharacterCard';

const Character = ({character})=>{
    return(
        <CharacterStyles>
            <h3>{character.name}</h3>
            <h5>Height: {character.height}cm</h5>
            <h5>Eye Color: {character.eye_color}</h5>
            <h5>Weight: {character.mass}kg</h5>
        </CharacterStyles>
    )
};

export default Character;