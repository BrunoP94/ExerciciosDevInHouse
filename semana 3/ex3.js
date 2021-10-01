const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener('submit', function(event){
    event.preventDefault();

    const value = document.querySelector("#number1").value;
    value_num = parseInt(value);
    if(value_num % 2 == 0){
        result.innerHTML= "par";   
    } else {
        result.innerHTML = "impar";  
    }
})