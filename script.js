// Función que cuenta los argumentos recibidos
const argumentsLength = function(...args) {
    return args.length;
  };
  
  // Función que se ejecuta al hacer clic
  function contar() {
    const input = document.getElementById("inputs").value;
    
    // Convertimos los valores separados por comas a un array
    const argumentos = input.split(",").map(arg => arg.trim());
    
    // Contamos los argumentos usando nuestra función
    const cantidad = argumentsLength(...argumentos);
  
    // Mostramos el resultado
    document.getElementById("resultado").textContent =
      `Se recibieron ${cantidad} argumento(s).`;
  }