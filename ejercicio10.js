// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  // insert code
  return (
    param.reduce((acumulador, elemento) => acumulador + elemento, 0) /
    param.length
  )
}

console.log(average(numbers))
