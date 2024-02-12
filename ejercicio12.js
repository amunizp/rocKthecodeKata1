// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  // insert code

  nonDuplicates = []
  param.forEach((element) => {
    if (nonDuplicates.indexOf(element) < 0) {
      nonDuplicates.push(element)
    }
  })
  return nonDuplicates
}
console.log(removeDuplicates(duplicates))
