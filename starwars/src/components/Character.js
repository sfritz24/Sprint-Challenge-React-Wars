// Write your Character component here
import React from 'react';

const Character = (props)=>{
    const {character} = props
    return(
        <div className="charaters">
            <h3>{character.name}</h3>
            <h5>Height: {character.height}cm</h5>
            <h5>Eye Color: {character.eye_color}</h5>
            <h5>Weight: {character.mass}kg</h5>
        </div>
    )
};

export default Character;