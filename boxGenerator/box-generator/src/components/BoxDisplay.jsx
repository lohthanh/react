import React, {useState} from 'react';

const BoxDisplay = (props) => {

    const { color } = props


    return (
        <> 
        {color.map((oneColor, index) =>
            <div key={index} className='box' style={{backgroundColor: oneColor}}>
            </div>
        )}
           
        </>
    )
}

export default BoxDisplay