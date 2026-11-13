// Provem d'executar codi que fallarà
try {
    // 1. Error provocat pel codi
    let resultat = null;
    console.log(resultat.nom); // Això llançarà un TypeError perquè resultat és null

} catch (errorCodi) {
    // Missatge per consola
    console.error("Error detectat pel codi: " + errorCodi.message);
    // Missatge per l'aplicació (usuari)
    alert("Ups! Hi ha hagut un error intern al programa. Torna-ho a provar.");
}

// 2. Error provocat per una opció incorrecta
try {
    let opcio = "opcio_invalida";
    if (opcio !== "A" && opcio !== "B") {
        // Llancem l'error nosaltres mateixos
        throw new Error("L'opció '" + opcio + "' no és vàlida.");
    }

} catch (errorOpcio) {
    // Missatge per consola
    console.error("Error d'opció: " + errorOpcio.message);
    // Missatge per l'aplicació (usuari)
    alert("Has seleccionat una opció incorrecta.");
}
