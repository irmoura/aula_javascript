
function clicou() {
    var botao = document.getElementById("agradecimento");
    botao.innerHTML = "Obrigado por clicar";
    // alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://wa.me/5585999318987")//abrir em outra aba
    window.location.href = "https://wa.me/5585999318987"//abrir na mesma aba
}

function trocar(elemento) {
    // var botao = document.getElementById("mousemove");
    // botao.innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    // alert("trocar texto")
}

function voltar(elemento) {
    // var botao = document.getElementById("mousemove");
    // botao.innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
    // alert("trocar texto")
}

function load() {
    alert("Página carregada")
}

function change(elemento){
    alert(elemento.value)
}
// function soma(n1, n2) {
//     return n1 + n2
// }

// function setReplace(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome)
// }

// function validaIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = true
//     } else {
//         validar = false
//     }
//     return validar
// }

// // alert(soma(5, 10))
// // alert(setReplace("Vai Japão", "Japão", "Brasil"))
// var idade = prompt("Qual sua idade")
// console.log(validaIdade(idade))
/*
var d = new Date()
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/

/*
var count
for (count = 0; count <= 5; count++) {
    alert(count)
}
*/
/*
var count = 0
while (count <= 5) {
    console.log(count)
    count++
}
*/
/*
var idade = prompt("Qual sua idade")
if(idade >= 18){
    alert("Maior de idade")
}else{
    alert("menor de idade")
}
*/


/*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas)
alert(frutas[1].nome)
*/
/*
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome)
alert(fruta.cor)
*/

// var lista = ["maça", "pêra", "laranja"]
// lista.push("uva")//adicionar elemento
// lista.pop()//remove o ultimo elemento

// console.log(lista)
// console.log(lista.toString())
// console.log(lista.join(" - "))


// var nome = "Ismael Ribeiro"
// var n1 = 5
// var n2 = 3
// var frase = "Japão é o melhor time do mundo"
// // alert(nome + " tem " + idade + " anos")
// // alert(idade + idade2)
// console.log(nome)
// console.log(n1+n2)
// console.log(frase.toLowerCase())
// // alert(frase.replace("Japão", "Brasil"))