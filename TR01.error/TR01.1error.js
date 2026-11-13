} catch (error) {
    console.error("Error de código: " + error.message);

    document.getElementById("mensaje").textContent =
        "Ha ocurrido un error interno en el programa.";
}

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
