import React, { useEffect, useState } from 'react';
import  { Chart, Title } from 'chart.js/auto'
import NavBar from './Navbar';
import './HouseChart.css';

//From chart assignment
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
//Data for chart
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
//Handle badly formatted data from API
//Match a target string within each family name
//Unmatched items are counted as 'Other'
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


//This was suggested in some forum or other for the chart title issue - no effect that I can see
Chart.register(Title);


export default function HouseChart() {
  const [houses, setHouses] = useState([]); //Array of houses from API
  const [chart, setChart] = useState(null); //The chart - part of the refresh problem?

  useEffect(() => {
    const getApiData = async () => {
      try { //Get data from API
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await response.json();
        const houseCounts = new Map(houseLabels);
        //Get unique houses from API data
        data.forEach((character) => {
          if (!houses.includes(character.family)) {
            setHouses((prevState) => [...prevState, character.family]);
          }
        });
        console.log(houses);
        //Count houses
        houses.forEach((house) => {
          houseCounts.set(matchHouse(house), houseCounts.get(matchHouse(house)) + 1);
        });
        console.log(houseCounts);
        //Create chart
        //Error here (In console): Canvas is already in use. Chart with ID '0' must be destroyed before the canvas with ID '' can be reused - related to refresh issue?
        const donutChart = document.querySelector('.donut-chart');
        if (chart) {
          chart.destroy(); //Saw this in a forum as answer to the above error - no effect
        }

        const newChart = new Chart(donutChart, {
          type: 'doughnut',
          data: {
            labels: Array.from(houseCounts.keys()),
            datasets: [
              {
                label: 'GoT Houses',
                data: Array.from(houseCounts.values()),
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
              text: 'Game of Thrones Houses',
              position: 'top',
              fontSize: 24,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          },
        });
        setChart(newChart)
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, [houses]); //Adding the charts dependency here causes the chart to re-render over and over - why?

  return (
    <div>
      <NavBar />
      <canvas id="test" className="donut-chart" />;
    </div>
  );
}
