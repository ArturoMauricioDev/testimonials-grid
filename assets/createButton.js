export function createButton (content){
    const button = document.createElement('button')
    button.textContent=content
    button.className="button"
    
    const mountButton = document.querySelector(".button-container")
    
    mountButton.appendChild(button) 
}