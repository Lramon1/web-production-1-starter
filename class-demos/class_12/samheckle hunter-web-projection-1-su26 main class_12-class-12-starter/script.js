// What is the first line of code we write in a .js file?
// Write it below this line.
window.addEventListener("load", ()=>{
// Inside of the function, retrieve the id of the div you created in index.html and assign it to a variable.
let con = document.getElementById("container"); 
//add and event listener that detects when the container is hovered over with the mouse usinf the mouseenter
container.addEventListener("mouseenter",()=>{
	container.style.backgroundColor="#eaeaea"
})
container.addEventListener("mouseleave",()=>{
	container.style.backgroundColor="#c0d6df"
})
//let container = document.querySelector("#container") another option
// Q: What is another way to write the first line of code? 
// A: window.onload = () =>{

// Q: What does the document keyword represent?
// A: html document, the html inside our page

// Q: What is the property we access to change the style of a selected element in js? How would we change the background color of the div we selected?
// A: document.getElementById('container').style.backgroundColor = ''
// A: con.style.backgroundColor = ''; 
// A: document.querySelector('#container').style.backgroundColor = ''
