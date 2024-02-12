// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
foodSchedule.forEach((element) => {
  if (!element.isVegan) {
    element.name = fruits.pop()
    element.isVegan = true
  } else if (fruits.length <= 0) {
    console.log(`se me acabo la fruta`)
  }
})
console.log(foodSchedule)
