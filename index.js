import { getContentCards }  from './assets/peticion.js'
import { createCard } from './assets/createCard.js'
import { mount }  from './assets/mount.js'
import { createButton } from './assets/createButton.js'
import { buttonDisabled } from './assets/buttonDisabled.js'

const maxCards = 5
const state={
    quantity: maxCards,
}

//Crear botones
createButton("Add Card", "addCard")
createButton("Remove Card", "removeCard")

//Petición del contenido de las tarjetas
const contentCard = getContentCards()

//Construcción de las tarjetas
contentCard.forEach(item => { 
    const card = createCard(item)
    mount(card)
});
buttonDisabled(state.quantity)

const addCard=document.querySelector("#addCard")
addCard.addEventListener('click',()=>{
    const card = createCard(contentCard[state.quantity])
    mount(card)
    state.quantity++
    buttonDisabled(state.quantity)
})

const removeCard=document.querySelector("#removeCard")
removeCard.addEventListener('click',()=>{
    const parent = document.querySelector('.container-cards')
    parent.removeChild(parent.lastElementChild)
    state.quantity--
    buttonDisabled(state.quantity)
})