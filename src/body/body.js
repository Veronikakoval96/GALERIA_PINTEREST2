

import { peticionRandom} from "../components/funciones"





const galeria = document.createElement("div")
galeria.classList.add("galeria")
const main = document.querySelector("main")
main.append(galeria)

peticionRandom()



