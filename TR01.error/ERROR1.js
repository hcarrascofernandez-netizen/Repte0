function errorCodigo() {
    try {
        throw new Error("Error provocado mediante codigo");

    } catch (error) {
        console.error("Error 1: " + error.message);

        alert("ERROR 1: Ha ocurrido un error en el codigo.");

        document.getElementById("mensaje").textContent =
            "Se ha producido un error en el codigo.";
    }
}
