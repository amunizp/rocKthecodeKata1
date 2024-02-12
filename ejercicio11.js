// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: pista (typeof)
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  // insert code
  param.forEach((element, index) => {
    if (typeof element == 'string') {
      param[index] = element.length
    }
  })
  return param.reduce((acumulador, elemento) => acumulador + elemento, 0)
}
console.log(averageWord(mixedElements))
