//ex5

class adress {
    constructor(logradouro, numero, cidade, estado, pais, cep){
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
        this.cep = cep;
    }

get exibirEndereco(){
    return this.textoEndereço()
}
textoEndereço(){
    return(`Você mora na ${this.logradouro}, nº:${this.numero}, cidade: ${this.cidade}, estado: ${this.estado}, país: ${this.pais}, cep: ${this.cep}`);
}
}

const endereço = new adress("rua DevInHouse", 10, "Cidade", "SC", "Brasil", 123456);
//console.log(endereço.exibirEndereco);

//ex6
class person {
    constructor(nome, cpf, endereco, numerocel){
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.numerocel = numerocel;
    }

    //ex8
    get validaCPF(){
        return this.CPFCheck()
    }
    CPFCheck(){
       //confere se CPF possui tamanho correto de 11 dígitos
    if(this.cpf.length == 11){
        let firstDigitsStr = this.cpf.substr(0,9); // primeiros 9 digitos do CPF
        let tenDigitsStr = this.cpf.substr(0,10); // primeiros 10 digitos do CPF
        let Verifier1 = this.cpf.substr(9,1); // primeiro digito verificador
        let Verifier2 = this.cpf.substr(10,1); // segundo digito verificador
        let j=10; // variável auxliar para check do CPF
        let CheckCpf = 0;// variável de soma para check do CPF

        for (let i=0; i<9; i++){
            CheckCpf = CheckCpf + parseInt(firstDigitsStr[i])*j;
            j--;
        }
        //primeiro digito após o "-"
        let First_Digit = (CheckCpf*10)%11;
        if(First_Digit == 10 || First_Digit == 11){
            First_Digit = 0;
        }else if(First_Digit < 10){}
        //verifica se primeiro digito verificador calculado é igual ao do CPF
        j = 11; //reseta valor da variável j em 11
        CheckCpf = 0; // reseta valor da variável CheckCpf em 0
        if(First_Digit == Verifier1){
            for (let i=0; i<10; i++){
                CheckCpf = CheckCpf + parseInt(tenDigitsStr[i])*j;
                j--;
            }
            
            let Second_Digit = (CheckCpf*10)%11;
            if(Second_Digit == 10|| Second_Digit == 11){
                Second_Digit = 0;
            }else if(Second_Digit < 10){}
            //verifica se o segundo digito verificador calculado é igual ao do CPF
            if(Second_Digit == Verifier2){
                return("CPF Válido");
            }else {
                this.cpf = 0;
                return("CPF Inválido");
            }
        } else {
            this.cpf = 0;
            return("CPF Inválido");
        }  
    }
    else {
        this.cpf = 0;
        return("CPF Inválido");
    }
}

}
const Bruno = new person("Bruno", "08490222908", "Rua 1", 123456987);
//console.log(Bruno.validaCPF)
//console.log(Bruno.cpf)

//ex7
class account {
    constructor(numeroConta, saldo, cliente){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.cliente = cliente;
    }
}
const novaConta = new account(10010010010, 20000000 ,"Bruno");

//ex9 e ex10
class transacoes {
    constructor(conta, valorTransacao, numeroDaConta){
        this.conta = conta;
        this.valorTransacao = valorTransacao;
        this.numeroDaConta = numeroDaConta;
        this.idDeTransferencia = 0;
        this.data = 0;
    }
    
    get transfer(){
        return this.transfer_method(this.valorTransacao)
    }
    transfer_method(valor){
        this.conta = this.conta - valor;
        this.idDeTransferencia++
        this.data = new Date()
        return (this.conta, this.idDeTransferencia)  
    }
    get deposit(){
        return this.deposit_method(this.valorTransacao)
    }
    deposit_method(valor){
        this.conta = this.conta + valor;
        this.idDeTransferencia++
        this.data = new Date()
        return (this.conta, this.idDeTransferencia)  
    }



}
const Transacao1 = new transacoes(50, 10, 456456);
//Transacao1.transfer // executa transferência
Transacao1.deposit // executa depósito
console.log(Transacao1);
