//Grab the form element.
const form = document.getElementById("hwForm"); 
//Event listener for the form submit event.
form.addEventListener('submit', function(event)  {
  event.preventDefault(); 
  const name = event.target.elements.name.value; //This field, email and menu are required, so we can just grab the value.
  const email = event.target.elements.email.value;
  const menu = event.target.elements.regMenu.value;
  //Make an array of checkboxes, filter for checked boxes, map to get the value.
  const courses = Array.from(event.target.elements.courses).filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
  //If no courses are selected, set the courses variable to a string.
  if(courses.length < 1){
    courses = `None selected!`
  }
  //Get the comments value, if it's empty, set the comments variable to a string.
  const comments = event.target.elements.comments.value;
  if(comments.length < 1){
    comments = `No comments entered.`;
  }
  //Log the form data to the console.
  console.log(`  Name: ${name}
  Email: ${email}
  Registration Status: ${menu}
  Courses Taken:  ${courses}
  Comments: ${comments}
  `);
               
});
