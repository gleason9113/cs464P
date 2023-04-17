const form = document.getElementById("hwForm");

form.addEventListener('submit', function(event)  {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const menu = event.target.elements.menu;
  const courses = Array.from(event.target.elements.courses).filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
  if(courses.length < 1){
    courses = `None selected!`
  }
  const comments = event.target.elements.comments;
  if(comments.length < 1){
    comments = `No comments entered.`;
  }

  console.log(`Name: ${name}
               Email: ${email}
               Registration Status: ${menu}
               Courses Taken:  ${courses}
               Comments: ${comments}
               `);
               
});
