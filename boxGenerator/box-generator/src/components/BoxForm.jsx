import React, {useState} from 'react';


const BoxForm = (props) => {
   
    const [color, setColor] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        const newBox = {color}
        setColor("");
        props.onNewColor(color);
    }

  return (
    <div>
        <form onSubmit={ createBox }>
            <label>Color: </label>
            <input type='text' value={color} onChange={ (e) => setColor(e.target.value)}></input>
            <input type='submit' value="Add"></input>
        </form>

    </div>
  )
}

export default BoxForm