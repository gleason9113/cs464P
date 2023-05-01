import React from 'react';
import { useState } from 'react';


export default function Search() {
  const [ name, setName ] = useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input: " + event.target.value)
  }

  return (
    <div className="container">
      <form>
        <h1>Search</h1>
        <div className="form-group">
          <label htmlFor="name">Enter a character name: </label><br></br>
          <input id="name" name="charName" type="text"></input>
        </div> 
        
        <button onClick={handleSubmit}>Search!</button>
      </form>
      
    </div>
  )
}