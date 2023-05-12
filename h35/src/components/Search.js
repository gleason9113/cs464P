import React, { useState } from 'react';

export default function Search({ data }) {
  const [ cards, setCards ] = useState([]); //Store the cards to display

  const imageURL = 'https://thronesapi.com/assets/images/'; //Image URL string
  
  //Issue:  1st time name is searched for, nothing happens - have to click Submit 2x; why?
  const onSubmit = (event) => {
    //Get and set the name to search for
    event.preventDefault();
    const results = [];
    const target = event.target.charName.value.toLowerCase();
    //Search the data for full and partial matches in the fullName field
    if(target) {
      data.forEach((char) => {
        if (char.fullName.toLowerCase().includes(target)) {
          results.push(char);
          console.log(char);
        }
      }) 
    }

    //Create a JSX element for each result
    //And add it to an array
    if (results.length === 0) {
      setCards(<p>Character not found!  Try again!</p>);
    } else {
      const cardElements = results.map((char) => {
        const name = char.fullName;
        const title = char.title;
        const image = `${imageURL}${char.image}`;
        
        return (
          <div key={char.id} className="card">
            <img src={image} width={200} height={200} alt={`This is ${name}`} className="char-img" />
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
  }
    
  

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