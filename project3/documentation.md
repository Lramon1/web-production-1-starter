# Cat O'Clock - Project 3 Documentation

## About

Cat O'Clock is a browser clock that has a cat that changes its activity depending on the time of the day.

![project 3](proposal/web.png)

My inspiration for this project came from the Shimeji Browser Extension. This type of program inspired me because it reminded me of when I was younger and used small "chibis" or desktop pets that appeared on my computer. I enjoyed interacting with them, so I wanted to create a similar experience but with a cat.

Reference:
[Shimeji Browser Extension Website](https://shimejis.xyz/)

At first, my idea was to create a little cat that moved around the screen while the clock was running. Later, I decided to make the cat have different activities depending on the time, like a daily routine.

![project 3 draft](proposal/draft.png)

I wanted to create something simple but enjoyable, where the user could see the time while also having a cute visual element on the webpage.

---

# Process

At the beginning of the project, I planned to use different GIFs of cats doing different activities. However, during the process, my idea changed and I decided to use small video clips instead.

The final result is not exactly what I imagined at the beginning, but I actually like how it turned out. The concept stayed the same: a cat that changes its activity depending on the time.

I had fun creating this project because it was different from my other assignments. Instead of only designing a webpage, I was creating a small interactive experience.

---

# Challenges

One of the biggest challenges was creating the different cat clips. Even though they are short videos, making several of them was more difficult and time-consuming than I expected.

I had to work on them during my free time when I was not working or during break. Because of the time limitations, I was not able to create every activity that I originally planned, but I focused on the main ones.

![project 3](videos/catpro)

Another challenge was making the videos change automatically depending on the current hour. I had to understand how to use JavaScript conditions and connect them with the video element in HTML.

Even though the process was sometimes difficult, I enjoyed solving the problems and seeing the cat change throughout the day.

---

# Development

For the clock, I used JavaScript to get the current time and update it every second using `setInterval()`.

Example:

```javascript
setInterval(() =>{
    let date2 = new Date()
    let currentTime = document.createElement('p')

    currentTime.classList.add('curr-time')

    dateDiv.innerHTML = ""

    let min = date2.getMinutes()
    if(min < 10){
        min = "0" + min
    }

    let sec = date2.getSeconds()
    if(sec < 10){
        sec = "0" + sec
    }

    currentTime.innerHTML = date2.getHours() + ":" + min + ":" + sec

    dateDiv.appendChild(currentTime)

}, 1000)
```

After learning how to display the time, I expanded the JavaScript to change the cat's activity depending on the hour.

The cat has different activities during the day:

- Morning: waking up and stretching
- Daytime: playing
- Afternoon/evening: watching a movie
- Night: sleeping

The videos are connected using JavaScript conditions that check the current hour and change the video source.

---

# HTML Structure

My HTML documents include the connection to:

- `style.css`
- `main.js`

The project includes:

- `index.html` - The main Cat O'Clock page with the clock and cat.
- `about.html` - A page explaining the project and inspiration.

I used `div` elements with IDs because they allowed me to connect HTML elements with JavaScript.

Example:

```html
<div id="date"></div>

<video id="cat" autoplay muted loop></video>
```

The `id` attributes helped JavaScript identify and modify specific elements on the page.

---

# New Things I Learned

During this project, I learned more about JavaScript, HTML attributes, and organizing a webpage.

One new HTML attribute I learned was:

```html
target="_blank"
```

I used it to open the About page in a new browser tab instead of replacing the clock page.

Example:

```html
<a href="about.html" target="_blank">
About Cat O'Clock
</a>
```

I also learned more about controlling videos with JavaScript and using conditions to create different experiences depending on time.

---

# Research

During the process, I watched videos and searched for information about HTML and JavaScript features that could help me improve my project.

Resources:

[resource1](https://youtu.be/4TODW-IP4XM?is=qU5nPvNJAYVnRPdM)
[resource2](https://youtu.be/4ul3q-cEhvU?is=FbJlzBiDyHbrhUrh)
[resource3](https://youtube.com/shorts/Vn7PdmMtqNc?is=kaNOWJY-33yk81-U)

I searched for new tags and attributes, especially how to open another HTML page in a new tab and how to organize my website.

---

# Final Reflection

Out of all the projects I worked on, Cat O'Clock was my favorite.

Even though it was challenging and the final result is different from my original idea, I am happy with how it turned out. Creating the cat clips and connecting them with the clock was difficult, but it made the project more personal.

This project helped me understand that ideas can change during the creative process. Sometimes the final version is not exactly what you imagined, but it can still become something you enjoy.

I liked creating an interactive webpage that combines design and code. Cat O'Clock became a small and cute experience that makes checking the time more enjoyable.