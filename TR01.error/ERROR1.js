function comprobarOpcion(opcion) {
    try {
        if (opcion !== "1" && opcion !== "2") {
            throw new Error("El usuario ha seleccionado una opción inexistente");
        }

        console.log("Opción correcta: " + opcion);

    } catch (error) {
        console.error("ERROR 2:", error.message);
        alert("ERROR 2: La opción seleccionada no es válida. Elige 1 o 2.");
    }
}

let opcion = prompt("Selecciona una opción:\n1. Continuar\n2. Salir");

comprobarOpcion(opcion);
