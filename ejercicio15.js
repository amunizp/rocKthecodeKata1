//Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]
productosFiltrados = products.filter((element) => element.includes('Camiseta'))
console.log(productosFiltrados)
buscando = 'Camiseta'
products.forEach((element) => {
  if (element.includes(buscando)) {
    console.log(`${element} es una camiseta.`)
  }
})
