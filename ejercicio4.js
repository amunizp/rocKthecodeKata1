// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers.find((elemento) => (elemento = 'HULK')))
// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.shift(), avengers.unshift('IRONMAN'))
// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length)
// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
let rickAndMortyCharactersExtended = rickAndMortyCharacters.concat([
  'Morty',
  'Summer'
])
console.log(rickAndMortyCharactersExtended)

console.log(
  rickAndMortyCharactersExtended[rickAndMortyCharactersExtended.length - 1]
)
// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacterACorregir = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacterACorregir.pop()
console.log(
  rickAndMortyCharacterACorregir[0],
  rickAndMortyCharacterACorregir[rickAndMortyCharacterACorregir.length - 1]
)
// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharactersACorregir2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharactersACorregir2.splice(1, 1)
console.log(rickAndMortyCharactersACorregir2)
