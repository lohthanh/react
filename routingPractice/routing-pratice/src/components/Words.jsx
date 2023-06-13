import React from 'react';
import { useParams } from 'react-router';

const Words = (props) => {

    const { words } = useParams();

    let wordOrNumber = ""
    isNaN(words) ?
        wordOrNumber = "word" :
        wordOrNumber = "number"

    return (
        <div>
            <h1>This {wordOrNumber} is: {words} </h1>
        </div>
    )
}

export default Words;
