import React, { useState, useEffect } from 'react';


export default function Search() {
  const [ name, setName ] = useState(null); //Store the name to search for
  const [ data, setData ] = useState([]); //Store the data from the API
  const [ cards, setCards ] = useState([]); //Store the cards to display

  const url = 'https://thronesapi.com/api/v2/Characters';
  const imageURL = 'https://thronesapi.com/assets/images/';
  

  const onSubmit = (event) => {
    //Get and set the name to search for
    event.preventDefault();
    const results = [];
    const target = event.target.charName.value;
    setName(target);
    //Search the data for full and partial matches in the fullName field
    if(name) {
      data.forEach((char) => {
        if (char.fullName.includes(name)) {
          results.push(char);
          console.log(char);
        }
      })
    }
    //Create a JSX element for each result
    //And add it to an array
    const cardElements = results.map((char) => {
      const name = char.fullName;
      const title = char.title;
      const image = `${imageURL}${char.image}`;
      
      return (
        <div key={char.id} className="card">
          <img src={image} width={250} height={250} alt={`This is ${name}`} className="char-img" />
          <p>
            <strong>{name}</strong>
          </p>
          <p>
            {title}
          </p>
        </div>
      );
    });
  //Set the cards to display
  setCards(cardElements);
  }
  useEffect(() => {
    fetch(url) 
      .then((response) => response.json())
      .then((data) => {
    // eslint-disable-next-line no-console
        setData(data);
        console.log(data);    
      })
  } , []); 

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Search</h1>
        <div className="form-group">
          <label htmlFor="name">Enter a character name: </label>
          <input id="name" name="charName" type="text"></input>
        </div> 
        <button>Search!</button>
      </form>
      <div className="card-box">
        {cards} 
      </div>
    </div>
  )
}