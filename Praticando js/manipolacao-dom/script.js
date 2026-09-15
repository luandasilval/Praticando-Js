// querySelectorAll pega todos os elementos
const elementos = document.querySelectorAll(".texto");

console.log(elementos)

//percorrendo a lista
elementos.forEach(elemento => console.log(elemento));

//percorrendo a linha e pegando o texto (innerText)
elementos.forEach(elemento => console.log(elemento.innerText));

//alterando textos 
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";
})

//innerHTML - trocar as tags
elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>Item</h2>";
})

//trocar a cor do elemento
elementos.forEach(elemento => {
    elemento.style.color = "#0000ff";
})

//eventos com js
//?o que são eventos? ações do usuário

//clique
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     alert("Você clicou!")
// })


//evento de  digitação (input e keyup)

//evento input- dispara sempre que digita em tempo real 
const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

//input
// campo.addEventListener("input", () => {
//     //value-> o que esta sendo digitado dentro do campo 
//     resultado.innerText = campo.value;
// })

// keyup
//evento input- dispara quando solta a tecla
campo.addEventListener("keyup", () => {
    //value-> o que esta sendo digitado dentro do campo 
    resultado.innerText = campo.value;
})
