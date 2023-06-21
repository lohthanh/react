import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PeopleDisplay = (props) => {

    const [person, setPerson] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res.data)
                setPerson(res.data)
            })
            .catch(err => {console.error(err)
            navigate('/error')})
    }, [id])

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
        </div>
    )
}

export default PeopleDisplay;