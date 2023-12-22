const sections = document.querySelectorAll('section')
const p = document.querySelectorAll('p')
const buttons = document.querySelector('#dot')
const span = document.querySelectorAll('span')
const line = document.querySelector('.line')
const searchbar = document.querySelector('.searchbar')
const inputs = document.querySelectorAll('input')
const search = document.querySelector('.search')
const buttonss = document.querySelectorAll('button')
const img = document.querySelectorAll('img')
const div = document.querySelectorAll('div')
const tryit = document.querySelectorAll('.tryit')
const searchbutton = document.querySelectorAll('.search')
const randomRecipeImage = document.querySelector('.random-recipe-img')
const chefChoice = document.querySelector('.chef-choice')
const vector = document.querySelector('#vector')
buttons.addEventListener('click',() =>{
  sections.forEach(section => {
    section.style.background = '#000'
  })
  p.forEach(button => {
    button.style.color = '#FFF'
  })
  span.forEach(span =>{
    span.style.color = '#FFF'
  })
  line.style.background = '#FFF'
  randomRecipeImage.style.border = '1px solid white'
  chefChoice.style.background = '#FFF'
  chefChoice.style.color = '#000'
  searchbar.style.borderTop = '1px solid white'
  vector.style.stroke = '#FFF'
  inputs.forEach(input => {
    input.style.background = '#FFF'
    input.style.color = '#000'
  })
  tryit.forEach(tryit => {
    tryit.style.background = '#FFF'
    tryit.style.color = '#000'
  })
  search.style.border = '1px solid #000'
  buttonss.forEach(button => {
    button.style.background = '#FFF'
    button.style.color = '#000'
  })
  searchbutton.forEach(btn => {
    btn.style.background = '#FFF'
    btn.style.color = '#000'
  })
//  div.forEach(div => {
//   div.style.border = '2px solid #FFF'
//  })
})
