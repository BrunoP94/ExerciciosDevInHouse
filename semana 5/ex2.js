// exercício 2
let top10Clientes = [
    {nome: "cliente1", saldo: 1054},
    {nome: "cliente2", saldo: 2078},
    {nome: "cliente3", saldo: 30794},
    {nome: "cliente4", saldo: 40647},
    {nome: "cliente5", saldo: 5046},
    {nome: "cliente6", saldo: 60865},
    {nome: "cliente7", saldo: 704},
    {nome: "cliente8", saldo: 8041},
    {nome: "cliente9", saldo: 9074},
    {nome: "cliente10", saldo: 10047},
]

const listContent = document.querySelector(".lista_clientes");
let NomeClientes = top10Clientes.map(function(infocliente){

    listContent.innerHTML = listContent.innerHTML + `<li>${infocliente.nome}</li>`
    return infocliente.nome;
})

//exercício 3
// função para ordenar a string com base no saldo
function compare( a, b ) {
    if ( a.saldo < b.saldo ){
      return -1;
    }
    if ( a.saldo > b.saldo ){
      return 1;
    }
    return 0;
  }
//utilizar sort chamando a função compare
  let OrdemClientes = top10Clientes.sort(compare);

//setando o valor de corte para ser usado no filter
  let cortetop5 = OrdemClientes[5].saldo
  

//função do filter
  function ValordeCorte(arr){
    return arr.saldo >= cortetop5;
  }

//matriz com os 5 clientes com maior saldo
  let TOP5 = OrdemClientes.filter(ValordeCorte)

//imprimir no HTML
//exercicio 4 junto do forEach abaixo
  const listTop5 = document.querySelector(".clientes_potencial");
  TOP5.forEach((infocliente, index)=>{
    listTop5.innerHTML = listTop5.innerHTML + `<li>${infocliente.nome}</li>`
    if(index == TOP5.length-1){
        console.log("Ultimo Item Impresso na Página")
    }

})