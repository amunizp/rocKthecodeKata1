// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  // insert code
  //usa un filter y luego y legnth the fliter generado.
  param.forEach((element) => {
    console.log(
      `La palabra ${element} se repite ${
        param.filter((item) => item == element).length
      } veces.`
    )
  })
}
repeatCounter(counterWords)
