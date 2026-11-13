function comprobarOpcion() {
    try {
        let opcion = document.getElementById("opcion").value;

        if (opcion !== "sumar" && opcion !== "restar") {
            throw new Error("Opcion incorrecta");
        }

        alert("Operacion seleccionada correctamente.");

        document.getElementById("mensaje").textContent =
            "Operacion correcta.";

    } catch (error) {
        console.error("Error 2: " + error.message);

        alert("ERROR 2: Has seleccionado una opcion incorrecta.");

        document.getElementById("mensaje").textContent =
            "Selecciona una operacion valida.";
    }
}
