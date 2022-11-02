document.addEventListener("DOMContentLoaded", () => { // load this event listener after the Dom loads
  let form = document.getElementById("create-task-form"); // set a variable for the form
  form.addEventListener('submit', (e) => { // careate a listener for the submit event of the form
    e.preventDefault(); // prevent the page from reloading on submit
    console.log(e.target["new-task-description"].value)
    buildToDo(e.target["new-task-description"].value) // pass the value of the target of the event to the buildToDo function
    // to get the value of the target, specify the specific input value you want; we call the buildToDo function
    form.reset('form')
  })
})

function buildToDo(userInput) { // we're creating an element so we can append it to the DOM
  let li = document.getElementById('list') // grab the list items and set to a variable name
  let ul = document.createElement('ul') // create a new ul element for our to do list (this will happen each time we run through this function)
  ul.textContent = userInput // change the text content of the ul tag to be what the user input
  li.appendChild(ul) // append the new ul tag to the li that is in the html already
  let btn = document.createElement('button') // create a button next to the ul
  btn.textContent = 'DELETE ME'// add text content to our button of 'DELETE ME'
  ul.appendChild(btn) // append our btn to our 'ul' tag --> this will make the button right next to the ul we made
  btn.addEventListener('click', handleDelete) // add an event listener for a click on that button we just made
  // and pass that as a parameter into the handleDelete function
}

function handleDelete(e) {  // this function to deletes the ul (and it's associated button) when we click on the delete button next to the ul
  e.target.parentNode.remove() // to get rid of the ul and button we have to delete the button's parent node (which is the ul)
}

