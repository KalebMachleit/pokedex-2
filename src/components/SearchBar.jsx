import './SearchBar.css'
import React from 'react'

export default function SearchBar({choosePokemon, getImage, getInfo}) {
    const updatePokemon = (evt) => {
        // console.log(evt.target.value)
        choosePokemon(evt.target.value)
    }
    return (
        <>
            <input type='text' id='search' onBlur={evt => updatePokemon(evt)}></input>
            <button onClick={getImage}>Update Image</button>
            <button onClick={getInfo}>Update Info</button>
        </>
    )
}