//função para escrever resultado no  html
function result(answer){
    let div_resultado = document.createElement("div")
    textnode = document.createTextNode(answer)
    div_resultado.appendChild(textnode)
    document.getElementById("res_calc").appendChild(div_resultado)
}

//função para somar números inputados pelo usuário
function soma(){
    event.preventDefault();

    const n1 = document.getElementById("number1").value
    const n2 = document.getElementById("number2").value
    resultado=parseInt(n1)+parseInt(n2)
    console.log(resultado)
    result(resultado)

}
//função para subtrair números inputados pelo usuário
function subtrai(){
    event.preventDefault();
    const n1 = document.getElementById("number1").value
    const n2 = document.getElementById("number2").value
    resultado=parseInt(n1)-parseInt(n2)
    result(resultado)

}


//função para dividir números inputados pelo usuário
function divide(){
    event.preventDefault();
    const n1 = document.getElementById("number1").value
    const n2 = document.getElementById("number2").value
    resultado=parseInt(n1)/parseInt(n2)
    result(resultado)

    

}

//função para multiplicar números inputados pelo usuário
function multiplica(){
    event.preventDefault();
    const n1 = document.getElementById("number1").value
    const n2 = document.getElementById("number2").value
    resultado=parseInt(n1)*parseInt(n2)
    result(resultado)

    
}