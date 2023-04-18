document.addEventListener('DOMContentLoaded', function() { 
    const input = document.getElementById('input-field'); //Get the input field
    input.addEventListener('input', function(event) { //Changed keydown to input - wasn't working consistently with keydown
        let targetString = event.target.value; //Get input string
        if(targetString.length > 0) { //Verify string length - otherwise it highlights spaces
            let textBody = document.getElementById('text-body'); //Get the text 
            //Regex: \b = word boundary, g = global, i = case insensitive
            let regExp = new RegExp(`\\b${targetString}\\b`, 'gi') //Couldn't get this to work with a literal - suspect the variable breaks it
            let newText = textBody.textContent.replace(regExp, `<mark>$&</mark>`); //Add <mark> tags
            textBody.innerHTML = newText; //Set the new text
        }
    });
});


