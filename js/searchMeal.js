const input = document.querySelector('input')
const button = document.querySelector('button')
// button.addEventListener('click',() =>{
//   const value = input.value
//   console.log(value)
// })

const Urls = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
fetch(Urls)
.then(response => response.json())
.then(data => {
  console.log(data)
})