const  agregar = document.getElementById("agregar");

agregar.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dato;
    if ( nombre == "" || apellido == "") {
        alert("Rellene los dos campos");
    } else {
        if (document.getElementById("borrarElemento")) {
            document.getElementById("borrarElemento").remove();
        }
        
        dato = document.createElement("LI");
        dato.textContent = `${nombre} ${apellido}`;
        //agregaremos los nombres 
        const lista = document.getElementById("elementos");
        lista.appendChild(dato);
        console.log(nombre, apellido);
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        console.log(nombre,  apellido);
    }

})