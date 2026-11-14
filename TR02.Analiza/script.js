document.addEventListener('DOMContentLoaded', () => {
  const missatge = document.getElementById('missatge');
  const boto = document.getElementById('boto');

  // Regex del material (nombres amb signe i decimals, espais opcionals)
  const patro = /^\s*(-?\d+(?:\.\d+)?)\s*([+\-*/%])\s*(-?\d+(?:\.\d+)?)\s*$/;

  // Funció auxiliar: analitza PER QUÈ ha fallat la regex
  function diagnosticarError(entrada) {
    const operadors = entrada.match(/[+\-*/%]/g) || [];
    const teLletres = /[a-zA-Z]/.test(entrada);
    const comencaAmbPunt = /^\s*\./.test(entrada);
    const teDiversosOperadors = operadors.length > 1;
    const teUnOperador = operadors.length === 1;

    if (teLletres) {
      return "Només es permeten nombres i operadors (+, -, *, /, %)";
    }
    if (comencaAmbPunt) {
      return "Els decimals han de començar amb un dígit (usa 0.5, no .5)";
    }
    if (teDiversosOperadors) {
      return "Només es permet una operació (ex: 1 + 2, no 1 + 2 + 3)";
    }
    if (!teUnOperador) {
      return "Falta un operador. Usa: nombre operador nombre";
    }
    return "Format incorrecte. Usa: nombre operador nombre (ex: 3.5 * 2)";
  }

  function calcular() {
    try {
      // 1. Demanar entrada
      const entrada = prompt("Escriu una operació, per exemple 3.5 * 2");

      // 2. Cancel·lar
      if (entrada === null) {
        throw new Error("Has cancel·lat l'operació");
      }

      // 3. Buit
      if (entrada.trim() === "") {
        throw new SyntaxError("No has escrit res");
      }

      // 4. Validar amb regex
      const parts = entrada.match(patro);
      if (parts === null) {
        throw new SyntaxError(diagnosticarError(entrada));
      }

      // 5. Extreure parts
      const nombre1 = parseFloat(parts[1]);
      const operador = parts[2];
      const nombre2 = parseFloat(parts[3]);

      // 6. Errors semàntics (divisió/mòdul per zero)
      if ((operador === '/' || operador === '%') && nombre2 === 0) {
        if (operador === '/') {
          throw new RangeError("No es pot dividir entre zero");
        } else {
          throw new RangeError("No es pot calcular el mòdul entre zero");
        }
      }

      // 7. Calcular
      let resultat;
      switch (operador) {
        case '+': resultat = nombre1 + nombre2; break;
        case '-': resultat = nombre1 - nombre2; break;
        case '*': resultat = nombre1 * nombre2; break;
        case '/': resultat = nombre1 / nombre2; break;
        case '%': resultat = nombre1 % nombre2; break;
      }

      // 8. Mostrar
      const text = `${nombre1} ${operador} ${nombre2} = ${resultat}`;
      console.log(text);
      missatge.textContent = text;
      missatge.style.color = 'green';

    } catch (error) {
      console.log("Error: " + error.message);
      missatge.textContent = "Error: " + error.message;
      missatge.style.color = 'red';
    }
  }

  boto.addEventListener('click', calcular);
});
