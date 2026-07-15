# Proposal - Project 3
Cat O'clock
ABOUT 
Cat O'Clock is a browser clock that has a cat that changes its activity depending on the time.

![project 3](proposal/web.png)

This type of web it inspire me to think of a little doll changing with the time, but then I though using a cat. My idea is use cute gif o cats doing diferent things. I will organize them accord what I want.

![project 3](proposal/draft.png)

I will use what i learn, that is using the code to show the time.

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

Probably some of the ideas that i have now, will chenge in the process but for now that its fine for me. I want to include the cat to make it cute and also to make our experience in the web more enjoyable. I didn't know what to do at first but I just remembered that when I was younger I used a program to implement this 'chibis' in my computer. I was happy interacting with the 'chibis'. 

# HTML documents

My HTML documents wil have the link to style.css and -----.js.

In this part I would make the layout for the clock and the cat gif. Also, I can put the gif in the 'style.css'. 

I will use a div id:, in that way I will be able to apply Js.
