//Funções nativas js


//*FUNÇÃO MAP()
//percorre uma lista e cria uma nova lista com base na condição
// let numeros =

// let numerosDobrados = numeros.map(function (num) {
//     return num * 2;
// })

// console.log(numerosDobrados);

// //ou assim:
// //Arrow function com retorno implicito

// let numerosDobradosArrow = numeros.map(num => num * 2);

// //*quando usar o return?
// //quando a função precisa ter mais de uma linha

// numeros.map(num => {
//     let resultado = num * 2;
//     return resultado;
//     console.log("resultado: " + resultado);
// })

// //*FILTER
// //filtra elementos com base em uma condição

// let numeros = [5, 10, 25, 20]
// //num -> palavrinha auxiliar
// let maioresQueDez = numeros.filter(num=>num >10);
// console.log(maioresQueDez);



//*REDUCE
//REDUZ os valores de um array para um unico valor

// let numeros = [1, 2, 3, 4]

// //acumulador inicia em 0 e soma com o auxiliar até o ultimo valor do array
// //variavel auxiliar é o num
// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

// console.log(soma);


//*FIND
//RETORNA o primeiro elemento que atende a condição

let produtos = [
    {
        id: 1,
        nome: "Teclado",
        preco: 50
        //produto 
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 30
         //produto 
    }
]

let item = produtos.find(produto => produto.id === 2)
console.log (item);


