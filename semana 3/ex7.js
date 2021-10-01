const form=document.querySelector("form");
const select = document.querySelector("select");
const itemsWrapper = document.querySelector(".items-wrapper");
const alert = document.querySelector(".alert");
const itemsArr = [];

const renderItems = (itemsArr, clearItems = false) => {
    if(itemsArr.length > 0){
        itemsWrapper.style="display: block"
        alert.style = "display: none"

        if(clearItems){
            select.innerHTML="";
        }

        itemsArr.forEach((item) => {
            select.innerHTML = select.innerHTML + `<option value="${item}-${index}">${item}</option>`;
        });
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    const item = document.querySelector("#item").value;
    
    itemsArr.push(item);

    renderItems (itemsArr, true);
})

window.onload = function() {
    if(itemsArr.length <= 0){
        alert.textContent = 'Sem itens';
        itemsWrapper.style = 'display: none';
    }
}