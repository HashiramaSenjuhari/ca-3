const dishName = document.querySelector('.dish-name')
const mealOrigin = document.querySelector('.step')
const mealCategorys = document.querySelector('.category')
const mealImage1 = document.querySelector('.random-recipe-img') 
const mealImage2 =  document.querySelector('.Instruction-img')
const ingridients = document.querySelector('.ingridient')
const mealNamess = document.querySelector('.dish-name')
const mealInstructions  = document.querySelector('.instruction')
const sound = document.querySelector('.sound')
let speech = new SpeechSynthesisUtterance()

const Url = 'https://www.themealdb.com/api/json/v1/1/random.php'
fetch(Url)
.then(response => response.json())
.then(data => {
  console.log(data)
  const mealName = data.meals[0].strMeal
  const meal = data.meals[0].strInstructions
  const mealImages = data.meals[0].strMealThumb
  const mealOrigiN = data.meals[0].strArea
  const mealCategory = data.meals[0].strCategory
  const instruction = data.meals[0].strInstructions
  for (let i = 0; i < data.meals.length; i++){
    console.log(data.meals[i].ingridients)
  }
  const Ingrients = {}
  Ingrients[data.meals[0].strIngredient1] = data.meals[0].strMeasure1,
  Ingrients[data.meals[0].strIngredient2]= data.meals[0].strMeasure2,
  Ingrients[data.meals[0].strIngredient3]= data.meals[0].strMeasure3,
  Ingrients[data.meals[0].strIngredient4]= data.meals[0].strMeasure4,
  Ingrients[data.meals[0].strIngredient5]= data.meals[0].strMeasure5,
  Ingrients[data.meals[0].strIngredient6]= data.meals[0].strMeasure6,
  Ingrients[data.meals[0].strIngredient7]= data.meals[0].strMeasure7,
  Ingrients[data.meals[0].strIngredient8]= data.meals[0].strMeasure8,
  Ingrients[data.meals[0].strIngredient9]= data.meals[0].strMeasure9,
  Ingrients[data.meals[0].strIngredient10] = data.meals[0].strMeasure10,
  Ingrients[data.meals[0].strIngredient11] = data.meals[0].strMeasure11,
  Ingrients[data.meals[0].strIngredient12] = data.meals[0].strMeasure12,
  Ingrients[data.meals[0].strIngredient13] = data.meals[0].strMeasure13,
  Ingrients[data.meals[0].strIngredient14] = data.meals[0].strMeasure14,
  Ingrients[data.meals[0].strIngredient15] = data.meals[0].strMeasure15,
  Ingrients[data.meals[0].strIngredient16] = data.meals[0].strMeasure16,
  Ingrients[data.meals[0].strIngredient17] = data.meals[0].strMeasure17,
  Ingrients[data.meals[0].strIngredient18] = data.meals[0].strMeasure18

  for (const key in Ingrients) {
    if (Ingrients[key] && Ingrients[key].trim() !== "") {
      ingridients.innerHTML += `${key}: ${Ingrients[key]}<br>`
    }
}
  mealImage1.src = mealImages
  mealInstructions.textContent = instruction
  // mealImage2.src = mealImages
  dishName.textContent = mealName
  // mealNamess.textContent = mealName
  
  let soundClickHandler = () => {
    // console.log('Instruction:', instruction)
    speech.text = instruction
    window.speechSynthesis.speak(speech)
  }

  sound.addEventListener('click', soundClickHandler)

  mealOrigin.textContent = `Country : ${mealOrigiN} `
  mealCategorys.textContent = `Category : ${mealCategory}`

})