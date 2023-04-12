function handleInput(event) {
  const input = event.target.value;
  const out = document.getElementById('answer')
  let numCheck = new RegExp("^[0-9]+$"); // Test for non-numeric values in input
  let output = '';
  let pass = false; // Flag for output color
  let reverse = input.split('').reverse().join(''); // Reverse the input string
  if(!numCheck.test(input)){ //Not a number
    output = 'Please enter a number';
  } else if( reverse !== input) { // Not a palindrome
    output = 'No. Try again.';
  } else { // Numeric palindrome
    output = 'Yes. This is a palindrome!';
    pass = true;
  }
  
  out.textContent = output;
  if(pass){
    out.style.color = 'green';
  } else {
    out.style.color = 'red';
  } 
}

const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

