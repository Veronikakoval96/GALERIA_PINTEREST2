
import { peticion1,peticion2, peticionRandom } from "../components/funciones"



const header= document.querySelector("header")
header.classList.add("header")

const logoButton = document.createElement("button")
logoButton.classList.add("logoButton")
const logo = document.createElement("img")
logo.classList.add("logo")
logo.src= "./img/pinterest_logo.png"
logo.alt= "Logo Pinterest";
logoButton.append(logo)
header.append(logoButton)

const botonesInicio = document.createElement("div")
botonesInicio.classList.add("botones");
header.append(botonesInicio)

let botones = [ "Inicio", "Explorar", "Crear"]
botones.forEach(element => {
    const boton = document.createElement("button")
    boton.classList.add("boton")
    boton.innerText = element
    botonesInicio.append(boton)
    
});


const nav= document.createElement("div")
nav.classList.add("nav")
header.append(nav)

const buscador = document.createElement("button")
buscador.classList.add("buscador")
nav.append(buscador)
const imgBuscador = document.createElement("img")
imgBuscador.src="./img/buscador.png"
imgBuscador.alt="Buscador Pinterest"
buscador.append(imgBuscador)
const buscar = document.createElement("input")
buscar.placeholder="Buscar"
nav.append(buscar)



const opciones = document.createElement("div")
opciones.classList.add("opciones")
header.append(opciones)

const timbre = document.createElement("a")
const imgTimbre = document.createElement("img")
imgTimbre.classList.add("elemento", "timbre")
timbre.href ="#"
imgTimbre.src = "./img/bell.png"
timbre.append(imgTimbre)
opciones.append(timbre)


const mensaje = document.createElement("a")
const imgMensaje = document.createElement("img")
imgMensaje.classList.add("elemento", "mensaje")
mensaje.href ="#"
imgMensaje.src = "./img/mensaje.png"
mensaje.append(imgMensaje)
opciones.append(mensaje)

const de = document.createElement("a")
const imgDe = document.createElement("img")
imgDe.classList.add("elemento", "de")
de.href ="#"
imgDe.src = "./img/d.png"
de.append(imgDe)
opciones.append(de)

buscador.addEventListener("click", peticion1)
buscar.addEventListener("keyup", peticion2)
logoButton.addEventListener("click", peticionRandom)

    


