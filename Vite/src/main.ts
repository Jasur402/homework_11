import './style.css'
const scoreBascet = document.querySelector(".basketscore") as HTMLParagraphElement
const button = document.querySelectorAll(".productButton") as NodeListOf<HTMLButtonElement>

let score = 0

button.forEach((butt) => {
butt.addEventListener('click', function () {
  score ++
  let scoresum = score.toString()
  window.localStorage.setItem('scoreBasket',scoresum)
  const basket = window.localStorage.getItem('scoreBasket')
  scoreBascet.textContent = basket
})
})

