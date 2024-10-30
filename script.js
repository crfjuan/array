// var, let e const variavéis
// variável serve para armazenar informações

let nome = "Juan"
// string é um tipo de dado textual
// console.log(nome)

// array [] colchetes
// array é uma lista variável especial onde podemos armazenar unma lista de dados

let compras = [
    "Celular",
    "Miojo",
    "Pizza",
    "Biscoito",
    "Coca",
    "Perfumes",
    "Carro",
    "Energético",
    "Café",
    "RTX 40 90",
    "Roupas de academia",
    "Pé treino",

]

//  no array temos um índice, vai iniciar do número 0
// console.log(compras) 

// console.log(compras[5])

// número é do tipo number
let numeros = [1,2,3,4,5]
console.log(numeros);

// métodos de array
//  forma de manipular dados

// adicionando numero 6 na array
numeros.push(6)
// push() adiciona/empurra no final da array

// adicionando o numero 0 no início
numeros.unshift(0)

numeros.pop()
// vai remover o último item do array

console.log(numeros.join("-"))