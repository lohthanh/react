import React from 'react'

const DisplayPokemon = (props) => {

    const {fetchPokemon} = props

    return (
        <ul >
            {fetchPokemon.map(name => <li>{name}</li>)}
        </ul>
    )
}

export default DisplayPokemon