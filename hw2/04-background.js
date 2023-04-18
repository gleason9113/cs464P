//When called returns a randomly generated rgba() value.

function generateRandomColor() {
  const startValue = Math.random() * (16_777_216 - 0) + 0; //Generate a random number between 0 and 16,777,216
  const red = Math.floor(startValue >> 16); //Left 8 bits for red
  const green = Math.floor((startValue >> 8) & 255); //Middle 8 bits for green
  const blue = Math.floor(startValue & 255); //Right 8 bits for blue
  const alpha = Math.random().toFixed(2); //Alpha value for rgba()
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`; //Return the rgba() value
};

function changeBackground() {
  let interval = setInterval(function() { 
    console.log(isChanging);
    if(isChanging) { //If the isChanging flag is true
      document.body.style.backgroundColor = generateRandomColor(); //Change the background color
      console.log(document.body.style.backgroundColor);
    } else {
      clearInterval(interval); //Clear the interval
    }
  }, changeTimer);
}

let changeTimer = 3000; //Set the timer to 3 seconds
let isChanging = false; //Set the isChanging flag to false
let trigger = document.getElementById('switch'); //Get the switch

trigger.addEventListener('click', function() {
  if(!isChanging) { //If the isChanging flag is false
    isChanging = true; //Set the isChanging flag to true
    trigger.classList.remove('btn-primary'); //Remove the primary class
    trigger.classList.add('btn-danger'); //Add the danger class
    trigger.textContent = 'Stop'; //Change the button text
    changeTimer = document.getElementById('timer').value * 1000; //Get the timer value and convert to milliseconds
    if(!changeTimer) { //If the timer value is empty
      changeTimer = 3000; //Set the timer to 3 seconds
    }
    changeBackground(); //Call the changeBackground function
  } else { 
    isChanging = false; //Set the isChanging flag to false
    trigger.classList.remove('btn-danger'); //Remove the danger class
    trigger.classList.add('btn-primary'); //Add the primary class
    trigger.textContent = 'Start'; //Change the button text
  }
});
