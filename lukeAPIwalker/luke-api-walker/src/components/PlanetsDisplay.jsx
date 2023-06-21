import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const PlanetsDisplay = (props) => {

    const [planets, setPlanets] = useState({});
    const {id, category} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                console.log(res)
                setPlanets(res.data)
            })
            .catch(err => {console.error(err)
                navigate('/error')})
    }, [id])

  return (
    <div>
        <h1>{planets.name}</h1>
        <p>Climate: {planets.climate}</p>
        <p>Terrain: {planets.terrain}</p>
        <p>Surface Water: {planets.surface_water ? 'true' : 'false'}</p>
        <p>Population: {planets.population}</p>
    </div>
  )
}

export default PlanetsDisplay;