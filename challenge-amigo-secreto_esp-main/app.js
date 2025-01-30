let listaNombres = []
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value
    let lista = document.getElementById("listaAmigos")
    let error = document.querySelector("h3")

    if (amigo == "") {
        
        error.innerHTML = "Por favor ingrese algun valor"

    }else if(listaNombres.includes(amigo)){

        error.innerHTML = "Este amigo ya se encuentra en la lista"

    }else{
        listaNombres.push(amigo)
        lista.innerHTML  += `<li> <b>${amigo}<b> </li>`
        document.getElementById("amigo").value = "";
        console.log(listaNombres)
        error.innerHTML = "";
    }
   

}