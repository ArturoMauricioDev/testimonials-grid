export function createCard(item){
    const image=document.createElement("img")
    image.src=item.img
    
    const name = document.createElement("p")
    name.className="name"
    name.textContent=item.name
    const ocupation = document.createElement("p")
    ocupation.className="ocupation"
    ocupation.textContent=item.ocupation
    const headerCard=document.createElement("div")
    headerCard.className="header-card__name-container"
    headerCard.append(name,ocupation)
    
    const cardHeader=document.createElement("div")
    cardHeader.className="card__header"
    cardHeader.append(image,headerCard)
    
    
    
    const cardTitle= document.createElement("div")
    cardTitle.classList.add("card__title")
    const title = document.createElement("p")
    title.textContent=item.title
    cardTitle.appendChild(title)
    
    const cardDescription= document.createElement("div")
    cardDescription.classList.add("card__description")
    const description = document.createElement("p")
    description.textContent=item.description
    cardDescription.appendChild(description)
    
    const card = document.createElement("div")
    card.className= `card ${item.theme}`
    card.append(cardHeader,cardTitle,cardDescription)

    return card
}