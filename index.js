import { getContentCards }  from './assets/peticion.js'
import { createCard } from './assets/createCard.js'
import { mount }  from './assets/mount.js'
import {createButton} from './assets/createButton.js'

createButton("Add Card")
createButton("Remove Card")

const contentCard = getContentCards()

contentCard.forEach(item => {
     
    const card = createCard(item)
    mount(card)
    
});
