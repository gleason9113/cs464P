/* eslint-disable no-new */
const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// Map to store house names and counts
const houseLabels = new Map([
  ['House Targaryen', 0],
  ['House Tarly', 0],
  ['House Stark', 0],
  ['House Baratheon', 0],
  ['House Lannister', 0],
  ['House Greyjoy', 0],
  ['House Clegane', 0],
  ['House Baelish', 0],
  ['House Seaworth', 0],
  ['House Tyrell', 0],
  ['Other', 0],
]);

// Fuzzy string matching turns out to be fairly complicated.
// Since no goals or specific method was given, I decided to use a simple yet ugly method.
// Accuracy is a bit middling, but it works for the most part.
// For each character, check the house string and match (string contains) to the houseLabels map
// Return formatted house name
// If no match, return 'Other'
function matchHouse(house) {
  if (house.includes('Targ')) {
    return 'House Targaryen';
  } if (house.includes('Tarly')) {
    return 'House Tarly';
  } if (house.includes('Stark')) {
    return 'House Stark';
  } if (house.includes('Barat')) {
    return 'House Baratheon';
  } if (house.includes('nister')) {
    return 'House Lannister';
  } if (house.includes('Greyjoy')) {
    return 'House Greyjoy';
  } if (house.includes('Clegane')) {
    return 'House Clegane';
  } if (house.includes('Baelish')) {
    return 'House Baelish';
  } if (house.includes('Seaworth')) {
    return 'House Seaworth';
  } if (house.includes('Tyrell')) {
    return 'House Tyrell';
  }
  return 'Other';
}

// Render chart - updated to use the data from the map
const renderChart = () => {
  const donutChart = document.querySelector('.donut-chart');

  // eslint-disable-next-line no-undef
  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: Array.from(houseLabels.keys()),
      datasets: [
        {
          label: 'GoT Houses',
          data: Array.from(houseLabels.values()),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Exercise 02 - Charts', // Exercise title - not recognized in WAVE as a heading :(
        position: 'top',
        fontSize: 24,
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  });
};

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const getApiData = async () => {
  const houses = [];
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((character) => { // Get house info for each character
      if (!houses.includes(character.family)) {
        houses.push(character.family);
      }
    });
    // eslint-disable-next-line no-console
    console.log(houses);
    houses.forEach((house) => { // Match each characters house to the map if possible and increment
      houseLabels.set(matchHouse(house), houseLabels.get(matchHouse(house)) + 1);
    });
    renderChart();
  } catch (error) { // Something sad happened
    // eslint-disable-next-line no-console
    console.log(`An error occurred while fetching House data: ${error}`);
  }
};

// Call the function
getApiData(url);
