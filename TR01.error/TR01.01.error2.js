function comprobarOpcion() {

    try {

        let opcion = document.getElementById("opcion").value;

        if (opcion !== "sumar" && opcion !== "restar") {

            throw new Error("Has seleccionado una opción incorrecta");

        }

        document.getElementById("mensaje").textContent =
            "Operación seleccionada correctamente.";

    } catch (error) {

        console.error("Error de opción: " + error.message);

        document.getElementById("mensaje").textContent =
            "Error: selecciona una operación válida.";

    }

}
