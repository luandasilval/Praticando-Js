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

// let produtos = [
//     {
//         id: 1,
//         nome: "Teclado",
//         preco: 50
//         //produto 
//     },
//     {
//         id: 2,
//         nome: "Mouse",
//         preco: 30
//          //produto 
//     },
//     {
//         id: 3,
//         nome: "Caderno",
//         preco: 30
//          //produto 
//     }
// ]

// let item = produtos.find(produto => produto.id === 2)
// console.log (item);
// let itemFiltrado = produtos.filter(produto => produto.id === 2)
// console.log ("Usando Filter:" , itemFiltrado);

//diferença entre find e filter 
//find -> retorna somente o primeiro elemento que ele encontra qua atenda a condição 
//filter -> retorna todos os elementos que atendam a condição

// //*SPLIT
// //divide a string em partes transformando no array 

// let frase = "JS é top";

// //" " com espaço separa aas palavras com espaço
// //sem espaço separa aas letras'
// let palavras = frase.split(" ");

// console.log (palavras);

//*TRIM
//trim remove espaços no inicio e final de uma string 

// let nome = "   Paulo   ";
// let nomeLimpo = nome.trim();

// console.log(nome);
// console.log(nomeLimpo);

// //*INCLUDES
// //verifica se existe um valor dentro de uma lista e retorna um booleano verdadeiro ou falso

// let frutas = ["Maçã", "Banana"];

// let frutasIncludes = frutas.includes ("Banana");
// console.log (frutasIncludes)//true


//toLowerCase -> transforma em minusculo
//toUpperCase -> transforma em maiusculo

// let nome = "KESSIA";
// let CARGO = "instrutora";


// console.log(nome.toLowerCase());
// console.log(CARGO.toUpperCase());


// //*FOREACH

// let nomes = ["João", "Guilherme", "Maria"];
// nomes.forEach(nome => console.log(`Seu nome é ${nome}`))


//*SOME 
// VERIFICA se pelo menos um item atende a condição, retorna booleano
// let numeros = [1,3,5,8]

// let temPar = numeros.some (num => num % 2 === 0 );
// console.log (temPar) //true

//*EVERY
// verifica se todos os itens atendem a condição 
//retorna booleano
// let temTodosPares = numeros.every (num => num % 2 === 0 );
// console.log (temTodosPares) //false

// let numeros  = [3, 10, 5, 2, 4]
// let letras= ["c","a","x","h"]

// //para letras 
// letras.sort();
// console.log(letras);

// //para numeros
// numeros.sort((a, b) => a-b);
// console.log(numeros)

// let numeros = [1, 2, 3]

// numeros.reverse()
// console.log(numeros);

// //*JOIN
// let palavras = ["JS", "é", "top"];
// let frase = palavras.join (" ");
// console.log(frase);

//*PUSH
//*SHIFT
//*POP
//*UNSHIFT

// let lista = ["A","B"]

// //PUSH -> ADICIONA elementos no final do array 
// lista.push ("C");
// console.log(lista);

// //POP -> remove elementos do final da lista 
// lista.pop ("C");
// console.log(lista);

// //SHIFT -> remove do inicio do array

// lista.shift()//remove
// console.log(lista);


// //UNSHIFT -> adiciona do inicio do array

// lista.unshift("A")//adiciona
// console.log(lista);



/* 
array.slice(inicial, final)
inicial-> onde começa
final ->onde termina (não inclui o valor da posição)

*/
//*SLICE
//cria  uma cópia de uma parte da lista 
// let numeros = [1, 2, 3, 4]

// let parte = numeros.slice(1, 3) //1 e 3 são as posições do array

// console.log(parte); //2,3



//*SPLICE
//remove ou adiciona elementos em qualquero posição

/*
array.splice (index, count, item1..);
index->indice -> posição do elemento no array
count -> numero de elementos removidos (pode ser 0)

*/

//remvovendo sem adc
// let numeros = [1, 2, 3, 4]
// numeros.splice(1, 1)
// console.log(numeros);


// //removendo e adicionando
// let frutas = ["Banana", "Laranja", "Maçã", "Manga"]
// // frutas.splice(0,3, "Limão", "Kiwi");
// // console.log(frutas);


// frutas.splice(2, 0, "limao", "kiwi");
// console.log(frutas);


// //*REPLACE
// //substitui uma parte da string 
// //replace (valorProcurado, ValorQueSubstitui);

// let texto = "Olá mundo!";

// let novoTexto = texto.replace("mundo", "cliente");
// console.log(novoTexto);




//*NOSSAS FUNÇÕES

// function exibirMensagens() {
//     console.log("Bem vindo(a)!");
// }

// * executando a função criada
// exibirMensagens()

// *função com parametros
// function cumprimentar(nome) {
//     console.log(`Olá, ${nome}`);
// }

// cumprimentar("Ana");
// cumprimentar("Carlos");

//*função com mais de um parametro
// const somar = (numero1, numero2) => numero1 + numero2;


// console.log (somar(1,2));

// function somarNovo ( numero1, numero2){
//     console.log(numero1+numero2)
//return numero1 + numero2

// }

//*PROMPT
//recebe/solicita informação do usuário
// let nome = prompt ("Digite o seu nome: ")
// console.log(nome);
// alert (nome);

//recebendo um numero e convertendo
// let idade = Number(prompt("Digite sua idade: "))
//inteiro
// idade = parseInt(prompt("Digite sua idade: "))

//float
// idade = parseFloat(prompt("Digite sua idade: "))

//O que veremos nas proximas aulas
//spoiler......
// let textoP = document.getElementById("texto");

// let saudacao = prompt("Digite a saudação: ")

// if (saudacao == "bom dia") {
//     textoP.textContent = saudacao; //textContent insere o conteudo dentro da tag
// }
// else {
//     textoP.textContent = "Segundouuuu ;)";
// }
// 