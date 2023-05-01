import React from 'react';

function handleSubmit(event) {
  console.log("Input: " + event.target)
}

export default function Search() {
  return (
    <div className="container">
      <form>
        <h1>Search</h1>
        <label for="name">Enter a character name: </label><br></br>
        <button onClick={handleSubmit}>Search!</button>
      </form>
      
    </div>
  )
}