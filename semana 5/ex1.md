# Exercício 1

## Declaração de Variáveis
No JavaScript a declaração de variáveis pode ser realizadas através dos métodos: let, var e const.
- let
    O método let permite a criação de uma variável que pode ser alterada no decorrer do código.
    A variável let somente pode ser utilizada dentro do escopo onde ela é declarada. Se for declarada dentro de uma função, ou bloco, somente será válida dentro do mesmo.
    Exemplo:
    ```
    function Funcao1 (){
        let variavel = 0; //variável declarada dentro do escopo Funcao1, só pode ser utilizada dentro desta função
        variavel = 1;
    }
    ```
- var
    De maneira semelhante à variável criada como let, o método var também permite a criação de uma variável que pode ser alterada no decorrer do código.
    Porém, a variável declarada como var, possui escopo global, não importando onde seja declarada.
    Exemplo:
    ```
    function Funcao1 (){
        var variavel = 0; //variável declarada dentro do escopo Funcao1, tem escopo global
    }
        variavel = 1; 
    ```
- const
 O método const permite a criação de uma variável constante, ou seja, que não pode ser alterada no decorrer do código.
    A variável const somente pode ser utilizada dentro do escopo onde ela é declarada. Se for declarada dentro de uma função, ou bloco, somente será válida dentro do mesmo.
    Exemplo:
    ```
    function Funcao1 (){
        const variavel = 0; //variável declarada dentro do escopo Funcao1, só pode ser utilizada dentro desta função
    }
    ```
## Class e Atributos
A utilização de classes no JavaScript, nos permite criar objetos como instâncias, apenas atribuindo valores aos atributos. De maneira simplificada, pode-se dizer que as classes são moldes para os objetos.
Os atributos são as informações da classe, que quando receberem valores distintos, serão instanciadas como objetos.

    Exemplo:
    ```
    class pessoa {
        //aributos nome e idade atrelados à classe pessoa
        constructor (nome, idade){ 
            this.nome = nome;
            this.idade = idade;
        }       
    }
    const Pessoa1 = new pessoa(João, 30); //objeto criado pela classe pessoa
    ```
