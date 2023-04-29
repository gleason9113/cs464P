// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const flexbox = document.getElementById('cardbox');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    const imageURL = 'https://thronesapi.com/assets/images/';
    data.forEach((character) => {
      // Extract needed data from response
      const name = character.fullName;
      const { title } = character;
      const image = `${imageURL}${character.image}`;
      // Create card element
      const card = document.createElement('div');
      card.classList.add('card', 'align-items-center', 'mx-auto');
      card.innerHTML = `
            <img src="${image}" alt="picture of ${name}" class="card-img-top mb-3">
            <p><strong>${name}</strong></h2>
            <p>${title}</p>
            `;
      flexbox.appendChild(card);
    });
  });
