window.onload = () => { 
    // Corregido: "document" bien escrito por si necesitas usar tu elemento gato
    let cat = document.querySelector("#cat"); 
    let dateDiv = document.querySelector("#date");

    // 1. CREAMOS UNA FUNCIÓN PARA MOSTRAR EL RELOJ DE INMEDIATO
    function actualizarReloj() {
        let date2 = new Date();
        let currentTime = document.createElement('p');
        currentTime.classList.add('catime');
        
        if (dateDiv) {
            dateDiv.innerHTML = ""; // Limpia todo para que no aparezca el texto feo
            
            let min = date2.getMinutes();
            if (min < 10) { min = "0" + min; }
            let sec = date2.getSeconds();
            if (sec < 10) { sec = "0" + sec; }
            
            currentTime.innerHTML = date2.getHours() + ":" + min + ":" + sec;
            dateDiv.appendChild(currentTime);
        }
    }

    // 2. LA EJECUTAMOS AL INSTANTE PARA QUE NO HAYA PARPADEO
    actualizarReloj();

    // 3. TU TIMER DE CLASE QUE COMPLETA EL CICLO CADA SEGUNDO
    setInterval(actualizarReloj, 1000);
}
