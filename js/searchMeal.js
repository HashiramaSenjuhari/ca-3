const input = document.querySelector('input');
const button = document.querySelector('#search');
const searchBanner = document.querySelector('.abstract');
const searchsome = document.querySelector('#searchsome');
const recipeName = document.querySelector('.recipe-name');
const recentRecipe = document.querySelector('.recent-recipe')
// const ingridientss = document.querySelector('.ingridients');

function createRecentDishElement(mealThumb, mealCategory, mealName, mealOrigin, index, data, mealInstruction, ingredientsString) {
  const recentDish = document.createElement('div');
  recentDish.classList.add('recent-dish');

  recentDish.innerHTML = `
    <div class="recent-dish-img" data-index="${index}">
      <img src="${mealThumb}" alt="">
      <p>${mealName}</p>
      <p>${mealOrigin}</p>
      <button class="tryit">Try it !</button>
    </div>
  `;

  // Add a click event listener to each card
  recentDish.addEventListener('click', () => {
    // Call the navigateToDetailsPage function with the corresponding meal details
    navigateToDetailsPage(data.meals[index], mealInstruction, ingredientsString);
    saveRecentCard({
      mealThumb,
      mealName,
      mealOrigin
    });
  });

  return recentDish;
}

function navigateToDetailsPage(meal, mealInstruction, ingredientsString) {
  // Build the URL with meal details as parameters
  const mealDetailsUrl = `details.html?mealName=${encodeURIComponent(meal.strMeal)}&mealOrigin=${encodeURIComponent(meal.strArea)}&mealInstruction=${encodeURIComponent(mealInstruction)}&mealCategory=${encodeURIComponent(meal.strCategory)}&mealThumb=${encodeURIComponent(meal.strMealThumb)}&ingredients=${encodeURIComponent(ingredientsString)}&sound=${encodeURIComponent(speech.text)}`

  // Navigate to the details.html page
  console.log('Meal Details URL:', mealDetailsUrl);
  window.location.href = mealDetailsUrl;
}

button.addEventListener('click', () => {
  const value = input.value;

  if (!value) {
    searchBanner.style.display = '';
    searchsome.style.display = '';
    return;
  }

  const Urls = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(value)}`;

  fetch(Urls)
    .then(response => response.json())
    .then(data => {
      const recentCardContainer = document.querySelector('.recent-card');
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < data.meals.length; i++) {
        const meal = data.meals[i];
        const mealThumb = meal.strMealThumb;
        const mealCategory = meal.strCategory;
        const mealName = data.meals[i].strMeal;
        const mealOrigin = data.meals[i].strArea;
        const mealInstruction = data.meals[i].strInstructions;

        const Ingrients = {};
        Ingrients[data.meals[i].strIngredient1] = data.meals[i].strMeasure1,
      Ingrients[data.meals[i].strIngredient2]= data.meals[i].strMeasure2,
      Ingrients[data.meals[i].strIngredient3]= data.meals[i].strMeasure3,
      Ingrients[data.meals[i].strIngredient4]= data.meals[i].strMeasure4,
      Ingrients[data.meals[i].strIngredient5]= data.meals[i].strMeasure5,
      Ingrients[data.meals[i].strIngredient6]= data.meals[i].strMeasure6,
      Ingrients[data.meals[i].strIngredient7]= data.meals[i].strMeasure7,
      Ingrients[data.meals[i].strIngredient8]= data.meals[i].strMeasure8,
      Ingrients[data.meals[i].strIngredient9]= data.meals[i].strMeasure9,
      Ingrients[data.meals[i].strIngredient10] = data.meals[i].strMeasure10,
      Ingrients[data.meals[i].strIngredient11] = data.meals[i].strMeasure11,
      Ingrients[data.meals[i].strIngredient12] = data.meals[i].strMeasure12,
      Ingrients[data.meals[i].strIngredient13] = data.meals[i].strMeasure13,
      Ingrients[data.meals[i].strIngredient14] = data.meals[i].strMeasure14,
      Ingrients[data.meals[i].strIngredient15] = data.meals[i].strMeasure15,
      Ingrients[data.meals[i].strIngredient16] = data.meals[i].strMeasure16,
      Ingrients[data.meals[i].strIngredient17] = data.meals[i].strMeasure17,
      Ingrients[data.meals[i].strIngredient18] = data.meals[0].strMeasure18

        const ingredientsString = Object.entries(Ingrients)
          .map(([ingredient, measure]) => `${ingredient}: ${measure}`)
          .join(', ');

        fragment.appendChild(createRecentDishElement(mealThumb, mealCategory, mealName, mealOrigin, i, data, mealInstruction, ingredientsString));
      }
      // const recipeYouTube = data.meals[i].strYoutube
      // const recipeSite = data.meals[i].strSource
      // console.log(recipeYouTube)
      // console.log(recipeSite)
      recentCardContainer.innerHTML = '';
      recentCardContainer.appendChild(fragment);
      recipeName.innerHTML = input.value.trim();

      searchBanner.style.display = 'none';
      searchsome.style.display = 'none';

      input.value = '';
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
})

function displayDetailsOnDetailsPage() {
  // Extract meal details from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const mealName = urlParams.get('mealName');
  const mealOrigin = urlParams.get('mealOrigin');
  const mealThumb = urlParams.get('mealThumb');
  const mealCategory = urlParams.get('mealCategory');
  const mealInstruction = urlParams.get('mealInstruction');
  const ingredients = urlParams.get('ingredients');
  const sound = urlParams.get('sound')

  // Display details in the HTML
  // The following lines are commented out, so they won't display the details
  document.getElementById('detailsMealName').textContent = mealName;
  document.getElementById('detailsMealOrigin').textContent = mealOrigin;
  // Use the ingredients variable where you want to display the ingredients
  // document.getElementById('detailsIngredients').textContent = ingredients;
  
}

// Call the displayDetailsOnDetailsPage function when the details.html page is loaded
if (window.location.pathname.includes('details.html')) {
  window.addEventListener('load', displayDetailsOnDetailsPage);
}

document.addEventListener('DOMContentLoaded', () => {
    displayPastCards();
  })

  function saveRecentCard(cardInfo) {
      let recentCards = JSON.parse(localStorage.getItem('recentCards')) || [];
      recentCards.push(cardInfo);
      localStorage.setItem('recentCards', JSON.stringify(recentCards));
    }
  
    function displayPastCards() {
        const recentCardContainer = document.querySelector('.recent-recipe');
        const fragment = document.createDocumentFragment();
      
        const recentCards = JSON.parse(localStorage.getItem('recentCards')) || [];
      
        for (const cardInfo of recentCards) {
          fragment.appendChild(createRecentDishElement(cardInfo.mealThumb, cardInfo.mealOrigin, cardInfo.mealName));
        }
        recentCardContainer.innerHTML = '';
          recentCardContainer.appendChild(fragment);
        }