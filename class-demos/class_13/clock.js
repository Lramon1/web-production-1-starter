window.addEventListener("load", () => {
    let dateElement = document.querySelector('#date')
    let currentTime = Date.now()
    console.log(currentTime)

    document.body.addEventListener("click", () => {
        console.log(Date.now())
        let newTime = new Date()
        let stringTime = newTime.toLocaleTimeString()
        console.log(stringTime)
    })

    let movement = document.querySelector("#move")
    
    if (movement) {
        let starting = 50
        movement.style.top = starting + "px"

        setInterval(() => {
            starting = starting + 1
            if (starting > 100) {
                starting = 50
            }
            movement.style.top = starting + "px"
        }, 100)
    }
})
