let listaNombres = []
let lista = document.getElementById("listaAmigos")
let errorAmigo = document.getElementById("errorMensaje")
let nuevoJuego = document.getElementById("nuevoJuego")
let error = document.querySelector("h3")
let resultado = document.getElementById("resultado")

nuevoJuego.setAttribute("disabled",true)
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value
    

    if (amigo == "") {
        
        error.innerHTML = "Por favor ingrese algun valor"

    }else if(listaNombres.includes(amigo)){

        error.innerHTML = "Este amigo ya se encuentra en la lista"
        limpiar("amigo")

    }else{
        listaNombres.push(amigo)
        lista.innerHTML  += `<li> <b>${amigo}<b> </li>`
        limpiar("amigo")
        console.log(listaNombres)
        error.innerHTML = "";
        errorAmigo.innerHTML = ""
        nuevoJuego.removeAttribute("disabled")
    }
   

}
function sortearAmigo(){
    let numeroSecreto = Math.floor(Math.random()*listaNombres.length)
    if (listaNombres.length ===0){
        
        errorAmigo.innerHTML = "No hay amigos en la lista"
        resultado.innerHTML =""
    }else{
        resultado.innerHTML =`El Amigo secreto es : ${listaNombres[numeroSecreto]} `
    lista.innerHTML = "";
    

    }
    
    
}
function nuevoIntento(){
    listaNombres = []
    lista.innerHTML = ""
    limpiar("amigo")
    errorAmigo.innerHTML = ""
    nuevoJuego.setAttribute("disabled",true)
    error.innerHTML=""
    resultado.innerHTML = ""
    
}
function limpiar(texto){
    document.getElementById(texto).value = "";
}