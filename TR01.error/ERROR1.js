try {
    throw new Error("Error provocado intencionadamente por el programa");

} catch (error) {
    console.error("ERROR 1:", error.message);
    alert("ERROR 1: Ha ocurrido un error interno en el programa.");
}
