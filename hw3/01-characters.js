// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const flexbox = document.getElementById('cardbox');

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const imageURL = `https://thronesapi.com/assets/images/`;
        data.forEach(character => {
            //Extract needed data from response
            const name = character.fullName;
            const title = character.title;
            const image = imageURL + `${character.image}`;
            //Create card element
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${image}" alt="${name}">
            <h2>${name}</h2>
            <h4>${title}</h4>
            `
            flexbox.appendChild(card);
        })
    })
 