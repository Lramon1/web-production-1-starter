// to write comments 
// if you use the hotkey %+/ (Mac) or CTRL+/ (PC) is automatically switch based on file type 
// semi-colons (;) are optional in js 
// function name = alert() 
// parameter = 'this is a javascript alert!' 
// text that is wrapped in '' or "" is called a string 
// this will not work because it is reading apostrophe i've as code syntax instead of a character 
// alert('i've changed this text) 
// removing apostrophe fixes the issue 
alert('ive changed this text'); 
// we could also use "" and ' to differentiate 
// alert("i've changed this text") 
// or use an escape character \ before the apostrophe 
// alert('i\'ve changed this text') 

// this does not show up on the webpage 
// you need to open the inspector - console to see 
// function name = log 
// parameter = 'this is a console message' 
// log belongs to the console > console. log 
//log does not exist outside of the console 
console.log('this is a console message') 

// in order for js to manipulate the HTML, the HTML file needs to be fully loaded. 
// we detect when the page has loaded using 
// addEventListener() -> function 
// "load" -> parameter #1, which event we are looking for 
// we are waiting for the WINDOW to finidh LOAD the HTML 
// ()=>{} 
window.addEventListener("load",()=>{ 
	//all of our code that changes the HTML/CSS will live inside these {} 
	console.log('page has loaded.js connected') 

	// las líneas de textContent e innerHTML de big-paragraph fueron eliminadas por el profesor 
	document.getElementById('big-paragraph').style.backgroundColor = '#454e9e' 

	// grab the #another id and add a class to it 
	// add() - function name 
	// 'red-paragraph' + parameter of the class name you want to add 
	document.querySelector('#another').classList.add('red-paragraph') 

	// creating a variable so we don't have to write document.getElementById over and ove 
	let sp = document.getElementById('special') 
	sp.textContent = 'this is a very special paragraph' 
	sp.style.fontSize = '50px' 
	sp.style.color = '#724CF9' 

	// remove elements 
	// let another = document. querySelector('#another') 
	// another. remove () 
	document.querySelector('#another').remove() 

	// add HTML elements after the page has loaded 
	// 1. use the createElement() function to decide which tag is being created 
	// createElement() + function name 
	// 'h1' + parameter, with the name of the tag 
	let newElement = document.createElement('h1') 

	// 2. make any changes to the element as needed 
	newElement.textContent = 'this was added with js' 

	// 3. add the element to the page using appendChild() 
	// we can add to the body 
	// document.body.appendChild(newElement) 

	// we can add to a parent container 
	document.querySelector('#container').appendChild(newElement) 
})
