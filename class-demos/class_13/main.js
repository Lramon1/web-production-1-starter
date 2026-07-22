window.onload = () => {
let date = new Date()
console.log(date)
console.log(date.toString())
let dateDiv = document.querySelector("#date")
dateDiv.textContent = date.toString()
let day = document.createElement('p')
day.textContent = date.getDate()
dateDiv.appendChild(day)
let hours = document.createElement('p')
hours.textContent = "hour" + date.getHours()
dateDiv.appendChild(hours)
let current = document.createElement('p')
current.textContent = date.getHours() + ":" + date.getMinutes()
	+ ":" + date.getSeconds()
	dateDiv.appendChild(current)

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
		currentTime.innerHTML = date2.getHours() + ":" + min + ":" 
		+ sec
		dateDiv.appendChild(currentTime)
	}, 1000)
