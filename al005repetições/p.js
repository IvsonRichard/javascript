//REPETIÇÕES...

function comerfatia(){
    comerfatia()
    comerfatia()
    comerfatia()
    comerfatia()
    comerfatia()
    comerfatia()// repete as funções quantas vezes eu escrevelas...
    
}
function comerpizza(){
    while (temfatia()){
        comerfatia()
    } //execulta funções delimitadas por condições...
}
var c = 1
while ( c <= 6){
    console.log(`passo1 ${}`) //teste lógico no início...
    c++
}
do {
    console.log(`passo2 ${}`) // teste lógico no final...
    c++
} while(c <= 6)

// Repetição com váriavel de controle...
//for ( inicio; teste; enc;)

for( var c = 1; c <= 10; c++) {
    console.log(c)
}
//array
let num = [1, 2, 3]

//objetos

let amigo = {nome:'jose', sexo:'Masculino', peso: 85.4, engordar(p=0){}}
console.log(`${amigo.nome} do sexo ${amigo.sexo} pesa ${amigo.peso}kg`)// josé do sexo Masculino pesa 85.4kg
