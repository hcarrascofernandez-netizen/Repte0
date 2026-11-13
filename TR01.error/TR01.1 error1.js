function errorCodigo() {

    try {

        throw new Error("Error provocado mediante código");

    } catch (error) {

        console.error("Error de código: " + error.message);

        document.getElementById("mensaje").textContent =
            "Ha ocurrido un error interno en el programa.";

    }

}
