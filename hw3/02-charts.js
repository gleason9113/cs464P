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

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const houseLabels = {
  "House Targaryen": 0,
  "House Tarly": 0,
  "House Stark": 0,
  "House Baratheon": 0,
  "House Lannister": 0,
  "House Greyjoy": 0,
  "House Clegane": 0,
  "House Baelish": 0,
  "House Seaworth": 0,
  "Unknown": 0,
  "House Tyrell": 0,
  "Other" : 0
}

let houses = []
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {
          if(!houses.includes(character.family)) {
            houses.push(character.family);
          }
        })
        for(let i = 0; i < houses.length; i++){
          const toMatch = houses[i];
          for (let key in houseLabels) {
            if (key.includes(toMatch)) {
              houseLabels[key] += 1;
            }
          }
        }
        renderChart();
      });
const renderChart = () => {
  const donutChart = document.querySelector('.donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: Array.from(Object.keys(houseLabels)),
      datasets: [
        {
          label: 'GoT Houses',
          data: Array.from(Object.values(houseLabels)),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();
