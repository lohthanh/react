import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PeopleDisplay from './PeopleDisplay';
import PlanetsDisplay from './PlanetsDisplay';


const SearchForm = (props) => {

  const navigate = useNavigate();
  const [category, setCategory] = useState('')
  const [id, setId] = useState('');

  const getData = (e) => {
    e.preventDefault();
    let data = {category, id}
    navigate(`/${category}/${id}`)
    setId('')
  }

  return (
    <>
    <h2>Search for a Star Wars person or planet! </h2>
        <form onSubmit={getData}> 
          <label htmlFor='category'>Search for: </label>
          <select name='category' id='category' onChange={(e) => {setCategory(e.target.value)}}>
            <option value='people'>people</option>
            <option value='planets'>planets</option>
          </select>
          <label htmlFor='id'>ID: </label>
          <input type='number' id='id' name='id' value={id} onChange={(e) => setId(e.target.value)} />
          <input type='submit' value='Submit'/>
        </form>

    </>
  )

}


export default SearchForm;