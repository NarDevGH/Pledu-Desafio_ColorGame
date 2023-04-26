
const mensaje = document.querySelector("#message")

let easyButon = document.querySelector("#easyButton")
let hardButon = document.querySelector("#hardButton")

let colorDisplay = document.querySelector("#colorDisplay")
let cuadrados = document.querySelectorAll(".square")

let cantidadColores = 6

let colors = randomColors(cantidadColores)
let pickedColor = pickColor()

let resetButton = document.querySelector("button#reset") 
resetButton.addEventListener("click", reset)

easyButon.addEventListener("click", e =>{
    easyButon.classList.add("selected")
    hardButon.classList.remove("selected")

    cantidadColores = 3
    reset()
})

hardButon.addEventListener("click",_=>{
    hardButon.classList.add("selected")
    easyButon.classList.remove("selected")

    cantidadColores = 6
    reset()
})

reset()

function changeColors(color){
    for(let i=0;i<cuadrados.length;i++){
        cuadrados[i].style = `background-color: ${color}` 
    }    
}

function randomNum(){
    let num = Math.random()*10
    while(num > cantidadColores){
        num = Math.random()*10
    }
    return num
}

function pickColor(){
    return colors[ Math.floor(randomNum()) ]
}

function randomColors(cantidad){
    let colores = []
    for(let i=0;i<cantidad;i++){
        colores.push(`rgb(${Math.floor(Math.random()*100)}, ${Math.floor(Math.random()*100)}, ${Math.floor(Math.random()*100)})`)
    }
    return colores
}

function onCuadradoClick(e){
    let button = e.srcElement
    if(button.style.backgroundColor == pickedColor){
        mensaje.textContent = "!Correcto¡"
        colorDisplay.style.color =  pickedColor
        console.info(mensaje.parentElement.style)
        resetButton.textContent = "Play Again?"
        changeColors(pickedColor)
    }
    else{
        button.style = `background-color: darkgreen` 
        mensaje.textContent = "Intentalo nuevamente"
    }
}

function reset(){
    colors = randomColors(cantidadColores)
    pickedColor = pickColor()

    colorDisplay.textContent = pickedColor
    colorDisplay.style = "color: white"
    mensaje.textContent = ""
    resetButton.textContent = "Nuevos Colores"

    for(let i=0;i<cuadrados.length;i++){
        if(i < cantidadColores){
            cuadrados[i].style = `background-color: ${colors[i]}` 
            cuadrados[i].addEventListener("click", onCuadradoClick)
        }
        else{
            cuadrados[i].style = "background-color: darkgreen" 
        }
    }
}