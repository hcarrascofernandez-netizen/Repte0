// 1. ERROR PER CODI
try {
  console.log("--- INICI PROVA 1: Error de codi ---");
  console.log("Abans");
  
  // Llancem un error manualment
  throw new Error("Ostres! Hi ha hagut un error intern.");
  
  console.log("Això no es mostrarà mai");
} catch (error) {
  // Missatge per consola (per al desenvolupador)
  console.log("Error capturat a la consola: " + error.message);
  
  // Missatge per l'aplicació (per a l'usuari)
  alert("⚠️ Error de codi: S'ha produït un error intern al sistema.");
}

// 2. ERROR PER OPCIÓ INCORRECTA
try {
  console.log("\n--- INICI PROVA 2: Opció incorrecta ---");
  
  // Simulem una opció triada per l'usuari
  let opcioUsuari = "opcio_invalida"; 
  let opcionsValides = ["A", "B", "C"];

  console.log("L'usuari ha triat: " + opcioUsuari);

  // Comprovem si l'opció és vàlida
  if (!opcionsValides.includes(opcioUsuari)) {
    throw new Error("L'opció '" + opcioUsuari + "' no és vàlida.");
  }
  
  console.log("Opció correcta!");

} catch (error) {
  // Missatge per consola (per al desenvolupador)
  console.log("Error capturat a la consola: " + error.message);
  
  // Missatge per l'aplicació (per a l'usuari)
  alert("⚠️ Error d'opció: L'opció seleccionada no és correcta. Tria una vàlida.");
}
