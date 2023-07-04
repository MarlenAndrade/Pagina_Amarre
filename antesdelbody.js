window.onclick = function(){
    //Me crea una serie de elements por cada tag encontrado
    let encabezados = document.createElement("h2");
    const text = document.createTextNode("¡Sal conmigo!");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}