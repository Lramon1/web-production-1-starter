window.onload = () => {
//1st param: function name that is called after ms has passed
//2nd param: ms before function is executed
setTimeout(sayHello, 5000)

// this timeout will not happen because it will be cleared
// we are setting the variable myTime to an id thatr is created when the timer is set
let mytimer = setTimeout(hi,2000)
console.log(mytimer) // printing the out id of the timer
clearTimeout(mytimer) // removing the timer

// add a timer that repeats every 3 seconds
let myint = setInterval(myInterval, 3000)

// document.body.addEventListener("click", handleClick)
document.body.addEventListener("click", () => {
	console.log(myint)
	clearInterval(myint)
	console.log('click')
	document.querySelector ('#contert').innerHTML = "" 
})

// create a new date using DATE CLASS
let date = new Date()
console.log(date)
console.log(date.toString())

let dateDiv = document.querySelector("#date")
dateDiv.textContent = date.toString()
// storing the date (number of the day of the month)
let day = document.createElement('p')
day.textContent = date.getDate()
dateDiv.appendChild(day)
//storing and showing the hours
let hours = document.createElement('p')
hours.textContent = "hour" + date.getHours()
dateDiv.appendChild(hours)

// show whole time
let current = document.createElement('p')
current.textContent = date.getHours() + ":" + date.getMinutes()
	+ ":" + date.getSeconds()
	dateDiv.appendChild(current)

//
	setInterval(() =>{
		let date2 = new Date()
		let currentTime = document.createElement('p')
		//adding a class to style in style.css
		currentTime.classList.add('curr-time')
		// remove all previous elements
		dateDiv.innerHTML = ""
		let min = date2.getMinutes()
		if(min < 10){
			min = "0" + min
		}
		let sec = date2.getSeconds()
		if(sec<10){
			sec = "0" + sec
		}
		// update the current time
		currentTime.innerHTML = date2.getHours() + ":" + min + ":" 
		+ sec
		dateDiv.appendChild(currentTime)
	}, 1000)

//document.querySelector("#date").textContent = date.toString()
}


//the only code that should be written after window.onload } are function declarations

//we need to define sayHello
//function is just like let but to make a function instead of a variable
function sayHello(){
	console.log('hello!')
	document.getElementById('content').textContent ="hello"
}


// this is another function declaration
function hi(){
	console.log('hi!')
}

function myInterval(){
	console.log('3 seconds')
	let newElement = document.createElement('span')
	newElement.textContent = "hi"
	document.querySelector("#content").appendChild(newElement)
}

function handleClick(){
	console.log(myint)
	console.log('click')
	document.querySelector('#contert').innerHTML = ""

}