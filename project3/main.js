window.onload = () => { 
    let cat = document.querySelector("#cat"); 
    let dateDiv = document.querySelector("#date");
    let movietime = document.querySelector("#movietime");

    function actualizarReloj() {
        let date2 = new Date();
        let currentTime = document.createElement('p');
        currentTime.classList.add('catime');
       
        dateDiv.innerHTML = ""; 
            
            let min = date2.getMinutes();
            if (min < 10) { min = "0" + min; }
            let sec = date2.getSeconds();
            if (sec < 10) { sec = "0" + sec; }
            
            currentTime.innerHTML = date2.getHours() + ":" + min + ":" + sec;
            dateDiv.appendChild(currentTime);

            let hour = date2.getHours();

            // This cange the video clips depending of the hour - cambia el video segun la hora

            
            if (hour >= 0 && hour < 6 && !cat.src.includes("sleep.mov")) {
            	cat.src = "videos/sleep.mov";}

            if (hour >= 6 && hour < 8 && !cat.src.includes("strech.mov")) {
            	cat.src = "videos/strech.mov";}

             if (hour >= 8 && hour < 11 && !cat.src.includes("eat.mov")) {
            	cat.src = "videos/eat.mov";}

            if (hour >= 11 && hour < 13 && !cat.src.includes("limpio.mov")) {
            	cat.src = "videos/limpio.mov";}

             if (hour >= 13 && hour < 15 && !cat.src.includes("eat.mov")) {
            	cat.src = "videos/eat.mov";}

             if (hour >= 15 && hour < 16 && !cat.src.includes("sit.mov")) {
            	cat.src = "videos/sit.mov";}

            if (hour >= 16 && hour < 22 && !cat.src.includes("movie.mov")) {
            	cat.src = "videos/movie.mov";}

            if (hour >= 22 && !cat.src.includes("night.mov")) {
            	cat.src = "videos/night.mov";}

            // shows the link in th night

            if (movietime) {
            	if (hour >= 16 && hour < 22) { movietime.style.display = "block";}
            	else { movietime.style.display = "none";}
            }


         }

actualizarReloj();
setInterval(actualizarReloj,1000);
// se pone al final para que el reloj aparezca inmediatamente

}


  
