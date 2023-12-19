const dishName = document.querySelector('.dish-name')
const mealImage = document.querySelector('.random-recipe-img')
const mealOrigin = document.querySelector('.step')
const mealCategorys = document.querySelector('.category')

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
  const ingridient = data.meals[0].strIngredient1
  console.log(ingridient)
  dishName.textContent = mealName
  mealImage.src = mealImages
  mealOrigin.textContent = `Country : ${mealOrigiN} `
  mealCategorys.textContent = `Category : ${mealCategory}`
})