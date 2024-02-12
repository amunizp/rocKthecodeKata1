// Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:
const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]
// toys.forEach((element) => {
//   //!no entiendo porque esto no visita el ultimo
//   //! porque al quitar uno el forEach por detrás esta haciendo algo con length y la longitud cambia?
//   if (element.name.includes('gato') || element.name.includes('Gato')) {
//     toys.splice(toys.indexOf(element), 1)
//   }
// })
// console.log(toys)
for (let i = 0; i < toys.length; i++) {
  if (toys[i].name.includes('gato') || toys[i].name.includes('Gato')) {
    toys.splice(toys.indexOf(toys[i]), 1)
    i--
  }
}

console.log(toys)
//WTF???????????????????????????????????
const jugetes = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]
jugetesFiltrados = jugetes.filter((element) => !element.name.includes('gato'))
console.log(jugetesFiltrados)
//Pero se me pidio con for!
