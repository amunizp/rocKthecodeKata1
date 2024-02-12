// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  // insert code
  let longitud = []
  param.forEach((element) => {
    longitud.push(element.length)
  })
  console.log(Math.max(...longitud))
  return param.find((avenger) => avenger.length == Math.max(...longitud))
}

console.log(findLongestWord(avengers))
