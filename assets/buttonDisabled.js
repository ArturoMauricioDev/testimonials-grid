export function buttonDisabled(quantity){
    const btnAddCard=document.querySelector("#addCard")
    const btnRemoveCard=document.querySelector("#removeCard")
    
    
    if(quantity>=5){
        btnAddCard.setAttribute("disabled","")
    }else{
        if(quantity<=0){
            btnRemoveCard.setAttribute("disabled","")
        }else{
            btnAddCard.removeAttribute("disabled")
            btnRemoveCard.removeAttribute("disabled","true")
        }

    }
}