import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Visual({ charData }) {
  const { counts, setCounts } = useState({ //Store the counts of each house
    "House Targaryen": 0,
    "House Tarly": 0,
    "House Stark": 0,
    "House Baratheon": 0,
    "House Lannister": 0,
    "House Greyjoy": 0,
    "House Clegane": 0,
    "House Baelish": 0,
    "House Seaworth": 0,
    "House Tyrell": 0,
    "Other" : 0
  });

  const { chart, setChart } = useState(null); //Store the chart data
  //Generate an array of houses from character data

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


  function getHouseData(charData) {
    const houses = [];
    charData.forEach((char) => { //Here charData is undefined?  
      if (char.family) {
        houses.push(char.family);
      }
    });
    return houses;
  }
  //Count the instances of each house
  //Use partial string matches to count houses with multiple spellings
  //Return an object with the counts
  function getHouseCounts(charData) {
    const houses = getHouseData(charData);
    const newCount = counts;
    //Ugly but functional
    //Nested if statements to count each house
    //Use includes() (partial match) to count houses with multiple spellings
    for(let i = 0; i < houses.length; i++){
     if (houses[i].includes("Targ")) {
      counts["House Targaryen"] += 1;
    } else if (houses[i].includes("Tarly")) {
      counts["House Tarly"] += 1;
    } else if (houses[i].includes("Stark")) {
      counts["House Stark"] += 1;
    } else if (houses[i].includes("Barath")) {
      counts["House Baratheon"] += 1;
    } else if (houses[i].includes("ister")) {
      counts["House Lannister"] += 1;
    } else if (houses[i].includes("Grey")) {
      counts["House Greyjoy"] += 1;
    } else if (houses[i].includes("Cleg")) {
      counts["House Clegane"] += 1;
    } else if (houses[i].includes("Bael")) {
      counts["House Baelish"] += 1;
    } else if (houses[i].includes("Seaw")) {
      counts["House Seaworth"] += 1;
    } else if (houses[i].includes("Tyrell")) {
      counts["House Tyrell"] += 1;
    } else {
      counts["Other"] += 1;
    }
  }
    
    console.log(houses);
    setCounts(newCount);
    console.log(counts);
    setChartData(counts);
  }

  function setChartData(counts) {
    setChart({
      labels: Object.keys(counts),
      datasets: [
        {
          label: 'House Counts',
          data: Object.values(counts),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    });
  }

  useEffect(() => {
    getHouseCounts(charData);
  }); 

  return (
    <div>
      <h1>Visual!</h1>
      <div className="container">
        {chart && <Doughnut data={chart} />}
      </div>
    </div>
  )
}