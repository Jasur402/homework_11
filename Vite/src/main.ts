import './style.css'
const button = document.querySelectorAll<HTMLButtonElement>(".productButton")
const divProduct = document.querySelector<HTMLDivElement>(".productInBasket")
const basketscore = document.querySelector<HTMLParagraphElement>(".basketscore")
const basketsum = document.querySelector<HTMLParagraphElement>(".sumBasket")

type Basket = {products: string[],
  quantity?: string,
  sum?: string,
}

let score = 0
let sum = 0
let allPrice = 0
let BasketinLocalStorage:Basket = {products: []}


button.forEach((elem) => {
         elem.addEventListener("click", function (){
         score ++
         const JSONscore = JSON.stringify(score)
         if (basketscore) {
          basketscore.innerText = JSONscore
        }
         
        const product = elem.closest(".divProduct")
        const price = product?.querySelector<HTMLParagraphElement>(".productPrice")
        allPrice = Number(price?.innerText.replace("€",""))
        sum += allPrice
        const sumToString = JSON.stringify(sum)
        if (basketsum) {
          basketsum.innerText = sumToString
        }
     
        const divInBasket = document.createElement("div")
        divInBasket.className = "divfor"
        const productName = product?.querySelector("h2")
        const p = document.createElement("p")
        const removeButton = document.createElement("button")
        removeButton.className = "removeButton"
        removeButton.innerText = "Удалить товар из корзины"
        p.innerText = `${productName?.innerText} - ${price?.innerText}`
        divInBasket?.appendChild(p)
        divInBasket?.appendChild(removeButton)
        divProduct?.appendChild(divInBasket)


        BasketinLocalStorage.products.push(productName?.textContent || '')
        BasketinLocalStorage.quantity =  JSONscore
        BasketinLocalStorage.sum = sumToString
        const BasketString = JSON.stringify(BasketinLocalStorage)
        window.localStorage.setItem("basket",BasketString)
       
        
        removeButton.addEventListener("click",function () {
        const divInBasket = document.querySelector(".divfor")
        score --
         const JSONscore = JSON.stringify(score)
         if (basketscore) {
          basketscore.innerText = JSONscore
        }
         
         sum -= allPrice
        const sumToString = JSON.stringify(sum)
        if (basketsum) {
          basketsum.innerText = sumToString
        }

        divInBasket?.remove()
    })

    
})
})

const remove = document.querySelector<HTMLButtonElement>(".remove")

remove?.addEventListener("click", function () {
   divProduct?.replaceChildren()
   if (basketsum) {
    basketsum.innerText = "0"
   }
   sum = 0
   if (basketscore) {
   basketscore.innerText = "0"
 }
 score = 0
 window.localStorage.removeItem("basket")
})