// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
const movies = [
  { name: 'El corto', durationInMinutes: 99 },
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
peliculaPeque = []
peliculaMed = []
peliculaGrande = []
movies.forEach((element) => {
  if (element.durationInMinutes < 100) {
    peliculaPeque.push(element)
  } else if (element.durationInMinutes < 200) {
    //no me hace falta poner entre que valores pq y lo pase!
    peliculaMed.push(element)
  } else if (element.durationInMinutes >= 200) {
    peliculaGrande.push(element)
  }
})
console.log(peliculaPeque)
console.log(peliculaMed)
console.log(peliculaGrande)
