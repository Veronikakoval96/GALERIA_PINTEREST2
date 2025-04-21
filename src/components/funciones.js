export const renderizado = (imagenes) => {
    const galeria = document.querySelector(".galeria")
    galeria.innerHTML = "";

    imagenes.forEach(image => {
        
        const tarjeta = document.createElement("div")
        tarjeta.classList.add("tarjeta")
        const hover = document.createElement("div")
        hover.classList.add("hover")

        const superposicion = document.createElement("div")
        superposicion.classList.add("superposicion")

        const dobleBoton = document.createElement("div")
        dobleBoton.classList.add("dobleBoton")

        const boton1 = document.createElement("button")
        boton1.classList.add("boton1")
        const img1 = document.createElement("img")
        img1.src = "./img/corazon.png"
        img1.alt = "Imagen Corazon"
        img1.classList.add("corazon")
        const texto1 = document.createElement("p")
        texto1.innerHTML = likes(image)
        


        const boton2 = document.createElement("button")
        boton2.classList.add("boton1")
        const img2 = document.createElement("img")
        img2.src = "./img/camara.png"
        img2.alt = "Imagen Camara"
        img2.classList.add("camara")
        const texto2 = document.createElement("p")
        texto2.innerHTML = `+ ${pictures(image)}`
        
        
        boton1.append(img1, texto1)
        boton2.append(img2, texto2)
        dobleBoton.append(boton1, boton2)

        const botonVisitar = document.createElement("button")
        botonVisitar.classList.add("boton")
        botonVisitar.innerHTML = "Visitar"
        superposicion.append(botonVisitar)
        tarjeta.append(superposicion)
    
        const img= document.createElement("img")
        img.classList.add("imagen")
        img.src= image.urls.small
        img.alt = image.alt_description

        hover.append(superposicion, dobleBoton, img)
        tarjeta.append(hover)
    
        const autor = document.createElement("img")
        autor.classList.add("autor")
        autor.src = image.user.profile_image.medium
        autor.alt = image.user.name
        tarjeta.append(autor)
    
        const nombre= document.createElement("p")
        nombre.innerHTML = image.user.name
        nombre.classList.add("nombre")
        tarjeta.append(nombre)
    
        const fecha = document.createElement("p")
        const nuevaFecha = getDate(new Date(image.created_at))
        fecha.innerHTML= nuevaFecha
        fecha.classList.add("fecha")
        
        tarjeta.append(fecha)
        galeria.append(tarjeta)

        
      });

}


export const getDate = (fecha) => {
fecha;
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let año = fecha.getFullYear();

if (dia < 10){
    dia = "0" + dia
}


if (mes < 10){
    mes = "0" + mes
}


const nuevaFecha = `${dia}/${mes}/${año}`
return nuevaFecha
}

export function limpiar(buscar) {
    buscar.value = ""
    buscar.focus()
}

export function peticion1(){
    const galeria = document.querySelector(".galeria")
    const buscar = document.querySelector("input")
    const texto = buscar.value.trim().toLowerCase()
    
    if (texto.length > 0){
        const accessKey = "UHLxiix971V3uUM-aj0SBU9Xuv8fXNh4pTinringOaQ";
        fetch(`https://api.unsplash.com/search/photos?query=${texto}&client_id=${accessKey}&per_page=30`)
        .then(response => response.json())
        .then(data => {
            const imagenes = data.results;
            if (imagenes.length === 0){
            sinContenido()
            }else {
            renderizado(imagenes)
            }
        })
        .catch(error => {
            console.error("Error", error)
            galeria.innerHTML = `<p>Hubo un problema al cargar las imagenes</p>`
        })
        
        limpiar(buscar);
    }
}

export function peticion2(e){
    const galeria = document.querySelector(".galeria")
    const buscar = document.querySelector("input")
    const texto = buscar.value.trim().toLowerCase()
    
     if (e.key === "Enter" && texto!==""){
    
    if (texto.length > 0){
        const accessKey = "UHLxiix971V3uUM-aj0SBU9Xuv8fXNh4pTinringOaQ";
        fetch(`https://api.unsplash.com/search/photos?query=${texto}&client_id=${accessKey}&per_page=30`)
        .then(response => response.json())
        .then(data => {
            const imagenes = data.results;
            if (imagenes.length === 0){
            sinContenido()
            }else {
            
            renderizado(imagenes)
            }
        })
        .catch(error => {
            console.error("Error", error)
            galeria.innerHTML = `<p>Hubo un problema al cargar las imagenes</p>`
        })
        
        limpiar(buscar);
    }}}


export function peticionRandom(){
    const galeria = document.querySelector(".galeria")
    const accessKey = "UHLxiix971V3uUM-aj0SBU9Xuv8fXNh4pTinringOaQ"
    fetch(`https://api.unsplash.com/photos/random?count=50&client_id=${accessKey}`)
    .then(response => response.json())
    .then(images => {
      console.log(images)
      renderizado(images)
      
    })
    .catch( error => {
      console.error("Error", error)
      galeria.innerHTML= `<p> Hubo un problema al cargar las imagenes</p>`
    }
    )
}

function sinContenido(){
    const galeria = document.querySelector(".galeria")
    const buscar = document.querySelector("input")
        const texto = "gato"
        const accessKey = "UHLxiix971V3uUM-aj0SBU9Xuv8fXNh4pTinringOaQ";
        alert(`No se han encontrado resultados con su busqueda. Intentelo de nuevo`) 


        fetch(`https://api.unsplash.com/search/photos?query=${texto}&client_id=${accessKey}&per_page=30`)
        .then(response => response.json())
        .then(data => {
            renderizado(data.results)
            
            
        })
        .catch(error => {
            console.error("Error", error)
            galeria.innerHTML = `<p>Hubo un problema al cargar las imagenes</p>`
        })
        
        limpiar(buscar);
    }

    function likes(image){
        const like = image.likes
        return like
    }

    function pictures (image){
        const picture = image.user.total_photos
        return picture
    }

    


