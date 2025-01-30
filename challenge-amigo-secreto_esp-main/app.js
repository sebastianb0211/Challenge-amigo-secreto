let listaNombres = []
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value
    let lista = document.getElementById("listaAmigos")
    listaNombres.push(amigo)
     lista.innerHTML  += `<li> <b>${amigo}<b> </li>`
     document.getElementById("amigo").value = "";
     console.log(listaNombres)

}