import './style.css'
const scoreBascet = document.querySelector(".basketscore") as HTMLParagraphElement
const sumBasket = document.querySelector(".sumBasket") as HTMLParagraphElement
const buttonTablet20 = document.querySelector("#tablet-20")  as HTMLButtonElement
const buttonTablet10 = document.querySelector("#tablet-10") as HTMLButtonElement
const buttonTablet12 = document.querySelector("#tablet-12") as HTMLButtonElement
const productInBasket = document.querySelector(".productInBasket") as HTMLDivElement
const productPrice = document.querySelector(".productPrice") as HTMLParagraphElement
const tabletName20 = document.querySelector(".tablet-20")as HTMLHeadingElement
const tabletName10 = document.querySelector(".tablet-10")as HTMLHeadingElement
const tabletName12 = document.querySelector(".tablet-12")as HTMLHeadingElement
const remove = document.querySelector(".remove") as HTMLButtonElement

const price = Number(productPrice.innerText.replace("€",""))
let score = 0
let sumArr:number[] = []
let sum = 0

buttonTablet20.addEventListener("click", function () {
    score ++
    sumArr.push(price)
    sum = sumArr.reduce((acc,num) => acc + num)
    const toStringSum = sum.toString()
  let scoresum = score.toString()
  sumBasket.innerText = toStringSum
  window.localStorage.setItem('scoreBasket',scoresum)
  let basket = window.localStorage.getItem('scoreBasket')
  scoreBascet.textContent = basket
  const p = document.createElement("p")
  p.innerText = `${tabletName20.innerText} : ${productPrice.innerText}`
  productInBasket.appendChild(p)
  
  remove.addEventListener("click", function () {
  sumArr = []
  score = 0
  window.localStorage.removeItem('scoreBasket')
  productInBasket.innerHTML = "",
  sum = 0
  sumBasket.innerText = "0"
  basket = "0"
  scoreBascet.innerText = "0"
})
})

buttonTablet10.addEventListener("click", function () {
    score ++
    sumArr.push(price)
    sum = sumArr.reduce((acc,num) => acc + num)
    const toStringSum = sum.toString()
  let scoresum = score.toString()
  sumBasket.innerText = toStringSum
  window.localStorage.setItem('scoreBasket',scoresum)
  let basket = window.localStorage.getItem('scoreBasket')
  scoreBascet.textContent = basket
  const p = document.createElement("p")
  p.innerText = `${tabletName10.innerText} : ${productPrice.innerText}`
  productInBasket.appendChild(p)

  remove.addEventListener("click", function () {
  sumArr = []
  score = 0
  window.localStorage.removeItem('scoreBasket')
  productInBasket.innerHTML = "",
  sum = 0
  sumBasket.innerText = "0"
  basket = "0"
  scoreBascet.innerText = "0"
})
})

buttonTablet12.addEventListener("click", function () {
    score ++
    sumArr.push(price)
    sum = sumArr.reduce((acc,num) => acc + num)
    const toStringSum = sum.toString()
    sumBasket.innerText = toStringSum
  let scoresum = score.toString()
  window.localStorage.setItem('scoreBasket',scoresum)
  let basket = window.localStorage.getItem('scoreBasket')
  scoreBascet.textContent = basket
  const p = document.createElement("p")
  p.innerText = `${tabletName12.innerText} : ${productPrice.innerText}`
  productInBasket.appendChild(p)

  remove.addEventListener("click", function () {
  sumArr = []
  score = 0
  window.localStorage.removeItem('scoreBasket')
  productInBasket.innerHTML = "",
  sum = 0
  sumBasket.innerText = "0"
  basket = "0"
  scoreBascet.innerText = "0"
})
})

