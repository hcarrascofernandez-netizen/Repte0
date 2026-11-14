// Esperam que tot el contingut de l'HTML s'hagi carregat
document.addEventListener('DOMContentLoaded', () => {
  const botoErrorCodi = document.getElementById('botoErrorCodi');
  const botoErrorOpcio = document.getElementById('botoErrorOpcio');
  const missatge = document.getElementById('missatge');

  // Funció auxiliar per mostrar missatge a l'aplicació
  function mostrarMissatge(text, esError = true) {
    missatge.textContent = text;
    missatge.className = esError ? 'error' : 'ok';
  }

  // =========================================================
  // CAS 1: Error llançat directament pel codi (throw new Error)
  // =========================================================
  botoErrorCodi.addEventListener('click', () => {
    try {
      console.log('▶ Executant cas 1: error per codi...');

      // Simulació: una funció que ha de rebre un número positiu
      // però rep un valor incorrecte directament des del codi
      const edat = -5;

      if (edat < 0) {
        throw new Error("L'edat no pot ser negativa (valor rebut: " + edat + ")");
      }

      // Aquesta línia no s'executarà mai
      console.log('Això no es veurà mai');
      mostrarMissatge('Tot correcte!', false);

    } catch (error) {
      // Missatge per consola
      console.error('❌ Error capturat (codi):', error.message);

      // Missatge per l'aplicació (usuari)
      mostrarMissatge('❌ Error intern: ' + error.message, true);
    }
  });

  // =========================================================
  // CAS 2: Error per opció incorrecta (l'usuari tria malament)
  // =========================================================
  botoErrorOpcio.addEventListener('click', () => {
    // Simulem que l'usuari ha escrit una opció no vàlida
    // (podries canviar-ho per un prompt() si vols)
    const opcioUsuari = 'restar';

    try {
      console.log('▶ Executant cas 2: opció incorrecta ("' + opcioUsuari + '")...');

      const operacionsValides = ['sumar', 'multiplicar'];

      if (!operacionsValides.includes(opcioUsuari)) {
        throw new Error(
          "Opció '" + opcioUsuari + "' no vàlida. " +
          "Les opcions permeses són: " + operacionsValides.join(', ')
        );
      }

      console.log('Operació acceptada:', opcioUsuari);
      mostrarMissatge('✅ Operació correcta: ' + opcioUsuari, false);

    } catch (error) {
      // Missatge per consola
      console.error('❌ Error capturat (opció):', error.message);

      // Missatge per l'aplicació (usuari)
      mostrarMissatge(
        '⚠️ Opció incorrecta: ' + error.message + '. Torna-ho a provar.',
        true
      );
    }
  });

  console.log('✅ script.js carregat correctament.');
});
