import React from 'react';
import { useParams } from 'react-router';


export const StyledWord = (props) => {

    const {words, textColor, bgColor} = useParams();

    const wordStyle = {
       color : textColor,
       backgroundColor: bgColor,
    }

  return (
    <div>
        <h1 style={wordStyle}>This word is: { words }</h1>
    </div>
  )
}
